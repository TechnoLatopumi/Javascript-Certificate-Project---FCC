function palindrome(str) {
    //convert the string into two Array, filter non numericalpha and change all to lowercase
    let checker = str.
    replace(/\W|_/gi,"").split("").
    join("").
    toLowerCase();
  
    let convToArr = str.
    replace(/\W|_/gi,"").split("").
    reverse().join("").// this is reversed
    toLowerCase();
   
    //check the reverse string
    return checker===convToArr;
    
  
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));