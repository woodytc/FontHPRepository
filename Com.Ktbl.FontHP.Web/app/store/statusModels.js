/*
 * File: app/store/statusModels.js
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

Ext.define('FrontHPApp.store.statusModels', {
    extend: 'Ext.data.Store',
    alias: 'store.statusmodels',

    requires: [
        'FrontHPApp.model.StatusModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'statusmodels',
            model: 'FrontHPApp.model.StatusModel',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/StatusInfo/getstatusinfoload',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                },
                api: {
                    destroy: 'api/StatusInfo'
                }


            }
        }, cfg)]);
    }
});