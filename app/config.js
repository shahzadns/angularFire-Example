(function(){
    'use strict';

    window.App = {
        //baseURL : 'https://brilliant-torch-3650.firebaseIO.com'
        baseURL : 'https://shezi-angularfire.firebaseio.com/'
    };

    App.angularFire = new Firebase(App.baseURL);
})();