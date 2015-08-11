/*
 * File: app/view/WindowMainApp.js
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

Ext.define('FrontHPApp.view.WindowMainApp', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowmainapp',

    requires: [
        'FrontHPApp.view.WindowMainAppViewModel',
        'FrontHPApp.view.main.mainmarketing.window.requestcustomer.RequestCustomerWindow',
        'FrontHPApp.view.main.mainmarketing.window.GarantorWindow',
        'FrontHPApp.view.main.mainmarketing.window.CommHiringWindow',
        'FrontHPApp.view.main.mainmarketing.window.CommInsWindow',
        'FrontHPApp.view.main.mainmarketing.window.ComSpecialWindow',
        'FrontHPApp.view.main.mainmarketing.window.LeadWindow',
        'FrontHPApp.view.main.mainmarketing.window.InsuranceWindow',
        'FrontHPApp.view.main.mainmarketing.window.TypeCardWindow',
        'FrontHPApp.view.main.mainmarketing.window.SubsidyWindow',
        'FrontHPApp.view.main.mainmarketing.window.StatusInfoWindow',
        'FrontHPApp.view.main.mainmarketing.window.CustomeraddressWindow',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'windowmainapp'
    },
    autoShow: true,
    scrollable: false,
    layout: 'border',
    title: 'รายละเอียดของเลขที่ใบคำขอ',
    maximized: true,

    items: [
        {
            xtype: 'tabpanel',
            region: 'center',
            activeTab: 0,
            plain: true,
            items: [
                {
                    xtype: 'mainmainmarketingwindowrequestcustomerrequestcustomerwindow',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-person'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowgarantorwindow',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-garanter'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowcommhiringwindow',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-comHir'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowcomminswindow',
                    scrollable: true,
                    title: 'Comm. Ins',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-comIns'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowcomspecialwindow',
                    title: 'ค่าส่งเสริมการขายพิเศษ',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-comSpe'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowleadwindow',
                    scrollable: true,
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-lead'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowinsurancewindow',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-insurance'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowtypecardwindow',
                    scrollable: true,
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-card'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowsubsidywindow',
                    scrollable: true,
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-subsidy'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowstatusinfowindow',
                    scrollable: true,
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-status'
                    }
                },
                {
                    xtype: 'mainmainmarketingwindowcustomeraddressWindow',
                    iconCls: '',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'icon-address'
                    }
                }
            ]
        }
    ]

});