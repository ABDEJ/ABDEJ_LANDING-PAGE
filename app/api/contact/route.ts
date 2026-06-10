

import nodemailer from "nodemailer";

type ContactPayload = {
  fullName: string;
  email: string;
  subject: string;
  company?: string;
  message: string;
};

// 🔥 EMAIL TEMPLATE (Abdej Yellow + Black Branding)
const emailTemplate = ({
  fullName,
  email,
  subject,
  company,
  message,
}: ContactPayload) => {
 const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`;

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>${subject}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f4f6f8;
        font-family: Arial, sans-serif;
      }

      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
      }

      .header {
        background: #000000;
        color: #FFD700;
        padding: 25px 20px;
        text-align: center;
      }

      .logo {
        width: 120px;
        margin-bottom: 10px;
      }

      .header h2 {
        margin: 0;
        font-size: 18px;
        letter-spacing: 0.5px;
      }

      .content {
        padding: 30px;
        color: #333;
      }

      .info {
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 1.6;
      }

      .label {
        font-weight: bold;
        color: #000;
      }

      .message-box {
        background: #f9fafb;
        padding: 15px;
        border-radius: 10px;
        margin-top: 8px;
        border-left: 4px solid #FFD700;
        white-space: pre-line;
      }

      .footer {
        text-align: center;
        padding: 18px;
        font-size: 12px;
        color: #6b7280;
        background: #f3f4f6;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <div class="header">
        <img src="${logoUrl}" class="logo" alt="Abdej Logo" />
        <h2>New Contact Message</h2>
      </div>

      <div class="content">
        <div class="info"><span class="label">Full Name:</span> ${fullName}</div>
        <div class="info"><span class="label">Email:</span> ${email}</div>
        ${company ? `<div class="info"><span class="label">Company:</span> ${company}</div>` : ""}
        <div class="info"><span class="label">Subject:</span> ${subject}</div>

        <div class="info">
          <span class="label">Message:</span>
          <div class="message-box">${message}</div>
        </div>



<a
  href="mailto:${email}"
  style="
    display:inline-block;
    margin-top:22px;
    padding:12px 18px;
    background:#FFD700;
    color:#000000 !important;
    font-weight:bold;
    text-decoration:none;
    border-radius:8px;
    font-size:14px;
    mso-line-height-rule:exactly;
    -webkit-text-fill-color:#000000;
  "
>
  Reply to Sender
</a>
      </div>

      <div class="footer">
        © ${new Date().getFullYear()} Abdej. All rights reserved.
      </div>

    </div>
  </body>
  </html>
  `;
};

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, company, message }: ContactPayload =
      await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      throw new Error("Missing email environment variables");
    }

 const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
      from: `"Abdej Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form: ${subject}`,
      html: emailTemplate({ fullName, email, subject, company, message }),
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("EMAIL_ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Failed to send email",
      }),
      { status: 500 }
    );
  }
}