export interface SftpCredentials {
  username: string,
  password: string,
  domain: string,
  remoteDirectory: string
}

export interface TestResult {
  result: boolean
}