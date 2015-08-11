/*
 * File: app/view/main/mainmarketing/window/commonpopup/PopupTypeCardViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupTypeCardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingwindowcommonpopuppopuptypecard',

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
    }

});
