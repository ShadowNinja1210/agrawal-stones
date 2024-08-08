import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // await client.messages.create({
    //   body: message,
    //   from: "whatsapp:+14155238886",
    //   to: "whatsapp:+919929812181",
    // });

    client.conversations.v1
      .conversations("CH6e67f4597e474d758a514f26d41c0814")
      .messages.create({ author: "system", body: message })
      .then((message) => console.log(message.sid));

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
