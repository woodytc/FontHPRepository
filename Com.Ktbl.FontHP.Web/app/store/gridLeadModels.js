/*
 * File: app/store/gridLeadModels.js
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

Ext.define('FrontHPApp.store.gridLeadModels', {
    extend: 'Ext.data.Store',
    alias: 'store.gridleadmodels',

    requires: [
        'FrontHPApp.model.GridLeadModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'gridLeadModels',
            model: 'FrontHPApp.model.GridLeadModel',
            data: [
                {
                    id: 888,
                    leadId: 'nemo',
                    cusName: 'exercitationem',
                    cusSurname: 'Brooks',
                    leadNo: 'quibusdam',
                    leadName: 'nesciunt',
                    leadSurName: 'Gray',
                    branchId: 641,
                    branchName: 'nihil'
                },
                {
                    id: 966,
                    leadId: 'et',
                    cusName: 'porro',
                    cusSurname: 'Morgan',
                    leadNo: 'saepe',
                    leadName: 'cupiditate',
                    leadSurName: 'Gonzalez',
                    branchId: 542,
                    branchName: 'rerum'
                },
                {
                    id: 744,
                    leadId: 'molestiae',
                    cusName: 'ut',
                    cusSurname: 'Hall',
                    leadNo: 'et',
                    leadName: 'velit',
                    leadSurName: 'Adams',
                    branchId: 464,
                    branchName: 'animi'
                },
                {
                    id: 938,
                    leadId: 'dolores',
                    cusName: 'alias',
                    cusSurname: 'Torres',
                    leadNo: 'veniam',
                    leadName: 'voluptas',
                    leadSurName: 'Gomez',
                    branchId: 293,
                    branchName: 'ratione'
                },
                {
                    id: 129,
                    leadId: 'odit',
                    cusName: 'sit',
                    cusSurname: 'Bennett',
                    leadNo: 'nemo',
                    leadName: 'in',
                    leadSurName: 'Watson',
                    branchId: 906,
                    branchName: 'velit'
                },
                {
                    id: 92,
                    leadId: 'molestiae',
                    cusName: 'aut',
                    cusSurname: 'Cook',
                    leadNo: 'facilis',
                    leadName: 'illo',
                    leadSurName: 'Mitchell',
                    branchId: 987,
                    branchName: 'similique'
                },
                {
                    id: 109,
                    leadId: 'sunt',
                    cusName: 'ullam',
                    cusSurname: 'Williams',
                    leadNo: 'blanditiis',
                    leadName: 'soluta',
                    leadSurName: 'Flores',
                    branchId: 586,
                    branchName: 'qui'
                },
                {
                    id: 314,
                    leadId: 'consequatur',
                    cusName: 'corporis',
                    cusSurname: 'Walker',
                    leadNo: 'optio',
                    leadName: 'doloremque',
                    leadSurName: 'Thomas',
                    branchId: 795,
                    branchName: 'quia'
                },
                {
                    id: 784,
                    leadId: 'cupiditate',
                    cusName: 'veritatis',
                    cusSurname: 'Rogers',
                    leadNo: 'quibusdam',
                    leadName: 'sequi',
                    leadSurName: 'Hill',
                    branchId: 530,
                    branchName: 'fugiat'
                },
                {
                    id: 352,
                    leadId: 'eveniet',
                    cusName: 'voluptatem',
                    cusSurname: 'Torres',
                    leadNo: 'dolorem',
                    leadName: 'vero',
                    leadSurName: 'Howard',
                    branchId: 541,
                    branchName: 'et'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});