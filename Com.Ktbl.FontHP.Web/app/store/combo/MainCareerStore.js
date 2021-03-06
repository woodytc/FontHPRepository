/*
 * File: app/store/combo/OccupationCatelogyStore.js
 * [200150811] Add by P2P
 * store region 
 * standard_type = '00061'
 */

Ext.define('FrontHPApp.store.combo.MainCareerStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'combo.MainCareerStore',
            //fields: ['id', 'Name'],
            //FrontHPApp.model.CommonModel,
            model: 'FrontHPApp.model.CommonModel',
            proxy: {
                type: 'rest',
                url: 'api/common/GetMainCareer',//�觤��价�� Get  public IEnumerable<ComboBox> Get(string stdcode) ���� CommonController 
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});