const { Resend } = require('resend');
const fs = require('fs').promises;
const path = require('path');
const Handlebars = require('handlebars');
const dotenv = require('dotenv');
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function loadTemplate(templateName) {
  const templatePath = path.join(__dirname, '..', 'templates', templateName);
  const templateContent = await fs.readFile(templatePath, 'utf-8');
  return Handlebars.compile(templateContent);
}

const sendContactEmail = async (formData) => {
  try {
    const template = await loadTemplate('contactEmail.html');
    const html = template(formData);

    await resend.emails.send({
      from: 'icsift|Zepresearch <info@icsift.com>',
      to: 'info@zepresearch.com',
      subject: 'New Contact Form Submission',
      html: html
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

const sendPaperSubmissionEmail = async (formData) => {
  try {
    const template = await loadTemplate('paperSubmissionConfirmation.html');
    const html = template(formData);

    await resend.emails.send({
      from: 'icsift|Zepresearch <info@icsift.com>',
      to: formData.email,
      subject: 'Paper Submission Confirmation',
      html: html
    });
  } catch (error) {
    console.error('Error sending paper submission email:', error);
    throw error;
  }
};

const sendPaperSubmissionNotification = async (formData) => {
  try {
    const template = await loadTemplate('paperSubmissionNotification.html');
    const html = template(formData);

    await resend.emails.send({
      from: 'icsift|Zepresearch <info@icsift.com>',
      to: 'info@zepresearch.com',
      subject: 'New Paper Submission',
      html: html
    });
  } catch (error) {
    console.error('Error sending paper submission notification:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
  sendPaperSubmissionEmail,
  sendPaperSubmissionNotification
};