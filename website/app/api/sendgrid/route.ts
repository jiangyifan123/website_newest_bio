import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        // Format HTML content to include data
        const htmlContent = `
      <div>
        <p>Firstname: ${data.firstname}</p>
        <p>Lastname: ${data.lastname}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Website: ${data.website}</p>
        <p>Subject: ${data.subject}</p>
        <p>Message: ${data.message}</p>
      </div>
    `;
        await sendgrid.send({
            to: "info@newestbio.com",
            bcc: "info@nimbus-nova.com",
            from: "info@nimbus-nova.com",
            subject: data.subject,
            html: htmlContent,
        }).then(() => {
            console.debug("[DEBUG] Email sent successfully")
            return new NextResponse(JSON.stringify({}), {
                status: 200,
            });
        }).catch((error) => {
            console.log("Unable to send mail: ", error);

            return new NextResponse(JSON.stringify({ "status_code": 500, "status_msg": `unable to send mail due to ${error}` }), {
                status: 500,
            });
        });
    } catch (error) {
        console.log("Unable to construct mail: ", error);

        return new NextResponse(JSON.stringify({ "status_code": 500, "status_msg": `unable to send mail due to ${error}` }), {
            status: 500,
        });
    }
    return new NextResponse(JSON.stringify({}), {
        status: 200,
    });
}

