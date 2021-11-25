function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
      "PENNY"       :1,
      "NICKEL"      :5,
      "DIME"        :10,
      "QUARTER"     :25,
      "ONE"         :100,
      "FIVE"        :500,
      "TEN"         :1000,
      "TWENTY"      :2000,
      "ONE HUNDRED" :10000};
  
    let changeSum = (cash - price) * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
  
    let cidSum = 0;
    for(let i = 0; i<cid.length; i++){
      cidSum = cidSum+(cid[i][1]*100)
    }
    let reverseCid = cid.reverse();
  
    reverseCid.forEach(elem => {
      let curr = elem[0];
      let currSum = elem[1] * 100;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
      }
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid.reverse();
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }