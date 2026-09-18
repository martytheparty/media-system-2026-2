import DataClass = require('../localinfo/data');

const path = require('path');
const fs = require('fs');

class RequirementService {
    async isKeyRequired(): Promise<boolean> {
        const dataClass = new DataClass();
        const credentialsDirectory = dataClass.getCredentialsDirectory();
        const pathToKey = credentialsDirectory + "\\key.json";
        let keyFileExists = fs.existsSync(pathToKey);

        return keyFileExists;
    }

    async generateKeyFile(): Promise<boolean> {
        const dataClass = new DataClass();
        const credentialsDirectory = dataClass.getCredentialsDirectory();
        const pathToKey = credentialsDirectory + "\\key.json";
        // create an empty key.json file
        try {
            await fs.writeFile(pathToKey, '', (error) => {
                console.log("error: ",error);
            });
            return true;
        } catch (error) {
            console.error('Unable to create key.json:', error);
            return false;
        }
    }

    async deleteKeyFile(): Promise<boolean> {
        const dataClass = new DataClass();
        const credentialsDirectory = dataClass.getCredentialsDirectory();
        const pathToKey = credentialsDirectory + "\\key.json";

        try {
            await fs.promises.unlink(pathToKey);
            return true;
        } catch (error) {
            console.error('Unable to delete key.json:', error);
            return false;
        }
    }
}

export = RequirementService;

