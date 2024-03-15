import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
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
  // if authuser.classes[i] === 1 for i in indices of classesList, then the user is registered for a class in the section
  const [isRegisteredForSection, setIsRegisteredForSection] = useState(false);

  useEffect(() => {
    if (authUser) {
      const classes = authUser.classes;
      for (var i = 0; i < classesList.length; i++) {
        if (classes[classesList[i].index] === 1) {
          setIsRegisteredForSection(true);
        }
      }
    }
  }, [authUser, classesList]);


  function onRegisterClick(index, classesList) {
    console.log("email: ", authUser.email);
    console.log("classIndex: ", index);

    // if the index is not in the user's classes, then block the user from registering for the class
    if (authUser.classes[index] === 0 && isRegisteredForSection === true) {
      alert("You are already registered for a class in this section. You cannot register for another class in this section.");
      return;
    } else if (authUser.classes[index] === 1 && isRegisteredForSection === true) {
      alert("You are already registered for this class.");
      return;
    } else if (authUser.classes[index] === 1 && isRegisteredForSection === false) {
      alert("impossible scenario!!!!")
      return;
    }

    // make a POST request to the server to register the user for the class with the given index
    axios.post(`${SERVER_URL}/registerForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response from /registerForCourse:', response);
        setIsRegisteredForSection(true);

        const classIndexRegisteredFor = response.data.classIndex;
        console.log("classIndexRegisteredFor: ", classIndexRegisteredFor);

        const newClasses = response.data.classes;
        setAuthUser({ ...authUser, classes: newClasses });
        localStorage.setItem('authUser', JSON.stringify(authUser));

        // make a message to the user that they have successfully registered for the class
        alert("You have successfully registered for the class!");
      })
      .catch((error) => { 
        console.error(error);
      });
      console.log("authUser: ", authUser);
  };

  function onUnregisterClick(index, classes) {
    console.log("email: ", authUser.email);
    console.log("classIndex: ", index);

    if (authUser.classes[index] === 0 && isRegisteredForSection === true) {
      alert("You are already registered for a class in this section. You cannot unregister for a different class in this section.");
      return;
    } else if (authUser.classes[index] === 0 && isRegisteredForSection === false) {
      alert("You are not registered for this class.");
      return;
    } else if (authUser.classes[index] === 1 && isRegisteredForSection === false) {
      alert("impossible scenario!!!!")
      return;
    }

    // make a POST request to the server to unregister the user for the class with the given index
    axios.post(`${SERVER_URL}/unregisterForCourse`, { email: authUser.email, classIndex: index })
      .then((response) => {
        console.log('Response from /unregisterForCourse:', response);
        setIsRegisteredForSection(false);

        const classIndexUnregisteredFor = response.data.classIndex;
        console.log("classIndexUnregisteredFor: ", classIndexUnregisteredFor);

        const newClasses = response.data.classes;
        setAuthUser({ ...authUser, classes: newClasses });
        localStorage.setItem('authUser', JSON.stringify(authUser));

        // make a message to the user that they have successfully unregistered for the class
        alert("You have successfully unregistered for the class!");
      })
      .catch((error) => { 
        console.error(error);
      });
      console.log("authUser: ", authUser);
  }


  return (
    <div className="class-template-time-section" style={{ color: "white", marginBottom: "20px" }}>
      <h2>{title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {classesList && classesList.length > 0 ? (
          classesList.map((classData, index) => (
            <ClassCard 
              key={index}
              className={classData.className}
              room={classData.room}
              time={classData.time}
              description={classData.description}
              onRegisterClick={isRegisteredForSection ? onUnregisterClick : onRegisterClick}
              index={classData.index}
              activated={isRegisteredForSection ? false : true}
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
