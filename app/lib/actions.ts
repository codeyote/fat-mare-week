'use server';
import { Twilio } from "twilio";

export async function sendTextAlert() {
  console.log("text alert?")


  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
  const myNumber = process.env.MY_NUMBER;
  
  if (accountSid && authToken && myNumber && twilioNumber) {
    const client = new Twilio(accountSid, authToken);
    client.messages
      .create({
        from: twilioNumber,
        to: myNumber,
        body: "Fat Mare Week Text Alert!",
      })
      .then((message) => console.log(message.sid));
  }
}