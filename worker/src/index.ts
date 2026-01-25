import type { Request, Response } from 'express';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const app = express();

// Middleware to parse JSON bodies (future-proof)
app.use(express.json());

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Optional: simple health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});

module.exports = app;
