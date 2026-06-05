import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required" }),
        { status: 400 }
      );
    }

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      throw new Error("Missing email environment variables");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send notification to Abdej admin
await transporter.sendMail({
  from: `"Abdej Newsletter" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_TO,
  subject: "🎉 New Newsletter Subscriber",

  html: `
  <div style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">

    <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 25px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <div style="background:#000;padding:26px;text-align:center;">
        <img
          src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png"
          alt="Abdej Logo"
          style="max-width:140px;height:auto;display:block;margin:0 auto 12px;"
        />

        <h2 style="color:#FFD700;margin:0;font-size:18px;letter-spacing:1px;">
          NEW NEWSLETTER SUBSCRIPTION
        </h2>
      </div>

      <!-- BODY -->
      <div style="padding:30px;">

        <p style="font-size:14px;color:#333;margin-bottom:20px;">
          A new user has successfully subscribed to your newsletter.
        </p>

        <!-- EMAIL CARD -->
        <div style="
          background:#f9fafb;
          border-left:5px solid #FFD700;
          padding:18px;
          border-radius:10px;
          margin-bottom:20px;
        ">
          <p style="margin:0;font-size:13px;color:#666;">Subscriber Email</p>
          <p style="margin:6px 0 0;font-size:16px;color:#000;font-weight:bold;">
            ${email}
          </p>
        </div>

        <!-- META INFO -->
        <div style="font-size:13px;color:#666;line-height:1.7;">
          <p><strong>Source:</strong> Website Newsletter Form</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <!-- CTA -->
        <a
          href="mailto:${email}"
          style="
            display:inline-block;
            margin-top:22px;
            padding:12px 18px;
            background:#FFD700;
            color:#000;
            font-weight:bold;
            text-decoration:none;
            border-radius:8px;
            font-size:14px;
          "
        >
          Reply to Subscriber
        </a>

      </div>

      <!-- FOOTER -->
      <div style="background:#f3f4f6;text-align:center;padding:14px;font-size:12px;color:#666;">
        © ${new Date().getFullYear()} Abdej • Newsletter System
      </div>

    </div>

  </div>
  `,
});

await transporter.sendMail({
  from: `"Abdej Newsletter" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Welcome to the Abdej Newsletter",
  html: `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:#000;padding:24px;text-align:center;">
        <img
          src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png"
          alt="Abdej Logo"
          style="max-width:180px;height:auto;display:block;margin:0 auto 16px;"
        />

        <h1 style="color:#FFD700;margin:0;">
          ABDEJ NEWSLETTER
        </h1>
      </div>

      <div style="padding:32px;">
        <h2>Welcome!</h2>

        <p>
          Thank you for subscribing to the Abdej Newsletter.
        </p>

        <p>
          You'll receive updates about our latest projects,
          services, industry insights, and company news.
        </p>

        <p>
          We're excited to have you as part of our community.
        </p>

        <p>
          Regards,<br />
          <strong>The Abdej Team</strong>
        </p>
      </div>

      <div
        style="
          background:#f5f5f5;
          padding:16px;
          text-align:center;
          font-size:12px;
          color:#666;
        "
      >
        © ${new Date().getFullYear()} Abdej. All rights reserved.
      </div>
    </div>
  `,
});

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Subscription failed",
      }),
      { status: 500 }
    );
  }
}