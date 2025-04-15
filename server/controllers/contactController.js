const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.contactFormSubmit = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    // Save to DB
    const contactData = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Send email to portfolio owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,       // Gmail address (owner's)
        pass: process.env.MY_EMAIL_PASS,  // App password
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.MY_EMAIL, // Your own email address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br />
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      data: contactData,
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the form.",
    });
  }
};
