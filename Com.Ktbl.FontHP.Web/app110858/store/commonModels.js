/*
 * File: app/store/commonModels.js
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

Ext.define('FrontHPApp.store.commonModels', {
    extend: 'Ext.data.Store',
    alias: 'store.commonmodels',

    requires: [
        'FrontHPApp.model.CommonModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'commonModels',
            model: 'FrontHPApp.model.CommonModel',
            data: [
                {
                    id: 840,
                    name: 'et',
                    flg: 'non'
                },
                {
                    id: 760,
                    name: 'rerum',
                    flg: 'placeat'
                },
                {
                    id: 860,
                    name: 'veniam',
                    flg: 'inventore'
                },
                {
                    id: 146,
                    name: 'est',
                    flg: 'voluptas'
                },
                {
                    id: 277,
                    name: 'non',
                    flg: 'qui'
                },
                {
                    id: 831,
                    name: 'aliquid',
                    flg: 'facilis'
                },
                {
                    id: 968,
                    name: 'ut',
                    flg: 'enim'
                },
                {
                    id: 631,
                    name: 'numquam',
                    flg: 'cum'
                },
                {
                    id: 639,
                    name: 'sint',
                    flg: 'veniam'
                },
                {
                    id: 331,
                    name: 'voluptas',
                    flg: 'non'
                },
                {
                    id: 805,
                    name: 'facilis',
                    flg: 'sit'
                },
                {
                    id: 538,
                    name: 'adipisci',
                    flg: 'asperiores'
                },
                {
                    id: 738,
                    name: 'eius',
                    flg: 'inventore'
                },
                {
                    id: 538,
                    name: 'inventore',
                    flg: 'quis'
                },
                {
                    id: 913,
                    name: 'eos',
                    flg: 'voluptates'
                },
                {
                    id: 239,
                    name: 'hic',
                    flg: 'aut'
                },
                {
                    id: 890,
                    name: 'error',
                    flg: 'nostrum'
                },
                {
                    id: 440,
                    name: 'corrupti',
                    flg: 'doloribus'
                },
                {
                    id: 92,
                    name: 'error',
                    flg: 'sint'
                },
                {
                    id: 220,
                    name: 'repellendus',
                    flg: 'aut'
                },
                {
                    id: 138,
                    name: 'consectetur',
                    flg: 'est'
                },
                {
                    id: 322,
                    name: 'unde',
                    flg: 'repellendus'
                },
                {
                    id: 349,
                    name: 'et',
                    flg: 'vitae'
                },
                {
                    id: 71,
                    name: 'nihil',
                    flg: 'similique'
                },
                {
                    id: 925,
                    name: 'quasi',
                    flg: 'quaerat'
                },
                {
                    id: 891,
                    name: 'aut',
                    flg: 'quas'
                },
                {
                    id: 767,
                    name: 'est',
                    flg: 'dolore'
                },
                {
                    id: 297,
                    name: 'eos',
                    flg: 'tempore'
                },
                {
                    id: 581,
                    name: 'ut',
                    flg: 'doloribus'
                },
                {
                    id: 996,
                    name: 'asperiores',
                    flg: 'ducimus'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});