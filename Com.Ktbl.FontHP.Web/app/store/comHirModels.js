/*
 * File: app/store/comHirModels.js
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

Ext.define('FrontHPApp.store.comHirModels', {
    extend: 'Ext.data.Store',
    alias: 'store.comhirmodels',

    requires: [
        'FrontHPApp.model.ComHirModel',
        'Ext.data.proxy.Memory'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'comhirmodels',
            model: 'FrontHPApp.model.ComHirModel',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/Commision/getgridcomhiringLoad',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
    //constructor: function(cfg) {
    //    var me = this;
    //    cfg = cfg || {};
    //    me.callParent([Ext.apply({
    //        storeId: 'comHirModels',
    //        model: 'FrontHPApp.model.ComHirModel',
    //        data: [
    //            {
    //                id: 842,
    //                ENTCODE: 'et',
    //                DealerName: 'praesentium',
    //                'Pay Commission To': 'hic',
    //                'Absorb Tax ': false,
    //                'Commission Rate ': 650.22,
    //                'Max Rate ': 707.85,
    //                'Commission Term ': 837.25,
    //                'Max Term ': 679,
    //                'Commission VAT No': 826.51,
    //                'อัตราดอกเบี้ย ': 890.29,
    //                'Commission VAT Date ': '9/6/2009',
    //                'Hiring Charge Include VAT ': 565.76,
    //                'Amount VAT ': 977.78,
    //                'Amount Include VAT ': 906.66,
    //                'With Hold Tax Amount ': 726.8,
    //                'Net Paid ': 45.33,
    //                'Standard Interest Rate ': 47.43,
    //                Canpaign: 'facere'
    //            },
    //            {
    //                id: 606,
    //                ENTCODE: 'aut',
    //                DealerName: 'nemo',
    //                'Pay Commission To': 'et',
    //                'Absorb Tax ': false,
    //                'Commission Rate ': 191.75,
    //                'Max Rate ': 681.63,
    //                'Commission Term ': 759.7,
    //                'Max Term ': 225,
    //                'Commission VAT No': 226.14,
    //                'อัตราดอกเบี้ย ': 246.02,
    //                'Commission VAT Date ': '5/25/2008',
    //                'Hiring Charge Include VAT ': 208.39,
    //                'Amount VAT ': 58.41,
    //                'Amount Include VAT ': 203.16,
    //                'With Hold Tax Amount ': 151.49,
    //                'Net Paid ': 699.61,
    //                'Standard Interest Rate ': 969.51,
    //                Canpaign: 'necessitatibus'
    //            },
    //            {
    //                id: 346,
    //                ENTCODE: 'laboriosam',
    //                DealerName: 'in',
    //                'Pay Commission To': 'quos',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 247.23,
    //                'Max Rate ': 98.51,
    //                'Commission Term ': 938.23,
    //                'Max Term ': 717,
    //                'Commission VAT No': 429.42,
    //                'อัตราดอกเบี้ย ': 179.61,
    //                'Commission VAT Date ': '9/15/2012',
    //                'Hiring Charge Include VAT ': 823.52,
    //                'Amount VAT ': 355.91,
    //                'Amount Include VAT ': 859.61,
    //                'With Hold Tax Amount ': 615.01,
    //                'Net Paid ': 68.28,
    //                'Standard Interest Rate ': 691.05,
    //                Canpaign: 'dolore'
    //            },
    //            {
    //                id: 627,
    //                ENTCODE: 'tempore',
    //                DealerName: 'velit',
    //                'Pay Commission To': 'voluptas',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 163.27,
    //                'Max Rate ': 167.29,
    //                'Commission Term ': 317.15,
    //                'Max Term ': 185,
    //                'Commission VAT No': 179.45,
    //                'อัตราดอกเบี้ย ': 894.01,
    //                'Commission VAT Date ': '9/28/2002',
    //                'Hiring Charge Include VAT ': 958.29,
    //                'Amount VAT ': 511.51,
    //                'Amount Include VAT ': 672.16,
    //                'With Hold Tax Amount ': 560.11,
    //                'Net Paid ': 831.15,
    //                'Standard Interest Rate ': 898.5,
    //                Canpaign: 'cum'
    //            },
    //            {
    //                id: 74,
    //                ENTCODE: 'molestias',
    //                DealerName: 'velit',
    //                'Pay Commission To': 'voluptatem',
    //                'Absorb Tax ': false,
    //                'Commission Rate ': 91.42,
    //                'Max Rate ': 288.47,
    //                'Commission Term ': 696.37,
    //                'Max Term ': 991,
    //                'Commission VAT No': 81.03,
    //                'อัตราดอกเบี้ย ': 777.32,
    //                'Commission VAT Date ': '12/8/2012',
    //                'Hiring Charge Include VAT ': 739.62,
    //                'Amount VAT ': 234.16,
    //                'Amount Include VAT ': 677.91,
    //                'With Hold Tax Amount ': 460.02,
    //                'Net Paid ': 767.73,
    //                'Standard Interest Rate ': 242.8,
    //                Canpaign: 'aut'
    //            },
    //            {
    //                id: 902,
    //                ENTCODE: 'nulla',
    //                DealerName: 'est',
    //                'Pay Commission To': 'ducimus',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 133.76,
    //                'Max Rate ': 88.73,
    //                'Commission Term ': 181.25,
    //                'Max Term ': 71,
    //                'Commission VAT No': 372.75,
    //                'อัตราดอกเบี้ย ': 959.22,
    //                'Commission VAT Date ': '6/4/2005',
    //                'Hiring Charge Include VAT ': 691.07,
    //                'Amount VAT ': 246.88,
    //                'Amount Include VAT ': 552.12,
    //                'With Hold Tax Amount ': 400.07,
    //                'Net Paid ': 467.21,
    //                'Standard Interest Rate ': 341.04,
    //                Canpaign: 'quia'
    //            },
    //            {
    //                id: 27,
    //                ENTCODE: 'eligendi',
    //                DealerName: 'sint',
    //                'Pay Commission To': 'id',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 937.65,
    //                'Max Rate ': 469.93,
    //                'Commission Term ': 494.25,
    //                'Max Term ': 297,
    //                'Commission VAT No': 507.96,
    //                'อัตราดอกเบี้ย ': 358.43,
    //                'Commission VAT Date ': '6/23/2012',
    //                'Hiring Charge Include VAT ': 376.84,
    //                'Amount VAT ': 198.46,
    //                'Amount Include VAT ': 292.73,
    //                'With Hold Tax Amount ': 587.92,
    //                'Net Paid ': 230.81,
    //                'Standard Interest Rate ': 433.96,
    //                Canpaign: 'eum'
    //            },
    //            {
    //                id: 952,
    //                ENTCODE: 'et',
    //                DealerName: 'et',
    //                'Pay Commission To': 'libero',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 770.93,
    //                'Max Rate ': 763.39,
    //                'Commission Term ': 655.23,
    //                'Max Term ': 857,
    //                'Commission VAT No': 673.76,
    //                'อัตราดอกเบี้ย ': 166.59,
    //                'Commission VAT Date ': '11/15/2003',
    //                'Hiring Charge Include VAT ': 373.76,
    //                'Amount VAT ': 676.53,
    //                'Amount Include VAT ': 753.06,
    //                'With Hold Tax Amount ': 516.79,
    //                'Net Paid ': 878.64,
    //                'Standard Interest Rate ': 492.82,
    //                Canpaign: 'facilis'
    //            },
    //            {
    //                id: 573,
    //                ENTCODE: 'in',
    //                DealerName: 'iste',
    //                'Pay Commission To': 'repellat',
    //                'Absorb Tax ': false,
    //                'Commission Rate ': 697.18,
    //                'Max Rate ': 625.45,
    //                'Commission Term ': 807.46,
    //                'Max Term ': 113,
    //                'Commission VAT No': 184.45,
    //                'อัตราดอกเบี้ย ': 537.47,
    //                'Commission VAT Date ': '3/23/2011',
    //                'Hiring Charge Include VAT ': 686.63,
    //                'Amount VAT ': 588.4,
    //                'Amount Include VAT ': 750.58,
    //                'With Hold Tax Amount ': 183.65,
    //                'Net Paid ': 822.08,
    //                'Standard Interest Rate ': 660.2,
    //                Canpaign: 'cumque'
    //            },
    //            {
    //                id: 777,
    //                ENTCODE: 'quaerat',
    //                DealerName: 'natus',
    //                'Pay Commission To': 'sequi',
    //                'Absorb Tax ': true,
    //                'Commission Rate ': 980.11,
    //                'Max Rate ': 251.74,
    //                'Commission Term ': 700.08,
    //                'Max Term ': 223,
    //                'Commission VAT No': 48.44,
    //                'อัตราดอกเบี้ย ': 483.65,
    //                'Commission VAT Date ': '8/26/2012',
    //                'Hiring Charge Include VAT ': 479.11,
    //                'Amount VAT ': 879.01,
    //                'Amount Include VAT ': 150.31,
    //                'With Hold Tax Amount ': 70.97,
    //                'Net Paid ': 797.79,
    //                'Standard Interest Rate ': 904.46,
    //                Canpaign: 'ipsam'
    //            }
    //        ],
    //        proxy: {
    //            type: 'memory'
    //        }
    //    }, cfg)]);
    //}
});