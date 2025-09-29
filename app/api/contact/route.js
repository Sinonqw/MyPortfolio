import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "zak.taio2@gmail.com",
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailData = {
      from: "zak.taio2@gmail.com",
      to: "zak.taio2@gmail.com",
      subject: `Новое сообщение от ${name}`,
      html: `
        <h1>Новое сообщение с формы обратной связи</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "There was an error processing your request." },
      { status: 500 }
    );
  }
}