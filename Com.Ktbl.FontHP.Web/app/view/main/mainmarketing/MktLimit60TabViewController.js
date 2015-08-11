/*
 * File: app/view/main/mainmarketing/MktLimit60TabViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.MktLimit60TabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingmktlimit60tab',

    onComboboxBranchSelect: function(combo, record, eOpts) {
        console.log(record);
    },

    onSaveClick: function(button, e, eOpts) {

    },

    onGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var store = dataview.up().getStore();

        Ext.MessageBox.confirm("Confirm","คุณต้องการที่จะยกเลิก"+record.get("RequestNo")+" ใช่หรือไม่?",function(btn){

            if(btn == 'yes'){

                store.remove(record);

                Ext.MessageBox.alert("Status",record.get("RequestNo") );
            }

        },this);


    }

});