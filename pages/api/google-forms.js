import axios from "axios";

import { google } from "googleapis";

const fieldOrders = {
  timestamp: 0, //"Timestamp",
  email: 1, //"Email Address",
  238788490: 2, //"Client Name",
  682085436: 3, //"Client Phone Number",
  48971740: 4, //"Client Email",
  788299260: 5, //"Secondary Decision Maker",
  465901832: 6, //"Project Address",
  342455953: 7, //"Project Type",
  1459655826: 8, //"Project Details",
  565594435: 9, //"Property Square Footage",
  1065012954: 10, //"Design Space Square Footage",
  446835355: 11, //"Proposed Start Date",
  95319589: 12, //"Ideal Completion Date",
  959710259: 13, //"Interior Spaces (Select all that apply)",
  1634221037: 14, //"Interior Design Style (Select all that apply)",
  910891781: 15, //"What is your budget for furnishings and renovations?",
  1807642229: 16, //"How did you hear about us?",
  call: 17, //"Schedule a call! Please click the link to schedule a 15 minute call and we look forward to speaking with you soon.",
  secondaryEmal: 18, //"Secondary Decision Maker",
  288527945: 19, //"Secondary Phone number",
  1926078686: 20, //"Secondary email address",
  177277701: 21, //"Additional notes you would like us to know about the project",
  score: 22, //"Score",
};

function orderFormData(formData) {
  // Create an array with size equal to the length of fieldOrders
  let orderedData = new Array(Object.keys(fieldOrders).length);

  // Iterate over each key-value pair in formData
  for (let key in formData) {
    // Check if this key exists in fieldOrders
    if (fieldOrders.hasOwnProperty(key)) {
      // Check if the value is an array
      let value = Array.isArray(formData[key])
        ? formData[key].join(", ")
        : formData[key];

      // Place the value in the orderedData array based on its order from fieldOrders
      orderedData[fieldOrders[key]] = value;
    }
  }

  // Filter out any undefined values in case not all keys were provided in formData
  return orderedData.filter((val) => val !== undefined);
}

export default async function handler(req, res) {
  const requestMethod = req.method;

  if (requestMethod !== "POST") {
    res.status(405).json({ message: "Only POST requests allowed" });
    return;
  }

  const formData = orderFormData(req.body);

  console.log("Form Data", formData);

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/documents",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/forms",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:W1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [formData],
      },
    });

    // make request and send it back to the client
    res.status(200).json({ data: response.data });
  } catch (e) {
    console.log("Error: e", e);
    res.status(500).json({ error: e });
  }
}
