/*
 * File: app/model/Insurance/CompulsoryModel.js
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

Ext.define('FrontHPApp.model.Insurance.CompulsoryModel', {
    extend: 'Ext.data.Model',
    alias: 'model.compulsorymodel',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'int',
            name: 'RequestNo',
            mapping: 'CompulsoryModel.RepuestNo'

        },
        {
            type: 'string',
            name: 'CompusaryInsCompany',
            mapping: 'CompulsoryModel.CompusaryInsCompany'
        },
        {
            name: 'SSType'
        },
        {
            type: 'string',
            name: 'PrbPoicy'
        },
        {
            type: 'string',
            name: 'CompusaryStart'
        },
        {
            type: 'string',
            name: 'CompusaryEnd'
        },
        {
            type: 'int',
            name: 'SSPrb'
        },
        {
            name: 'WHStatutes'
        },
        {
            type: 'int',
            name: 'CompusaryStamp'
        },
        {
            type: 'int',
            name: 'CompusaryFee'
        },
        {
            type: 'int',
            name: 'SSWih'
        },
        {
            name: 'Campaign'
        },
        {
            type: 'int',
            name: 'Comm'
        },
        {
            type: 'int',
            name: 'Discount'
        },
        {
            type: 'int',
            name: 'Promotion'
        },
        {
            type: 'int',
            name: 'PromotionDiscount'
        }
    ]
});