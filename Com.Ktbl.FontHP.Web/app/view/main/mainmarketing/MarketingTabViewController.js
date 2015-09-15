/*
 * File: app/view/main/mainmarketing/MarketingTabViewController.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.MarketingTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingmarketingtab',

    onFindRequestNOClick: function(button, e, eOpts) {
        var me = this.getView(),
            store = me.down('gridpanel').getStore(),
            form = me.down('form').getForm();

        if (form.isValid()) {
            //add form submit by nidcha 20150902
            
           
                    //[20150827] Add by Woody
                    store.getProxy().setExtraParam("StartDate", form.findField('StartDate').getValue());
                    store.getProxy().setExtraParam("Enddate", form.findField('Enddate').getValue());
                    store.getProxy().setExtraParam("RequestNo", form.findField('RequestNo').getValue());
                    store.getProxy().setExtraParam("StatusRequest", form.findField('StatusRequest').getValue());
                    store.getProxy().setExtraParam("CitizenID", form.findField('CitizenID').getValue());
                    store.getProxy().setExtraParam("Branch", form.findField('Branch').getValue());
                    store.load();
        }
    },

    onClearGridClick: function(button, e, eOpts) {
        var me = this.getView(),
            form = me.down('form');
        paging = me.down('pagingtoolbar');
        form.reset();
        //[20150827] Add by Woody
        paging.getStore().getProxy().extraParams = {};
        paging.moveFirst();

    },

    onAddClick: function (button, e, eOpts) {
        Ext.widget('windowmainapp').show();
    },

    //[20150828] Edit by Woody sample load data to from 
    onViewDetailClick: function (button, e, eOpts) {

        var grid = button.up('gridpanel'),
            selection = grid.getSelection();
        if (selection.length>0) {
            Ext.widget('windowmainapp', {

                listeners: {
                    beforerender: function (panal, eOpts) {
                        var maintab = panal.down('#main-tab'),
                            tab1 = maintab.down('#tabperson'),
                            insurancetab = Ext.getCmp('insurance-window-tab'),
                            formtab1 = Ext.getCmp('request-customer-tab').down('#form1');

                        if (selection.length > 0) {

                            var record = selection[0];
                            formtab1.getForm().loadRecord(record);
                            //insurancetab.getForm().load({
                            //    url: 'api/Insurance/GetInsurenByRequstId',
                            //    method: 'get',
                            //    params: {
                            //        requestid: record.get('RequestNo')
                            //    }
                            //});

                            //Send requestId to Insurance woody 20150910
                            Ext.Ajax.request({
                                url: 'api/Insurance/GetInsurenByRequstId',
                                method: 'get',
                                params: {
                                    requestid: record.get('RequestNo')
                                },
                                success: function (response) {
                                    
                                    var obj = Ext.decode(response.responseText);
                                    var objIns = obj.data.objIns;
                                    console.log(objIns);
                                    var datamodel = Ext.create('FrontHPApp.model.InsuranceFormModelTest', obj.data);
                                   // var datamodel1 = Ext.create('FrontHPApp.model.InsuranceFormModelTest', obj.data.objCom);
                                    insurancetab.getForm().loadRecord(datamodel);
                                    //insurancetab.getForm().loadRecord(datamodel1);
                                    console.log(datamodel);

                                },
                                failure: function (response) {
                                    console.log("Curses, something terrible happened");
                                },
                                callback: function (options, success, response) {
                                    console.log("It is what it is");
                                }
                            });
                            
                        }

                        //var forminsurancetab = Ext.getCmp('insurancewindowtab').down('form').getForm();
                        //Ext.Ajax.request({
                        //    url: '',
                        //    params: {
                        //        id: 1
                        //    },
                        //    success: function (response) {
                        //        var text = response.responseText;
                        //        // process server response here
                        //    }
                        //});

                    }
                }
            }).show();
        }
    },

    onCancelFlgClick: function (button, e, eOpts) {
        //console.log(button);
        var me = this.getView(),
            grid = me.down('gridpanel'),
            store = grid.getStore(),
            record = grid.getSelection();
        if (record.length > 0) {
            Ext.MessageBox.show({
                title: 'Flag Cancel',
                msg: 'เหตุผล Flag Cancel',
                width: 300,
                buttons: Ext.MessageBox.OKCANCEL,
                multiline: true,
                scope: this,
                fn: function (btn, text) {
                    console.log(btn);

                    if (btn == 'ok') {
                        console.log(record[0].get('RequestNo'));
                        Ext.Ajax.request({
                            url: 'api/Marketing/GetCancelMarketingById',
                            method: 'get',
                            params: {
                                id: record[0].get('RequestNo'),
                                remark:text
                            },
                            success: function (response) {
                                Ext.Msg.alert('Success', 'Cancel Flag เรียบร้อยแล้ว');
                               

                            }

                        });
                    }
                  


                },
                animateTarget: button
            });
        }
        
       
    },

    onDetaillItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var grid = dataview.up('gridpanel'),
            selection = grid.getSelection();
        console.log(dataview);

        Ext.widget('windowmainapp').show();
    }

});
