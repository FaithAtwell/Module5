const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');

const path = require('path');

const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');
const app = express();
const port = 3000;
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/calculator', calculatorRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);});