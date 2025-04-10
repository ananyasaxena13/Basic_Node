let express = require('express');

let app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello to the world of Azure');
});

const Port = 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});