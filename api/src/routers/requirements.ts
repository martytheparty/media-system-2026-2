const express = require('express');
import RequirementsController = require('../controllers/requirements.controller');

const router = express.Router();
const controller = new RequirementsController();

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
 */

router.get('/', controller.getRequirements.bind(controller));

export = router;