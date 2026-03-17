import UploaderService = require('../services/uploader.service');

class SftpController {

  uploaderService;

  constructor() {
    this.uploaderService = new UploaderService();
  }

  async testCredential(req, res) {

    const { username, password } = req.body;

    console.log(username, password, "----------");

    this.uploaderService.testCredentials(username, password);

    res.json({
      result: true
    });
  }
}

export = SftpController;