    let a = 0; b = 1;
    let temp;
    for(let i = 0; i < 20; i++){
        temp = a;
        a += b;
        b = temp;
        document.writeln(a);
    }


