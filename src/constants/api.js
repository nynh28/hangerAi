const baseURLTaggin = "https://4dad-123-25-21-211.ngrok-free.app";
const baseContentUrl = "https://43c9-42-112-110-3.ngrok-free.app";
const baseNestUrl = "http://localhost:5000/api/v1";

export const extractItemFromImage =
  baseURLTaggin + "/tagging/extract_from_image";

export const generateContent = baseContentUrl + "/chatbot/process";
export const switchStatus = baseContentUrl + "/chatbot/switch";

//! Authentication
export const loginURL = baseNestUrl + "/auth/login";
export const loginGoogleURL = baseNestUrl + "/auth/google";
export const loginFacebookURL = baseNestUrl + "/auth/facebook";
export const register = baseNestUrl + "/auth/register";
