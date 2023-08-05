'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const { input } = req.query

    let letters, numbers;
    let index = 0;
    let smallIn = input.trim().toLowerCase();

    if(smallIn === 'gal' || smallIn === 'lbs' || smallIn === 'kg' || smallIn === 'mi' || smallIn === 'km' || smallIn === 'l'){
      numbers = '1'
      letters = input
    }else{
      for(let i = input.length - 1; i >= 0; i--){
          // console.log(input[i])
        if(Number(input[i])){
          index = i
          break
        }
      }
      numbers = input.slice(0,index + 1)
      letters = input.slice(index + 1)
    }


    // console.log(numbers, letters)
    console.log(convertHandler.getUnit(''))
    

  const initNum = convertHandler.getNum(numbers)
  const initUnit = convertHandler.getUnit(letters)
  const returnUnit = convertHandler.getReturnUnit(initUnit)
  const initUnitWord = convertHandler.spellOutUnit(initUnit)
  const returnUnitWord = convertHandler.spellOutUnit(returnUnit)
  const returnNum = convertHandler.convert(initNum, initUnit)

  // console.log(initNum, "\n", initUnit, "\n", returnNum, "\n", returnUnit, "\n", string)
    

  if (initNum === null && initUnit === null) return res.send('invalid number and unit')
  if (initNum === null) return res.send('invalid number')
  if (initUnit === null) return res.send('invalid unit')

  const string = convertHandler.getString(initNum, initUnitWord, returnNum, returnUnitWord)
  
  const resObj = {
    initNum : initNum.toFixed(5),
    initUnit,
    returnNum : returnNum.toFixed(5),
    returnUnit,
    string
  }

  res.json(resObj)
  })

};