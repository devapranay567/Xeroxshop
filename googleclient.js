const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const path = require('path');
const fs = require('fs');

// Load credentials from a file
const credentials = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'credentials.json')));

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];  // Google Drive API scope

// Create OAuth2 client
const oauth2Client = new OAuth2Client(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uris[0]
);

// Generate an authentication URL
function generateAuthUrl() {
    return oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
}

// Get the tokens from the authorization code
async function getAccessToken(code) {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    return tokens;
}

// Get Google Drive service instance
function getDriveService() {
    return google.drive({ version: 'v3', auth: oauth2Client });
}

module.exports = { generateAuthUrl, getAccessToken, getDriveService };
