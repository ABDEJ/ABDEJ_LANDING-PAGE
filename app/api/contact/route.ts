

// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { fullName, email, subject, company, message } =
//       await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
// const htmlTemplate = `
//   <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
    
//     <!-- Header -->
//     <div style="background:#111827;padding:20px;text-align:center;">
//       <h1 style="color:#ffffff;font-size:18px;margin:0;">
//         New Website Contact Message
//       </h1>
//     </div>

//     <!-- Container -->
//     <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
      
//       <!-- Intro -->
//       <div style="padding:20px;">
//         <p style="font-size:14px;color:#374151;margin-bottom:16px;">
//           You have received a new message from your website contact form.
//         </p>

//         <!-- Details -->
//         <table style="width:100%;font-size:14px;color:#111827;border-collapse:collapse;">
//           <tr>
//             <td style="padding:8px 0;font-weight:bold;width:120px;">Name:</td>
//             <td>${fullName}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px 0;font-weight:bold;">Email:</td>
//             <td>${email}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px 0;font-weight:bold;">Company:</td>
//             <td>${company || "N/A"}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px 0;font-weight:bold;">Subject:</td>
//             <td>${subject}</td>
//           </tr>
//         </table>

//         <!-- Message Box -->
//         <div style="margin-top:20px;">
//           <p style="font-weight:bold;margin-bottom:8px;">Message:</p>
//           <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:6px;white-space:pre-wrap;color:#111827;">
//             ${message}
//           </div>
//         </div>
//       </div>

//       <!-- Footer -->
//       <div style="background:#f9fafb;text-align:center;padding:12px;font-size:12px;color:#6b7280;">
//         This email was generated from your website contact form
//       </div>

//     </div>
//   </div>
// `;

//     await transporter.sendMail({
//       from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       subject: subject || "New Contact Message",
//       html: htmlTemplate,
//     });

//     return Response.json({ success: true });
//   } catch (err) {
//     return Response.json(
//       { success: false },
//       { status: 500 }
//     );
//   }
// }


import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, company, message } = await req.json();

    // 🔐 Validate env early (prevents silent crashes)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      throw new Error("Missing email environment variables");
    }

    // 🚀 SMTP TRANSPORT (IMPORTANT: NOT service:"gmail")
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🧪 Verify connection (helps catch Vercel/Gmail issues early)
    await transporter.verify();

    // 📩 AMAZON-STYLE EMAIL TEMPLATE
    const htmlTemplate = `
      <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">

        <!-- Header -->
        <div style="background:#111827;padding:22px;text-align:center;">
          <h2 style="color:#fff;margin:0;font-size:18px;">
            📩 New Contact Form Submission
          </h2>
        </div>

        <!-- Card -->
        <div style="max-width:620px;margin:24px auto;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

          <div style="padding:22px;">

            <p style="font-size:14px;color:#374151;margin-bottom:18px;">
              You’ve received a new message from your website contact form.
            </p>

            <!-- Details -->
            <table style="width:100%;font-size:14px;color:#111827;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;font-weight:bold;width:140px;">Full Name:</td>
                <td>${fullName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Email:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Company:</td>
                <td>${company || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Subject:</td>
                <td>${subject || "No subject"}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:20px;">
              <p style="font-weight:bold;margin-bottom:8px;">Message:</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:14px;border-radius:8px;white-space:pre-wrap;color:#111827;">
                ${message}
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div style="background:#f9fafb;text-align:center;padding:12px;font-size:12px;color:#6b7280;">
            Abdej Group • Website Contact System
          </div>

        </div>
      </div>
    `;

    // 📤 SEND EMAIL
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject || "New Website Contact Message",
      html: htmlTemplate,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err: any) {
    // 🔥 FULL DEBUG LOG (CRITICAL FOR VERCEL)
    console.error("CONTACT FORM ERROR:", {
      message: err?.message,
      stack: err?.stack,
      code: err?.code,
    });

    return Response.json(
      {
        success: false,
        error: err?.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}