// Internal (custom) module (CommonJS): use require() + const binding
const RequirementsService = require('../services/requirements.service');

class RequirementController {

    requirementsService;

    constructor() {
        this.requirementsService = new RequirementsService();
    }

    async isKeyRequired(): Promise<boolean> {
        const keyRequired = await this.requirementsService.isKeyRequired();
 
        return keyRequired;
    }

    async setKey(): Promise<boolean> {
        const keyFileCreated = await this.requirementsService.generateKeyFile();
        return keyFileCreated;
    }

    async deleteKey(): Promise<boolean> {
        const keyFileDeleted = await this.requirementsService.deleteKeyFile();
        return keyFileDeleted;
    }
}

export = RequirementController;