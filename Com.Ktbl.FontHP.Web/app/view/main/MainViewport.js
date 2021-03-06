/*
 * File: app/view/main/MainViewport.js
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

Ext.define('FrontHPApp.view.main.MainViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainmainviewport',

    requires: [
        'FrontHPApp.view.main.MainViewportViewModel',
        'FrontHPApp.view.main.home.Indox',
        'FrontHPApp.view.main.mainmarketing.MarketingTab',
        'FrontHPApp.view.main.mainmarketing.MktLimit60Tab',
        'FrontHPApp.view.main.maincheckdoc.CheckDocumentTab',
        'FrontHPApp.view.main.maincheckdoc.DocumentHistoryTab',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'mainmainviewport'
    },
    layout: 'border',

    items: [
        {
            xtype: 'tabpanel',
            region: 'center',
            ui: 'navigation',
            activeTab: 0,
            items: [
                //{
                //    xtype: 'mainhomeindox',
                //    hidden: true
                //},
                {
                    xtype: 'panel',
                    layout: 'border',
                    bodyPadding: 0,
                    title: 'เจ้าหน้าที่การตลาด',
                    items: [
                        {
                            xtype: 'tabpanel',
                            region: 'center',
                            bodyPadding: 5,
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'mainmainmarketingmarketingtab',
                                    title: 'เจ้าหน้าที่การตลาด'
                                },
                                {
                                    xtype: 'mainmainmarketingmktlimit60tab',
                                    title: 'ยืนยันยกเลิกคำขอเกิน 60 วัน'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'border',
                    title: 'ตรวจสอบเอกสาร',
                    items: [
                        {
                            xtype: 'tabpanel',
                            region: 'center',
                            bodyPadding: 5,
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'mainmaincheckdoccheckdocumenttab',
                                    tabConfig: {
                                        xtype: 'tab',
                                        iconCls: 'icon-paperChk'
                                    }
                                },
                                {
                                    xtype: 'mainmaincheckdocdocumenthistorytab',
                                    title: 'ประวัติการตรวจสอบเอกสาร',
                                    tabConfig: {
                                        xtype: 'tab',
                                        iconCls: 'icon-history'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});