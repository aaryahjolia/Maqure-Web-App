import * as React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FAQAccordion(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function handleContactUsClick() {
        document.getElementById("navbar_link_1").click();
        props.ContactUsRef.current.scrollIntoView();
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className="accordion_heading" id="panel1" style={{ fontWeight: "bold" }}>{props.question1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.answer1}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className="accordion_heading" id="panel2" style={{ fontWeight: "bold" }}>{props.question2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.answer2}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className="accordion_heading" id="panel3" style={{ fontWeight: "bold" }}>{props.question3}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.answer3}.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className="accordion_heading" id="panel4" style={{ fontWeight: "bold" }}>{props.question4}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.answer4}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                // style={{borderBottom: "1px solid red"}}
                >
                    <Typography className="accordion_heading" id="panel5" style={{ fontWeight: "bold" }}>{props.question5}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a href="/#contact_us" style={{ color: "var(--blue)" }} onClick={handleContactUsClick}>Click here</a> to fill the form to schedule a call back or E-mail us your query on <a href="mailto:pranav@maqure.com" style={{ color: "var(--blue)" }}>pranav@maqure.com</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default FAQAccordion