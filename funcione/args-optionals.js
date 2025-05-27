"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No tiene apellido'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
