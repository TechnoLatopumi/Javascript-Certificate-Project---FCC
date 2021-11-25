function convertToRoman(num) {
    let romanSymbol =[
      {M: 1000},{CM: 900},{D: 500},{CD: 400},
      {C:  100},{XC:  90},{L:  50},{XL:  40},
      {X:   10},{IX:   9},{V:   5},{IV:   4},
      {I:    1}];
    let romanNumeral =[];
  
  for(let i=0;i<romanSymbol.length;i++){
    while(num>=Object.values(romanSymbol[i])){
      romanNumeral.push(Object.keys(romanSymbol[i]));
      num=num-Object.values(romanSymbol[i])
    }
  }
  return romanNumeral.join("");
  }
  
  let input = convertToRoman(36);
  console.log(input)