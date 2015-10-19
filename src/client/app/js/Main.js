"use strict";

(function(){

    require.config({

        baseUrl             :   "../src/client/app/js",
        paths : {
            jquery          :   '../../vendor/jquery/dist/jquery.min',
            q               :   "../../vendor/q/q",
            underscore      :   "../../vendor/underscore/underscore-min",
            text            :   '../../vendor/require-text',
            templates       :   '../templates',
            tpl             :   '../../vendor/require-tpl',
            // Backbone        :   '../libs/backbone-1.2.3',
            Modernizr       :   '../../vendor/modernizr/modernizr'
        }
    });

    require( [ "Bootstrap" ],
        function( Bootstrap ){
            console.log('prova');
        });

}());