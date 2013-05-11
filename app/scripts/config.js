/** ====================================================================================================== **/
'use strict';

require.config(
    {
        deps: ['main'],

        paths: {
            jquery: '../components/jquery/jquery'
        },

        shim: {
            jquery: {
                exports: '$',
                init: function() {
                    return window.jQuery.noConflict();
                }
            }
        }
    }
);
