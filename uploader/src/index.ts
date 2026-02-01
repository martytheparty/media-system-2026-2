import type { Request, Response } from 'express';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const app = express();

// Middleware to parse JSON bodies (future-proof)
app.use(express.json());

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns API health status
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

/**
 * @openapi
 * /isFtpConfigured:
 *   get:
 *     summary: Indicates whether FTP is configured in the uploader
 *     responses:
 *       200:
 *         description: FTP configuration status
 */

app.get('/isFtpConfigured', (req, res) => {
  // Stubbed for now — real logic later
  res.json({ isFtpConfigured: true });
});

/**
 * @openapi
 * /isKeyRequired:
 *   get:
 *     summary: Indicates whether uploader requires a key
 *     responses:
 *       200:
 *         description: FTP key requirement status
 */

app.get('/isKeyRequired', (req, res) => {
  // Stubbed for now — real logic later
  res.json({ isKeyRequired: true });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Uploader listening on port ${PORT}`);
});

module.exports = app;
