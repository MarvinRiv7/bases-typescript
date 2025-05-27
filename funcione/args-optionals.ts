(() => {

    const fullName = (firstName:string, lastName?:string): string => {

        return `${firstName} ${lastName || 'No tiene apellido'}`
    }
    

    const name = fullName('Tony');

    console.log({name})



})()