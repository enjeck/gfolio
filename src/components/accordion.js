import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const AccordionComponent = () => {
  const classes = useStyles();

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: "normal", color: "#333" }}>
            People also ask
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is your professional background?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I am a software engineer and technical writer. I have experience in both contracting and in-house roles.
                I build software solutions and also write clear, effective documentation for them.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                What technologies do you work with?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I work with a variety of tools including Python, JavaScript (React, Vue.js), and C++.
                I also have experience with Docker, AWS, Linux systems, and networking tools.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Where have you worked in the past?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I have worked with organizations such as Bloomberg, Meta (Facebook), and The Tor Project.
                My experience ranges from large tech companies to open source projects.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
                What kind of work do you do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I am open to both contracting (freelance) and in-house (full-time) opportunities.
                Whether you need a developer for a specific project or a permanent team member, I can help.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
