const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API 2026 Attempt 2',
      version: '1.0.0',
      description: 'API documentation'
    },
    paths:   {
      '/health': {
        get: {
          summary: 'Health check',
          description: 'Returns API health status',
          responses: {
            200: {
              description: 'API is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: {
                        type: 'string',
                        example: 'ok'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: []
};

module.exports = swaggerJSDoc(options);
