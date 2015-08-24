/*
 * File: app/view/main/mainmarketing/window/InsuranceWindow.js
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

Ext.define('FrontHPApp.view.main.mainmarketing.window.InsuranceWindow', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mainmainmarketingwindowinsurancewindow',

    requires: [
        'FrontHPApp.view.main.mainmarketing.window.InsuranceWindowViewModel',
        'FrontHPApp.view.main.mainmarketing.window.InsuranceWindowViewController',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.XTemplate',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.TextArea',
        'Ext.panel.Panel',
        'Ext.form.FieldContainer',
        'Ext.button.Button'
    ],

    controller: 'mainmainmarketingwindowinsurancewindow',
    viewModel: {
        type: 'mainmainmarketingwindowinsurancewindow'
    },
    scrollable: true,
    bodyPadding: 10,
    title: 'ประกันภัย',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'fieldset',
            defaults: {
                labelAlign: 'right',
                labelWidth: 160,
                margin: '5 0 0 0'
            },
            collapsible: true,
            title: 'ประกันภัย',
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'textfield',
                    colspan: 3,
                    margin: '5 0 0 0',
                    fieldLabel: 'ผู้รับผลประโยชน์',
                    emptyText: '[ผู้รับผลประโยชน์]'
                },
                {
                    xtype: 'combobox',
                    margin: '5 0 0 0',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'แจ้งประกันโดย',
                    colspan: 3,
                   
                    labelCls: 'text-require',
                    allowBlank: false,
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.TellInsuranceStore',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    margin: '5 0 0 0',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'เงื่อนไขการชำระค่าประกันภัย',
                    colspan: 3,
                    width: 490,
                    labelCls: 'text-require',
                    allowBlank: false,
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.ConditionInsuranceStore',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    margin: '5 0 0 0',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'บริษัทประกันภัย',
                    width: 490,
                    labelCls: 'text-require',
                    allowBlank: false,
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.CompanyInsuranceStore',
                    valueField: 'id'
                },
                {
                    xtype: 'textfield',
                    colspan: 3,
                    margin: '5 0 0 0',
                    fieldLabel: 'เลขที่รับแจ้ง',
                    emptyText: '[เลขที่รับแจ้ง]'
                },
                {
                    xtype: 'textfield',
                    margin: '5 0 0 0',
                    fieldLabel: 'ผู้รับแจ้ง',
                    emptyText: '[ผู้รับแจ้ง]'
                },
                {
                    xtype: 'datefield',
                    margin: '5 0 0 0',
                    fieldLabel: 'วันที่รับแจ้ง',
                    emptyText: '[วว/ดด/ปปปป]',
                    format: 'd/m/Y'
                },
                {
                    xtype: 'textfield',
                    margin: '5 0 0 0',
                    fieldLabel: 'เลขที่กรมธรรม์',
                    emptyText: '[เลขที่กรมธรรม์]'
                },
                {
                    xtype: 'datefield',
                    margin: '5 0 0 0',
                    fieldLabel: 'วันที่เริ่มคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]',
                    format: 'd/m/Y'
                },
                {
                    xtype: 'datefield',
                    margin: '5 0 0 0',
                    fieldLabel: 'วันที่สิ้นสุดความคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]',
                    format: 'd/m/Y'
                },
                {
                    xtype: 'textfield',
                    margin: '5 0 0 0',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'ทุนประกันภัย',
                    labelAlign: 'right',
                    labelCls: 'text-require',
                    allowBlank: false,
                    emptyText: '  >=80% ไม่ต่ำกว่ายอดจัด'
                },
                {
                    xtype: 'numberfield',
                    margin: '5 0 0 0',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'เบี้ยประกันภัย',
                    labelCls: 'text-require',
                    emptyText: '[เบี้ยประกันภัย]'
                },
                {
                    xtype: 'textfield',
                    margin: '5 0 0 0',
                    fieldLabel: 'W / H',
                    emptyText: '[W/H]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'แสตมป์',
                    emptyText: '[แสตมป์]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 3,
                    fieldLabel: 'ค่าเบี้ยประกันที่เรียกเก็บ',
                    emptyText: '[ค่าเบี้ยประกันที่เรียกเก็บ]'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'ความเสียหายส่วนแรก',
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.LostInsuranceStore',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'ประเภทประกันที่ต้องการ',
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.TypeInsurancewantStore',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'ซ่อม',
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.RepairStore',
                    valueField: 'id'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'ชื่อผู้ขับขี่ที่ 1',
                    emptyText: '[ชื่อผู้ขับขี่ที่ 1]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วัน/เดือน/ปีเกิด',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'เลขที่ใบขับขี่',
                    emptyText: '[เลขที่ใบขับขี่]'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'ชื่อผู้ขับขี่ที่ 2',
                    emptyText: '[ชื่อผู้ขับขี่ที่ 2]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วัน/เดือน/ปีเกิด',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'เลขที่ใบขับขี่',
                    emptyText: '[เลขที่ใบขับขี่]'
                },
                {
                    xtype: 'textfield',
                    colspan: 3,
                    fieldLabel: 'รหัส Campaign',
                    emptyText: '[รหัส Campaign]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ค่านายหน้า',
                    emptyText: '[ค่านายหน้า]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'ส่วนลดรับ',
                    emptyText: '[ส่วนลดรับ]'
                },
                {
                    xtype: 'numberfield',
                    margin: '5 0 5 0',
                    fieldLabel: 'ค่าส่งเสริมการขายรับ',
                    emptyText: '[ค่าส่งเสริมการขายรับ]'
                },
                {
                    xtype: 'numberfield',
                    margin: '5 0 5 0',
                    fieldLabel: 'ส่วนลดรับ',
                    emptyText: '[ส่วนลดรับ]'
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                labelAlign: 'right',
                labelWidth: 160
            },
            collapsible: true,
            title: 'พรบ.',
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
                    fieldLabel: 'บริษัทประกันภัย',
                    colspan: 2,
                    width: 490,
                    labelCls: 'text-require',
                    allowBlank: false,
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.CompanyInsuranceStore',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    fieldLabel: 'ประเภ่ทความคุ้มครอง',
                    emptyText: '[เลือก]',
                    displayField: 'Name',
                    store: 'combo.TypeInsuranceProtectStore',
                    valueField: 'id'
                },
                {
                    //20150818 p2p
                    //xtype: 'combobox',
                    //fieldLabel: 'เลขที่พรบ',
                    //emptyText: '[เลือก]',
                    //displayField: 'name',
                    //store: 'commonModels',
                    //valueField: 'id'
                    xtype: 'textfield',
                    fieldLabel: 'เลขที่พรบ',
                    emptyText: '[เลขที่พรบ]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วันที่เริ่มคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วันที่สิ้นสุดความคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'เบี้ยพรบ',
                    emptyText: '[เบี้ยพรบ]'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'W/H',
                    emptyText: '[W/H]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'แสตมป์',
                    emptyText: '[แสตมป์]'
                },
                {
                    xtype: 'numberfield',
                    margin: '',
                    fieldLabel: 'ค่าพรบ. ที่เรียกเก็บ',
                    emptyText: '[ค่าพรบ. ที่เรียกเก็บ]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'เบี้ยประกันรวมพรบ',
                    emptyText: '[เบี้ยประกันรวมพรบ]'
                },
                {
                    xtype: 'textfield',
                    colspan: 3,
                    fieldLabel: 'รหัส Campaign',
                    labelAlign: 'right',
                    emptyText: '[รหัส Campaign]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ค่านายหน้า',
                    emptyText: '[ค่านายหน้า]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'ส่วนลดรับ',
                    emptyText: '[ส่วนลดรับ]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ค่าส่งเสริมการขายรับ',
                    emptyText: '[ค่าส่งเสริมการขายรับ]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ส่วนลดรับ',
                    emptyText: '[ส่วนลดรับ]'
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                labelAlign: 'right',
                labelWidth: 160
            },
            collapsible: true,
            title: 'Loan Protection',
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'เลขที่กรมธรรม์',
                    emptyText: '[เลขที่กรมธรรม์]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วันที่เริ่มความคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'วันที่สิ้นสุดความคุ้มครอง',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'เลขที่รับแจ้้ง',
                    emptyText: '[เลขที่รับแจ้้ง]'
                },
                {
                    xtype: 'datefield',
                    colspan: 2,
                    fieldLabel: 'วันที่แจ้งประกัน',
                    emptyText: '[วว/ดด/ปปปป]'
                },
                {
                    xtype: 'textareafield',
                    colspan: 3,
                    width: 531,
                    fieldLabel: 'เหตุผลการไม่อนุมัติ',
                    emptyText: '[เหตุผลการไม่อนุมัติ]'
                }
            ]
        },
        {
            xtype: 'panel',
            hidden: true,
            defaults: {
                labelAlign: 'right',
                labelWidth: 165
            },
            bodyPadding: 5,
            collapsible: false,
            iconCls: 'icon-details',
            title: 'รายละเอียดการประกันภัยรถยนตร์ (KTBLeasing)',
            titleAlign: 'center',
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'เลขถัง',
                    emptyText: '[เลขถัง]'
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    fieldLabel: 'เลขเครื่อง',
                    emptyText: '[เลขเครื่อง]'
                },
                {
                    xtype: 'textfield',
                    colspan: 3,
                    fieldLabel: 'บริษัทประกันภัย',
                    emptyText: '[บริษัทประกันภัย]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 3,
                    fieldLabel: 'ทุนประกันภัย',
                    emptyText: '[ทุนประกันภัย]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ค่าเบี้ยประกันภัย',
                    emptyText: '[ค่าเบี้ยประกันภัย]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'W/H TAX',
                    emptyText: '[W/H TAX]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ค่าเบี้ยประกันสุทธิ',
                    emptyText: '[ค่าเบี้ยประกันสุทธิ]'
                },
                {
                    xtype: 'textfield',
                    colspan: 3,
                    fieldLabel: 'ประเภทเบี้ย',
                    emptyText: '[ประเภทเบี้ย]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 3,
                    fieldLabel: 'ค่าพรบ',
                    emptyText: '[ค่าพรบ]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'W/H TAX',
                    emptyText: '[W/H TAX]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'ค่าพรบสุทธิ',
                    emptyText: '[ค่าพรบสุทธิ]'
                },
                {
                    xtype: 'numberfield',
                    colspan: 3,
                    fieldLabel: 'รวม W/H TAX',
                    emptyText: '[รวม W/H TAX]'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'จำนวนรวมของค่าเบี้ยประกันหลังหัก W/H TAX',
                    emptyText: '[จำนวนรวมของค่าเบี้ยประกันหลังหัก W/H TAX]'
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            margin: '5 0 0 0',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    ui: 'default-small',
                    iconCls: 'icon-save',
                    text: 'บันทึกข้อมูล',
                    listeners: {
                        click: 'onSaveClick'
                    }
                },
                {
                    xtype: 'button',
                    margin: '0 5 0 5',
                    ui: 'default-small',
                    iconCls: 'icon-reset',
                    text: 'เคลียร์',
                    listeners: {
                        click: 'onClearClick'
                    }
                }
            ]
        }
    ]

});