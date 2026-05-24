// External library module (CommonJS): use import = require()
import SftpClient = require('ssh2-sftp-client');

class SftpService {
 async testCredentials(username: string, password: string, host: string): Promise<boolean> {
    const client = new SftpClient();

    try {
      await client.connect({
        host,
        port: 22,
        username,
        password
      });

      console.log('SFTP connection successful');
      return true;

    } catch (err) {
      console.error('SFTP connection failed:', err);
      return false;

    } finally {
      client.end();
    }
  }    
}

export = SftpService;