import express, { Request, Response } from 'express';

const router = express.Router();

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
 *     summary: Indicates whether uploader requires a key
 *     responses:
 *       200:
 *         description: FTP key requirement status
 */

router.get('/isKeyRequired', (req, res) => {
  // Stubbed for now — real logic later
  res.json({ isKeyRequired: true });
});

module.exports = router;