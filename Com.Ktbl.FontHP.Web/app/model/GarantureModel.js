/*
 * File: app/model/GarantureModel.js
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

Ext.define('FrontHPApp.model.GarantureModel', {
    extend: 'Ext.data.Model',
    alias: 'model.garanturemodel',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            type: 'int',
            name: 'CID'
        },
        {
            type: 'int',
            name: 'TittleID'
        },
        {
            name: 'FirstName'
        },
        {
            type: 'string',
            name: 'LastName'
        },
        {
            type: 'date',
            name: 'BirthDate'
        },
        {
            type: 'date',
            name: 'ExpireDate'
        },
        {
            name: 'CardDate'
        },
        {
            type: 'string',
            name: 'CardExpireDate'
        },
        {
            type: 'string',
            name: 'Nation'
        },
        {
            type: 'string',
            name: 'Region'
        },
        {
            name: 'Sex'
        }
    ]
});