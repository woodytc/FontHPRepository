/*
 * File: app/store/combo/BrandCarStore.js
 * [200150818] Add by P2P
 * store region 
 
 */

Ext.define('FrontHPApp.store.combo.OccupationCareerOtherStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'combo.OccupationCareerOtherStore',
            //fields: ['id', 'Name'],
            //FrontHPApp.model.CommonModel,
            model: 'FrontHPApp.model.CommonModel',
            autoLoad:true,
            proxy: {
                type: 'rest',
                url: 'api/common?stdcode=00153',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});