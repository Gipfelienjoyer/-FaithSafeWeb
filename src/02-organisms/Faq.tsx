import { SyntheticEvent, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        question: "How do I contact customer support if I have a question or issue?",
        answer: "You can reach our customer support team by emailing support@faithsafe.net. We're here to assist you promptly."
    },
    {
        question: "Why do I have to be logged in to access the download page?",
        answer: 'Faithsafe is 100% completely FREE and can be downloaded at <a href="https://github.com/BambusTM/FaithSafeFX/releases/latest" target="_blank" rel="noopener noreferrer">this link</a> without a login. The login ensures that you will be kept up to date about our future updates & products.'
    },
    {
        question: "Are my passwords secure in Faithsafe?",
        answer: "We are constantly renewing Faithsafe with new updates and security patches. However, Faithsafe has not yet reached the first version. This means that Faithsafe is still experimental and cannot be considered secure."
    },
    {
        question: "How can I contribute to Faithsafe?",
        answer: 'Fork the repository <a href="https://github.com/BambusTM/FaithSafeFX/" target="_blank" rel="noopener noreferrer">here</a> and make pull requests. Creating a GitHub issue will also benefit Faithsafe!'
    }
];

export default function Faq() {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange =
        (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Container
            id="faq"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                sx={{
                    width: '100%',
                    textAlign: 'left',
                }}
            >
                Frequently asked questions
            </Typography>
            <Box sx={{ width: '100%' }}>
                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                        >
                            <Typography component="h3" variant="subtitle2">
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{
                                    maxWidth: '100%',
                                    color: 'black',
                                    textAlign: 'left',
                                }}
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
}
