const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation',
        },
    },
    apis: ['./*.js'], 
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
require('./routes')(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
