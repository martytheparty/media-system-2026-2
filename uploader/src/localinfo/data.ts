const path = require('path');
const fs = require('fs');

console.log('Uploader CWD:', process.cwd());
console.log('Uploader __dirname:', __dirname);

require('dotenv').config({
  path: path.resolve(process.cwd(), '../.env')
});


class DataClass {
  getUploadDirectory(): string {
    const uploadDirectory = process.env.UPLOAD_DIR;
    
    return uploadDirectory;
  }

  getCredentialsDirectory(): string {
    const credentialsDirectory = process.env.CREDENTIALS_DIR;
    
    return credentialsDirectory;
  }
}

export = DataClass;