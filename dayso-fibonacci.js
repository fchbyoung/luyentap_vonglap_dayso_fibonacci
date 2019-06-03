    let a = 1; b = 0;
    for(let temp = 0; temp < 20;temp ){
        temp = a;
        a += b;
        b = temp;
        document.writeln(a);
    }


