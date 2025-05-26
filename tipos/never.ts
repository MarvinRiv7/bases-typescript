(() => {


    const error = (mesage: string):(never|number) => {

        if(false) {
            throw new Error(mesage)
        }
        return 1
    }

    error('Auxilio');
})()