module.exports = function check(str, bracketsConfig) {

    let strBracketsConfig = bracketsConfig.map(element => {
      return element.join('');
    })

    strBracketsConfig.forEach(element => {
      let regExp = element;
      str = str.replaceAll(regExp, '');
    })

    let isTrue = false;

    strBracketsConfig.forEach(element => {
      let addSlach = element.split('').map(item => {return '\\' + item}).join('');
      let regExp;
      
      if (isNaN(+element)) {
        regExp = new RegExp('' + addSlach);
      } else {
        regExp = new RegExp('' + element);
      }
      if (regExp.test(str)) {
        isTrue = true;
      }
    });


    if (isTrue != true && str.length === 0) {
      return true
    }  else if (isTrue != true && str.length > 0) {
      return false
    } else {
      return check(str, bracketsConfig)
    } 
}
