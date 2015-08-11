/*
 * File: app/model/BrowsePaperMyModel.js
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

Ext.define('FrontHPApp.model.BrowsePaperMyModel', {
    extend: 'Ext.data.Model',
    alias: 'model.browsepapermymodel',

    requires: [
        'Ext.data.field.Date'
    ],

    fields: [
        {
            name: 'IDNum'
        },
        {
            name: 'TypePaper'
        },
        {
            name: 'Order'
        },
        {
            name: 'FileName'
        },
        {
            name: 'Delete'
        },
        {
            name: 'Remark'
        },
        {
            type: 'date',
            name: 'Date'
        }
    ]
});