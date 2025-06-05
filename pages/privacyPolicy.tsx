import Default from 'components/templates/Default';
import { useState, useEffect } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
    const [appUrl, setAppUrl] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setAppUrl("https://app." + window.location.host);
        }
    }, []);
    
    return (
        <Default appUrl={appUrl || "about:blank"} pageName="Ouroboros | Privacy Policy">
            <Stack my="10" mx="20" gap="10">
                <Text fontSize="4xl" alignSelf="center">
                    Privacy Policy
                </Text>
                <Text fontSize="sm">
                    <b>Last Revised on October 10, 2024<br></br></b>
                    
                    This Privacy Policy (“Policy”) for the Ouroboros and its subsidiaries (“Organization”, “we”, “our”, or “us”) describes the basis on which we will process personal data we may collect from users of the Organization’s website, https://ouroboros-community.xyz, including any of its subdomains (“Website”), and any tools, services, features, and functionalities available through the Website (collectively, the “Services”), in accordance with applicable law. For purposes of applicable data protection laws, the Organization is the data controller. For the purposes of this Policy, “you” and “your” refers to you as the user of the Services.<br></br>
                    
                    Read this Policy carefully so that you understand your rights in relation to your personal data and how we might collect, use, and process your personal data. If you do not agree to this Policy, do not use, access, connect to, interact with, or download any of the Services or otherwise provide your information to us.<br></br>
                    
                    <b><br></br>PERSONAL DATA WE COLLECT ABOUT YOU, WHY WE PROCESS IT, AND THE LEGAL BASIS FOR PROCESSING<br></br></b>
                    
                    When you access, use, connect to, or interact with the Services, we may collect certain categories of information about you, including personal data, from a variety of sources.<br></br>
                    
                    <b><br></br>Information you provide to us:<br></br></b>
                    
                    Personal data may include (i) any internet-protocol address (“IP Address”), (ii) any digital-asset, smart-contract, or protocol address (“Wallet”) information, associations, and/or identifiers; and (iii) geolocation data.<br></br>
                    
                    In addition, personal data may include your social media handle and related information, transaction data or history (such as your blockchain transaction history and other information associated with a linked address or Wallet), certain information needed to transfer or allocate tokens, marketing data (such as preferences for receiving marketing communications and related details), token holdings, and any other information collected through the Services. Should you contact us, we will collect the content of the communications we have with you and any personal data contained within.<br></br>
                    
                    We process this information to perform our contract with you, such as to provide you with our Services.<br></br>
                    
                    <b><br></br>Information we collect automatically:<br></br></b>
                    
                    When you visit certain pages on our Website or access, use, connect to, or interact with certain Services, our servers save each access in a log file. The following data may be collected: (i) the IP Address of the requesting computer or device; (ii) the date and time of access; (iii) the country from which the website is accessed; (iv) any API endpoint; (v) user agent details; (vi) the operating system of your computer and the browser you are using (provider, version, and language); and (vii) the transmission protocol used (e.g., HTTP/1.1).<br></br>
                    
                    The processing of this data is carried out for the purpose of enabling your access to, use of, connection to, and interaction with the Services, including (i) to facilitate your connection to the Website, (ii) to identify if you are likely to be a Prohibited Person, as defined in our general Terms of Service, available at https://ouroboros-community.xyz/termsofservice or if you are subject to any prohibitions with respect to the Services; and/or (iii) to verify your identity, identifying information, certain facts with respect to your identity or identifying information, and location to determine eligibility for certain Services. Each case with respect to any of (i), (ii), and/or (iii) is in order for us to perform our contract with you and in our legitimate interests to provide effective Services to you.<br></br>
                    
                    We may also process this data in our legitimate interests to provide effective Services to you by processing the data to assist system security and stability for provision of the Services, to conduct troubleshooting, data analytics, testing, and research, and to enable optimization and internal statistical analysis with respect to the Services, as well as to maintain the safety and security of our users, the Website, our Services and business and to improve and develop our Services and Website.<br></br>
                    
                    Finally, the Organization may use cookies, web beacons/clear gifs, geolocation and tracking technologies, and other applications when you visit the Website, including technologies collecting certain information about your access to, use of, connection to, or interaction with the Services (“Usage Data”) that may be integrated with third-party service providers.<br></br>
                    
                    With your consent, we may use any data collected, including Usage Data, to tailor features and content to you and to ensure content is presented in the most effective manner for you and your device and to run analytics and better understand your user experience with respect to the Services and, if you have opted into marketing, for marketing purposes.<br></br>
                    
                    We may also use your information to provide the Services and perform our contract with you. In our legitimate interests to provide effective services to you, we may also use this data to create aggregated, anonymized, or de-identified data.<br></br>
                    
                    In addition to the foregoing, we may use any of your information to comply with any applicable legal obligations, to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.<br></br>
                    
                    Information we may collect from third-party wallet extensions or connections:<br></br>
                    
                    Certain transactions conducted via our Services may require you to connect a compatible third-party digital Wallet to the Services. By using such Wallet to conduct such transactions via the Services, you agree that your access to, use of, connection to, and/or interactions with such third-party Wallets are governed by the privacy policy for the applicable Wallet, and you agree that you are using the Wallet in accordance with the terms and conditions of the applicable third-party provider of such Wallet.<br></br>
                    
                    Wallets are not maintained or supported by, or associated or affiliated with, the Organization. We expressly disclaim any and all liability for actions arising from your use of third-party Wallets, including but without limitation, actions relating to the use and/or disclosure of personal information by such third-party Wallets.<br></br>
                    
                    <b><br></br>YOUR RIGHTS<br></br></b>
                    
                    Under applicable data protection laws, you may have certain rights in relation to your personal data. These rights may include the following:<br></br>
                    
                    Access to your personal data that the Organization holds, information on how we use it, and who we share it with;<br></br>
                    Correction of your personal data that the Organization holds, subject to the Organization’s investigation and verification of any disputed information;<br></br>
                    Deletion or removal of your personal data, in certain circumstances;<br></br>
                    Objection to the processing of your personal data, in certain circumstances;<br></br>
                    Restriction of processing of your personal data, to stop us from processing the personal data we hold about you other than for storage purposes, in certain circumstances;<br></br>
                    Portability of your personal data; the Organization will endeavor to provide you, or a third party, with a copy of the personal data that we hold about you and transfer it to a third party in a structured, commonly used, machine-readable format;<br></br>
                    Objection to marketing communications; you may opt out of any marketing communications at any time by using any unsubscribe or opt-out functionalities displayed in any such communications to you;<br></br>
                    Notice of a personal data breach (unless the breach is unlikely to be prejudicial to you);<br></br>
                    Complaint to the Cayman Islands Data Protection Ombudsman;<br></br>
                    Withdrawal of consent, where the Organization is relying on consent to process personal data; this will not affect the processing of personal data carried out before consent is withdrawn or on legal bases other than consent.<br></br>
                    
                    <b><br></br>Automated decision-making<br></br></b>
                    
                    The Organisation will not take decisions producing legal effects concerning you, or otherwise significantly affecting you, based solely on automated processing of your personal data, unless we have considered the proposed processing in a particular case and concluded in writing that it meets the applicable requirements under applicable data protection laws You may submit a written request concerning the processing of your personal data to info@ouroboros.xyz. The Organization shall use reasonable means to verify your identity before making any determination with respect to your request.<br></br>
                    
                    Note that some of these rights may apply only in certain circumstances and all of these rights may be limited to some extent by law. Such limitations may apply, for example, where fulfilling your request would adversely affect other individuals or our trade secrets or intellectual property, where there are overriding public interests, or where we are required by law to retain your personal data.<br></br>
                    
                    To the extent required under applicable data protection laws, the Organization will be responsive to your request without undue delay and where required under applicable data protection laws, at least within one month (though this may be extended by a further two months in certain circumstances).<br></br>
                    
                    <b><br></br>SHARING OF PERSONAL DATA<br></br></b>
                    
                    In certain circumstances, we may share your information with third parties with your consent, as necessary, or as otherwise required or permitted by law. Specifically, we may share your personal data:<br></br>
                    
                    With service providers and vendors: The Organization may share your personal data with third parties to process on the Organization’s behalf. Such third parties could include blockchain analysis service providers, know-your-customer and screening service providers, developers, content delivery service providers, and data analytics service providers. Such service providers may assist us with many different functions and tasks, including determining your eligibility with respect to participation in certain Services.<br></br>
                    With professional advisors, in our legitimate interests or as required by law: As necessary, we will share your personal data with professional advisors such as auditors, law firms, cybersecurity specialists, data analysis organizations, and/or consulting or accounting firms.<br></br>
                    For legal and security reasons and to protect our services and business, in our legitimate interests or as required by law.<br></br>
                    With law enforcement and regulatory authorities, in order to comply with applicable legal and regulatory requirements, respond to mandatory legal or governmental requests or demands for information.<br></br>
                    With our affiliates, in our legitimate interests: We may share your personal data with companies within our corporate family.<br></br>
                    In connection with an asset sale or purchase, merger, bankruptcy, or other business transaction or re-organization, in our legitimate interests: We will share your personal data with relevant third parties as necessary while negotiating or in relation to a change of corporate control such as a restructuring, merger, or sale of our assets.<br></br>
                    
                    Your personal information may be transferred to and stored or processed in countries outside the jurisdiction in which you live and reside, including outside the Cayman Islands, European Economic Area (“EEA”) and United Kingdom (“UK”), and including to the U.S., in order to provide the Services. Your personal information may also be processed by staff operating outside the Cayman Islands/UK/EEA who work for us or for third-party service providers or partners. We will take steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this Policy and applicable data protection laws. Should we transfer your personal information to third parties located outside the Cayman Islands/EEA/UK, we will seek to put in place appropriate safeguards to ensure that this transfer occurs in accordance with applicable data protection laws. These measures include seeking entry into the standard contractual clauses (“SCCs”) approved by the European Commission (for transfers outside the EEA) and/or an international data transfer agreement/addendum to the SCCs approved by the UK Information Commissioner’s Office (“ICO”) (for transfers outside the UK), unless the data transfer is to a country that has been determined by the European Commission or the relevant UK authorities, as applicable, to provide an adequate level of protection for individuals’ rights and freedoms for their personal data.<br></br>
                    
                    <b><br></br>RETENTION<br></br></b>
                    
                    We will retain your personal data only for so long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting or reporting requirements, or as otherwise required by law. The length of time we retain your data will depend on the nature of the data and the purpose for which it was processed. We expect to delete your personal data (at the latest) once there is no longer any legal or regulatory requirement or legitimate business purpose for retaining your data.<br></br>
                    
                    <b><br></br>CHILDRENS&apos; PRIVACY AND DATA PROTECTION<br></br></b>
                    
                    Persons under the age of eighteen (18) are not permitted to use the Services, and we do not seek to or knowingly collect any personal data about children under thirteen (13) years of age (or sixteen (16) years of age for individuals in the EEA/UK). If we become aware that we have unknowingly collected information about any person under eighteen (18) years of age, we will make commercially reasonable efforts to delete such personal data and other information from our records.<br></br>
                    
                    <b><br></br>SECURITY MEASURES TAKEN TO PROTECT PERSONAL DATA<br></br></b>
                    
                    Be aware that despite our efforts to protect your personal data and other information, we cannot guarantee “perfect security” of your information transmitted through the Website. In addition, note that any information you send to us electronically, while using the Services or otherwise interacting with us, may not be secure while in transit. Any transmission is at your own risk. You should carefully read any risk factors specified in any terms of services associated with your access to, use of, connection to, or interaction with the Services.<br></br>
                    
                    <b><br></br>SAGE DATA COLLECTION<br></br></b>
                    
                    When you access, use, connect to, or interact with the Services, including the Website, the Organization and its third-party service providers may receive and record personal data that you may have provided and your digital signature, such as your IP Address or information associated with or relating to your Wallet.<br></br>
                    
                    <b><br></br>SOCIAL MEDIA AND OTHER THIRD-PARTY WEBSITES AND LINKS<br></br></b>
                    
                    On the Website, the Organization may provide links to websites or online platforms operated by third parties, including social media or content platforms operated by third parties, such as X (formerly Twitter) or Medium (such platforms, generally, “Social Media Platforms”). The Organization also may provide links to websites or online platforms operated by third-party contributors to the Ouroboros blockchain and ecosystem (“Contributors”). We do not own, operate, or control such third-party websites. If you follow links to sites not owned or operated by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy, security, or content of these sites, including the accuracy, completeness, or reliability of information and services found on these sites.<br></br>
                    
                    When you open a link to a Social Media Platform used by the Organization, a direct connection may be established between your browser and the server of the Social Media Platform. This provides the Social Media Platform with information that you visited our Website with your IP Address and accessed the link. If you access a link to a Social Media Platform while logged-in to your account on the Social Media Platform concerned, the content of our website may be linked to your profile on the platform (i.e., the Social Media Platform may link your visit to our website directly to your user account). If you want to prevent this, you should log out before clicking on the relevant links. In any case, an association takes place when you log-in to the relevant Social Media Platform after clicking on the link.<br></br>
                    
                    In addition, note that personal data and other information you provide on public or semi-public venues, including personal data and other information you share or post on Social Media Platforms or in a public forum, may be accessible or viewable by other users of the Services and/or users of third-party platforms without limitation as to use by us or by such third party. Certain technologies may provide access to personal data and information shared or posted on Social Media Platforms or in a public forum after such data or information is deleted.<br></br>
                    
                    <b><br></br>PERIODIC REVIEWS AND UPDATES TO POLICY<br></br></b>
                    
                    This Policy takes into account the requirements of the Cayman Islands Data Protection Act 2021 and general privacy principles. Individuals located in the European Union (“EU”) and the United Kingdom (“UK”) may have rights under the EU General Data Protection Regulation 2016/679 and the UK General Data Protection Regulation, respectively (collectively, the “GDPR”). Note that you can file a claim with the data protection supervisory authority in the EEA country in which you live or work or where you think we have infringed data protection laws, or with the UK Information Commissioner’s Office, as applicable to you. Other applicable global privacy and data-protection laws may provide you rights with respect to your personal data and other information.<br></br>
                    
                    The Organization may review and update this Policy from time to time. Updates to our Policy will apply only to information collected after the date of the change. If we make material changes to the Policy, we will update the “Last Revised” date at the top of this Policy.<br></br>
                    
                    <b><br></br>CONTACT<br></br></b>
                    
                    Should you have any questions or complaints about our privacy or data-protection practices, your personal data, or this Policy, you can email us at info@ouroboros.xyz.<br></br>
                </Text>
            </Stack>
        </Default>
    );
};

export default PrivacyPolicy;