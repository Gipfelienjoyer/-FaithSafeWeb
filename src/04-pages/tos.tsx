import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const data = {
    title: "Website Terms and Conditions of Use",
    sections: [
        {
            heading: "1. Terms",
            text: `By accessing this website, accessible from www.faithsafe.com, you agree to comply with these Terms and Conditions of Use and acknowledge your responsibility to adhere to any applicable local laws. If you do not agree with any of these terms, please do not use our site. The materials on this website are protected by copyright and trademark law.`
        },
        {
            heading: "2. Use License",
            text: `Permission is granted to temporarily download one copy of the materials on Faithsafe's website for personal, non-commercial, and temporary viewing only. This is a license grant, not a transfer of title, and under this license you may not:
            - Modify or copy the materials;
            - Use the materials for any commercial purpose or public display;
            - Attempt to reverse engineer any software on Faithsafe's website;
            - Remove any copyright or other proprietary notations from the materials; or
            - Transfer the materials to another person or "mirror" the materials on any other server.
            
            Faithsafe reserves the right to terminate this license at any time if you violate any of these restrictions. Upon termination, you must destroy any downloaded materials in your possession, whether in electronic or printed format. These Terms of Service were created with the help of the Terms Of Service Generator.`
        },
        {
            heading: "3. Non-Profit Use",
            text: `Faithsafe operates as a non-profit organization. All materials and resources provided on this website are intended solely for non-commercial, charitable, and educational purposes. Any use of these materials should align with Faithsafe's mission to promote and support our cause.`
        },
        {
            heading: "4. Disclaimer",
            text: `All materials on Faithsafe's website are provided "as is". Faithsafe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties. Furthermore, Faithsafe makes no representations regarding the accuracy or reliability of the materials on its website or any sites linked to this site.`
        },
        {
            heading: "5. Limitations",
            text: `Faithsafe or its suppliers will not be liable for any damages arising from the use or inability to use the materials on Faithsafe's website, even if Faithsafe or an authorized representative has been notified orally or in writing of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or liability for incidental damages, so these limitations may not apply to you.`
        },
        {
            heading: "6. Revisions and Errata",
            text: `The materials on Faithsafe's website may include technical, typographical, or photographic errors. Faithsafe does not warrant that any of the materials on its website are accurate, complete, or current. Faithsafe may change the materials on its website at any time without notice. However, Faithsafe does not make any commitment to update the materials.`
        },
        {
            heading: "7. Links",
            text: `Faithsafe has not reviewed all sites linked to its website and is not responsible for the contents of any linked site. The inclusion of any link does not imply endorsement by Faithsafe. Use of any linked website is at the user's own risk.`
        },
        {
            heading: "8. Site Terms of Use Modifications",
            text: `Faithsafe may revise these Terms of Use for its website at any time without prior notice. By using this website, you agree to be bound by the current version of these Terms and Conditions of Use.`
        },
        {
            heading: "9. Your Privacy",
            text: `Please review our Privacy Policy.`
        },
        {
            heading: "10. Governing Law",
            text: `Any claim related to Faithsafe's website shall be governed by the laws of [your state or country], without regard to its conflict of law provisions.`
        }
    ]
};

export default function LegalTerms() {
    return (
        <Box mt={'5em'}>
            <Container>
                <Typography variant="h1" textAlign={'center'}>{data.title}</Typography>
                <Box textAlign="left" mt={'4em'}>
                    {data.sections.map((section, index) => (
                        <Box key={index} mb={3}>
                            {section.heading && (
                                <Typography variant="h3" color="black">
                                    {section.heading}
                                </Typography>
                            )}
                            <Box mt={'1em'}>
                                <Typography variant="body1" textAlign={'justify'} component={'div'}>
                                    {section.text.split('\n').map((line, i) => (
                                        <div key={i}>
                                            {line.includes('www.faithsafe.com') ? (
                                                <Link href="https://www.faithsafe.com">https://www.faithsafe.com</Link>
                                            ) : line.includes('Terms Of Service Generator') ? (
                                                <Link href="https://www.termsofservicegenerator.net">Terms Of Service Generator</Link>
                                            ) : (
                                                line
                                            )}
                                            <br />
                                        </div>
                                    ))}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
