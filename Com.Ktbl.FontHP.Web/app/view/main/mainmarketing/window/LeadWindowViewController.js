/*
 * File: app/view/main/mainmarketing/window/LeadWindowViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.LeadWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingwindowleadwindow',



    //onEdit1Click: function (button, e, eOpts) {
    //    console.log("T568");
    //    ////add event grid dbclick 20150908
    //    //var form = this.getView().down('form').getForm();

    //    //Ext.Ajax.request({
    //    //    url: 'api/Lead/GetLeadById',
    //    //    method: 'get',
    //    //    params: {
    //    //        id: "5"
    //    //    },


    //    //    success: function (response) {
    //    //        var text = Ext.decode(response.responseText),
    //    //            model = Ext.create('FrontHPApp.model.LeadFormModel', text);
    //    //        form.loadRecord(model);

    //    //    }

    //    //});
    //},
    onCalculateClick: function (button, e, eOpts) {
        var me = this.getView(),
            grid = me.down('gridpanel'),
            store = grid.getStore(),
            record = grid.getSelection();
        if (record.length > 0) {
            var form = this.getView().down('form').getForm();
            form.loadRecord(record[0]);
        }
    },
});
