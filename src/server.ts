import * as bodyParser from 'body-parser'
import * as express from "express"
import { test } from "./routers/test";
import * as crs from 'cors'

var app = express();
app.set('port', process.env.PORT || 3001)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 
app.use(crs())
app.post('/test', test)


app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});