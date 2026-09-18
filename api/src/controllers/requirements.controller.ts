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

  async isKeyRequired(req, res) {
    const keyRequired = await this.uploaderService.isKeyRequired();
    res.json({ keyRequired });
  }

  async createKey(req, res) {
    const keyCreated = await this.uploaderService.createKey();
    res.json({ keyCreated });
  }

  async deleteKey(req, res) {
    const deleteCreated = await this.uploaderService.deleteKey();
    res.json({ deleteCreated });
  }

}

export = RequirementsController;