function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    input.split('').filter(item => item == '/').length > 1 && (result = 'invalid number')

    let firstHalf = '';
    let secondHalf = '';

    if(input.split('').filter(item => item == '/').length === 1){
      let index = 0
      for (let i = 0; i < input.length; i++){
        if (input[i]=== '/'){
          break
        }
        index += 1
      }

      firstHalf = Number(input.slice(0, index))
      secondHalf = Number(input.slice(index + 1))
      result = isNaN(firstHalf/secondHalf) ? 'invalid number' : firstHalf/secondHalf
    }else{
      result = Number(input)
    }

    if(isNaN(result)){
      result = null;
      return result
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    let theUnit = input.trim()

    if(theUnit === 'l'){
      theUnit = theUnit.toUpperCase();
    }else{
      theUnit = theUnit.toLowerCase();
    }

    switch(theUnit){
      case "L":
        result = 'L';
        break
      case 'gal':
        result = 'gal'
        break
      case 'mi':
        result = 'mi'
        break
      case 'km':
        result = 'km'
        break
      case 'lbs':
        result = 'lbs'
        break
      case 'kg':
        result = 'kg'
        break
      default:
        result = null
    }
    // console.log(theUnit, result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch(initUnit){
      case "L":
        result = 'gal';
        break
      case 'gal':
        result = 'L'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      default:
        result = null
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch(unit){
      case "L":
        result = 'liters';
        break
      case 'gal':
        result = 'gallons'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      default:
        result = null
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit){
      case 'gal':
        result = initNum * galToL
        break
      case 'L':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        result = null
        // result = 'Not again!! :_🥲(；′⌒`)('
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum.toFixed(5)} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
