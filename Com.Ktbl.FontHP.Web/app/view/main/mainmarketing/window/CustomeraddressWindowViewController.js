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
    //add Insert 20150909
    onSaveClick: function(button, e, eOpts) {
        var me = this.getView(),
           form = me.down('form').getForm();
       

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'api/marketing/AddPopCusAddress',
               // url: 'api/marketing',
                success: function (form, action) {
                    Ext.Msg.alert('Success', 'บันทึกข้อมูลเรียบร้อย');
                    me.down('grid').getStore().load();
                },
                failure: function (form, action) {
                    Ext.Msg.alert('Fail', 'ไม่สามารถบันทึกข้อมูลได้');
                }

            });
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
    },

    onItemDblClick: function (dataview, record, item, index, e, eOpts) { //เป็นส่วนที่คลิกจาก Grid ค่าที่ได้จะได้มาแถวเดียว


        var form = this.getView().down('form').getForm();

        Ext.Ajax.request({
            url: 'api/Marketing/GetAddressById',
            method: 'get',
            params: {
                id: record.get('id')
            },
            success: function (response) {
                var text = Ext.decode(response.responseText),
                    model = Ext.create('FrontHPApp.model.AddressCusFormModel', text);

                form.loadRecord(model);

                // process server response here
            }
        });

    },

    onClearClick: function(button, e, eOpts) {
        var me = this.getView(),
            form = me.down('form');
        paging = me.down('pagingtoolbar');
        form.reset();
    },

    onDeleteClick: function(button, e, eOpts) {
        var me = this.getView(),
            grid = me.down('gridpanel'),
            store = grid.getStore(),
            record = grid.getSelection(),
            count = record.length;

        if (count > 0) {

            Ext.MessageBox.confirm("Confirm", "คุณต้องการที่ลบใช่หรือไม่?", function (btn) {

                if (btn == 'yes') {

                    for (i = 0; i < count; i++) {
                        store.remove(record[i]);
                    }
                    store.sync();
                    Ext.MessageBox.alert("Status", 'ลบข้อมูลเรียบร้อย');
                }

            }, this);
        }//end if
    },

    onEditClick: function (button, e, eOpts) {
        var me = this.getView(),
           grid = me.down('gridpanel'),
           store = grid.getStore(),
           record = grid.getSelection();
        if (record.length > 0) {
            var form = this.getView().down('form').getForm();
            form.loadRecord(record[0]);
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
