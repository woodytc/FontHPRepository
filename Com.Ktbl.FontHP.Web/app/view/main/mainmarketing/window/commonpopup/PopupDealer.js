/*
 * File: app/view/main/mainmarketing/window/commonpopup/PopupDealer.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupDealer', {
    extend: 'Ext.window.Window',
    alias: 'widget.popupdealer',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupDealerViewModel',
        'FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupDealerViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging'
    ],

    controller: 'mainmainmarketingwindowcommonpopuppopupdealer',
    viewModel: {
        type: 'mainmainmarketingwindowcommonpopuppopupdealer'
    },
    autoShow: true,
    width: 800,
    title: 'ค้นหาข้อมูลผู้แทนจำหน่ายรถยนตร์',
    titleAlign: 'center',

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
                    title: 'ค้นหาข้อมูลผู้แทนจำหน่ายรถยนตร์',
                    layout: {
                        type: 'table',
                        columns: 1
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'รหัสผู้แทนจำหน่ายรถยนตร์',
                            name: 'QDealerCode',
                            emptyText: '[รหัสผู้แทนจำหน่ายรถยนตร์]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ผู้แทนจำหน่ายรถยนตร์',
                            name: 'QDealerName',
                            emptyText: '[ผู้แทนจำหน่ายรถยนตร์]'
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
                            iconCls: 'icon-reset',
                            text: 'ค้นหาข้อมูล',
                            listeners: {
                                click: 'onFindClick'
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '0 5 0 5',
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
            title: 'ข้อมูลผู้แทนจำหน่ายรถยนตร์',
            store: 'dealerSelectModels',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 45,
                    text: 'ลำดับ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DealerCode',
                    text: 'รหัส'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DealerName',
                    text: 'ผู้แทนจำหน่ายรถยนตร์',
                    flex: -1
                }
            ],
            listeners: {
                itemdblclick: 'onItemDblClick'
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'dealerSelectModels'
                }
            ]
        }
    ]

});