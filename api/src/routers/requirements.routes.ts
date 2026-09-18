const express = require('express');
import RequirementsController = require('../controllers/requirements.controller');

const router = express.Router();
const controller = new RequirementsController();
import { Request, Response } from 'express';

/**
 * @openapi
 * /requirements:
 *   get:
 *     summary: Retrieve system requirements
 *     description: Returns FTP and key requirements
 *     responses:
 *       200:
 *         description: Requirements status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ftpConfigured:
 *                   type: boolean
 *                   example: false
 *                 keyRequired:
 *                   type: boolean
 *                   example: true
 * /requirements/isKeyRequired:
 *   get:
 *     summary: Check if a key is required
 *     description: Returns whether a key is required by the system configuration
 *     responses:
 *       200:
 *         description: Key requirement status
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */

router.get('/', controller.getRequirements.bind(controller));

router.get('/isKeyRequired', controller.isKeyRequired.bind(controller));

/**
 * @openapi
 * /requirements/createKey:
 *   post:
 *     summary: Creates an encryption key file for stored credentials
 *     responses:
 *       200:
 *         description: Encryption key file created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 created:
 *                   type: boolean
 *                   example: true
 */

router.post('/createKey', controller.createKey.bind(controller));

/**
 * @openapi
 * /requirements/deleteKey:
 *   post:
 *     summary: Delete an encryption key file for stored credentials
 *     responses:
 *       200:
 *         description: Encryption key field deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 created:
 *                   type: boolean
 *                   example: true
 */

router.post('/deleteKey', controller.deleteKey.bind(controller));

export = router;