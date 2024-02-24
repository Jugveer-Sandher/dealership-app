const jwt = require('jsonwebtoken');
const fs = require('fs');

// Generate JWT access token and secret token
const accessToken = jwt.sign({ user: 'exampleUser' }, 'your_access_token_secret');
const secretToken = jwt.sign({ secret: 'exampleSecret' }, 'your_secret_token_secret');

// Write tokens to .env file
const envContent = `
ACCESS_TOKEN=${accessToken}
SECRET_TOKEN=${secretToken}
`;

fs.writeFileSync('.env', envContent);

console.log('Tokens generated and saved to .env file.');
