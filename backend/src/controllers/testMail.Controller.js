import transporter from "../config/mail.js";

const testMail = async (req, res) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Nodemailer Test",
            text: "Nodemailer is working!"
        });

        res.json({
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Email failed"
        });
    }
};

export default testMail;