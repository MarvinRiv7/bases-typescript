(() => {

   const hero:[string, number, boolean] = ['Dr Strange', 100, true]
   
   hero[1] = 50
   hero[0] = 'Iroman'
   hero[2] = false

   console.log(hero)


})()