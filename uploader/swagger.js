const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Uploader 2026',
      version: '1.0.0',
      description: 'Uploader documentation'
    }
  },
  apis: ['dist/**/*.js']
};

module.exports = swaggerJSDoc(options);