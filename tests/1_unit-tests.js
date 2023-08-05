const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  // Read a whole number input
  test('#1 ', () => {
    assert.equal(convertHandler.getNum('12'), 12, 'This is a whole number');
  });

  // Read a decimal number input
  test('#2', () => {
    assert.equal(convertHandler.getNum('23.2'), 23.2, 'This is a decimal number');
  });

  // Read a fractional input
  test('#3', () => {
    assert.equal(convertHandler.getNum('12/2'), 6, 'This is a fractional number');
  });

  // Read a fractional number input with a decimal
  test('#4', () => {
    assert.equal(convertHandler.getNum('12.2/2.0'), 6.1, 'Fractional/Decimal');
  });

  // Error on double-fraction (2/3/5)
  test('#5', () => {
    assert.isNull(convertHandler.getNum('1/24/2'), 'Null for double fraction');
  });

  // Default to 1 when no number is added
  test('#6', () => {
    assert.equal(convertHandler.getNum('1'), 1, 'Default to 1');
  });

  // Read each valid input unit
  test('#7', () => {
    assert.equal(convertHandler.getUnit('GAL'),'gal', 'This is valid unit');
    assert.equal(convertHandler.getUnit('lBS'),'lbs', 'This is valid unit');
    assert.equal(convertHandler.getUnit('KM'),'km', 'This is valid unit');
    assert.equal(convertHandler.getUnit('MI'),'mi', 'This is valid unit');
    assert.equal(convertHandler.getUnit('KG'),'kg', 'This is valid unit');
    assert.equal(convertHandler.getUnit('l'),'L', 'This is valid unit');
  });

  // Error for invalid input unit
  test('#8', () => {
    assert.isNull(convertHandler.getUnit('2'), 'This is an invalid unit');
  });

  // Return correct unit for each valid input unit
  test('#9', () => {
    assert.equal(convertHandler.getReturnUnit('gal'),'L', 'This is valid return unit');
    assert.equal(convertHandler.getReturnUnit('L'),'gal', 'This is valid return unit');
    assert.equal(convertHandler.getReturnUnit('mi'),'km', 'This is valid return unit');
    assert.equal(convertHandler.getReturnUnit('km'),'mi', 'This is valid return unit');
    assert.equal(convertHandler.getReturnUnit('lbs'),'kg', 'This is valid return unit');
    assert.equal(convertHandler.getReturnUnit('kg'),'lbs', 'This is valid return unit');
  });

  // Return spelled-out string for each valid input unit
  test('#10', () => {
    assert.equal(convertHandler.getReturnUnit('gal'),'gallons', 'Correct unit in string');
    assert.equal(convertHandler.spellOutUnit('L'),'liters', 'Correct unit in string');
    assert.equal(convertHandler.spellOutUnit('mi'),'miles', 'Correct unit in string');
    assert.equal(convertHandler.spellOutUnit('km'),'kilometers', 'Correct unit in string');
    assert.equal(convertHandler.spellOutUnit('lbs'),'pounds', 'Correct unit in string');
    assert.equal(convertHandler.spellOutUnit('kg'),'kilograms', 'Correct unit in string');
  });

  // Convert gal to L
  test('#11', () => {
    assert.approximately(convertHandler.convert(1,'gal'), 3.78541, 0.1, 'gal to L');
  });

  // Convert L to gal
  test('#12', () => {
    assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.1, 'L to gal');
  });

  // Convert mi to km
  test('#13', () => {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.1, 'mi to km');
  });

  // Convert km to mi
  test('#14', () => {
    assert.approximately(convertHandler.convert(1, 'km'),  0.62137, 0.1, 'km to mi');
  });

  // Convert lbs to kg
  test('#15', () => {
    assert.approximately(convertHandler.convert(1, 'lbs'),  0.45359, 0.1, 'This is a whole number');
  });

  // Convert kg to lbs
  test('#16', () => {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.1, 'This is not a whole number');
  });
}); 
