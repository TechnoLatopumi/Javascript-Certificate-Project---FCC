function telephoneCheck(str) {
    const regex = [/^\d{3}-\d{3}-\d{4}$/,//555-555-5555
                   /^1 \d{3}-\d{3}-\d{4}$/,//1 555-555-5555
                   /^1 \(\d{3}\) \d{3}-\d{4}$/,//1 (555) 555-5555
                   /^\d{10}$/,//5555555555
                   /^\(\d{3}\)\d{3}-\d{4}$/,//(555)555-5555
                   /^1\(\d{3}\)\d{3}-\d{4}$/,
                   /^1 \d{3} \d{3} \d{4}$/, //1 555 555 5555
   
    ];
    return regex.some((pattern)=>pattern.test(str))
   }
   
   console.log(telephoneCheck("555-555-5555"));