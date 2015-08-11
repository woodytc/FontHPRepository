/*
 * File: app/view/main/mainmarketing/window/commonpopup/PopupCusAddress.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupCusAddress', {
    extend: 'Ext.window.Window',
    alias: 'widget.mainmainmarketingwindowcommonpopuppopupcusaddress',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupCusAddressViewModel',
        'FrontHPApp.view.main.mainmarketing.window.commonpopup.PopupCusAddressViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.XTemplate',
        'Ext.form.field.Date',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging',
        'Ext.selection.CheckboxModel'
    ],

    controller: 'mainmainmarketingwindowcommonpopuppopupcusaddress',
    viewModel: {
        type: 'mainmainmarketingwindowcommonpopuppopupcusaddress'
    },
    autoShow: true,
    width: 800,
    title: 'ข้อมูลที่อยู่',
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
                        labelWidth: 190,
                        afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    },
                    bodyPadding: 5,
                    iconCls: 'icon-details',
                    title: 'ที่อยู่',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ประเภทที่อยู่',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[เลือก]',
                            displayField: 'name',
                            store: 'commonModels',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            fieldLabel: 'หมายเลขบ้าน',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[หมายเลขบ้าน]'
                        },
                        {
                            xtype: 'textfield',
                            width: 390,
                            fieldLabel: 'บริษัทที่ทำงาน และ เลขที่',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[บริษัทที่ทำงาน และ เลขที่]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'หมู่',
                            name: '',
                            emptyText: '[หมู่]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'หมู้บ้าน/อาคาร',
                            name: '',
                            emptyText: '[หมู้บ้าน/อาคาร]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'ซอย',
                            name: '',
                            emptyText: '[ซอย]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                '  '
                            ],
                            fieldLabel: 'ถนน',
                            name: '',
                            emptyText: '[ถนน]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'จังหวัด',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[จังหวัด]',
                            displayField: 'name',
                            store: 'commonModels',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'อำเภอ',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[อำเภอ]',
                            displayField: 'name',
                            store: 'commonModels',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ตำบล',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[ตำบล]',
                            displayField: 'name',
                            store: 'commonModels',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'รหัสไปรษณีย์',
                            labelCls: 'text-require',
                            name: '',
                            emptyText: '[รหัสไปรษณีย์]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                '  '
                            ],
                            fieldLabel: 'โทรศัพท์',
                            name: '',
                            emptyText: '[โทรศัพท์]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'แฟกซ์',
                            name: '',
                            emptyText: '[แฟกซ์]'
                        },
                        {
                            xtype: 'datefield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'อาศัยตั้งแต่',
                            name: '',
                            emptyText: '[อาศัยตั้งแต่]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'โทรศัพท์มือถือ',
                            labelAlign: 'right',
                            labelWidth: 190,
                            name: '',
                            emptyText: '[โทรศัพท์มือถือ]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'โทรศัพท์อื่นๆ',
                            name: 'CardExpireDate',
                            emptyText: '[โทรศัพท์อื่นๆ]'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'icon-save',
                            text: 'บันทึกข้อมูล',
                            listeners: {
                                click: 'onSaveClick'
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
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            text: 'ลบข้อมูล',
                            listeners: {
                                click: 'onDeleteClick'
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
            title: 'ข้อมูลที่อยู่',
            store: 'addressCusModels',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 45,
                    text: 'ลำดับ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'addressType',
                    text: 'ประเภทที่อยู่'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'address',
                    text: 'ที่อยู่',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Tel',
                    text: 'โทรศัพท์'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'fax',
                    text: 'แฟกซ์'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'livebetween',
                    text: 'อาศัยตั้งแต่'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            hidden: true,
                            ui: 'default-small',
                            text: 'เพิ่ม'
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            iconCls: 'icon-edit',
                            text: 'แก้ไข',
                            listeners: {
                                click: 'onEditGridClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            iconCls: 'icon-delete',
                            text: 'ลบ',
                            listeners: {
                                click: 'onDeleteGridClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true
                }
            ],
            selModel: {
                selType: 'checkboxmodel'
            }
        }
    ]

});