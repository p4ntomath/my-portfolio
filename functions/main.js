// Appwrite Cloud Function - main.js
// This function sends email notifications when contact form is submitted via database trigger

const nodemailer = require('nodemailer');

module.exports = async ({ req, res, log, error }) => {
  try {
    // Parse the incoming data from database trigger
    const payload = JSON.parse(req.payload || '{}');
    
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

  // Email HTML content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #B8244B, #3B2F2F); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #B8244B;">
        <h3 style="color: #B8244B; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> <a href="mailto:${senderEmail}">${senderEmail}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Document ID:</strong> ${documentId}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      </div>
      
      <div style="background: white; padding: 20px; border-left: 4px solid #B8244B; margin-top: 1px;">
        <h3 style="color: #B8244B; margin-top: 0;">Message:</h3>
        <div style="line-height: 1.6; white-space: pre-line; padding: 15px; background: #f8f9fa; border-radius: 8px;">${message}</div>
      </div>
      
      <div style="background: #e9ecef; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #6c757d;">
          This email was automatically generated from your portfolio contact form.
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
Submitted: ${new Date().toLocaleString()}

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
    subject: `Portfolio Contact: ${subject}`,
    text: textContent,
    html: htmlContent
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  
  console.log('Email sent successfully:', info.messageId);
  return info;
}