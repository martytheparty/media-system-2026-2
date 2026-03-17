const express = require('express');
import SftpController = require('../controllers/sftp.controller');

const router = express.Router();
const controller = new SftpController();

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