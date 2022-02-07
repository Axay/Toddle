const express = require('express');
const path = require('path');

const authRouter = require('./routers/authentication.router');
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(express.static(path.join(__dirname, './..')));

app.listen(process.env.PORT || 3001, () => {
    console.log('Toddle Survey backend is online!');
}); 
