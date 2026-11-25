// Brand values for the FutureJobs landing page (from the app's default theme).
export const brand = {
  appName: "FutureJobs",
  appNameSuffix: ".ai",
  supportEmail: "support@futurejobs.ai",
  contactEmail: "reachus@futurejobs.ai",
  contactPhone: "+91 73074 11089",
  calendlyUrl: "https://calendly.com/futurejobs-support/30min",
  legal: {
    companyName: "FutureJobs.ai",
    privacyEmail: "support@futurejobs.ai",
    registeredName: "BEYONDVERSE PRIVATE LIMITED",
    address:
      "B.NO.370, K NO. 2692/370, 2ND SECTOR, HSR Layout, Bangalore South, Bangalore- 560102, Karnataka",
  },
};

export const APP_NAME = brand.appName;
export const APP_NAME_FULL = `${brand.appName}${brand.appNameSuffix}`;

// The product app this page links into (sign up, log in, legal pages).
const APP_URL = (import.meta.env.VITE_APP_URL || "https://futurejobs.ai").replace(/\/$/, "");

export const LINKS = {
  LOGIN: `${APP_URL}/login`,
  SIGNUP: `${APP_URL}/login?defaultAuthView=signup`,
  PRIVACY_POLICY: `${APP_URL}/privacy-policy`,
  TERMS_AND_CONDITIONS: `${APP_URL}/terms`,
};

export default brand;
