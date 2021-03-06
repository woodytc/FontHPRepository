/*
 * File: app/view/main/mainmarketing/window/CustomeraddressWindow.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.CustomeraddressWindow', {
    extend: 'Ext.panel.Panel',
    // alias: 'widget.mainmainmarketingwindowcustomeraddresswindow',
    alias: 'widget.customeraddresstab',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.CustomeraddressWindowViewModel',
        'FrontHPApp.view.main.mainmarketing.window.CustomeraddressWindowViewController',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
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

    controller: 'mainmainmarketingwindowcustomeraddresswindow',
    viewModel: {
        type: 'mainmainmarketingwindowcustomeraddresswindow'
    },
    autoShow: true,
    scrollable: false,
    layout: 'border',
    title: 'ข้อมูลที่อยู่',
    titleAlign: 'center',

    items: [
        {
            xtype: 'form',
            region: 'north',
            reference: 'form',
            itemId: 'myform1',
            scrollable: false,
            bodyPadding: 10,
            title: '',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190,
                        afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    },
                    title: 'ที่อยู่',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            colspan: 2,
                            fieldLabel: 'ประเภทลูกค้า',
                            labelCls: 'text-require',
                            name: 'CutomerType',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.TypeCustomerStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ประเภทที่อยู่',
                            colspan: 2,
                            width: 490,
                            labelCls: 'text-require',
                            name: 'AddressType',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.TypeAddressStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            fieldLabel: 'หมายเลขบ้าน',
                            labelCls: 'text-require',
                            name: 'RegistNo',
                            emptyText: '[หมายเลขบ้าน]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'บริษัทที่ทำงาน และ เลขที่',
                            labelCls: 'text-require',
                            name: 'AddressNo',
                            emptyText: '[บริษัทที่ทำงาน และ เลขที่]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'หมู่',
                            name: 'Moo',
                            emptyText: '[หมู่]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'หมู้บ้าน/อาคาร',
                            name: 'MooBaan',
                            emptyText: '[หมู้บ้าน/อาคาร]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'ซอย',
                            name: 'Soi',
                            emptyText: '[ซอย]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                '  '
                            ],
                            fieldLabel: 'ถนน',
                            name: 'Street',
                            emptyText: '[ถนน]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'จังหวัด',
                            reference: 'province',
                            labelCls: 'text-require',
                            autoLoadOnValue: true,
                            name: 'Province',
                            emptyText: '[จังหวัด]',
                            displayField: 'Name',
                            store: 'provinceModels',
                            valueField: 'id',
                            listeners: {
                                change: 'onProvinceChange'
                            }

                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'อำเภอ',
                            reference: 'district',
                            labelCls: 'text-require',
                            autoLoadOnValue: true,
                            name: 'Amphur',
                            emptyText: '[อำเภอ]',
                            displayField: 'Name',
                            store: 'districtModels',
                            valueField: 'id',
                            listeners: {
                                change: 'onDistrictChange'
                            }
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ตำบล',
                            labelCls: 'text-require',
                            reference: 'subdistrict',
                            autoLoadOnValue: true,
                            name: 'Tambon',
                            emptyText: '[ตำบล]',
                            displayField: 'Name',
                            store: 'subDistrictModels',
                            valueField: 'id',
                            listeners: {
                                change: 'onSubDistrictChange'
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'รหัสไปรษณีย์',
                            labelCls: 'text-require',
                            name: 'ZipCode',
                            emptyText: '[รหัสไปรษณีย์]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                '  '
                            ],
                            fieldLabel: 'โทรศัพท์',
                            name: 'PhoneNo',
                            emptyText: '[โทรศัพท์]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'แฟกซ์',
                            name: 'FaxNo',
                            emptyText: '[แฟกซ์]'
                        },
                        {
                            xtype: 'datefield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'อาศัยตั้งแต่',
                            name: 'StayFromDate',
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
                            name: 'Mobile',
                            emptyText: '[โทรศัพท์มือถือ]'
                        },
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                ' '
                            ],
                            fieldLabel: 'โทรศัพท์อื่นๆ',
                            name: 'PhoneOther',
                            emptyText: '[โทรศัพท์อื่นๆ]'
                        },
                        {
                              // xtype: 'hiddenfield',
                              xtype: 'hiddenfield',
                              name: 'id',
                              value: 'hidden field'
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
            region: 'center',
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
                   dataIndex: 'AddressType',
                   text: 'ประเภทที่อยู่'
               },
               {
                   xtype: 'gridcolumn',
                   dataIndex: 'Address',
                   text: 'ที่อยู่',
                   flex: -1
               },
               {
                   xtype: 'gridcolumn',
                   dataIndex: 'PhoneNo',
                   text: 'โทรศัพท์'
               },
               {
                   xtype: 'gridcolumn',
                   dataIndex: 'FaxNo',
                   text: 'แฟกซ์'
               },
               {
                   xtype: 'gridcolumn',
                   renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                       return Ext.Date.format(value, 'd/m/Y');
                   },
                   dataIndex: 'StayFromDate',
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
                                click: 'onEditClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            iconCls: 'icon-delete',
                            text: 'ลบ',
                            listeners: {
                                click: 'onDeleteClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    store: 'addressCusModels',
                    displayInfo: true
                }
            ],
            selModel: {
                selType: 'checkboxmodel'
            },
            listeners: {
                itemdblclick: 'onItemDblClick'
            },
        }
    ]

});