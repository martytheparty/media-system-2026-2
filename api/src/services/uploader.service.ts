import fetch from 'node-fetch'; 
import { appConfig } from '../config/app.config'; // import centralized config

interface UploaderConfig {
  ftpConfigured: boolean;
  keyRequired: boolean;
}

class UploaderService {
  private readonly uploaderUrl = appConfig.uploaderBaseUrl;

  constructor() {
    // You can add configuration or dependencies here later
  }

  async isFtpConfigured(): Promise<boolean> {

      const response = await fetch(`${this.uploaderUrl}/isFtpConfigured`);
      if (!response.ok) {
      throw new Error('Failed to fetch uploader isFtpConfigured config');
      }
      const ftpConfigured = await response.json() as any;

      return ftpConfigured.isFtpConfigured as Promise<boolean>;
  }

 async isKeyRequired(): Promise<boolean> {
    const response = await fetch(`${this.uploaderUrl}/isKeyRequired`);
      if (!response.ok) {
      throw new Error('Failed to fetch uploader isKeyRequired config');
      }
      const keyRequired = await response.json() as any;

      return keyRequired.isKeyRequired as Promise<boolean>;
  }

  async testCredentials(username: string, password: string, domain: string): Promise<boolean> {

    let response = await fetch(
      `${this.uploaderUrl}/sftp/testCredentials`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          remoteDirectory: '/uploads',
          domain
        })
      }
    );

    const data = await response.json();

    return data as Promise<boolean>;
    // end test code
  }
}

export = UploaderService;
