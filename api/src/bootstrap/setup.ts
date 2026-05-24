require('dotenv').config();

const path = require('path');
const fs = require('fs');

// first make sure the data folder exists
class BootstrapSetup {
    setupDirectories(): void {
        const baseDirectory = process.env.DATA_DIR;
        const uploadDirectory = process.env.UPLOAD_DIR;
        const mediaDirectory = process.env.MEDIA_DIR;

        console.log("BASE DIRECTORY", baseDirectory);
        console.log("UPLOAD DIRECTORY", uploadDirectory);
        console.log("MEDIA DIRECTORY", mediaDirectory);

        // Using sync FS calls intentionally during startup.
        // This runs once at bootstrap, so blocking is fine and keeps the code simple.

        // check to see if the directoy exists onthe current system
        let baseDirectoryExists = fs.existsSync(baseDirectory);
        let uploadDirectoryExists = fs.existsSync(uploadDirectory);
        let mediaDirectoryExists = fs.existsSync(mediaDirectory);
        

        if (baseDirectoryExists) {
            console.log("Directory exists:", baseDirectory);
        } else {
            console.log("Creating directory:", baseDirectory);
            const baseDirectoryPath = fs.mkdirSync(baseDirectory, { recursive: true });

            if (baseDirectoryPath) {
                baseDirectoryExists = true;
            }

         }

         if (baseDirectoryExists && !uploadDirectoryExists) {
            console.log('base data directory exists');
            const uploadDirectoryPath = fs.mkdirSync(uploadDirectory, { recursive: true });
            uploadDirectoryExists = true;
         }

        if (baseDirectoryExists && !mediaDirectoryExists) {
            console.log('base data directory exists');
            const mediaDirectoryPath = fs.mkdirSync(mediaDirectory, { recursive: true });
            mediaDirectoryExists = true;
         }

         if(
            baseDirectoryExists && 
            uploadDirectoryExists &&
            mediaDirectoryExists
        ) {
            console.log("😊😊😊 REQUIRED DIRECTORIES EXISTS");
         }
        
    }

    setupDataDirctory(): void {}
}

export = BootstrapSetup;