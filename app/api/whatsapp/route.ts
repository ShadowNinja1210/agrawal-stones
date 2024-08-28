import { NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const response = await client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${process.env.MY_PHONE_NUMBER}`,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

/*import { NextResponse } from "next/server";
// import twilio from "twilio";

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

export async function POST(req: Request) {
  try {
    // const body = await req.json();
    // const { message } = body;

    // await client.messages.create({
    //   body: message,
    //   from: "whatsapp:+14155238886",
    //   to: "whatsapp:+919929812181",
    // });

    return NextResponse.json("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      body: {
        message: "Internal server error",
      },
    });
  }
}
*/
