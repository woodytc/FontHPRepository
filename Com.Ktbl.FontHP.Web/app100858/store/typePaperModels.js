/*
 * File: app/store/typePaperModels.js
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

Ext.define('FrontHPApp.store.typePaperModels', {
    extend: 'Ext.data.Store',
    alias: 'store.typepapermodels',

    requires: [
        'FrontHPApp.model.TypePaperModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'typePaperModels',
            model: 'FrontHPApp.model.TypePaperModel',
            data: [
                {
                    id: 844,
                    name: 'et'
                },
                {
                    id: 710,
                    name: 'quis'
                },
                {
                    id: 330,
                    name: 'similique'
                },
                {
                    id: 475,
                    name: 'ducimus'
                },
                {
                    id: 130,
                    name: 'provident'
                },
                {
                    id: 655,
                    name: 'ut'
                },
                {
                    id: 93,
                    name: 'ipsum'
                },
                {
                    id: 561,
                    name: 'voluptas'
                },
                {
                    id: 836,
                    name: 'ut'
                },
                {
                    id: 188,
                    name: 'alias'
                },
                {
                    id: 385,
                    name: 'minus'
                },
                {
                    id: 485,
                    name: 'quam'
                },
                {
                    id: 19,
                    name: 'ea'
                },
                {
                    id: 529,
                    name: 'dolorem'
                },
                {
                    id: 934,
                    name: 'reprehenderit'
                },
                {
                    id: 4,
                    name: 'dolorum'
                },
                {
                    id: 661,
                    name: 'cum'
                },
                {
                    id: 748,
                    name: 'iste'
                },
                {
                    id: 986,
                    name: 'consequatur'
                },
                {
                    id: 232,
                    name: 'aut'
                },
                {
                    id: 363,
                    name: 'rerum'
                },
                {
                    id: 843,
                    name: 'sed'
                },
                {
                    id: 147,
                    name: 'alias'
                },
                {
                    id: 669,
                    name: 'impedit'
                },
                {
                    id: 221,
                    name: 'id'
                },
                {
                    id: 476,
                    name: 'sunt'
                },
                {
                    id: 853,
                    name: 'velit'
                },
                {
                    id: 163,
                    name: 'ea'
                },
                {
                    id: 513,
                    name: 'earum'
                },
                {
                    id: 155,
                    name: 'molestiae'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});