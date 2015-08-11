/*
 * File: app/store/provinceModels.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FrontHPApp.store.provinceModels', {
    extend: 'Ext.data.Store',
    alias: 'store.provincemodels',

    requires: [
        'FrontHPApp.model.ProvinceModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'provinceModels',
            model: 'FrontHPApp.model.ProvinceModel',
            data: [
                {
                    id: 723,
                    name: 'odio'
                },
                {
                    id: 183,
                    name: 'dolor'
                },
                {
                    id: 512,
                    name: 'libero'
                },
                {
                    id: 833,
                    name: 'quam'
                },
                {
                    id: 84,
                    name: 'ea'
                },
                {
                    id: 373,
                    name: 'cumque'
                },
                {
                    id: 285,
                    name: 'in'
                },
                {
                    id: 711,
                    name: 'incidunt'
                },
                {
                    id: 657,
                    name: 'nisi'
                },
                {
                    id: 333,
                    name: 'esse'
                },
                {
                    id: 169,
                    name: 'ea'
                },
                {
                    id: 310,
                    name: 'molestiae'
                },
                {
                    id: 79,
                    name: 'tempora'
                },
                {
                    id: 233,
                    name: 'aut'
                },
                {
                    id: 500,
                    name: 'similique'
                },
                {
                    id: 523,
                    name: 'vel'
                },
                {
                    id: 667,
                    name: 'consequuntur'
                },
                {
                    id: 497,
                    name: 'porro'
                },
                {
                    id: 604,
                    name: 'eos'
                },
                {
                    id: 723,
                    name: 'autem'
                },
                {
                    id: 35,
                    name: 'suscipit'
                },
                {
                    id: 933,
                    name: 'aut'
                },
                {
                    id: 584,
                    name: 'animi'
                },
                {
                    id: 993,
                    name: 'in'
                },
                {
                    id: 775,
                    name: 'consequatur'
                },
                {
                    id: 551,
                    name: 'aspernatur'
                },
                {
                    id: 930,
                    name: 'reiciendis'
                },
                {
                    id: 91,
                    name: 'quo'
                },
                {
                    id: 670,
                    name: 'est'
                },
                {
                    id: 805,
                    name: 'magnam'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});