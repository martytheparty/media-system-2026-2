const UploaderService = require('../services/uploader.service');

class SftpController {

  uploaderService;

  constructor() {
    this.uploaderService = new UploaderService();
  }

  async testCredential(req, res) {

    const { username, password, remoteDirectory, domain } = req.body;
    const result = await this.uploaderService.testCredentials(username, password, domain);

    res.json(result);
  }
}

export = SftpController;