/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */
  
  const express = require('express');
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.get('/calculate', handleCalculation);
  app.listen(port, function() {
    console.log('Node app is running on port', port);
  });
    // MODEL
    function handleCalculation(req, res) {
      const weight = Number(req.query.weight);
      const packageType = req.query.packageType;
      calculateRate(res, weight, packageType);
    }
    function calculateRate (res, weight, packageType) {
     
      let result = 0;
     
      if (packageType == "Letters (Stamped)") {
        result = .40 + (weight * .15);
      }
      else if (packageType == "Letters (Metered)") {
        result = .35 + (weight * .15);
      }
      else if (packageType == "Large Envelopes (Flats)") {
        result = .85 + (weight * .15);
      }
      else if (packageType == "First-Class Package Service—Retai") {
        if (weight <= 4) { result = 3.66; }
        else if (weight <= 8) { result = 4.39; }
        else if (weigth <= 12) { result = 5.19; }
        else {result = 5.71}
      }
      else {
        result = 'Error';
      }
      const params = {result : result};
      res.render('pages/content', params);
    }
  
/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */
  
  /*const express = require('express');
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.get('/calculate', handleCalculation);
  app.listen(port, function() {
    console.log('Node app is running on port', port);
  });
    // MODEL
    function handleCalculation(req, res) {
      const weight = Number(req.query.weight);
      const packageType = req.query.packageType;
      calculateRate(res, weight, packageType);
    }
    function calculateRate (res, weight, packageType) {
      packageType = packageType;
      let result = 0;
      result = weight * 5;
      if (packageType = "Letters (Stamped)") {
        result = .40 + (weight * .15);
      }
      else if (packageType = "Letters (Metered)") {
        result = .35 + (weight * .15);
      }
      else if (packageType = "Large Envelopes (Flats)") {
        result = .85 + (weight * .15);
      }
      else if (packageType = "First-Class Package Service—Retai") {
        if (weight <= 4) { result = 3.66; }
        else if (weight <= 8) { result = 4.39; }
        else if (weigth <= 12) { result = 5.19; }
        else {result = 5.71}
      }
      else {
        result = 'Error';
      }
      const params = {result : result};
      res.render('result', params);
    }*/