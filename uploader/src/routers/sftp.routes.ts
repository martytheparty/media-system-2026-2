// Importing Express using ES module syntax.
// Even though Express is actually a CommonJS library,
// TypeScript (with "esModuleInterop": true) lets me treat it
// as if it has a default export.
//
// At compile time, this will likely become:
//   const express = require('express');

import express, { Request, Response } from 'express';
import SftpController = require('../controllers/sftp.controller');

const router = express.Router();
const controller = new SftpController();

// "express" here is a real runtime value (a function/object)
// that I can call. TypeScript has mapped the CommonJS export
// to a "default import" for convenience.
//
// Request and Response are TYPES ONLY.
// They are used by TypeScript for type checking,
// and are completely removed from the final JavaScript.
// They do NOT exist at runtime.


// Create a router instance from the Express runtime object.
// This is normal runtime JavaScript behavior.

/**
 * @openapi
 * /sftp/testCredentials:
 *   post:
 *     summary: Test SFTP Credentials
 *     description: Attempts to connect using provided credentials and returns true or false.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - remoteDirectory
 *               - domain
 *             properties:
 *               username:
 *                 type: string
 *                 example: myuser
 *               password:
 *                 type: string
 *                 example: mypassword
 *               remoteDirectory:
 *                 type: string
 *                 example: /uploads
 *               domain:
 *                 type: string
 *                 example: www.ilikeemail.com
 *     responses:
 *       200:
 *         description: Test result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: boolean
 *                   example: false
 */
router.post('/testCredentials', controller.testCredential.bind(controller));

export = router;