/*
 * File: app/view/main/maincheckdoc/CheckDocumentTabViewModel.js
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

Ext.define('FrontHPApp.view.main.maincheckdoc.CheckDocumentTabViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainmaincheckdoccheckdocumenttab',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory'
    ],

    stores: {
        garantureModels: {
            model: 'FrontHPApp.model.GarantureModel',
            data: [
                {
                    Id: 416,
                    CID: 547,
                    TittleID: 108,
                    FirstName: 'ut',
                    LastName: 'Taylor',
                    BirthDate: '12/26/2004',
                    ExpireDate: '11/25/2009',
                    CardDate: 'commodi',
                    CardExpireDate: '71/45',
                    Nation: 'Western Sahara',
                    Region: 'Rerum',
                    Sex: 'sunt'
                },
                {
                    Id: 94,
                    CID: 983,
                    TittleID: 310,
                    FirstName: 'eveniet',
                    LastName: 'Hernandez',
                    BirthDate: '8/9/2006',
                    ExpireDate: '7/19/2005',
                    CardDate: 'molestiae',
                    CardExpireDate: '86/37',
                    Nation: 'Cook Islands',
                    Region: 'Rerum',
                    Sex: 'et'
                },
                {
                    Id: 846,
                    CID: 488,
                    TittleID: 781,
                    FirstName: 'in',
                    LastName: 'Ward',
                    BirthDate: '9/14/2006',
                    ExpireDate: '3/9/2011',
                    CardDate: 'nemo',
                    CardExpireDate: '24/17',
                    Nation: 'South Africa',
                    Region: 'Voluptatem',
                    Sex: 'ea'
                },
                {
                    Id: 653,
                    CID: 270,
                    TittleID: 568,
                    FirstName: 'facilis',
                    LastName: 'Thomas',
                    BirthDate: '7/23/2005',
                    ExpireDate: '1/16/2005',
                    CardDate: 'maxime',
                    CardExpireDate: '25/50',
                    Nation: 'Lithuania',
                    Region: 'Consequatur',
                    Sex: 'distinctio'
                },
                {
                    Id: 368,
                    CID: 737,
                    TittleID: 803,
                    FirstName: 'nobis',
                    LastName: 'Clark',
                    BirthDate: '3/21/2002',
                    ExpireDate: '2/16/2012',
                    CardDate: 'ut',
                    CardExpireDate: '77/43',
                    Nation: 'Western Sahara',
                    Region: 'Temporibus',
                    Sex: 'est'
                },
                {
                    Id: 631,
                    CID: 631,
                    TittleID: 699,
                    FirstName: 'repellendus',
                    LastName: 'Hill',
                    BirthDate: '8/15/2012',
                    ExpireDate: '1/21/2002',
                    CardDate: 'eius',
                    CardExpireDate: '01/83',
                    Nation: 'Saudia Arabia',
                    Region: 'Rerum',
                    Sex: 'in'
                },
                {
                    Id: 911,
                    CID: 442,
                    TittleID: 984,
                    FirstName: 'labore',
                    LastName: 'Turner',
                    BirthDate: '4/8/2011',
                    ExpireDate: '7/13/2003',
                    CardDate: 'amet',
                    CardExpireDate: '86/26',
                    Nation: 'Vietnam',
                    Region: 'Omnis',
                    Sex: 'consequatur'
                },
                {
                    Id: 395,
                    CID: 452,
                    TittleID: 492,
                    FirstName: 'ea',
                    LastName: 'Bennett',
                    BirthDate: '8/25/2008',
                    ExpireDate: '4/16/2007',
                    CardDate: 'omnis',
                    CardExpireDate: '59/45',
                    Nation: 'Norfolk Island',
                    Region: 'Deserunt',
                    Sex: 'esse'
                },
                {
                    Id: 213,
                    CID: 569,
                    TittleID: 601,
                    FirstName: 'cumque',
                    LastName: 'Robinson',
                    BirthDate: '5/22/2008',
                    ExpireDate: '6/24/2004',
                    CardDate: 'repellat',
                    CardExpireDate: '97/52',
                    Nation: 'Guinea',
                    Region: 'Iusto',
                    Sex: 'minus'
                },
                {
                    Id: 918,
                    CID: 72,
                    TittleID: 66,
                    FirstName: 'unde',
                    LastName: 'Mitchell',
                    BirthDate: '7/15/2012',
                    ExpireDate: '1/25/2009',
                    CardDate: 'perferendis',
                    CardExpireDate: '72/97',
                    Nation: 'Vanuatu',
                    Region: 'Consequatur',
                    Sex: 'alias'
                },
                {
                    Id: 674,
                    CID: 38,
                    TittleID: 299,
                    FirstName: 'vel',
                    LastName: 'Ramirez',
                    BirthDate: '2/10/2004',
                    ExpireDate: '5/7/2008',
                    CardDate: 'facere',
                    CardExpireDate: '78/87',
                    Nation: 'Spain',
                    Region: 'Beatae',
                    Sex: 'qui'
                },
                {
                    Id: 310,
                    CID: 221,
                    TittleID: 515,
                    FirstName: 'repellendus',
                    LastName: 'Garcia',
                    BirthDate: '1/10/2004',
                    ExpireDate: '5/6/2002',
                    CardDate: 'praesentium',
                    CardExpireDate: '07/16',
                    Nation: 'French Guiana',
                    Region: 'Tenetur',
                    Sex: 'et'
                },
                {
                    Id: 400,
                    CID: 378,
                    TittleID: 296,
                    FirstName: 'ut',
                    LastName: 'Gonzalez',
                    BirthDate: '9/9/2003',
                    ExpireDate: '6/9/2005',
                    CardDate: 'repellendus',
                    CardExpireDate: '37/94',
                    Nation: 'Cambodia',
                    Region: 'Quibusdam',
                    Sex: 'veritatis'
                },
                {
                    Id: 811,
                    CID: 88,
                    TittleID: 488,
                    FirstName: 'aut',
                    LastName: 'Martin',
                    BirthDate: '9/21/2011',
                    ExpireDate: '3/1/2011',
                    CardDate: 'consectetur',
                    CardExpireDate: '09/37',
                    Nation: 'Cambodia',
                    Region: 'Nostrum',
                    Sex: 'praesentium'
                },
                {
                    Id: 797,
                    CID: 212,
                    TittleID: 394,
                    FirstName: 'tenetur',
                    LastName: 'White',
                    BirthDate: '1/16/2014',
                    ExpireDate: '4/6/2003',
                    CardDate: 'similique',
                    CardExpireDate: '38/51',
                    Nation: 'Zimbabwe',
                    Region: 'Perferendis',
                    Sex: 'non'
                },
                {
                    Id: 619,
                    CID: 118,
                    TittleID: 487,
                    FirstName: 'libero',
                    LastName: 'Brooks',
                    BirthDate: '4/22/2005',
                    ExpireDate: '3/2/2004',
                    CardDate: 'sint',
                    CardExpireDate: '71/31',
                    Nation: 'Tokelau',
                    Region: 'Aliquam',
                    Sex: 'et'
                },
                {
                    Id: 277,
                    CID: 148,
                    TittleID: 444,
                    FirstName: 'nesciunt',
                    LastName: 'Gray',
                    BirthDate: '3/23/2006',
                    ExpireDate: '8/4/2006',
                    CardDate: 'voluptatem',
                    CardExpireDate: '67/67',
                    Nation: 'Yemen',
                    Region: 'Dolore',
                    Sex: 'nesciunt'
                },
                {
                    Id: 452,
                    CID: 989,
                    TittleID: 988,
                    FirstName: 'delectus',
                    LastName: 'Flores',
                    BirthDate: '10/22/2011',
                    ExpireDate: '10/17/2002',
                    CardDate: 'deleniti',
                    CardExpireDate: '77/28',
                    Nation: 'Aruba',
                    Region: 'Accusantium',
                    Sex: 'sit'
                },
                {
                    Id: 667,
                    CID: 742,
                    TittleID: 555,
                    FirstName: 'labore',
                    LastName: 'Torres',
                    BirthDate: '7/5/2014',
                    ExpireDate: '6/6/2012',
                    CardDate: 'totam',
                    CardExpireDate: '07/24',
                    Nation: 'Spain',
                    Region: 'Officia',
                    Sex: 'similique'
                },
                {
                    Id: 34,
                    CID: 395,
                    TittleID: 520,
                    FirstName: 'aut',
                    LastName: 'Richardson',
                    BirthDate: '8/2/2013',
                    ExpireDate: '2/6/2007',
                    CardDate: 'laboriosam',
                    CardExpireDate: '92/51',
                    Nation: 'Bhutan',
                    Region: 'Similique',
                    Sex: 'nihil'
                },
                {
                    Id: 578,
                    CID: 209,
                    TittleID: 362,
                    FirstName: 'ea',
                    LastName: 'Hernandez',
                    BirthDate: '4/23/2008',
                    ExpireDate: '3/6/2004',
                    CardDate: 'in',
                    CardExpireDate: '92/52',
                    Nation: 'Bahrain',
                    Region: 'Autem',
                    Sex: 'illum'
                },
                {
                    Id: 344,
                    CID: 207,
                    TittleID: 369,
                    FirstName: 'doloribus',
                    LastName: 'Rodriguez',
                    BirthDate: '5/27/2007',
                    ExpireDate: '9/18/2001',
                    CardDate: 'harum',
                    CardExpireDate: '11/31',
                    Nation: 'Somalia',
                    Region: 'Nihil',
                    Sex: 'numquam'
                },
                {
                    Id: 181,
                    CID: 541,
                    TittleID: 814,
                    FirstName: 'aut',
                    LastName: 'Evans',
                    BirthDate: '11/19/2009',
                    ExpireDate: '6/15/2001',
                    CardDate: 'ad',
                    CardExpireDate: '80/91',
                    Nation: 'Canada',
                    Region: 'Aliquam',
                    Sex: 'est'
                },
                {
                    Id: 439,
                    CID: 173,
                    TittleID: 808,
                    FirstName: 'rerum',
                    LastName: 'Hall',
                    BirthDate: '3/19/2006',
                    ExpireDate: '6/2/2005',
                    CardDate: 'dicta',
                    CardExpireDate: '51/56',
                    Nation: 'Lithuania',
                    Region: 'Voluptates',
                    Sex: 'vero'
                },
                {
                    Id: 341,
                    CID: 486,
                    TittleID: 771,
                    FirstName: 'quo',
                    LastName: 'Cox',
                    BirthDate: '6/1/2012',
                    ExpireDate: '10/19/2014',
                    CardDate: 'quod',
                    CardExpireDate: '93/41',
                    Nation: 'Zimbabwe',
                    Region: 'Voluptate',
                    Sex: 'molestiae'
                },
                {
                    Id: 996,
                    CID: 20,
                    TittleID: 309,
                    FirstName: 'qui',
                    LastName: 'Ward',
                    BirthDate: '12/10/2008',
                    ExpireDate: '4/12/2009',
                    CardDate: 'porro',
                    CardExpireDate: '16/25',
                    Nation: 'Liechtenstein',
                    Region: 'Pariatur',
                    Sex: 'eos'
                },
                {
                    Id: 4,
                    CID: 635,
                    TittleID: 646,
                    FirstName: 'sit',
                    LastName: 'Hernandez',
                    BirthDate: '4/21/2007',
                    ExpireDate: '10/14/2010',
                    CardDate: 'ea',
                    CardExpireDate: '34/11',
                    Nation: 'El Salvador',
                    Region: 'Placeat',
                    Sex: 'sapiente'
                },
                {
                    Id: 49,
                    CID: 652,
                    TittleID: 705,
                    FirstName: 'repellendus',
                    LastName: 'Rogers',
                    BirthDate: '12/18/2010',
                    ExpireDate: '2/4/2008',
                    CardDate: 'est',
                    CardExpireDate: '06/11',
                    Nation: 'Niue',
                    Region: 'Minima',
                    Sex: 'quibusdam'
                },
                {
                    Id: 232,
                    CID: 849,
                    TittleID: 431,
                    FirstName: 'occaecati',
                    LastName: 'Clark',
                    BirthDate: '10/28/2004',
                    ExpireDate: '8/14/2004',
                    CardDate: 'soluta',
                    CardExpireDate: '73/89',
                    Nation: 'Canada',
                    Region: 'Facilis',
                    Sex: 'neque'
                },
                {
                    Id: 792,
                    CID: 871,
                    TittleID: 680,
                    FirstName: 'quia',
                    LastName: 'Torres',
                    BirthDate: '9/15/2012',
                    ExpireDate: '5/7/2010',
                    CardDate: 'aut',
                    CardExpireDate: '37/60',
                    Nation: 'Liechtenstein',
                    Region: 'Incidunt',
                    Sex: 'magnam'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }

});