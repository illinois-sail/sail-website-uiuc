import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion disableGutters sx={{
                  //backgroundColor: '#FAD4C0',
                }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' sx={{
                  //color: '#1D4E89',
                }}> What is Sail?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This year, Sail will be a two-day, hybrid event. Students will have the opportunity to brainstorm ideas for projects during the virtual IDEAthon on Friday. On Saturday, students will have the chance to attend classes taught by current students at UIUC and learn about different computer science topics, as well as life at UIUC.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5' sx={{
                  //color: '#1D4E89',
                }}>How do I sign up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Students can register and login by clicking the register button on the top right corner of the website. Please fill out the information so we can get to know you better!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'sx={{
                  //color: '#1D4E89',
                }}>Who is Sail for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This year, Sail will have activities for high school students, as well as their parents! We will have separate tracks for admitted students and parents.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'sx={{
                  //color: '#1D4E89',
                }}>Will Sail be virtual or in-person this year?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          April 8th will be a virtual IDEAthon, and we will have a combination of virtual and in-person activities on Saturday, April 9th. Students attending virtually will be at no disadvantage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'sx={{
                  //color: '#1D4E89',
                }}>Is Sail free to attend?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          YES! And no worries, food will be provided!         
           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h5'sx={{
                  //color: '#1D4E89',
                }}>Other questions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please don&apos;t hesitate to contact us at cs-sail@lists.cs.illinois.edu. We&apos;ll get back to you as soon as possible!       
           </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}