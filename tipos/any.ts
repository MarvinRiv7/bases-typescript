(() => {


    let avenger: any = 123
    let exists;
    let power;

    avenger = 'Dr Strange'
    //console.log(avenger.charAt(0))
    console.log((avenger as string).charAt(1))

    avenger = 160.9999
    console.log((<number>avenger).toFixed(4))

    console.log()
})()