/*
 * File: app/store/RequestStatusStores.js
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

Ext.define('FrontHPApp.store.RequestStatusStores', {
    extend: 'Ext.data.Store',
    alias: 'store.requestStatusstores',

    requires: [
        'FrontHPApp.model.RequestStatusModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'RequestStatusStores',
            model: 'FrontHPApp.model.RequestStatusModel',
            data: [
                {
                    Id: 289,
                    Name: 'voluptas'
                },
                {
                    Id: 412,
                    Name: 'fuga'
                },
                {
                    Id: 31,
                    Name: 'quo'
                },
                {
                    Id: 94,
                    Name: 'et'
                },
                {
                    Id: 275,
                    Name: 'molestiae'
                },
                {
                    Id: 329,
                    Name: 'iusto'
                },
                {
                    Id: 563,
                    Name: 'consequatur'
                },
                {
                    Id: 316,
                    Name: 'ex'
                },
                {
                    Id: 536,
                    Name: 'aliquam'
                },
                {
                    Id: 690,
                    Name: 'autem'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});