/*
 * File: app/view/main/maincheckdoc/DocumentHistoryTab.js
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

Ext.define('FrontHPApp.view.main.maincheckdoc.DocumentHistoryTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmaincheckdocdocumenthistorytab',

    requires: [
        'FrontHPApp.view.FrmGarantorViewModel9',
        'FrontHPApp.view.FrmGarantorViewController9',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.XTemplate',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging'
    ],

    controller: 'mainmaincheckdocdocumenthistorytab',
    viewModel: {
        type: 'mainmaincheckdocdocumenthistorytab'
    },
    layout: 'border',
    title: '',

    dockedItems: [
        {
            xtype: 'form',
            dock: 'top',
            reference: 'form',
            itemId: 'formHistoryPaper',
            iconCls: 'icon-details',
            title: 'ประวัติการตรวจสอบเอกสาร',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'container',
                    width: 650,
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 130
                    },
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            margin: '5 0 5 0',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'วันที่ใบคำขอจาก',
                            labelAlign: 'right',
                            emptyText: '[วว/ดด/ปปปป]'
                        },
                        {
                            xtype: 'datefield',
                            margin: '5 0 5 0',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'ถึงวันที่ใบคำขอ',
                            labelAlign: 'right',
                            emptyText: '[วว/ดด/ปปปป]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ชื่อ-นามสกุลผู้เช่าซื้อ',
                            labelAlign: 'right',
                            emptyText: '[ชื่อ-นามสกุลผู้เช่าซื้อ]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'สถานะใบคำขอ',
                            labelAlign: 'right',
                            emptyText: '[สถานะใบคำขอ]',
                            displayField: 'Name',
                            store: 'RequestStatusStores',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'เลขที่ใบคำขอ',
                            labelAlign: 'right',
                            emptyText: '[เลขที่ใบคำขอ]'
                        },
                        {
                            xtype: 'textfield',
                            width: '',
                            fieldLabel: 'เลขที่บัตรประชาชน',
                            labelAlign: 'right',
                            emptyText: '[เลขที่บัตรประชาชน]'
                        },
                        {
                            xtype: 'combobox',
                            colspan: 2,
                            width: '',
                            fieldLabel: 'สาขา',
                            labelAlign: 'right',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'BranchStore',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            height: 35,
                            width: 620,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '0 5 0 5',
                                    iconCls: 'icon-find',
                                    text: 'ค้นหาข้อมูล'
                                },
                                {
                                    xtype: 'button',
                                    margins: '10 0 10 0',
                                    iconCls: 'icon-reset',
                                    text: 'เคลียร์',
                                    listeners: {
                                        click: 'onClearClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            margins: '10 0 10 0',
            region: 'center',
            split: false,
            scrollable: true,
            collapsible: false,
            iconCls: 'icon-details',
            title: 'ข้อมูลประวัติการตรวจสอบเอกสาร',
            store: 'historyCheckDocumentModels',
            viewConfig: {
                height: 197,
                width: ''
            },
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 45,
                    align: 'center',
                    text: '#',
                    tooltip: 'ลำดับ'
                },
                {
                    xtype: 'gridcolumn',
                    width: '',
                    dataIndex: 'RequestNo',
                    text: 'เลขที่ใบคำขอ'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return Ext.Date.format(value, 'd/m/Y');
                    },
                    width: '',
                    dataIndex: 'RequestDate',
                    text: 'วันที่ใบคำขอ'
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'CitizenId',
                    text: 'เลขที่บัตรประชาชน'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CusName',
                    text: 'ชื่อ-นามสกุลผู้เช่าซื้อ',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NCBStatus',
                    text: 'สถานะ NCB'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RequestStatus',
                    text: 'สถานะใบคำขอ'
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