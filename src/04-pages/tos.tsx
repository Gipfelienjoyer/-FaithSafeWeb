import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const data = {
    title: "Legal Terms",
    sections: [
        {
            heading: "AGREEMENT TO OUR LEGAL TERMS",
            text: `FaithSafe ('Company', 'we', 'us', or 'our')
            A company registered in Switzerland at:
            Lorrainestrasse 1, Bern, Bern 3000

            Website:
            https://www.faithsafe.com

            Contact:
            Email: support@faithsafe.net
            Lorrainestrasse 1, Bern, Bern 3000, Switzerland`
        },
        {
            heading: "LEGAL TERMS",
            text: `These Legal Terms constitute a legally binding agreement between you and FaithSafe regarding your access
            to and use of the Services. By accessing the Services, you agree to be bound by all of these Legal
            Terms. If you do not agree with all of these Legal Terms, you are expressly prohibited from using
            the Services and must discontinue use immediately.`
        },
        {
            heading: "1. OUR SERVICES",
            text: `The information provided via the Services is intended for personal, non-commercial use. Users accessing
            the Services from jurisdictions where such access would be contrary to law are responsible for
            compliance with local laws.`
        },
        {
            heading: "2. INTELLECTUAL PROPERTY RIGHTS",
            text: `We own or license all intellectual property rights in the Services, including Content and Marks,
            protected by copyright and trademark laws. Users are granted a non-exclusive, non-transferable license
            for personal, non-commercial use. Any unauthorized use constitutes a material breach of our Legal
            Terms.`
        },
        {
            heading: "3. USER REPRESENTATIONS",
            text: `By using the Services, users represent and warrant the accuracy of registration information, legal
            capacity, compliance with Legal Terms, and absence of violations of applicable law. Providing false
            information may result in account suspension or termination.`
        },
        {
            heading: "4. USER REGISTRATION",
            text: `Users may be required to register to use the Services. They agree to keep their password confidential
            and accept responsibility for account use. Inappropriate usernames may be removed at our discretion.`
        },
        {
            heading: "5. PURCHASES AND PAYMENT",
            text: `All purchases are non-refundable. Accepted payment methods include PayPal. Users agree to provide
            accurate payment and account information. We reserve the right to refuse orders, correct pricing errors,
            and limit quantities.`
        },
        {
            heading: "6. SOFTWARE",
            text: `We may provide software for use with our Services. If accompanied by an end user license agreement
            (EULA), the EULA governs your use. If not accompanied by a EULA, you are granted a non-exclusive,
            revocable, personal, non-transferable license to use the software in connection with our Services and in
            accordance with these Legal Terms. Any software and related documentation is provided 'AS IS' without
            warranty, and you accept all risks associated with its use.`
        },
        {
            heading: "7. PROHIBITED ACTIVITIES",
            text: `Users may not access or use the Services for purposes other than intended. Prohibited activities
            include,
            but are not limited to:
            - Retrieving data for unauthorized collections
            - Fraudulent attempts to obtain sensitive information
            - Interfering with security features
            - Harassing or harming others
            - Misusing support services
            - Violating laws or regulations
            - Engaging in unauthorized linking or framing
            - Uploading viruses or other harmful material
            - Using automated systems or tools
            - Impersonating others
            - Deleting copyright notices
            - Attempting to bypass security measures
            - Copying or adapting software
            - Deciphering, decompiling, or reverse-engineering software
            - Using automated systems for purchases
            - Making unauthorized use of the Services
            - Advertising or offering goods/services without permission`
        },
        {
            heading: "8. USER GENERATED CONTRIBUTIONS",
            text: `While the Services may not offer users the ability to submit or post content directly, users may have
            the
            opportunity to create, submit, post, or display content (referred to as 'Contributions'). Users
            represent and warrant that their Contributions comply with our Legal Terms and do not infringe on the
            rights of any third party.`
        },
        {
            heading: "9. CONTRIBUTION LICENSE",
            text: `You and the Services agree that we may access, store, process, and use any information and personal data
            you provide following the terms of the Privacy Policy and your choices. By submitting suggestions or
            other feedback regarding the Services, you agree that we can use and share such feedback for any purpose
            without compensation to you. We do not assert ownership over your Contributions, and you retain full
            ownership and intellectual property rights associated with them. We are not liable for any statements or
            representations in your Contributions, and you are solely responsible for them.`
        },
        {
            heading: "10. GUIDELINES FOR REVIEWS",
            text: `When leaving reviews, users must comply with specific criteria, including having firsthand experience,
            refraining from offensive language, avoiding discriminatory references, refraining from illegal activity
            references, not being affiliated with competitors when posting negative reviews, not making legal
            conclusions, avoiding false or misleading statements, and not organizing review campaigns.`
        },
        {
            heading: "11. THIRD-PARTY WEBSITES AND CONTENT",
            text: `The Services may contain links to Third-Party Websites and Third-Party Content. We do not investigate,
            monitor, or check these for accuracy or appropriateness and are not responsible for them. Inclusion of
            Third-Party Websites or Content does not imply endorsement, and accessing them is at your own risk. Any
            transactions on Third-Party Websites are between you and the third party, and we are not liable for
            them.`
        },
        {
            heading: "12. SERVICES MANAGEMENT",
            text: `We reserve the right to manage the Services in a manner designed to protect our rights and property and
            to facilitate the proper functioning of the Services.`
        },
        {
            heading: "13. PRIVACY POLICY",
            text: `Our Privacy Policy governs data privacy and security. By using the Services, you agree to be bound by
            our Privacy Policy, which is incorporated into these Legal Terms.`
        },
        {
            heading: "14. TERM AND TERMINATION",
            text: `These Legal Terms remain in effect while you use the Services. We reserve the right to deny access,
            terminate accounts, or remove content without notice or liability.`
        },
        {
            heading: "15. MODIFICATIONS AND INTERRUPTIONS",
            text: `We may change, modify, or remove the Services' content at our sole discretion without notice. We are not
            liable for any interruptions or errors in service.`
        },
        {
            heading: "16. GOVERNING LAW",
            text: `These Legal Terms are governed by the laws of Switzerland, and any disputes shall be submitted to the
            courts of Bern.`
        },
        {
            heading: "17. DISPUTE RESOLUTION",
            text: `Disputes may be resolved through informal negotiations or binding arbitration, with certain exceptions.`
        },
        {
            heading: "18. CORRECTIONS",
            text: `We reserve the right to correct errors or inaccuracies in the Services' information without notice.`
        },
        {
            heading: "19. DISCLAIMER",
            text: `The Services are provided as-is, and we disclaim all warranties. We are not liable for any damages
            resulting from your use of the Services.`
        },
        {
            heading: "20. LIMITATIONS OF LIABILITY",
            text: `Our liability is limited to the amount paid by you, and we are not liable for certain damages. Certain
            laws may not allow these limitations, granting you additional rights.`
        },
        {
            heading: "21. INDEMNIFICATION",
            text: `You agree to defend, indemnify, and hold us harmless from any claims arising from your use of the
            Services or breach of these Legal Terms.`
        },
        {
            heading: "22. USER DATA",
            text: `While we maintain data for managing the Services, you are solely responsible for any data transmitted or
            related to your use of the Services.`
        },
        {
            heading: "23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
            text: `You consent to receive electronic communications and agree to electronic signatures, contracts, and
            transactions.`
        },
        {
            heading: "24. MISCELLANEOUS",
            text: `These Legal Terms constitute the entire agreement between you and us and operate to the fullest extent
            permissible by law. We may assign our rights and obligations and are not liable for delays beyond our
            control.`
        },
        {
            heading: "25. CONTACT US",
            text: `For complaints or further information about the Services, please contact us at the provided address.`
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
                                            {line.includes('https://www.faithsafe.com') ? (
                                                <Link href="https://www.faithsafe.com">https://www.faithsafe.com</Link>
                                            ) : line.includes('support@faithsafe.net') ? (
                                                <Link href="mailto:support@faithsafe.net">support@faithsafe.net</Link>
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
