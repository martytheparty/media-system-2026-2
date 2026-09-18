import express, { Request, Response } from 'express';
import RequirementController = require('../controllers/requirements.controller');

const router = express.Router();
const requirementsController = new RequirementController();

/**
 * @openapi
 * /requirements/isFtpConfigured:
 *   get:
 *     summary: Indicates whether FTP is configured in the uploader
 *     responses:
 *       200:
 *         description: FTP configuration status
 */

router.get('/isFtpConfigured', (req: Request, res: Response) => {
  res.json({ isFtpConfigured: true });
});

/**
 * @openapi
 * /requirements/isKeyRequired:
 *   get:
 *     summary: Indicates a key is required
 *     responses:
 *       200:
 *         description: FTP key required status
 */

router.get('/isKeyRequired', async (req: Request, res: Response) => {
  const isKeyRequired = await requirementsController.isKeyRequired()
  res.json({ isKeyRequired });
});

/**
 * @openapi
 * /requirements/createKey:
 *   post:
 *     summary: Creates an encryption key for stored credentials
 *     responses:
 *       200:
 *         description: Encryption key created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 */

router.post('/createKey', async (req: Request, res: Response) => {
  const created = await requirementsController.setKey();
  res.json({ created });
});

/**
 * @openapi
 * /requirements/deleteKey:
 *   post:
 *     summary: Deletes an encryption key for stored credentials
 *     responses:
 *       200:
 *         description: Encryption key deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 */

router.post('/deleteKey', async (req: Request, res: Response) => {
  const deleted = await requirementsController.deleteKey();
  res.json({ deleted });
});

module.exports = router;