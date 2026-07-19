// Internal (custom) module (CommonJS): use require() + const binding
const RequirementsService = require('../services/requirements.service');

class RequirementController {

    requirementsService;

    constructor() {
        this.requirementsService = new RequirementsService();
    }

    async isKeyRequired(): Promise<boolean> {
        console.log("CHECKING IS KEY REQUIRED");
        const keyRequired = await this.requirementsService.isKeyRequired();
        console.log("CHECKING IS KEY REQUIRED", keyRequired);
        return keyRequired;
    }
}

export = RequirementController;