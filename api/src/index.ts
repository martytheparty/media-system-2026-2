import 'dotenv/config'; // loads .env first
import { appConfig } from './config/app.config';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
import requirementsRouter = require('./routers/requirements');

const app = express();

// Middleware to parse JSON bodies (future-proof)
app.use(express.json());

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount your router
app.use('/requirements', requirementsRouter);

// Optional: simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
const PORT = appConfig.port || 3000;

const baseUrl = appConfig.uploaderBaseUrl;

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
  console.log(`Uploader listening at ${baseUrl}`);
});

module.exports = app;
