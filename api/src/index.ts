import 'dotenv/config'; // loads .env first
import { appConfig } from './config/app.config';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
import requirementsRouter = require('./routers/requirements.routes');
import sftpRouter = require('./routers/sftp.routes');

const cors = require('cors');
const app = express();

// Middleware to parse JSON bodies (future-proof)
app.use(express.json());
// Allow all origin
app.use(cors());

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount your routers
app.use('/requirements', requirementsRouter);
app.use('/sftp', sftpRouter);

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
