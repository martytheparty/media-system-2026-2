// Internal (custom) module (CommonJS): use require() + const binding
const SftpService = require('../services/sftp.service');

class SftpController {

  sftpService;

  constructor() {
    this.sftpService = new SftpService();
  }

  async testCredential(req, res) {

    const { username, password, remoteDirectory, domain } = req.body;

    console.log(username, password, remoteDirectory, domain);

    const result = await this.sftpService.testCredentials(username, password, domain);

    res.json({
      result
    });
  }
}

export = SftpController;