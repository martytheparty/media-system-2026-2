// src/config/app.config.ts

export interface AppConfig {
  port: number;
  uploaderBaseUrl: string;
}

export const appConfig: AppConfig = {
  port: Number(process.env.PORT ?? 3000), // default to 3000 if not set
  uploaderBaseUrl: process.env.UPLOADER_BASE_URL ?? 'http://localhost:4000',
};