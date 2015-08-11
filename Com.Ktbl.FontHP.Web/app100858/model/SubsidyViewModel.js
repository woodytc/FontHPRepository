/*
 * File: app/model/SubsidyViewModel.js
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

Ext.define('FrontHPApp.model.SubsidyViewModel', {
    extend: 'Ext.data.Model',
    alias: 'model.subsidyviewmodel',

    requires: [
        'Ext.data.field.Number'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            name: 'Detail'
        },
        {
            name: 'DESC'
        },
        {
            type: 'float',
            name: 'Amount'
        }
    ]
});