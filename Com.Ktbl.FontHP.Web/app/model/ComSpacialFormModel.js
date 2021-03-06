/*
 * File: app/model/AddressCusModel.js
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

Ext.define('FrontHPApp.model.ComSpacialFormModel', {
    extend: 'Ext.data.Model',
    alias: 'model.comspacialformmodel',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
          
            name: 'MarketingUserShow'
        },
        {
          
            name: 'MarketingNameShow'
        },
        {
           
            name: 'CitizenID'
        },
        {
            
            name: 'BankName'
        },
        {
            name: 'BranchName'
        },
        {
            name: 'AccountNo'
        },
        {
            type: 'float',
            name: 'PayLimitAmt01'
        },
        {
            type: 'float',
            name: 'PayLimitAmt03'
        },
        {
            type: 'float',
            name: 'PayLimitAmtVan'
        },
        {
          
            name: 'PayCommissionTo'
        },
        {
            type: 'float',
            name: 'CommissionAmount'
        },
        {
            type: 'float',
            name: 'CommissionLoan'
        },
        {
            type: 'float',
            name: 'ComTrsAmt'
        },
        {
            type: 'float',
            name: 'CommissionTotal'
        },
        {
            type: 'float',
            name: 'CommissionRate'
        },
        {
            type: 'float',
            name: 'CommissionVAT'
        },
        {
            type: 'float',
            name: 'AmountIncludeVAT'
        },
        {
            type: 'int',
            name: 'LoanIncludeVAT'
        },
        {
            type: 'float',
            name: 'WithHoldTaxAmount'
        },
        {
            type: 'float',
            name: 'NetPaid'
        }
       


    ]
});