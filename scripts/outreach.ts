import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

/**
 * Insta-RealEstate Outreach Script
 */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendOutreach(to: string, agencyName: string, name: string) {
  const mailOptions = {
    from: `"Insta-RealEstate Team" <${process.env.SMTP_USER}>`,
    to: to,
    subject: `Generating carousels for ${agencyName}`,
    text: `Hi ${name},\n\nI looked at your current listings. Turning these into Instagram carousels takes time you likely don't have.\n\nI built Insta-RealEstate to automate this. It takes a property URL and creates a branded social media pack in under 30 seconds.\n\nYou can try it on 3 listings for free here: [Link]\n\nLet me know if you want to see a custom demo with your logo.\n\nBest,\nTeam\nInsta-RealEstate`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6;">
        <p>Hi ${name},</p>
        <p>I looked at your current listings. Turning these into Instagram carousels takes time you likely don't have.</p>
        <p>I built <strong>Insta-RealEstate</strong> to automate this. It takes a property URL and creates a branded social media pack in under 30 seconds.</p>
        <p>You can try it on 3 listings for free here: <a href="[Link]">[Link]</a></p>
        <p>Let me know if you want to see a custom demo with your logo.</p>
        <p>Best,<br><strong>Team</strong><br>Insta-RealEstate</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}: ${info.response}`);
    return true;
  } catch (error) {
    console.error(`Error sending to ${to}:`, error);
    return false;
  }
}

// Test Run
sendOutreach('info.instarealestate@gmail.com', 'Insta-RealEstate Test', 'Team');
