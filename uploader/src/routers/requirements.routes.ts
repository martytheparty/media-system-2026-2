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
 *     summary: Indicates whether uploader requires a key
 *     responses:
 *       200:
 *         description: FTP key requirement status
 */

router.get('/isKeyRequired', (req, res) => {
  // Stubbed for now — real logic later
  requirementsController.isKeyRequired().then( 
    (result: boolean) => {
      res.json({ isKeyRequired: result });
    }
   );
});

module.exports = router;