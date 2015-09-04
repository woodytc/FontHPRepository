/*
 * File: app/view/main/mainmarketing/window/GarantorWindow.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.GarantorWindow', {
    extend: 'Ext.panel.Panel',
    //change name alias 20150828
    //alias: 'widget.mainmainmarketingwindowgarantorwindow',
    alias: 'widget.garantorwindow',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.GarantorWindowViewModel',
        'FrontHPApp.view.main.mainmarketing.window.GarantorWindowViewController',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.XTemplate',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Display',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.Number',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Paging'
    ],

    controller: 'mainmainmarketingwindowgarantorwindow',
    viewModel: {
        type: 'mainmainmarketingwindowgarantorwindow'
    },
    scrollable: true,
    title: 'ข้อมูลผู้ค้ำประกัน',

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
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190
                    },
                    title: 'ข้อมูลผู้ค้ำประกัน',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'เลขที่บัตรประชาชน',
                            labelCls: 'text-require',
                            name: 'GuarCitizenID',
                            allowBlank: false,
                            emptyText: '[เลขที่บัตรประชาชน]'
                        },
                        {
                            xtype: 'fieldcontainer',
                            colspan: 2,
                            layout: 'table',
                            fieldLabel: '',
                            labelAlign: 'right',
                            labelWidth: 200,
                            items: [
                                {
                                    xtype: 'combobox',
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'ชื่อ-นามสกุลผู้ต้ำประกัน',
                                    labelAlign: 'right',
                                    labelCls: 'text-require',
                                    labelWidth: 190,
                                    name: 'GuarTitleName',
                                    allowBlank: false,
                                    emptyText: '[เลือก]',
                                    displayField: 'Name',
                                    store: 'combo.TitleStore',
                                    valueField: 'id'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    name: 'GuarFNameTh',
                                    allowBlank: false,
                                    emptyText: '[ชื่อ]'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 185,
                                    fieldLabel: '',
                                    name: 'GuarLNameTh',
                                    allowBlank: false,
                                    emptyText: '[นามสกุล]'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'วัน/เดือน/ปีเกิด',
                            labelCls: 'text-require',
                            name: 'GuarBirthDate',
                            allowBlank: false,
                            emptyText: '[วัน/เดือน/ปีเกิด]'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'table',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 230,
                                    fieldLabel: 'อายุ',
                                    labelAlign: 'right',
                                    labelWidth: 190,
                                    name: 'GuarAgeYear',
                                    emptyText: '[ปี]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'ปี'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 50,
                                    fieldLabel: '',
                                    name: 'GuarAgeMonth',
                                    emptyText: '[เดือน]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'เดือน'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'วันที่บัตรหมดอายุ',
                            name: 'GuarExpiryDate',
                            emptyText: '[วันที่บัตรหมดอายุ]'
                        },
                        {
                            xtype: 'datefield',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'วันที่ออกบัตร',
                            labelCls: 'text-require',
                            name: 'CitizenStartDate',
                            allowBlank: false,
                            emptyText: '[วันที่ออกบัตร]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'สถานที่ออกบัตร',
                            name: 'CitizenPlace',
                            emptyText: '[สถานที่ออกบัตร]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'สัญชาติ',
                            name: 'GuarNationality',
                            allowBlank: false,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.RegionStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'เชื้อชาติ',
                            allowBlank: false,
                            emptyText: '[เชื้อชาติ]',
                            displayField: 'Name',
                            store: 'combo.RegionStore',
                            valueField: 'id',
                            name: 'GuarRace'

                        },
                        {
                            xtype: 'radiogroup',
                            width: 326,
                            fieldLabel: 'เพศ',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'GuarGender',
                                    boxLabel: 'ชาย'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'GuarGender',
                                    boxLabel: 'หญิง'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190
                    },
                    title: 'ความสัมพันธ์กับผู้เช่าซื้อ',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            afterLabelTextTpl: [
                                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                            ],
                            fieldLabel: 'ความสัมพันธ์กับผู้เช่าซื้อ',
                            width: 400,
                            labelCls: 'text-require',
                            name: 'RelativeDebtor',
                            allowBlank: false,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.RelationCustomerStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'เบอร์โทรศัพท์พื้นฐาน',
                            name: 'GuarHomePhone',
                            emptyText: '[เบอร์โทรศัพท์พื้นฐาน]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'เบอร์โทรศัพท์มือถือ',
                            name: 'GuarMobilePhone',
                            emptyText: '[เบอร์โทรศัพท์มือถือ]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ลักษณะที่พักอาศัย',
                            width: 490,
                            colspan: 3,
                            name: 'GuarResidentOwn',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.TypeResidenceStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ระบุ',
                            colspan: 3,
                            width: 490,
                            name: 'GuarResidentOwnDetail',
                            emptyText: '[ระบุ]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ที่อยู่ปัจจุบันตรงตามทะเบียนบ้าน',
                            width: 400,
                            name: 'GuarResidentStatus',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.AdressByHomeStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'table',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 230,
                                    fieldLabel: 'ระยะเวลาที่พักอาศัย',
                                    labelAlign: 'right',
                                    labelWidth: 190,
                                    name: 'GuarResidentYear',
                                    emptyText: '[ปี]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'ปี',
                                   
                                },
                                {
                                    xtype: 'textfield',
                                    width: 50,
                                    fieldLabel: '',
                                    name: 'GuarResidentMonth',
                                    emptyText: '[เดือน]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'เดือน'
                                }
                            ]
                         },
                        
                        {
                            xtype: 'combobox',
                            colspan: 2,
                            fieldLabel: 'สถานะตามทะเบียนบ้าน',
                            name: 'GuarResidentRegStatus',
                            allowBlank: false,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.StatusByHomeStore',
                            valueField: 'id'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190
                    },
                    title: 'ข้อมูลอาชีพ',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'table',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 225,
                                    fieldLabel: 'อายุงานรวม',
                                    labelAlign: 'right',
                                    labelWidth: 190,
                                    name: 'GuarWorkPeriodAllYear',
                                    emptyText: '[ปี]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'ปี'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 50,
                                    fieldLabel: '',
                                    name: 'GuarWorkPeriodAllMonth',
                                    emptyText: '[เดือน]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'เดือน'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            colspan: 2,
                            layout: 'table',
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 225,
                                    fieldLabel: 'อายุงานปัจจุบัน',
                                    labelAlign: 'right',
                                    labelWidth: 190,
                                    name: 'GuarWorkPeriodCurrentYear',
                                    emptyText: '[ปี]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'ปี'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 50,
                                    fieldLabel: '',
                                    name: 'GuarWorkPeriodCurrentMonth',
                                    emptyText: '[เดือน]'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '0 5 5 5',
                                    fieldLabel: '',
                                    value: 'เดือน'
                                }
                            ]
                        },
                        //add by Tel office p2p 20150958
                         {
                             xtype: 'textfield',
                             fieldLabel: 'เบอร์โทรศัพท์ที่ทำงาน',
                             colspan: 3,
                             name: 'GuarOfficePhone',
                             emptyText: '[เบอร์โทรศัพท์ที่ทำงาน]'
                         },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'หมวดอาชีพ',
                            colspan: 3,
                            name: 'GuarOccupationType',
                            allowBlank: false,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.OccupationCatelogyStore',
                            valueField: 'id',
                            reference: 'occupationcatelogy',
                            autoLoadOnValue: true,
                            listeners: {
                                change: 'onOccupationCatelogyChange'
                            }
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'กลุ่มอาชีพ',
                            colspan: 3,
                            name: 'GuarOccupationGroup',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.OccupationGroupStore',
                            valueField: 'id',
                            reference: 'occupationGroup',
                            autoLoadOnValue: true,
                            listeners: {
                                change: 'onOccupationGroupChange'
                            }
                        },
                        {
                            xtype: 'combobox',
                            width: '',
                            fieldLabel: 'ประเภทอาชีพ',
                            colspan: 3,
                            width: 800,
                            name: 'GuarOccupationCode',
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.OccupationCareerStore',
                            valueField: 'id',
                            autoLoadOnValue: true,
                            reference: 'occupationcareer',
                            listeners: {
                                change: 'onOccupationCareerChange'
                            }
                        },
                        {
                            xtype: 'combobox',
                            width: '',
                            fieldLabel: 'ตำแหน่ง',
                            colspan: 3,
                            name: 'GuarPosition',
                            width: 800,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.PositionStore',
                            valueField: 'id',
                            reference: 'position'

                        },
                        {
                            xtype: 'textfield',
                            width: '',
                            fieldLabel: 'สถานที่ทำงาน',
                            colspan: 3,
                            width: 800,
                            name: 'OccPlace',
                            emptyText: '[สถานที่ทำงาน]'
                        },
                        {
                            xtype: 'textfield',
                            width: 800,
                            fieldLabel: 'รายละเอียดอาชีพ',
                            name: 'OccDetail',
                            emptyText: '[รายละเอียดอาชีพ]'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 190
                    },
                    title: 'รายละเอียดคู่สมรส',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ชื่อ/สกุล',
                            name: 'GuarMateName',
                            emptyText: '[ชื่อ/สกุล]'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'กลุ่มอาชีพ',
                            name: 'GuarMateOccupationGroup',
                            allowBlank: false,
                            emptyText: '[เลือก]',
                            displayField: 'Name',
                            store: 'combo.OccupationMarryGroupStore',
                            valueField: 'id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'สถานที่ทำงาน',
                            width: 400,
                            name: 'GuarMateOccPlace',
                            emptyText: '[สถานที่ทำงาน]'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'รายได้',
                            name: 'GuarMateIncome',
                            emptyText: '[รายได้]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ตำแหน่ง',
                            name: 'GuarMateOccPosition',
                            emptyText: '[ตำแหน่ง]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'อายุงาน',
                            width: 400,
                            name: 'GuarMateWorkPeriod',
                            emptyText: '[อายุงาน]'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'โทรศัพท์',
                            name: 'GuarMateTelephone',
                            emptyText: '[โทรศัพท์]'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'ค่าใช้จ่ายต่อเดือน',
                            name: 'MateExpense',
                            emptyText: '[ค่าใช้จ่ายต่อเดือน]'
                        },
                        {
                                   
                            xtype: 'textfield',
                            name: 'id',
                            value: '0'
                        },
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
                            margins: '',
                            margin: '0 5 0 5',
                            iconCls: 'icon-save',
                            text: 'บันทึกข้อมูล',
                            listeners: {
                                click: 'onSaveClick'
                            }
                        },
                        {
                            xtype: 'button',
                            margins: '',
                            margin: '0 5 0 5',
                            iconCls: 'icon-address',
                            text: 'บันทึกข้อมูลที่อยู่',
                            listeners: {
                                click: 'onSaveAddressClick1'
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'icon-card',
                            text: 'บันทึกข้อมูลบัตร',
                            listeners: {
                                click: 'onSaveCardClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            itemId: 'GridGarantor',
            collapsible: false,
            title: 'ข้อมูลผู้ค้ำประกัน',
            store: 'gurantorGridModels',
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
                    dataIndex: 'GuarCitizenID',
                    text: 'เลขที่บัตรประชาชน'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NameGarantor',
                    text: 'ชื่อ-นามสกุลผู้ค้ำประกัน',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RelativeDebtor',
                    text: 'ความสัมพันธ์ผู้เช่าซื้อ'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        console.log(record);
                        return Ext.Date.format(value, 'd/m/Y');
                    },
                    dataIndex: 'GuarBirthDate',
                    text: 'วัน/เดือน/ปีเกิด'
                },
                {
                    xtype: 'gridcolumn',
                    width: 140,
                    dataIndex: 'GuarHomePhone',
                    text: 'เบอร์โทรศัพท์พื้นฐาน'
                },

               
               
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
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
                                click: 'onDeleteGridClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 380,
                    displayInfo: true,
                    store: 'gurantorGridModels',
                }
            ],
            selModel: {
                selType: 'checkboxmodel'
            },
            listeners: {
                itemdblclick: 'onItemDblClick'
            }
        }
    ]

});