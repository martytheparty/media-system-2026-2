# Media System API

Node.js API for the Media System 2026 platform.

This service handles media metadata, coordination with the uploader service, and interaction with the shared filesystem.

---

## Overview

The API is one subsystem within a larger architecture:

* API (this service)
* Uploader service
* Shared data directory

The API relies on environment configuration and shared storage to function correctly.

---

## Project Structure

```
api/
  src/           # TypeScript source code
  dist/          # Compiled JavaScript output
  .env           # Local environment variables (not committed)
  .env.example   # Template for environment variables
```

---

## Prerequisites

* Node.js (v18+ recommended)
* npm

---

## Environment Setup

1. Navigate to the API directory:

   ```bash
   cd api
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your local configuration:

   ```env
   PORT=3000
   UPLOADER_BASE_URL=http://localhost:4000
   DATA_DIR=C:\path\to\media-system-2026-2\data
   ```

---

## Environment Variables

| Variable          | Description                             |
| ----------------- | --------------------------------------- |
| PORT              | Port the API runs on                    |
| UPLOADER_BASE_URL | Base URL of the uploader service        |
| DATA_DIR          | Root directory for shared media storage |

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output will be written to the `dist/` directory.

---

## Running the API

Run the compiled application:

```bash
node dist/index.js
```

Or with npm script (if configured):

```bash
npm start
```

---

## Data Directory

The API uses a shared data directory defined by `DATA_DIR`.

On startup, the API should:

* Validate that `DATA_DIR` is defined
* Create the directory if it does not exist

Example structure:

```
data/
  uploader/
  media/
  credentials.json
```

This directory is shared with other subsystems such as the uploader service.

---

## Development Notes

* `.env` is not committed to source control
* Update `.env.example` when adding new variables
* Avoid hardcoding file paths — always use `DATA_DIR`
* Prefer deriving subdirectories in code:

  ```js
  const mediaDir = path.join(process.env.DATA_DIR, 'media');
  ```

---

## Related Services

* Uploader Service (handles file uploads)
* Shared data directory (used across all subsystems)
