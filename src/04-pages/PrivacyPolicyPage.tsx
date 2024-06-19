import { Box, Container, Typography } from "@mui/material";

const data = {
    title: "Privacy Policy",
    content: [
        {
            type: "paragraph",
            text: "Faithsafe takes your privacy seriously. To better protect your privacy, we provide this privacy policy notice explaining the way your personal information is collected and used."
        },
        {
            type: "section",
            heading: "Collection of Routine Information",
            text: "This website track basic information about their users. This information includes, but is not limited to, IP addresses, browser details, timestamps, and referring pages. None of this information can personally identify specific visitors to this website. The information is tracked for routine administration and maintenance purposes."
        },
        {
            type: "section",
            heading: "Cookies",
            text: "Where necessary, this website uses cookies to store information about a visitor’s preferences and history in order to better serve the visitor and/or present the visitor with customized content."
        },
        {
            type: "section",
            heading: "Advertisement and Other Third Parties",
            text: "We do not place any advertising on our website. No third parties receive your data. Nevertheless, we cannot guarantee that data will flow to third parties."
        },
        {
            type: "section",
            heading: "Links to Third Party Websites",
            text: "We have included links on this website for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own."
        },
        {
            type: "section",
            heading: "Security",
            text: "The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
        },
        {
            type: "section",
            heading: "Changes To This Privacy Policy",
            text: "This Privacy Policy is effective as of 19.06.2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website."
        },
        {
            type: "section",
            heading: "Contact Information",
            text: "For any questions or concerns regarding the privacy policy, please send us an email to support@faithsafe.net."
        }
    ]
};

export default function PrivacyPolicyPage() {
    return (
        <Box mt={'5em'}>
            <Container>
                <Typography variant="h1">{data.title}</Typography>
                <Box textAlign="left" mt={'4em'}>
                    {data.content.map((section, index) => (
                        <Box key={index} mb={3}>
                            {section.heading && (
                                <Typography variant="h3" color="black">
                                    {section.heading}
                                </Typography>
                            )}
                            <Box mt={'1em'}>
                                <Typography variant="body1" textAlign={'justify'}>{section.text}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>

    );
}
