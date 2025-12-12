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
                What services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I specialize in building accessible, high-performance web applications using React, Next.js, 
                and Gatsby. My services include: web accessibility audits and WCAG compliance implementation, 
                SEO optimization and structured data integration, Core Web Vitals improvement and performance 
                tuning, semantic HTML and ARIA implementation, custom web applications with full-stack capabilities, 
                and technical consulting for inclusive design practices.
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
                What is your typical project timeline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Project timelines vary based on scope and complexity. A standard website typically 
                takes 2 to 4 weeks, while larger applications may require 6 to 12 weeks. I provide 
                detailed project proposals with clear milestones and deliverables. I maintain regular 
                communication throughout development and always deliver on agreed deadlines.
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
                Are you currently accepting new projects?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, I am currently available for freelance projects. I work with startups, 
                established businesses, and individual clients who need professional web development 
                services. I am selective about the projects I take on to ensure I can deliver 
                exceptional quality and maintain focus on each client's success.
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
                How can I get started working with you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The best way to start is by sending me an email at enjeckc1e0 at gmail dot com with details 
                about your project. Include your timeline, budget range, and any specific requirements. 
                I typically respond within 24 hours and can schedule a consultation call to discuss 
                your needs in detail and provide a customized proposal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className={classes.heading}>
                What makes your approach different?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I build websites that work for everyone. Every project I deliver meets WCAG 2.1 AA standards 
                with proper semantic markup, keyboard navigation, and screen reader support. I optimize for 
                Core Web Vitals, implement comprehensive SEO with structured data, and ensure fast page loads 
                across all devices. My code is clean, well-documented, and maintainable. I combine technical 
                excellence with accessibility-first thinking to create inclusive digital experiences.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
