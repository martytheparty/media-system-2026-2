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
}

export = RequirementService;

