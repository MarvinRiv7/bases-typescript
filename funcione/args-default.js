"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No tiene apellido'}`.toLocaleUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No tiene apellido'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
