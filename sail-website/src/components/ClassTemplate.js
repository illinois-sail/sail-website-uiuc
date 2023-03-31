import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MyClassCard from "./ClassCard";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const titles = [
  "Image Editing without Photoshop!",
  "Behind the Scenes of a Freshman in CS",
  "Shell and Command Line Workshop",
  "An Introduction to Cache Optimization",
  "Welcome to your Computer: Computer Systems Crash Course",
  "Designing for the User",
  "You in the Professor's Shoes",
  "Intro to Python: Turtle Graphics",
  "How Algorithms Evolve: A Primer on Genetic Algorithms",
  "Take Command of Git",
  "Humans and Computers and Interaction, Oh My!",
  "Computer Graphics: Robotics",
  "Cybersecurity: Ninja Training",
  "Research 101",
  "How to statistically prove you're better than your friend at a game",
  "Intro to Algorithmic Efficiency",
  "Imposter Syndrome: How to Deal with it",
  "Cybersecurity 101",
  "Programming Killer AI Bots",
  "Computing in Astronomy",
  "How Can a Computer Add Numbers",
  "Introduction to Research Opportunities in Computer Science on Campus",
  "A Crash Course in Creating An Efficient But Reasonable Schedule",
  "Level Up your Notes with Notion",
  "Rust 101",
  "Implementing a Wordle Solver with Python",
  "Data Structures in Python",
  "Intro to Machine Learning: Computer Vision",
  "Intro to React Creating a Personal Website",
  "History of Computing @ Illinois",
  "Blockchain Big Brain",
  "Future Prospects of CS. Industry vs. Research",
  "Formula 1 Stat Analysis",
];
const teachers = [
  "Teacher1",
  "Teacher2",
  "Teacher3",
  "Teacher4",
  "Teacher5",
  "Teacher6",
  "Teacher7",
  "Teacher8",
  "Teacher9",
];
const descriptions = [
  "Have you ever been curious about the movie trope where IT guys ENHANCE images? Learn the basics of programmatic image editing, and even touch up your own photos without using Photoshop! Laptops required. AP Computer Science A OR basic Python required.",
  "Life as a freshman at UIUC is an experience unlike any other. Learn about everything you need to know about being a student at UIUC from classes to research, internships, dorm, food, and student life, and college life hacks!",
  "Learn more about the command line, how to use this powerful interface, and the benefits it offers! We’ll be teaching you how to leverage cool commands to interact with your computer, and walk through some interactive security activities. Laptop required.",
  "Learn about how your computer's cache works and helps write faster programs. Presented in an interactive lecture style, you get to experience what college lectures are like! Prerequisites: Knowledge of variables, loop, memory, functions (AP CS).",
  "Join us for a high-level overview of your terminal, the computer system it resides in, and the wider world of systems! :)",
  "Is Computer Science all about coding? Who are you writing codes for? How is the software you write received by the users? Our course introduces some of the fundamental principles and workflow of user interface designs. No CS experience required!",
  "Ever wanted to see how a college course is run? Join us and get a peek into the life of a Course Assistant (CA). Learn how CAs help professors manage courses and get a taste of what it's like to be a professor. Find out why you should become a CA!",
  "Students will learn the basics of the Python and take part in an image-drawing competition using turtle graphics. During the competition, students are welcome to ask questions about internships, undergraduate research, or life at UIUC!",
  "Learn about the basics of genetic algorithms, a way for machines to teach themselves to solve complex problems like playing video games. Make your own genetic algorithm that can create a path to a goal!",
  "Join us to master Git and Command Line basics. These crucial skills are often overlooked in class but are vital for coding and project management. Perfect for all fields. Don't miss out on skills you'll need for personal projects and the workplace.",
  "Learn about Human-Computer Interaction, an often-overlooked aspect of CS. Computer Science is more than just code: it includes social media, virtual reality, assistive technologies, and more! Join us to learn about technologies and areas of research!",
  "Learn about the basics of computer graphics and robotics.",
  "This course interactively teaches students about the various fields that exist within cybersecurity by performing a serious of real-world hacks with the instructors.",
  "Are you interested in research, but scared to try it out? Don't worry, we got your back. This workshop aims to introduce the concept of research, research skills and how you can be involved in undergraduate research at UIUC!",
  "Join us to develop a statistical, data-centered approach to prove you're the best at your favorite game! We'll compare players' performances in the game Word Hunt using probability distributions, independence, and dimensionality reduction. :)",
  "Learn more about combinatorics and their applications to computer science!",
  "Nervous about college? Learn about how impostor syndrome works, ways to combat it, and how to recognize it. The course is for anyone but definitely tailored for women, LGBT+ students, and underrepresented minorities.",
  "Learn about cybersecurity in this beginner level class! We will talk about what cybersecurity is, different career paths and resources to get started, and complete some interactive demos!",
  "Learn how to program a computer to play checkers, chess and other board games.",
  "A gentle introduction to computational techniques used in astronomy research. Students must have a laptop.",
  "Learn how computers really work by building a circuit that adds numbers! Learn the basics of circuits and get hands-on experience with breadboards, wires, and electricity. This course is your first step in understanding the inner workings of computers.",
  "Explore research opportunities in CS at UIUC and gain the skills/resources to conduct research, identify potential topics, find mentors and funding. Participating in research is a great way to develop valuable skills and gain experience for future career!",
  "No description",
  "Learn to organize your notes and schedule with Notion, a absolute necessity in college! You'll learn how to use markup languages like Markdown and LaTeX, design database, and sync Notion pages with external programs and AI tools.",
  "Introduction to the Rust programming language! This course will teach you everything you need to know to code and build projects in Rust! Understand concepts such as parallelism and pipelining with the number one rated programming language!",
  "Using Python, the course content includes implementing an application that helps a user solve the famous game of Wordle. During the course, students will be introduced to the basics of data science and scoring algorithms.",
  "We will introduce basic data structures in Python, such as lists, sets, and dictionaries that will be useful when problem solving in Python.",
  "Learn the basics of supervised machine learning through a hands-on experience of running and modifying your own neural network! This course is open to all, and no prior knowledge of machine learning or coding is required.",
  "Learn how to create your very own personal website using React! We will also delve into how to host the site using Firebase.",
  "This course will give a perspective on computing at the University of Illinois Urbana-Champaign.",
  "no description",
  "Learn how to build a strong application for research or internships, and explore the pros and cons of pursuing a career in graduate studies or industry. We also have an important PSA for passing CS courses here which you'll (probably) want to hear!",
  "This is an introduction to data science using the example of Formula 1. Join us to learn more about statistical analysis and data science!",
];

const ClassTemplate = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: "20px",
        }}
      >
        {titles.map((title, index) => {
          // map() is a function that takes in an array and returns a new array
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{ justifyContent: "center" }}
            >
              <MyClassCard // this is a component
                title={title}
                description={descriptions[index]}
                teacher={teachers[index]}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ClassTemplate;

{
  /* <Container component="main" maxWidth="s">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            color="#64b6ac"
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "sergiotrendy",
              paddingBottom: 2,
              fontSize: 45,
              marginTop: "20%",
              textAlign: "center",
            }}
          >
            Classes Page Coming Soon!
          </Typography>
        </Box>
      </Container>  */
}
