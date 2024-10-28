// src/index.ts
import express, { Express, Request, Response } from "express";

// Extend the Window interface to include recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}
import dotenv from "dotenv";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import admin from "./fb.config";
/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
  // function onCaptchVerify() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  //       size: "invisible",
  //       defaultCountry: "VN",
  //       callback: (response: any) => {
  //         onSignup();
  //       },
  //       "expired-callback": () => {},
  //     });
  //   }
  // }

  // function onSignup() {
  //   onCaptchVerify();

  //   const appVerifier = window.recaptchaVerifier;

  //   const formatPh = "+84888382699";

  //   signInWithPhoneNumber(auth, formatPh, appVerifier)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //       console.log("OTP is sent");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // onSignup();

  try {
    const phoneNumber = "+84888382699"; // Adjust this to use dynamic input as needed

    // Generate a one-time code or use Firebase Authentication to send the SMS directly
    const verificationCode = await admin.auth().createSessionCookie(phoneNumber, {
      expiresIn: 60 * 60 * 1000, // 1 hour
    });
    res.json({ message: "OTP is sent", verificationCode });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
