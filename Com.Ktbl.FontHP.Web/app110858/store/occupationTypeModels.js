/*
 * File: app/store/occupationTypeModels.js
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

Ext.define('FrontHPApp.store.occupationTypeModels', {
    extend: 'Ext.data.Store',
    alias: 'store.occupationtypemodels',

    requires: [
        'FrontHPApp.model.OccupationTypeModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'occupationTypeModels',
            model: 'FrontHPApp.model.OccupationTypeModel',
            data: [
                {
                    OccupationGroup_id: 713,
                    OccupationCareer_id: 241,
                    name: 'odio'
                },
                {
                    OccupationGroup_id: 148,
                    OccupationCareer_id: 792,
                    name: 'quos'
                },
                {
                    OccupationGroup_id: 330,
                    OccupationCareer_id: 204,
                    name: 'velit'
                },
                {
                    OccupationGroup_id: 566,
                    OccupationCareer_id: 803,
                    name: 'officia'
                },
                {
                    OccupationGroup_id: 598,
                    OccupationCareer_id: 752,
                    name: 'quia'
                },
                {
                    OccupationGroup_id: 296,
                    OccupationCareer_id: 444,
                    name: 'sapiente'
                },
                {
                    OccupationGroup_id: 411,
                    OccupationCareer_id: 933,
                    name: 'adipisci'
                },
                {
                    OccupationGroup_id: 26,
                    OccupationCareer_id: 847,
                    name: 'quas'
                },
                {
                    OccupationGroup_id: 224,
                    OccupationCareer_id: 564,
                    name: 'enim'
                },
                {
                    OccupationGroup_id: 306,
                    OccupationCareer_id: 968,
                    name: 'quod'
                },
                {
                    OccupationGroup_id: 231,
                    OccupationCareer_id: 930,
                    name: 'qui'
                },
                {
                    OccupationGroup_id: 767,
                    OccupationCareer_id: 463,
                    name: 'molestias'
                },
                {
                    OccupationGroup_id: 471,
                    OccupationCareer_id: 884,
                    name: 'dolores'
                },
                {
                    OccupationGroup_id: 247,
                    OccupationCareer_id: 474,
                    name: 'maxime'
                },
                {
                    OccupationGroup_id: 642,
                    OccupationCareer_id: 884,
                    name: 'est'
                },
                {
                    OccupationGroup_id: 892,
                    OccupationCareer_id: 643,
                    name: 'voluptas'
                },
                {
                    OccupationGroup_id: 600,
                    OccupationCareer_id: 911,
                    name: 'ipsa'
                },
                {
                    OccupationGroup_id: 913,
                    OccupationCareer_id: 859,
                    name: 'at'
                },
                {
                    OccupationGroup_id: 210,
                    OccupationCareer_id: 262,
                    name: 'quas'
                },
                {
                    OccupationGroup_id: 21,
                    OccupationCareer_id: 470,
                    name: 'repudiandae'
                },
                {
                    OccupationGroup_id: 823,
                    OccupationCareer_id: 207,
                    name: 'inventore'
                },
                {
                    OccupationGroup_id: 313,
                    OccupationCareer_id: 104,
                    name: 'occaecati'
                },
                {
                    OccupationGroup_id: 202,
                    OccupationCareer_id: 242,
                    name: 'voluptas'
                },
                {
                    OccupationGroup_id: 563,
                    OccupationCareer_id: 252,
                    name: 'voluptatem'
                },
                {
                    OccupationGroup_id: 440,
                    OccupationCareer_id: 304,
                    name: 'necessitatibus'
                },
                {
                    OccupationGroup_id: 326,
                    OccupationCareer_id: 83,
                    name: 'exercitationem'
                },
                {
                    OccupationGroup_id: 101,
                    OccupationCareer_id: 948,
                    name: 'numquam'
                },
                {
                    OccupationGroup_id: 657,
                    OccupationCareer_id: 354,
                    name: 'deserunt'
                },
                {
                    OccupationGroup_id: 375,
                    OccupationCareer_id: 792,
                    name: 'dolores'
                },
                {
                    OccupationGroup_id: 810,
                    OccupationCareer_id: 62,
                    name: 'asperiores'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});