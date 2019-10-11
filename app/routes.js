var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router

// add your routes here

router.get(/benefit-handler/, function (req, res) {

  var benefitList = req.session.data.benefitList

  // If no array exists, create one called 'benefitList'. If one already exists, do nothing.

  benefitList = ( typeof benefitList != 'undefined' && benefitList instanceof Array ) ? benefitList : []

  // Create a variable of the posted information

  var benefitName = req.session.data['benefitname'];

  // Add the posted information into the 'benefitList' array

  benefitList.push(benefitName);

  req.session.data.benefitList = benefitList;

  console.log(benefitList)

  console.log('Benefits list contains', benefitList.length, 'items')

  // Redirect to the 'Do you get another?' page

  res.redirect('answers');

});

router.get(/addanother-handler/, function (req, res) {
  if (req.query.addanother == 'yes') {
    res.redirect('input');
  } if (req.query.addanother == 'no') {
    res.redirect('done');
  } else {
    res.redirect('answers');
  }
});