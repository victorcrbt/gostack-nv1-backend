const express = require('express');

const app = express();

app.use('/', (req, res) => res.send('Hello, World!'));

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
