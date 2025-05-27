(() => {

    const hero: string = 'Flash';

    function returnName():string {
        
        return hero;
    }

    const activateBatiSignal = (): string => {
        return 'Activada'
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName()

})()