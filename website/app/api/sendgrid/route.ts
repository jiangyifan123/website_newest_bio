import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY)
    console.log("request.body", data);
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
      to: "nimbusnova123@gmail.com", 
      from: "nimbusnova123@gmail.com", 
      subject: data.subject,
      html: htmlContent,
    });
  } catch (error) {
    console.log("Unable to send mail: ", error);

    return new NextResponse(JSON.stringify({ "status_code": 500, "status_msg": `unable to send mail due to ${error}` }), {
      status: 500,
    });
  }
  console.log("Email sent successfully")
  return new NextResponse(JSON.stringify({}), {
    status: 200,
  });
} 

