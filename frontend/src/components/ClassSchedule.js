// import './ClassSchedule.css';
// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import ClassCard from "./ClassCard";
// import axios from "axios";
// import classScheduleTitle from '../assets/titles/class-schedule-title.png';
// import titleshootingstars from '../assets/title-shooting-stars.png';

// import allClasses from "./Classes";
// import SERVER_URL, { PROD_SERVER } from './server_url';

// const Tabs = ({ children }) => <div>{children}</div>;

// const TabsList = ({ children }) => <div className="tabs-list">{children}</div>;

// const TabsTrigger = ({ children, value, onClick, isActive }) => (
//   <button 
//     onClick={() => onClick(value)} 
//     className={`tab-trigger ${isActive ? 'active' : ''}`}
//   >
//     {children}
//   </button>
// );

// const TabsContent = ({ children }) => <div>{children}</div>;

// const Button = ({ children, onClick, className }) => (
//   <button onClick={onClick} className={className}>{children}</button>
// );

// const SESSIONS_DATA = {
//   day1: allClasses.filter(classItem => classItem.room !== "virtual" && classItem.room !== "zoom"),
//   day2: allClasses.filter(classItem => classItem.room === "virtual" || classItem.room === "zoom"),
// };

// var initialAuthUser = JSON.parse(localStorage.getItem('authUser'));
// console.log("initialAuthUser: ", initialAuthUser);
// var initialClasses = [];

// if (initialAuthUser) {
//   axios.get(`${SERVER_URL}/get_classes/${initialAuthUser.email}`)
//     .then((response) => {
//       console.log('Response from /get_classes:', response);
//       initialClasses = response.data.classes;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// } else {
//   console.log("No initial authUser found in local storage");
// }


// const ClassSchedule = () => {
//   const [authUser, setAuthUser] = useState(initialAuthUser);
//   const [isRegisteredForSection, setIsRegisteredForSection] = useState(false); // track if user is registered for the section
//   const [dataFetched, setDataFetched] = useState(false); // track if data has been fetched
//   const [selectedDay, setSelectedDay] = useState("day1");
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleDayChange = (day) => {
//     setSelectedDay(day);
//     setSelectedTime(null); // Reset selected time when switching days
//   };

//   const currentSessions = SESSIONS_DATA[selectedDay];
//   const filteredSessions = selectedTime
//     ? currentSessions.filter((session) => session.time.split("-")[0] === selectedTime)
//     : currentSessions;

//   const uniqueTimes = Array.from(new Set(currentSessions.map((session) => session.time.split("-")[0])));

//   useEffect(() => {
//     if (!dataFetched && authUser) {
//       axios.get(`${SERVER_URL}/get_classes/${initialAuthUser.email}`)
//         .then((response) => {
//           console.log('Response from /get_classes:', response);
//           const initialClasses = response.data.classes;
//           var isRegistered = false;
//           for (var i = 0; i < filteredSessions.length; i++) {
//             if (initialClasses[filteredSessions[i].classIndex] === "1") {
//               isRegistered = true;
//               break;
//             }
//           }
//           setIsRegisteredForSection(isRegistered);
//           setDataFetched(true); // Mark data as fetched
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [dataFetched, authUser]);

//   useEffect(() => {
//     console.log("authUser changed!")
//     if (authUser) {
//       localStorage.setItem('authUser', JSON.stringify(authUser));
//       console.log("changed authUser: ", authUser);
//       console.log("authUser classes: " + authUser.classes)
//     }
//   }, [authUser]);

//   function onRegisterClick(index) {
//     console.log("registering for class (index): ", index);
//     // make a POST request to the server to register the user for the class with the given index
//     axios.post(`${SERVER_URL}/registerForCourse`, { email: authUser.email, classIndex: index })
//       .then((response) => {
//         console.log('Response from /registerForCourse:', response);
//         setIsRegisteredForSection(true);
//         setAuthUser(response.data.authUser);
//         // make a message to the user that they have successfully registered for the class
//         alert("You have successfully REGISTERED for the class!");
//         window.location.reload();
//       })
//       .catch((error) => { 
//         console.error(error);
//         alert("There was an error registering for the class. Please try again later.")
//         window.location.reload();
//       });
//   };

//   function onUnregisterClick(index) {
//     console.log("unregistering for class (index): ", index);
//     // make a POST request to the server to unregister the user for the class with the given index
//     axios.post(`${SERVER_URL}/unregisterForCourse`, { email: authUser.email, classIndex: index })
//       .then((response) => {
//         console.log('Response from /unregisterForCourse:', response);
//         setIsRegisteredForSection(false);
//         setAuthUser(response.data.authUser);
//         // make a message to the user that they have successfully unregistered for the class
//         alert("You have successfully UNREGISTERED for the class!");
//         window.location.reload();
//       })
//       .catch((error) => { 
//         console.error(error);
//         alert("There was an error registering for the class. Please try again later.")
//         window.location.reload();
//       });
//   }

  

//   return (
//     <div className="homepage-about">
//       <div className='container-about'>
//         <div className='title-about'>
//           <img
//             className="corner-image-about"
//             src={titleshootingstars} 
//             alt="Corner Decoration"
//           />
//           <img
//             className="title-image-about"
//             src={classScheduleTitle}
//             alt="Class Schedule Title"
//           />
//         </div>
//       </div>

//       <div className="class-schedule-container">
//         <Tabs>
//           <TabsList>
//             <TabsTrigger value="day1" onClick={() => handleDayChange("day1")} isActive={selectedDay === "day1"}>
//               DAY 1 - In Person
//             </TabsTrigger>
//             <TabsTrigger value="day2" onClick={() => handleDayChange("day2")} isActive={selectedDay === "day2"}>
//               DAY 2 - Virtual
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent key={selectedDay}>
//             <div className="time-filters">
//               {uniqueTimes.map((time) => (
//                 <Button
//                   key={time}
//                   onClick={() => setSelectedTime(selectedTime === time ? null : time)}
//                   className={`time-button ${selectedTime === time ? 'active' : ''}`}
//                 >
//                   {time}
//                 </Button>
//               ))}
//             </div>

//             <div className="classes-grid">
//               {filteredSessions.map((session) => (
//                 <ClassCard
//                   key={session.classIndex}
//                   className={session.className}
//                   capacity={session.capacity}
//                   room={session.room}
//                   time={session.time}
//                   description={session.description}

//                   onRegisterClick={ () => {
//                     if (isRegisteredForSection) {
//                       onUnregisterClick(session.classIndex);
//                     } else {
//                       onRegisterClick(session.classIndex);
//                     }
//                   }}

//                   activated={(isRegisteredForSection && authUser.classes[session.classIndex] === "1") || !isRegisteredForSection}


//                   index={session.classIndex}
//                   zoomLink={session.zoomLink}
//                 />
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default ClassSchedule;





import React, { useEffect, useState } from "react";
import './ClassSchedule.css';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ClassCard from "./ClassCard";
import axios from "axios";
import classScheduleTitle from '../assets/titles/class-schedule-title.png';
import titleshootingstars from '../assets/title-shooting-stars.png';
import allClasses, { inPersonMorningClassesFirst, inPersonMorningClassesSecond, inPersonAfternoonClasses, virtualMorningClasses, virtualAfternoonClasses } from "./Classes";
import SERVER_URL, { PROD_SERVER } from './server_url';
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
    <div className="class-template-time-section" style={{ fontFamily: "Anta", color: "white", marginBottom: "20px", alignItems: "center" }}>
      <div className="titleClassDay" style={{ fontFamily: "Anta", textAlign: "center", marginBottom: "2vh", fontSize: "1.6rem" }}>
        <h2 style={{ fontFamily: "Anta" }}>{title}</h2>
      </div>
      
      <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around", gap: "1.3rem" }}>
          {classesList && classesList.length > 0 ? (
            classesList.map((classData) => (
                <ClassCard 
                  className={classData.className}
                  capacity={classData.capacity}
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
                  zoomLink={classData.zoomLink}
                />
            ))
          ) : (
            <div>No classes available</div>
          )}
      </div>
      
    </div>
  );
  
}
const ClassSchedule = () => {
  // if (!initialAuthUser) {
  //   return (
  //     <div className="class-template" style={{  }}>
  //     <Container>
  //       <Box sx={{ my: 4 }}>
  //       <Typography variant="h2" gutterBottom color={"white"} fontFamily="Anta" >
  //         Class Schedule
  //       </Typography>
  //       <Typography variant="h5" gutterBottom color={"white"} fontFamily="Anta" >
  //         Please log in to view your class schedule
  //       </Typography>
  //       </Box>
  //     </Container>
  //     </div>
  //   );
  // }

  
  return (
    <div>
      <div className='title-about'>
        <img
            className="corner-image-about"
            src={titleshootingstars} 
            alt="Corner Decoration"
        />
        <img
            className="title-image-about"
            src={classScheduleTitle}
            alt="Class Schedule Title"
        />
      </div>

      <div className="class-template" style={{ }}>

      <Container maxWidth="false">
        <Box sx={{ my: 5, mx: "8vw" }}>

          <ClassTemplateTimeSection title="In-Person Morning Classes (10:00 AM - 10:50 AM)" classesList={IN_PERSON_MORNING_CLASSES_FIRST} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Afternoon Classes (11:00 AM - 11:50 PM)" classesList={IN_PERSON_MORNING_CLASSES_SECOND} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="In-Person Evening Classes (2:00 PM - 2:50 PM)" classesList={IN_PERSON_AFTERNOON_CLASSES} />
          <br /><br /><br /><br /><br /><br /><br />
          <ClassTemplateTimeSection title="Virtual Morning Classes (12:30 PM - 1:20 PM)" classesList={VIRTUAL_MORNING_CLASSES} />
          <br /><br /><br /><br /><br /><br /><br /> 
          <ClassTemplateTimeSection title="Virtual Afternoon Classes (1:30 PM - 2:20 PM)" classesList={VIRTUAL_AFTERNOON_CLASSES} />
        </Box>
      </Container>
    </div>

    </div>
    
  );
};
export default ClassSchedule;