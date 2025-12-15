
// INSTRUCTIONS:
// 1. Open Google Sheets and create a new spreadsheet.
// 2. Create two tabs (sheets) at the bottom named "Contact" and "Corporate".
// 3. Set up the headers for the "Contact" sheet in the first row:
//    Timestamp | Name | Email | Phone | Message
// 4. Set up the headers for the "Corporate" sheet in the first row:
//    Timestamp | Company Name | Contact Person | Email | Phone | Quantity | Bag Type | Requirements
// 5. In Google Sheets, go to Extensions > Apps Script.
// 6. Paste this entire script into the editor and save the project.
// 7. Click Deploy > New deployment.
// 8. For "Select type," choose "Web app."
// 9. In the "Who has access" dropdown, select "Anyone". This is required for the forms to work.
// 10. Click "Deploy."
// 11. Authorize the script when prompted.
// 12. Copy the provided "Web app URL".
// 13. Paste this URL into the `googleScriptWebAppUrl` variable in both:
//     - `src/app/(main)/corporate-orders/page.tsx`
//     - `src/app/(main)/contact/page.tsx`

const SHEETS_CONFIG = {
  corporate: {
    name: "Corporate",
    headers: ["Timestamp", "Company Name", "Contact Person", "Email", "Phone", "Quantity", "Bag Type", "Requirements"],
    map: (p) => ({
      "Timestamp": new Date(),
      "Company Name": p.companyName || "",
      "Contact Person": p.contactPerson || "",
      "Email": p.email || "",
      "Phone": p.phone || "",
      "Quantity": p.quantity || "",
      "Bag Type": p.bagType || "",
      "Requirements": p.requirements || "",
    })
  },
  contact: {
    name: "Contact",
    headers: ["Timestamp", "Name", "Email", "Phone", "Message"],
    map: (p) => ({
      "Timestamp": new Date(),
      "Name": p.name || "",
      "Email": p.email || "",
      "Phone": p.phone || "",
      "Message": p.message || "",
    })
  }
};


function doPost(e) {
  try {
    // Honeypot check for spam
    if (e.parameter.honeypot && e.parameter.honeypot !== "") {
      // It's a bot, return success without saving data
      return ContentService
        .createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const formType = e.parameter.formType;
    const config = SHEETS_CONFIG[formType];

    if (!config) {
      throw new Error(`Invalid formType: "${formType}". Must be one of [${Object.keys(SHEETS_CONFIG).join(', ')}]`);
    }
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(config.name);
    
    if (!sheet) {
      throw new Error(`Sheet "${config.name}" not found. Please create it.`);
    }

    const data = config.map(e.parameter);
    const newRow = config.headers.map(header => data[header]);
    
    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the detailed error for debugging in Apps Script logs
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
