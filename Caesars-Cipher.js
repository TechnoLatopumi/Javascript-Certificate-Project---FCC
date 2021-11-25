function rot13(str) {
  let empArr = "";
  let rangeAlpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i =0;i<str.length;i++){
    if(str.slice(i,i+1)===" "||
       str.slice(i,i+1)==="!"||
       str.slice(i,i+1)==="?"||
       str.slice(i,i+1)===".")
       {
      empArr=empArr+str.slice(i,i+1);
    }
    else empArr = empArr+rangeAlpha.
    slice(rangeAlpha.indexOf(str.slice(i,i+1))+13,
    rangeAlpha.indexOf(str.slice(i,i+1))+14);
  }
  return empArr;
}

console.log(rot13("SERR YBIR?"));