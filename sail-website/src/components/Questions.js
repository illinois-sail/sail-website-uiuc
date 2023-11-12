import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from '@mui/material/Link';
import "../fonts.css";
import Footer from "./Footer";

export default function SimpleAccordion() {
  return (
    <>
      <div style={{ marginBottom: "4em" }}>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              style={{ fontFamily: "sergiotrendy" }}
              sx={{
                color: "#fff",
              }}
            >
              {" "}
              What is Sail?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              This year, Sail will be a two-day event. On Saturday, students
              will have the chance to attend classes taught by current students
              at UIUC and learn about different computer science topics, as well
              as life at UIUC. On Sunday, there will be a virtual mini-hackathon.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              How do I sign up?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              Students can register and login by clicking the register button on
              the top right corner of the website. Please fill out the
              information so we can get to know you better!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              Who is Sail for?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              This year, Sail will have activities for high school students, as
              well as their parents! We will have separate tracks for admitted
              students and&nbsp;  
              
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd9UcCW6uN0QeCqqtQGzuipCsYnkKrg7M7q3Gb33wceqgda6g/viewform" color="inherit">
               parents
                </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              Where can parents sign up?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
             Parents can sign up using the following&nbsp; 
              
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd9UcCW6uN0QeCqqtQGzuipCsYnkKrg7M7q3Gb33wceqgda6g/viewform" color="inherit">
               link
                </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              Will Sail be virtual or in person?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              On April 13th, there will be a in-person day. On April 14th, we will
              have a virtual mini-hackathon
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              Is Sail free to attend?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              YES! And no worries, food and transporation will be provided! There will be buses to the following places: Chicago, Schaumburg, Naperville, Oak Brook.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "#64b6ac",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
              style={{ fontFamily: "sergiotrendy" }}
            >
              Other questions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "cascadiacode",
                color: "#fff",
                fontSize: 15,
              }}
            >
              Please do not hesitate to contact us at
              sail.cs.illinois@gmail.com. We will get back to you as soon as
              possible!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </>
  );
}
