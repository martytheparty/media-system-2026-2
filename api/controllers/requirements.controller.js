import { UploaderService } from '../services/uploader.service.js';

export class RequirementsController {

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