
const express   = require('express'),
      app       = express(),
      helmet    = require('helmet');


app.use(helmet({
  frameguard: {
    action: 'deny'
  },
  directives: {
    defaultSrc: ["self"],
    scriptSrc: ["self"]
  }
}));

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/convert', (req, res) => {
  
  console.log('===========');
  
  var error = false;
  
  const unitRaw   = req.query.input.match(/[a-zA-Z]+/g);
  // const numberRaw = req.query.input.match(/\d+/g);
  const numberRaw = req.query.input.slice(0, req.query.input.indexOf(unitRaw));
  
  // /\w+$/g.exec("528 491 kg");
  
  var initNum = parseFloat(eval(numberRaw)).toFixed(5);
  const initUnit = unitRaw ? unitRaw[0] : 1;
  
  console.log('===');
  console.log(unitRaw);
  console.log(numberRaw);
  console.log('===');
  
  console.log(initUnit);
  console.log(initNum);
  
  var returnNum = '',
      returnUnit   = '';
  
  // if (numberRaw && numberRaw.length && numberRaw.length > 1) {
  //   error = 'invalid number'
  //   console.log('Invalid number error');
  // }
  
  if (initNum === undefined) { initNum = 1 }
  
  if (unitRaw && unitRaw.length && unitRaw.length > 1) {
    error = 'invalid unit'
    console.log('Invalid unit error');
  }
  
  
  switch(initUnit.toUpperCase()) {
    case "GAL":
      console.log('Converting to: L');
      returnUnit = "L";
      returnNum = parseFloat(Number(initNum) * 3.785411784).toFixed(5);
      break;
    case "L":
      console.log('Converting to: gal');
      returnUnit = "gal";
      returnNum = parseFloat(Number(initNum) / 4.54609).toFixed(5);
      break;
    case "LBS":
      console.log('Converting to: kg');
      returnUnit = "kg";
      returnNum = parseFloat(Number(initNum) * 0.45359237).toFixed(5);
      break;
    case "KG":
      console.log('Converting to: lbs');
      returnUnit = "lbs";
      returnNum = parseFloat(Number(initNum) / 0.45359237).toFixed(5);
      break;
    case "MI":
      console.log('Converting to: km');
      returnUnit = "kg";
      returnNum = parseFloat(Number(initNum) / 0.62137).toFixed(5);
      break;
    case "KM":
      console.log('Converting to: mi');
      returnUnit = "mi";
      returnNum = parseFloat(Number(initNum) * 0.62137).toFixed(5);
      break;
    default:
      console.log('User submited invalid input');
      error = 'Invalid unit and / or number error';
      break;
                  }
  
  if (error) {
    res.send({
      error
    });
  } else {
    res.send({
      initNum,
      returnNum,
      initUnit,
      returnUnit,
      string: `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    });
  }
  
})

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
