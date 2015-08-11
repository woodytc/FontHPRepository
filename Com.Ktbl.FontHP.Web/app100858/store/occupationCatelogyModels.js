/*
 * File: app/store/occupationCatelogyModels.js
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

Ext.define('FrontHPApp.store.occupationCatelogyModels', {
    extend: 'Ext.data.Store',
    alias: 'store.occupationcatelogymodels',

    requires: [
        'FrontHPApp.model.OccupationCatelogyModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'occupationCatelogyModels',
            model: 'FrontHPApp.model.OccupationCatelogyModel',
            data: [
                {
                    id: 180,
                    name: 'nam'
                },
                {
                    id: 80,
                    name: 'qui'
                },
                {
                    id: 689,
                    name: 'accusamus'
                },
                {
                    id: 737,
                    name: 'est'
                },
                {
                    id: 903,
                    name: 'nesciunt'
                },
                {
                    id: 773,
                    name: 'quibusdam'
                },
                {
                    id: 578,
                    name: 'quae'
                },
                {
                    id: 269,
                    name: 'amet'
                },
                {
                    id: 984,
                    name: 'facilis'
                },
                {
                    id: 26,
                    name: 'architecto'
                },
                {
                    id: 673,
                    name: 'beatae'
                },
                {
                    id: 461,
                    name: 'sapiente'
                },
                {
                    id: 402,
                    name: 'ea'
                },
                {
                    id: 474,
                    name: 'dolorum'
                },
                {
                    id: 592,
                    name: 'accusantium'
                },
                {
                    id: 340,
                    name: 'error'
                },
                {
                    id: 930,
                    name: 'consequatur'
                },
                {
                    id: 135,
                    name: 'rerum'
                },
                {
                    id: 293,
                    name: 'rem'
                },
                {
                    id: 377,
                    name: 'est'
                },
                {
                    id: 824,
                    name: 'dolor'
                },
                {
                    id: 614,
                    name: 'velit'
                },
                {
                    id: 2,
                    name: 'explicabo'
                },
                {
                    id: 942,
                    name: 'ratione'
                },
                {
                    id: 267,
                    name: 'inventore'
                },
                {
                    id: 99,
                    name: 'quo'
                },
                {
                    id: 229,
                    name: 'provident'
                },
                {
                    id: 699,
                    name: 'debitis'
                },
                {
                    id: 72,
                    name: 'necessitatibus'
                },
                {
                    id: 52,
                    name: 'praesentium'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});