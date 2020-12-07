function ipsBetween(value1,value2){
    if (!value1.match(/^((25[0-5]|2[4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[4]\d|[01]?\d\d?)$/)
        || !value2.match(/^((25[0-5]|2[4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[4]\d|[01]?\d\d?)$/)) return 'Invalid IPv4';
    let sum = 0;

    let adr1 = value1.split('.');
    let newAdr1 = [...adr1];
    for (let i=0; i<adr1.length-1; i++){
        if (adr1[i] > 0) newAdr1[i+1] = 255;
    };
    let adr2 = value2.split('.');
    let newAdr2 = [...adr2];
    for (let i=0; i<adr2.length-1; i++){
        if (adr2[i] > 0 ) newAdr2[i+1] = 255;
    };

    for (let i=0; i<newAdr2.length; i++){
        sum += newAdr2[i]-newAdr1[i];
    };
    return sum;
};
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))