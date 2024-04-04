import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
import axios from "axios";
import allClasses, { inPersonMorningClassesFirst, inPersonMorningClassesSecond, inPersonAfternoonClasses, virtualMorningClasses, virtualAfternoonClasses } from "./Classes";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://10.195.63.54:5000" // replace with your local IP address

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const CLASSES = allClasses;

const IN_PERSON_MORNING_CLASSES_FIRST = inPersonMorningClassesFirst;

const IN_PERSON_MORNING_CLASSES_SECOND = inPersonMorningClassesSecond;

const IN_PERSON_AFTERNOON_CLASSES = inPersonAfternoonClasses;

const VIRTUAL_MORNING_CLASSES = virtualMorningClasses;

const VIRTUAL_AFTERNOON_CLASSES = virtualAfternoonClasses;

var initialAuthUser = JSON.parse(localStorage.getItem('authUser'));
console.log("initialAuthUser: ", initialAuthUser);
var initialClasses = [];

if (initialAuthUser) {
  axios.get(`${SERVER_URL}/get_classes/${initialAuthUser.email}`)
    .then((response) => {
      console.log('Response from /get_classes:', response);
      initialClasses = response.data.classes;
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  console.log("No initial authUser found in local storage");
}


const ClassTemplateTimeSection = ({ classesList, title }) => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [isRegisteredForSection, setIsRegisteredForSection] = useState(false); // Track if user is registered for the section
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

  useEffect(() => {
    if (!dataFetched && authUser) {
      axios.get(`${SERVER_URL}/get_classes/${initialAuthUser.email}`)
        .then((response) => {
          console.log('Response from /get_classes:', response);
          const initialClasses = response.data.classes;
          var isRegistered = false;
          for (var i = 0; i < classesList.length; i++) {
            if (initialClasses[classesList[i].classIndex] === "1") {
              isRegistered = true;
              break;
            }
          }
          setIsRegisteredForSection(isRegistered);
          setDataFetched(true); // Mark data as fetched
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dataFetched, authUser]);

  useEffect(() => {
    console.log("authUser changed!")
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
      console.log("changed authUser: ", authUser);
      console.log("authUser classes: " + authUser.classes)
    }
  }, [authUser]);

  function onRegisterClick(index) {
    console.log("registering for class (index): ", index);

    // make a POST request to the server to register the user for the class with the given index
    axios.post(`${SERVER_URL}/registerForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response from /registerForCourse:', response);
        setIsRegisteredForSection(true);

        setAuthUser(response.data.authUser);

        // make a message to the user that they have successfully registered for the class
        alert("You have successfully REGISTERED for the class!");
        window.location.reload();
      })
      .catch((error) => { 
        console.error(error);
        alert("There was an error registering for the class. Please try again later.")
        window.location.reload();
      });
  };

  function onUnregisterClick(index) {
    console.log("unregistering for class (index): ", index);

    // make a POST request to the server to unregister the user for the class with the given index
    axios.post(`${SERVER_URL}/unregisterForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response from /unregisterForCourse:', response);
        setIsRegisteredForSection(false);

        setAuthUser(response.data.authUser);

        // make a message to the user that they have successfully unregistered for the class
        alert("You have successfully UNREGISTERED for the class!");
        window.location.reload();
      })
      .catch((error) => { 
        console.error(error);
        alert("There was an error registering for the class. Please try again later.")
        window.location.reload();
      });
  }

  return (
    <div className="class-template-time-section" style={{ color: "white", marginBottom: "20px", alignItems: "center" }}>
      <div className="titleDiv" style={{ textAlign: "center", marginBottom: "2vh", fontSize: "1.6rem" }}>
        <h2>{title}</h2>
      </div>
      
      <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around", gap: "1.3rem" }}>
          {classesList && classesList.length > 0 ? (
            classesList.map((classData) => (
                <ClassCard 
                  className={classData.className}
                  room={classData.room}
                  time={classData.time}
                  description={classData.description}
                  onRegisterClick={ () => {
                    if (isRegisteredForSection) {
                      onUnregisterClick(classData.classIndex);
                    } else {
                      onRegisterClick(classData.classIndex);
                    }
                  }}
                  index={classData.classIndex}
                  activated={(isRegisteredForSection && authUser.classes[classData.classIndex] === "1") || !isRegisteredForSection}
                />
            ))
          ) : (
            <div>No classes available</div>
          )}
      </div>
      
    </div>
  );
  
}

const ClassTemplate = () => {
  // if (!initialAuthUser) {
  //   return (
  //     <div className="class-template" style={{  }}>
  //     <Container>
  //       <Box sx={{ my: 4 }}>
  //       <Typography variant="h2" gutterBottom color={"white"} fontFamily="Oxanium" >
  //         Class Schedule
  //       </Typography>
  //       <Typography variant="h5" gutterBottom color={"white"} fontFamily="Oxanium" >
  //         Please log in to view your class schedule
  //       </Typography>
  //       </Box>
  //     </Container>
  //     </div>
  //   );
  // }
  return (
    <div className="class-template" style={{ }}>
      <Container maxWidth="false">
        <Box sx={{ my: 5, mx: "8vw" }}>
          <Typography variant="h2" gutterBottom color={"white"} fontFamily="Oxanium" >
            Class Schedule
          </Typography>
          <ClassTemplateTimeSection title="In-Person Morning Classes (10:00 AM - 10:50 AM)" classesList={IN_PERSON_MORNING_CLASSES_FIRST} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Afternoon Classes (11:00 AM - 11:50 PM)" classesList={IN_PERSON_MORNING_CLASSES_SECOND} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Evening Classes (2:00 PM - 2:50 PM)" classesList={IN_PERSON_AFTERNOON_CLASSES} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="Virtual Morning Classes (12:30 PM - 1:20 PM)" classesList={VIRTUAL_MORNING_CLASSES} />
          {/* <br /><br /><br /><br /><br /><br /><br /> */}
          <ClassTemplateTimeSection title="Virtual Afternoon Classes (1:30 PM - 2:20 PM)" classesList={VIRTUAL_AFTERNOON_CLASSES} />
        </Box>
      </Container>
    </div>
  );
};

export default ClassTemplate;
