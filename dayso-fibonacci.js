    let a = 0; b = 1;
    let temp;
    let check = false;
    let sum = 0;
    for(let i = 0; i < 20; i++){
        temp = a;
        a += b;
        b = temp;
        sum += a;
        document.writeln(a);
        if(a % 5 === 0 && !check){
            check = a;
        }
    }
    document.write("<br/>" + "Số đầu tiên chia hết cho 5 là : " + check);
    document.write("<br/>" + "tổng 20 số đầu tiên trong dãy fibonacci là : " + sum);













