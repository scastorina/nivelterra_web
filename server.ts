import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Firebase Admin
if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, projectType, details } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "sebacastorina@gmail.com",
        subject: `Nueva solicitud de presupuesto: ${projectType}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTipo de proyecto: ${projectType}\nDetalles: ${details}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // API route to create user (Admin only)
  app.post("/api/admin/create-user", async (req, res) => {
    const { email, password, isAdmin } = req.body;
    
    // Get authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }
    
    const idToken = authHeader.split('Bearer ')[1];
    
    try {
      // Verify token
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      
      // Check if admin
      if (!decodedToken.admin) {
        return res.status(403).json({ success: false, error: "Forbidden: Admin access required" });
      }

      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      
      if (isAdmin) {
        await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });
      }
      
      res.json({ success: true, uid: userRecord.uid });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, error: "Failed to create user" });
    }
  });

  // Temporary route to set admin claim for a specific email
  app.post("/api/admin/make-admin", async (req, res) => {
    const { email, secretKey } = req.body;
    
    console.log("Received request to make admin:", { email, secretKey });
    console.log("Expected secret key:", process.env.ADMIN_SECRET_KEY);
    
    // Simple security check to prevent unauthorized calls
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      console.log("Secret key mismatch");
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    try {
      const user = await admin.auth().getUserByEmail(email);
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      res.json({ success: true, message: `User ${email} is now admin` });
    } catch (error) {
      console.error("Error setting admin claim:", error);
      res.status(500).json({ success: false, error: "Failed to set admin claim" });
    }
  });

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  } else {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
