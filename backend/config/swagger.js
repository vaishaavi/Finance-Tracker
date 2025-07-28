const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Finance Tracker API',
      version: '1.0.0',
      description: 'API documentation for the Finance Tracker app',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Change this in production (e.g., https://yourdomain.com)
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the route files with Swagger annotations
};

// Generate Swagger specification
const swaggerSpec = swaggerJSDoc(options);

// Export to use in main server.js/app.js file
module.exports = {
  swaggerUi,
  swaggerSpec,
};
