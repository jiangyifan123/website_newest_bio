import React from 'react';
import Layout from "@/components/layout/Layout"

const APP_NAME = "New Biotech Inc.";

const TermsAndConditions = () => {
    // Getting current date in format "Month Day, Year" (e.g., "January 11, 2024")
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Layout headerStyle={3} footerStyle={3} wrapperCls="home_3">
            <div style={{ padding: '20px' }} className='auto-container'>
                <h1>Terms and Conditions</h1>
                <p>Last updated: {currentDate}</p>
                
                <br />
                <h2>1. Introduction</h2>
                <p>Welcome to {APP_NAME}! These Terms and Conditions govern your use of our website and our application (together or individually "Service") operated by {APP_NAME}.</p>
                <p>Your agreement with us includes these Terms and Conditions (“Terms”) and our Privacy Policy. If you don’t agree with these Terms, then please don’t use the Service.</p>

                <h2>2. Communications</h2>
                <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at info@newbiotech.com.</p>

                <h2>3. Purchases</h2>
                <p>If you wish to purchase any product or service made available through the Service, you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>

                <h2>4. Contests, Sweepstakes, and Promotions</h2>
                <p>Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through the Service may be governed by rules that are separate from these Terms. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy.</p>

                <h2>5. Content</h2>
                <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>

                <h2>6. Changes to Terms</h2>
                <p>We reserve the right to amend or update these Terms at any time. We will provide you with notice of these changes by posting the new Terms on our website and updating the "Last updated" date at the top of these Terms.</p>

                <h2>7. Accounts</h2>
                <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

                <h2>8. Intellectual Property</h2>
                <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of {APP_NAME} and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {APP_NAME}.</p>

                <h2>9. Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by {APP_NAME}. {APP_NAME} has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that {APP_NAME} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

                <h2>10. Termination</h2>
                <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>

                <h2>11. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>

                <h2>12. Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <h2>13. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at  info@newestbio.com.</p>
            </div>
        </Layout>
    )
};

export default TermsAndConditions;
