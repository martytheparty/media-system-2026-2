import UploaderService = require('../services/uploader.service');

class RequirementsController {

  uploaderService;

  constructor() {
    this.uploaderService = new UploaderService();
  }

  getRequirements(req, res) {
    const ftpConfigured = this.uploaderService.isFtpConfigured();
    const keyRequired = this.uploaderService.isKeyRequired();

    res.json({
      ftpConfigured,
      keyRequired
    });
  }
}

export = RequirementsController;