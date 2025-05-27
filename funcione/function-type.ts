(() => {


    const addNumber = (a:number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => 'El Mundo esta salvado'
    

    let myFunction: () => string;

    //! myFunction = 10;
    //! console.log(myFunction)

    //! myFunction = addNumber;
    //! console.log(myFunction(1, 2))

    //? myFunction = greet;
    //? console.log(myFunction('Marvin'))

    //* myFunction = saveTheWorld;
    //* console.log(myFunction())

})()