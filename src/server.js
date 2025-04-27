import express from 'express';
import pkg from 'http-status-codes';
const { STATUS_CODES } = pkg;

const app = express();
const port = 4000;
app.get('/hello' ,( req,res) => {
    res.send("Hello you");
})
app.listen( port, () => {
    console.log(`hey, go to http://localhost:${port}/hello`);
})