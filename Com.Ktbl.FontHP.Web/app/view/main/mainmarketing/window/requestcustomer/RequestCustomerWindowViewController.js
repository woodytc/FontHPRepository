/*
 * File: app/view/main/mainmarketing/window/requestcustomer/RequestCustomerWindowViewController.js
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
//20150831 edit part p2p
Ext.define('FrontHPApp.view.main.mainmarketing.window.requestcustomer.RequestCustomerWindowViewController', {
//Ext.define('FrontHPApp.view.main.mainmarketing.window.requestcustomer.RequestCustomerWindowTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmainmarketingwindowrequestcustomerrequestcustomerwindow',
   // alias: 'controller.requestcustomertab',
    provinceid: '',
    districtid: '',
    subdistrictid:'',
    onFindLeadClick: function(button, e, eOpts) {
        //20150831 Add by p2p
        
        var me = this,
            refs = me.getReferences(),
            LeadNo = refs.homefieldset.down('#lead-no');
       
        Ext.widget("popuplead", {
            listeners: {
                afterRender: function (panal, eOpts) {
                    var store = panal.down('grid').getStore();
                    console.log(store);
                    store.extraParams = {};
                    store.load();
                },
                close: function (panal, eOpts) {
                    var grid = panal.down('grid'),
                        selection = grid.getSelection();
                    console.log(selection);
                    if (selection.length > 0) {
                        record = selection[0];
                        LeadNo.setValue(record.get('LeadNo'));
                    }
                }
            }
        }).show();
    },

    onButtonClickBranch: function(button, e, eOpts) {
       
    },


    onBtnMarketingClick: function(button, e, eOpts) {
        //[20150828] Add by Woody 
        var me = this,
            refs = me.getReferences(),
            marketingname = refs.homefieldset.down('#marketing-name'),
            phoneNo = refs.homefieldset.down('#phone-no');
        
        Ext.widget("popupmarketing", {

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
                        marketingname.setValue(record.get('MarketingName'));
                        phoneNo.setValue(record.get('PhoneNo'));

                    }
                }
            }
        }).show();
    },

    onButtonClickDealer: function(button, e, eOpts) {
        //Ext.widget("popupdealer").show();
        //Manage popup Dealer 01092015
        var me = this,
         refs = me.getReferences(),
         dealercode = refs.homefieldset.down('#dealer-code'),
         dealername = refs.homefieldset.down('#dealer-name');
        Ext.widget("popupdealer", {

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
                        dealercode.setValue(record.get('DealerCode'));
                        dealername.setValue(record.get('DealerName'));

                    }
                }
            }
        }).show();
    },

    onSaveAddressCusClick1: function(button, e, eOpts) {
        Ext.widget("mainmainmarketingwindowcommonpopuppopupcusaddress").show();
    },

    onSaveCardClick: function(button, e, eOpts) {
        Ext.widget("mainmainmarketingwindowcommonpopuppopuptypecard", {
            listeners: {
                beforeRender: function (panal, eOpts) {
                    var store = panal.down('grid').getStore();
                    store.load();
                }
            }
        }).show();
    },

    onButtonClickSaveRequest: function(button, e, eOpts) {
        Ext.MessageBox.confirm("Confirm","คุณต้องบันทึกรายการ",function(btn){

            if(btn == 'yes'){

                Ext.MessageBox.alert("Status","บันทึกข้อมูลแล้ว");
            }

        },this);
    },

    onSaveAddressCusClick: function(button, e, eOpts) {
        Ext.widget("mainmainmarketingwindowcommonpopuppopupcusaddress").show();
    },

    onCardCusClick: function(button, e, eOpts) {
        Ext.widget("mainmainmarketingwindowcommonpopuppopuptypecard").show();
    },

    onButtonClickCancelRequest: function(button, e, eOpts) {
        var me = this.getView();
        me.reset();
        //console.log(me);
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
        console.log(newValue);
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

    // [20150817] p2p  Add by even OccupationCatelogy 
    onOccupationCatelogyChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
            refs = me.getReferences(),
            cboccupationcatelogy = refs.occupationcatelogy,
            cboccupationGroup = refs.occupationGroup,
            cboccupationcareer = refs.occupationcareer;
            cbposition = refs.position;

        // Clear selected series value
        if (oldValue != null) {
            cboccupationGroup.setValue(""),
            cboccupationcareer.setValue("");
            cbposition.setValue("");
        }
        
        var store = cboccupationGroup.getStore();
        store.getProxy().setExtraParam('occupationcatelogyid', newValue);
        store.load();

    },

    onOccupationGroupChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
              refs = me.getReferences(),
              cboccupationcatelogy = refs.occupationcatelogy,
              cboccupationGroup = refs.occupationGroup,
              cboccupationcareer = refs.occupationcareer;
              cbposition = refs.position;

        // Clear selected series value
        if (oldValue != null) {
            cboccupationcareer.setValue("");
            cbposition.setValue("");
        }

        var store = cboccupationcareer.getStore();
        store.getProxy().setExtraParam('occupationgroupid', newValue);
        store.load();
    },

    onOccupationCareerChange: function (field, newValue, oldValue, eOpts) {
    var me = this,
          refs = me.getReferences(),
          cboccupationcatelogy = refs.occupationcatelogy,
          cboccupationGroup = refs.occupationGroup,
          cboccupationcareer = refs.occupationcareer;
    cbposition = refs.position;

        // Clear selected series value
    if (oldValue != null) {
        cbposition.setValue("");
    }

    var store = cbposition.getStore();
    store.getProxy().setExtraParam('occupationcareerid', newValue);
    store.load();
},
    
    onMainCareerChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
              refs = me.getReferences(),
              cbmaincareer = refs.maincareer,
              cbsubcareer = refs.subcareer;
         

        // Clear selected series value
    if (oldValue != null) {
        cbsubcareer.setValue("");
    }

    var store = cbsubcareer.getStore();
    store.getProxy().setExtraParam('maincareerid', newValue);
    store.load();
    },
    //Car p2p 20150819
    onBrandCarChange: function (field, newValue, oldValue, eOpts) { //select Brand Car
        var me = this,
              refs = me.getReferences(),
              cbobrandcar = refs.brandcar,
              cbomodelcar = refs.modelcar,
              cbomodeldetailcar = refs.modeldetailcar;
              

        // Clear selected series value
        if (oldValue != null) {
           
            cbomodelcar.setValue("");
            cbomodeldetailcar.setValue("");
        }

        var store = cbomodelcar.getStore(); //get model car
        store.getProxy().setExtraParam('brandcode', newValue);
        store.load();
    },
    onModelCarChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
              refs = me.getReferences(),
              cbobrandcar = refs.brandcar,
              cbomodelcar = refs.modelcar,
              cbomodeldetailcar = refs.modeldetailcar;


        // Clear selected series value
        if (oldValue != null) {
             cbomodeldetailcar.setValue("");
        }

        var store = cbomodeldetailcar.getStore();
        store.getProxy().setExtraParam('brandcode', cbobrandcar.getValue());
        store.getProxy().setExtraParam('familycode', cbomodelcar.getValue());
        store.load();
    },
    
});
