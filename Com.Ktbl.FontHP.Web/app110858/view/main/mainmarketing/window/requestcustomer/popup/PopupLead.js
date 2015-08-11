/*
 * File: app/view/main/mainmarketing/window/requestcustomer/popup/PopupLead.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.requestcustomer.popup.PopupLead', {
    extend: 'Ext.window.Window',
    alias: 'widget.mainmainmarketingwindowrequestcustomerpopuppopuplead',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.requestcustomer.popup.PopupLeadViewModel',
        'FrontHPApp.view.main.mainmarketing.window.requestcustomer.popup.PopupLeadViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging'
    ],

    controller: 'mainmainmarketingwindowrequestcustomerpopuppopuplead',
    viewModel: {
        type: 'mainmainmarketingwindowrequestcustomerpopuppopuplead'
    },
    autoShow: true,
    width: 850,
    title: 'ค้นหาข้อมูลผู้แนะนำ',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            reference: 'form',
            itemId: 'myform1',
            scrollable: true,
            bodyPadding: 10,
            title: '',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'form',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190
                    },
                    bodyPadding: 5,
                    iconCls: 'icon-details',
                    title: 'ค้นหาข้อมูลผู้แนะนำ',
                    layout: {
                        type: 'table',
                        columns: 1
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'เลขที่ใบนำเข้า',
                            name: '',
                            emptyText: '[เลขที่ใบนำเข้า]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'รหัสผู้แนะนำ',
                            labelAlign: 'right',
                            labelWidth: 190,
                            name: '',
                            emptyText: '[รหัสผู้แนะนำ]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ผู้แนะนำ',
                            name: 'CardExpireDate',
                            emptyText: '[ผู้แนะนำ]'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    fieldLabel: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            margins: '5 0 0 0',
                            iconCls: 'icon-find',
                            text: 'ค้นหาข้อมูล',
                            listeners: {
                                click: 'onFindLeadClick'
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '0 5 0 5',
                            iconCls: 'icon-reset',
                            text: 'เคลียร์',
                            listeners: {
                                click: 'onClearClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            itemId: 'GridComSpacial',
            scrollable: true,
            collapsible: false,
            iconCls: 'icon-details',
            title: 'ข้อมูลผู้แนะนำ',
            store: 'gridLeadModels',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 45,
                    text: 'ลำดับ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'leadId',
                    text: 'เลขที่ใบนำเข้า'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cusName',
                    text: 'ชื่อลูกค้า'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cusSurname',
                    text: 'นามสกุลลูกค้า',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'leadNo',
                    text: 'รหัสผู้แนะนำ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'leadName',
                    text: 'ชื่อผู้แนะนำ'
                },
                {
                    xtype: 'gridcolumn',
                    width: '',
                    dataIndex: 'leadSurName',
                    text: 'นามสกุลผู้แนะนำ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'branchId',
                    text: 'รหัสสาขา'
                },
                {
                    xtype: 'gridcolumn',
                    width: 75,
                    dataIndex: 'branchName',
                    text: 'ชื่อสาขา'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true
                }
            ]
        }
    ]

});