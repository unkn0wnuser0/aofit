# Google Apps Script Setup Guide - AO Fit

## 🚀 Step-by-Step Implementation

### Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet named: "AO Fit - Contact Submissions"
3. Copy the Sheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/edit
                                        ^^^^^^^^^^^^^^^^^^^
                                        This is your Sheet ID
   ```

### Step 2: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create new project named: "AO Fit Contact Form Handler"
3. Replace default code with the script from this guide
4. Update `SHEET_ID` variable with your actual Sheet ID

### Step 3: Deploy Web App

1. Click "Deploy" → "New Deployment"
2. Settings:
   - Type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
3. Copy the Web App URL

### Step 4: Update Environment Variables

1. Open `.env.local` in your project
2. Replace `YOUR_SCRIPT_ID` with your actual script ID:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```

### Step 5: Test the Integration

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your Google Sheet for the new submission

## 🔧 Apps Script Code

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    // Replace with your actual Sheet ID
    const SHEET_ID = 'YOUR_SHEET_ID_HERE'
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet()

    // Set up headers if first submission
    if (sheet.getLastRow() === 0) {
      sheet
        .getRange(1, 1, 1, 7)
        .setValues([
          [
            'Timestamp',
            'Name',
            'Email',
            'Fitness Goals',
            'Consent',
            'Status',
            'Notes',
          ],
        ])

      const headerRange = sheet.getRange(1, 1, 1, 7)
      headerRange.setBackground('#4285f4')
      headerRange.setFontColor('#ffffff')
      headerRange.setFontWeight('bold')
    }

    // Add new submission
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.goal || '',
      data.consent ? 'Yes' : 'No',
      'New',
      '',
    ])

    sheet.autoResizeColumns(1, 7)

    // Return JSON response (CORS is handled by Web App deployment settings)
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Contact submitted successfully',
      })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: 'Failed to submit contact form',
        details: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}
```

## 🎯 Coach Transfer Process

### When Ready to Transfer:

1. **Coach creates Google account** (if needed)
2. **Share Google Sheet** with coach as Editor
3. **Help coach create their own Apps Script** with same code
4. **Update website** with coach's script URL
5. **Test together** to ensure everything works
6. **Coach owns everything** - you can delete your copies

### What Coach Gets:

- ✅ Google Sheet with all contact submissions
- ✅ Real-time updates when forms are submitted
- ✅ Ability to add notes, change status
- ✅ Export data to CSV/Excel
- ✅ Mobile access via Google Sheets app

## 🔒 Security Features

- Rate limiting (3 submissions per 15 minutes per IP)
- Honeypot field for bot detection
- Form timing validation
- Content spam filtering
- Email and name validation
- The script runs under your Google account initially
- No sensitive data is exposed (just contact form info)
- Google handles all security and reliability
- Coach gets full ownership after transfer

## 📱 Coach Training

### Accessing Submissions:

1. Go to [sheets.google.com](https://sheets.google.com)
2. Open "AO Fit - Contact Submissions"
3. New contacts appear automatically
4. Use Status column to track follow-up

### Mobile Access:

- Download Google Sheets app
- Sign in with Google account
- Access sheets on the go

## 🐛 Troubleshooting

### If Form Submissions Don't Appear:

1. Check Google Apps Script logs
2. Verify Sheet ID is correct
3. Ensure Web App is deployed as "Anyone" access
4. Check browser console for errors

### Common Issues:

- **Permission denied**: Re-deploy with correct permissions
- **Sheet not found**: Double-check Sheet ID
- **CORS errors**: Ensure proper deployment settings
- **Rate limit errors**: Wait 15 minutes or contact from different IP
- **Spam detection**: Check if message contains flagged keywords

## 📊 Spam Protection

The form includes advanced spam protection:

- **Rate Limiting**: Max 3 submissions per IP per 15 minutes
- **Honeypot Field**: Hidden field that bots often fill
- **Timing Validation**: Too fast submissions are rejected
- **Content Analysis**: Scans for spam keywords and patterns
- **Email Validation**: Checks for valid email formats
- **Name Validation**: Ensures realistic name patterns

## 🔧 Advanced Configuration

### Customizing Rate Limits

In `.env.local`:

```
RATE_LIMIT_WINDOW=900000  # 15 minutes in milliseconds
RATE_LIMIT_MAX_REQUESTS=3 # Maximum requests per window
```

### Adding Custom Validation

Edit `/lib/spamFilter.ts` to add custom spam detection rules or validation patterns.

### Monitoring Spam Attempts

Check `/app/api/admin/spam-stats/route.ts` for spam monitoring dashboard (to be implemented).
