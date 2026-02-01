import UploaderService = require('../services/uploader.service');

class RequirementsController {

  uploaderService;

  constructor() {
    this.uploaderService = new UploaderService();
  }

  async getRequirements(req, res) {
    const ftpConfigured = await this.uploaderService.isFtpConfigured();
    const keyRequired = await this.uploaderService.isKeyRequired();

    res.json({
      ftpConfigured,
      keyRequired
    });
  }
}

export = RequirementsController;