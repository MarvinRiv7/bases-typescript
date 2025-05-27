(() => {

    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string => {

        if (upper) {

            return `${firstName} ${lastName || 'No tiene apellido'}`.toLocaleUpperCase()
        }else{
            
            return `${firstName} ${lastName || 'No tiene apellido'}`
        }

    }
    

    const name = fullName('Tony', 'Stark', true);

    console.log({name})



})()