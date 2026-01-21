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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}!!?`);
});

module.exports = app;
