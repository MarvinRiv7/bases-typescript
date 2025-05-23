(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcano: string = `Heroes: Volcan Negro`;

  

  console.log(`I'm ${batman}`);

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No hay un superheroe en la posicion 10");
})();
