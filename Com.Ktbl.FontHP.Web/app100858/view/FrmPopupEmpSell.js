/*
 * File: app/view/FrmPopupEmpSell.js
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

Ext.define('FrontHPApp.view.FrmPopupEmpSell', {
    extend: 'Ext.window.Window',
    alias: 'widget.frmpopupempsell',

    requires: [
        'FrontHPApp.view.FrmComSpecialViewModel6',
        'FrontHPApp.view.FrmComSpecialViewController6',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging'
    ],

    controller: 'frmpopupempsell',
    viewModel: {
        type: 'frmpopupempsell'
    },
    autoShow: true,
    scrollable: true,
    width: 800,
    title: 'ค้นหาข้อมูล',
    titleAlign: 'center',

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
                    title: 'ค้นหาข้อมูลพนักงานขาย/ผจก.ฝ่ายขาย',
                    layout: {
                        type: 'table',
                        columns: 1
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'พนักงานขาย/ผจก.ฝ่ายขาย',
                            name: '',
                            emptyText: '[พนักงานขาย/ผจก.ฝ่ายขาย]'
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
                                click: 'onFindClick'
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
            title: 'ข้อมูลเจ้าหน้าที่การตลาด',
            store: 'marketModels',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 45,
                    text: 'ลำดับ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'codeMarket',
                    text: 'รหัส'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nameMarket',
                    text: 'พนักงานขาย/ผจก.ฝ่ายขาย',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'tel',
                    text: 'เบอร์โทรศัพท์มือถือ',
                    flex: -1
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