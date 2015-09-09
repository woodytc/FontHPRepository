/*
 * File: app/view/main/mainmarketing/window/comspecial/ComSpecialWindowViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.comspecial.ComSpecialWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.comspecialwindow',

    onSelectEmpClick: function(button, e, eOpts) {
        //[20150909] Add by p2p
        var me = this,
            refs = me.getReferences(),
            marketingcode = refs.homefieldset.down('#marketing-code'),
            marketingname = refs.homefieldset.down('#marketing-name')

        Ext.widget("popupempsell", {

            listeners: {
                afterRender: function (panal, eOpts) {

                    var store = panal.down('grid').getStore();
                    store.extraParams = {};
                    store.load();

                },
                close: function (panal, eOpts) {

                    var grid = panal.down('grid'),
                        selection = grid.getSelection();
                    if (selection.length > 0) {

                        record = selection[0];
                        marketingcode.setValue(record.get('MarketingCode'));
                        marketingname.setValue(record.get('MarketingName'));


                    }
                }
            }
        }).show();
    },

    onSaveClick: function(button, e, eOpts) {
        var me = this.getView(),
        form = me.down('form').getForm();
       
        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'api/ComSpacial/Insert',
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

    onClearClick: function(button, e, eOpts) {
        var me = this.getView(),
            form = me.down('form');
        paging = me.down('pagingtoolbar');
        form.reset();
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

    onDeleteClick: function (button, e, eOpts) {
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
    onItemDblClick: function (dataview, record, item, index, e, eOpts) {
        //add event grid dbclick 20150908
        var form = this.getView().down('form').getForm();

        Ext.Ajax.request({
            url: 'api/ComSpacial/GetComSpacialById',
            method: 'get',
            params: {
                id: record.get('id')
            },


            success: function (response) {
                var text = Ext.decode(response.responseText),
                    model = Ext.create('FrontHPApp.model.ComSpacialFormModel', text);
                form.loadRecord(model);

            }

        });
    },

});
