"use strict";
(() => {
    const error = (mesage) => {
        if (false) {
            throw new Error(mesage);
        }
        return 1;
    };
    error('Auxilio');
})();
