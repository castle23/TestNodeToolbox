Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const test_1 = require("./routers/test");
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/test', test_1.test);
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXlDO0FBQ3pDLG1DQUFrQztBQUNsQyx5Q0FBc0M7QUFFdEMsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUE7QUFFekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRTFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQUksQ0FBQyxDQUFBO0FBR3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUMifQ==