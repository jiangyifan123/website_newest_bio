import React from 'react';
import Layout from "@/components/layout/Layout"

const APP_NAME = "New Biotech Inc.";

const Welcome = ({ appName }) => {
    return (
        <div>
            <p>Welcome to {appName}!</p>
            <p>
                {appName} (“We”, “Us”, or “Our”) is committed to your privacy. This notice describes our Privacy
                Policy and how we treat data collected on our website and through the services we offer (“Site and
                Services”) accessible through mobile devices, computers, and tablets. The {appName} Privacy Policy is
                intended to inform and advise you about how we collect, use, and protect the personal information
                you provide. By visiting this site, you are accepting the practices described in this Privacy Policy.
                When we refer to “you” or “your”, we are referring to visitors to the Sites and Services, users of the
                Sites and Services, and subscribers to the Sites and Services. </p>
        </div>
    )
}


const WhatWeCollect = () => {
    return (
        <div>
            <h2>WHAT INFORMATION WE COLLECT</h2>
            <p>Our primary goals in collecting information are to provide and to improve the Site and Services and
                to administer your use of the Site and Services. Therefore, except as set forth below, we only collect
                information necessary to provide the services you use, and except as necessary to provide those
                services, we do not share your personal information with third parties.</p>
        </div>
    )
};


const PersonalInformation = ({ appName }) => {
    return (
        <div>
            <h2>Personal Information</h2>
            <p>
                Your use of our Sites and Services is voluntary. However, if you wish to use the Sites and Services, we
                may ask you to provide us with, or grant us access to, or permission to obtain, certain personally
                identifiable information that can be used to contact or identify you ("Personal Information").
                Personal Information includes, but is not limited to, your full name, email address, personal photos,
                the city and state in which you reside, birthdate, the college you attend or attended, and brief
                biographical information. We use this information to confirm your identity, communicate with you
                regarding the Site and Services, and provide the Services you have requested. For example, Personal
                Information is your email address, which you provide to us on our website or when you contact us,
                and we use to communicate with you. Similarly, your brief biographical information or personal
                photo may be optionally included in your public {appName} profile.
            </p>
            <p>
                Though our Site offers a payment mechanism for entering Story Contests, all information for
                processing such payments is stored with our payment processor, Stripe. Please refer to Stripe’s privacy
                policy to learn about their privacy practices.</p>
        </div>
    )
};


export default function PrivacyPolicyPage() {

    return (
        <Layout headerStyle={3} footerStyle={3} wrapperCls="home_3">
            <div style={{ paddingTop: 50 }} className='auto-container'>
                <h1>PRIVACY POLICY</h1>
                <Welcome appName={APP_NAME} />
                <br />

                <WhatWeCollect appName={APP_NAME} />
                <br />

                <PersonalInformation appName={APP_NAME} />
                <br />
            </div>
        </Layout>
    )

};

