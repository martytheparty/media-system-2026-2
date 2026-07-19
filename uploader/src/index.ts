import 'dotenv/config'; // loads .env first
import type { Request, Response } from 'express';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const requirementsRouter = require('./routers/requirements.routes');
const sftpRouter = require('./routers/sftp.routes');
const app = express();

// Middleware to parse JSON bodies (future-proof)
app.use(express.json());

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/requirements', requirementsRouter);
app.use('/sftp', sftpRouter);

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



// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Uploader listening on port ${PORT}`);
});

module.exports = app;
