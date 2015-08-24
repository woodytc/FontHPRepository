/*
 * File: app/view/main/mainmarketing/window/CustomeraddressWindowViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.CustomeraddressWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingwindowcustomeraddresswindow',

    onSaveClick: function(button, e, eOpts) {

    },

    onClearClick: function(button, e, eOpts) {
        var me = this.getView(),
            form = me.down('form');
        paging = me.down('pagingtoolbar');
        form.reset();
    },

    onDeleteClick: function(button, e, eOpts) {

    },

    onEditGridClick: function(button, e, eOpts) {

    },

    onDeleteGridClick: function(button, e, eOpts) {
        var view = this.getView(),
            GridGarantor = view.down("#GridComSpacial"), //itemid
            store = GridGarantor.getStore(),
            selectRecord = GridGarantor.getSelection(),
            CheckCountSelect = selectRecord.length;

        if (CheckCountSelect > 0)
        {
            Ext.MessageBox.confirm("Confirm","คุณต้องการที่จะลบรายการใช่หรือไม่?",function(btn){

                if(btn == 'yes'){

                    for(i=0;i<CheckCountSelect;i++){

                        store.remove(selectRecord[i]);

                    }
                }

            },this);

        }
        else
        {

        }
    },

    //[20150814] Add by Woody even province 
    onProvinceChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
            refs = me.getReferences(),
            cbprovince = refs.province,
            cbdistrict = refs.district,
            cbsubdistrict = refs.subdistrict;

        // Clear selected series value
        if (oldValue != null) {
            cbdistrict.setValue(""),
            cbsubdistrict.setValue("");
        }

        var store = cbdistrict.getStore();
        store.getProxy().setExtraParam('provinceid', newValue);
        store.load();

    },

    onDistrictChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
            refs = me.getReferences(),
            cbprovince = refs.province,
            cbdistrict = refs.district,
            cbsubdistrict = refs.subdistrict;

        // Clear selected series value
        if (oldValue != null) {
            cbsubdistrict.setValue('');
        }
        var store = cbsubdistrict.getStore();
        console.log(newValue);
        store.getProxy().setExtraParam('districtid', newValue);
        store.getProxy().setExtraParam('provinceid', cbprovince.getValue());
        store.load();

    },

    onSubDistrictChange: function (field, newValue, oldValue, eOpts) {

    },

});
