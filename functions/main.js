// Appwrite Cloud Function - main.js
// This function sends email notifications when contact form is submitted via database trigger

const nodemailer = require('nodemailer');

module.exports = async ({ req, res, log, error }) => {
  try {
    // Handle the incoming data from database trigger
    // req.body might already be an object, not a JSON string
    let payload;
    
    if (typeof req.body === 'string') {
      payload = JSON.parse(req.body);
      log('📨 Parsed JSON string payload');
    } else {
      payload = req.body;
      log('📨 Received object payload directly');
    }
    
    log('📨 Received database trigger payload');
    log('Full payload:', JSON.stringify(payload, null, 2));

    // Extract document data from database trigger payload
    // Database triggers send data in payload.data (the new document)
    let documentData;
    
    if (payload.data) {
      // This is from a database trigger
      documentData = payload.data;
      log('📄 Processing document from database trigger');
    } else {
      // Fallback: manual function call (if still used)
      documentData = payload;
      log('📞 Processing manual function call');
    }

    // Extract contact form data from the document
    const { 
      name, 
      email, 
      subject, 
      message, 
      createdAt,
      $id: documentId 
    } = documentData;

    log(`📧 Processing email notification for: ${name} (${email})`);
    log(`📝 Document ID: ${documentId}`);

    // Debug: Log all environment variables (without sensitive values)
    log('🔍 Environment check:');
    log(`SMTP_HOST: ${process.env.SMTP_HOST ? 'SET' : 'MISSING'}`);
    log(`SMTP_USER: ${process.env.SMTP_USER ? 'SET' : 'MISSING'}`);
    log(`SMTP_PASS: ${process.env.SMTP_PASS ? 'SET' : 'MISSING'}`);
    log(`ADMIN_EMAIL: ${process.env.ADMIN_EMAIL ? 'SET' : 'MISSING'}`);

    // Validate required data
    if (!name || !email || !subject || !message) {
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (!email) missingFields.push('email');
      if (!subject) missingFields.push('subject');
      if (!message) missingFields.push('message');
      
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Send email using Nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ADMIN_EMAIL) {
      log('📤 Attempting to send email...');
      await sendEmailWithNodemailer(subject, name, email, message, documentId || 'unknown');
      log('✅ Email sent successfully via Nodemailer');
    } else {
      log('⚠️ No email service configured. Required env vars: SMTP_HOST, SMTP_USER, SMTP_PASS, ADMIN_EMAIL');
      log('Email would have been sent to:', process.env.ADMIN_EMAIL || 'NO_ADMIN_EMAIL_SET');
    }

    return res.json({
      success: true,
      message: 'Email notification processed successfully',
      data: {
        name,
        email,
        subject,
        documentId,
        timestamp: new Date().toISOString()
      }
    });

  } catch (err) {
    error('❌ Error in email notification function:', err.message);
    error('❌ Full error details:', err);
    
    return res.json({
      success: false,
      error: err.message
    }, 500);
  }
};

// Nodemailer email function
async function sendEmailWithNodemailer(subject, senderName, senderEmail, message, documentId) {
  // Create transporter (fixed method name)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const submissionDate = new Date().toLocaleString('en-ZA', { 
    timeZone: 'Africa/Johannesburg',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}).replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}:\d{2})/, '$3-$2-$1 $4');

const htmlContent = `
<div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

  <!-- Header -->
  <div style="background-color: #1f2937; padding: 24px; text-align: center;">
    <h1 style="margin: 0; font-size: 20px; color: #ffffff;">New Contact Form Submission</h1>
  </div>

  <!-- Contact Details -->
  <div style="padding: 24px; background-color: #f9fafb;">
    <h2 style="color: #111827; font-size: 18px; margin: 0 0 16px;">Contact Details</h2>
    <p style="margin: 6px 0;"><strong>Name:</strong> ${senderName}</p>
    <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${senderEmail}" style="color: #2563eb; text-decoration: none;">${senderEmail}</a></p>
    <p style="margin: 6px 0;"><strong>Submitted:</strong> ${submissionDate}</p>
  </div>

  <!-- Message -->
  <div style="padding: 24px;">
    <h2 style="color: #111827; font-size: 18px; margin: 0 0 16px;">Message</h2>
    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; white-space: pre-line; line-height: 1.6; color: #1f2937;">
      ${message}
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f1f5f9; padding: 16px; text-align: center;">
    <p style="margin: 0; font-size: 12px; color: #6b7280;">
      This email was automatically generated by your portfolio contact form.
    </p>
  </div>
</div>
`;


  // Email text content (fallback)
  const textContent = `
New Portfolio Contact Form Submission

Name: ${senderName}
Email: ${senderEmail}
Subject: ${subject}
Document ID: ${documentId}
Submitted: ${new Date().toLocaleString('en-ZA', { 
  timeZone: 'Africa/Johannesburg',
  year: 'numeric',
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
})} SAST

Message:
${message}

---
This email was automatically generated from your portfolio contact form.
  `;

  // Email options
  const mailOptions = {
    from: {
      name: 'Portfolio Contact Form',
      address: process.env.SMTP_USER
    },
    to: process.env.ADMIN_EMAIL,
    replyTo: {
      name: senderName,
      address: senderEmail
    },
    subject: `${subject}`,
    text: textContent,
    html: htmlContent
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  
  console.log('Email sent successfully:', info.messageId);
  return info;
}