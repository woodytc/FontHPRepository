/*
 * File: app/store/comInsModels.js
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

Ext.define('FrontHPApp.store.comInsModels', {
    extend: 'Ext.data.Store',
    alias: 'store.cominsmodels',

    requires: [
        'FrontHPApp.model.ComInsModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'comInsModels',
            model: 'FrontHPApp.model.ComInsModel',
            data: [
                {
                    id: 364,
                    DealerName: 'assumenda',
                    'Pay Commission To ': 'aperiam',
                    'Absorb Tax ': true,
                    'Commission Amount ': 919.74,
                    VAT: 257.53,
                    'Amount Include VAT ': 9.61,
                    'With Hold Tax Amount ': 328.95,
                    'Net Paid ': 602.44
                },
                {
                    id: 820,
                    DealerName: 'atque',
                    'Pay Commission To ': 'unde',
                    'Absorb Tax ': true,
                    'Commission Amount ': 792.28,
                    VAT: 592.26,
                    'Amount Include VAT ': 322.88,
                    'With Hold Tax Amount ': 351.02,
                    'Net Paid ': 124.31
                },
                {
                    id: 504,
                    DealerName: 'sunt',
                    'Pay Commission To ': 'quidem',
                    'Absorb Tax ': false,
                    'Commission Amount ': 696.63,
                    VAT: 362.72,
                    'Amount Include VAT ': 598.14,
                    'With Hold Tax Amount ': 271.45,
                    'Net Paid ': 624.86
                },
                {
                    id: 954,
                    DealerName: 'illo',
                    'Pay Commission To ': 'voluptatem',
                    'Absorb Tax ': false,
                    'Commission Amount ': 67.69,
                    VAT: 480.94,
                    'Amount Include VAT ': 562.17,
                    'With Hold Tax Amount ': 837.21,
                    'Net Paid ': 940.61
                },
                {
                    id: 419,
                    DealerName: 'consequatur',
                    'Pay Commission To ': 'minima',
                    'Absorb Tax ': true,
                    'Commission Amount ': 124.89,
                    VAT: 928.54,
                    'Amount Include VAT ': 461.84,
                    'With Hold Tax Amount ': 993.38,
                    'Net Paid ': 602.74
                },
                {
                    id: 373,
                    DealerName: 'nihil',
                    'Pay Commission To ': 'minima',
                    'Absorb Tax ': true,
                    'Commission Amount ': 329.63,
                    VAT: 347.61,
                    'Amount Include VAT ': 112.01,
                    'With Hold Tax Amount ': 492.58,
                    'Net Paid ': 526.29
                },
                {
                    id: 699,
                    DealerName: 'qui',
                    'Pay Commission To ': 'quas',
                    'Absorb Tax ': false,
                    'Commission Amount ': 263.04,
                    VAT: 586.43,
                    'Amount Include VAT ': 315.98,
                    'With Hold Tax Amount ': 275.55,
                    'Net Paid ': 619.45
                },
                {
                    id: 694,
                    DealerName: 'quidem',
                    'Pay Commission To ': 'omnis',
                    'Absorb Tax ': false,
                    'Commission Amount ': 253.04,
                    VAT: 563.25,
                    'Amount Include VAT ': 152.56,
                    'With Hold Tax Amount ': 457.45,
                    'Net Paid ': 545.67
                },
                {
                    id: 934,
                    DealerName: 'explicabo',
                    'Pay Commission To ': 'inventore',
                    'Absorb Tax ': false,
                    'Commission Amount ': 257.78,
                    VAT: 958.64,
                    'Amount Include VAT ': 524.53,
                    'With Hold Tax Amount ': 857.34,
                    'Net Paid ': 814.21
                },
                {
                    id: 860,
                    DealerName: 'molestias',
                    'Pay Commission To ': 'esse',
                    'Absorb Tax ': false,
                    'Commission Amount ': 778.51,
                    VAT: 63.78,
                    'Amount Include VAT ': 66.05,
                    'With Hold Tax Amount ': 341.32,
                    'Net Paid ': 650.43
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});