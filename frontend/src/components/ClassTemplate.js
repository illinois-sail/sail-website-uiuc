import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
import Grid from "@mui/material/Grid";
import background from "../assets/final_background.png";
import axios from "axios";

const PROD_SERVER = "https://sail.cs.illinois.edu";
const TEST_SERVER = "http://172.16.0.51:5000" // replace with your local IP address

// assign the server URL based on the url of the window
const SERVER_URL = window.location.href.includes("sail.cs.illinois.edu") ? PROD_SERVER : TEST_SERVER;

const inPersonMorningClassesFirst = [
  { className: "Math", room: "101", time: "9:00 AM - 10:30 AM", description: "Introduction to Algebra", index: 1 },
  { className: "English", room: "202", time: "10:45 AM - 12:15 PM", description: "Literature Analysis", index: 2 },
  { className: "Science", room: "303", time: "1:00 PM - 2:30 PM", description: "Chemistry Basics", index: 3 }
];

const inPersonMorningClassesSecond = [
  { className: "History", room: "404", time: "2:45 PM - 4:15 PM", description: "World History", index: 4 },
  { className: "Art", room: "505", time: "4:30 PM - 6:00 PM", description: "Painting Techniques", index: 5 }
];

const inPersonAfternoonClasses = [
  { className: "Music", room: "606", time: "6:15 PM - 7:45 PM", description: "Introduction to Piano", index: 6 },
  { className: "Physical Education", room: "707", time: "8:00 PM - 9:30 PM", description: "Fitness and Wellness", index: 7 }
];

const virtualMorningClasses = [
  { className: "Computer Science", room: "808", time: "9:00 AM - 10:30 AM", description: "Introduction to Programming", index: 8 },
  { className: "Spanish", room: "909", time: "10:45 AM - 12:15 PM", description: "Conversational Spanish", index: 9 }
];

const virtualAfternoonClasses = [
  { className: "Biology", room: "1010", time: "1:00 PM - 2:30 PM", description: "Cell Biology", index: 10 },
  { className: "Psychology", room: "1111", time: "2:45 PM - 4:15 PM", description: "Introduction to Psychology", index: 11 }
];


const ClassTemplateTimeSection = ({ classesList, title }) => {
  // make a GET request to the server to get the user's registration status for the class with the given index
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  console.log("authUser: ", authUser);
  // if authuser.classes[i] === 1 for i in indices of classesList, then the user is registered for a class in the section
  const [isRegisteredForSection, setIsRegisteredForSection] = useState(() => {
    if (authUser) {
      const classes = authUser.classes;
      for (let i = 0; i < classesList.length; i++) {
        if (classes[classesList[i].index] === 1) {
          return true;
        }
      }
    }
    return false;
  });


  function onRegisterClick(index, classesList) {
    console.log("email: ", authUser.email);
    console.log("classIndex: ", index);

    // make a POST request to the server to register the user for the class with the given index
    axios.post(`${SERVER_URL}/registerForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response:', response);
        setIsRegisteredForSection(true);

        // for the index with classIndex switch the button to "Unregister" and the rest should be nullified
        const registeredClassIndex = response.data.classIndex;
        const otherClassesInGroup = classesList.filter((classData) => classData.index !== registeredClassIndex);

        // set the state of the class with the given index to 1
        setAuthUser({ ...authUser, classes: { ...authUser.classes, [registeredClassIndex]: 1 } });

        // set the state of the other classes in the group to 0
        otherClassesInGroup.forEach((classData) => {
          setAuthUser({ ...authUser, classes: { ...authUser.classes, [classData.index]: 0 } });
        });

        // update the authUser in localStorage
        localStorage.setItem('authUser', JSON.stringify(authUser));

        // update the authUser in the state
        setAuthUser(authUser);

        // make a message to the user that they have successfully registered for the class
        alert("You have successfully registered for the class!");
        
        // re-render the component
        window.location.reload();
        
        console.log("authUser: ", authUser);
      })
      .catch((error) => { 
        console.error(error);
      });
  };

  function onUnregisterClick(index, classes) {
    console.log("email: ", authUser.email);
    console.log("classIndex: ", index);

    // make a POST request to the server to unregister the user for the class with the given index
    axios.post(`${SERVER_URL}/unregisterForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response:', response);
        setIsRegisteredForSection(false);

        // for the index with classIndex switch the button to "Unregister" and the rest should be nullified
        const registeredClassIndex = response.data.classIndex;
        const otherClassesInGroup = classes.filter((classData) => classData.index !== registeredClassIndex);

        // set the state of the class with the given index to 0
        setAuthUser({ ...authUser, classes: { ...authUser.classes, [registeredClassIndex]: 0 } });

        // set the state of the other classes in the group to 0
        otherClassesInGroup.forEach((classData) => {
          setAuthUser({ ...authUser, classes: { ...authUser.classes, [classData.index]: 0 } });
        });

        // update the authUser in localStorage
        localStorage.setItem('authUser', JSON.stringify(authUser));

        // update the authUser in the state
        setAuthUser(authUser);

        // make a message to the user that they have successfully unregistered for the class
        alert("You have successfully unregistered for the class!");

        
        // re-render the component
        window.location.reload();
        
        console.log("authUser: ", authUser);
      }
      )
      .catch((error) => { 
        console.error(error);
      });
  }


  return (
    <div className="class-template-time-section" style={{ color: "white", marginBottom: "20px" }}>
      <h2>{title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {classesList && classesList.length > 0 ? (
          classesList.map((classData, index) => (
            <div key={index} style={{ width: "100%", maxWidth: "25%", padding: "0 10px" }}>
              <ClassCard
                className={classData.className}
                room={classData.room}
                time={classData.time}
                description={classData.description}
                onRegisterClick={() => {
                  if (isRegisteredForSection) {
                    onUnregisterClick(classData.index, classesList);
                  } else {
                    onRegisterClick(classData.index, classesList);
                  }
                }}
                index={classData.index}
                activated={true}
              />
            </div>
          ))
        ) : (
          <div>No classes available</div>
        )}
      </div>
    </div>
  );
  
}

const ClassTemplate = () => {
  return (
    <div className="class-template" style={{  }}>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" gutterBottom color={"white"} fontFamily="Oxanium" >
            Class Schedule
          </Typography>
          <ClassTemplateTimeSection title="In-Person Morning Classes (10:00 AM - 11:00 AM)" classesList={inPersonMorningClassesFirst} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Afternoon Classes (11:00 AM - 12:00 PM)" classesList={inPersonMorningClassesSecond} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Evening Classes (2:00 PM - 3:00 PM)" classesList={inPersonAfternoonClasses} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="Virtual Morning Classes (10:00 AM - 11:00 AM)" classesList={virtualMorningClasses} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="Virtual Afternoon Classes (1:00 PM - 2:00 PM)" classesList={virtualAfternoonClasses} />
        </Box>
      </Container>
    </div>
  );
};

export default ClassTemplate;
