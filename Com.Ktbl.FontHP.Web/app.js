/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'LoginModel',
        'TestModel',
        'GarantureModel',
        'SubsidyViewModel',
        'RequestStatusModel',
        'BranchModel',
        'RequestModel',
        'HistoryCheckDocumentModel',
        'CheckPaperModel',
        'CancelRequestLimit60Model',
        'TypePaperModel',
        'BrowsePaperMyModel',
        'CommonModel',
        'ProvinceModel',
        'DistrictModel',
        'SubDistrictModel',
        'OccupationCatelogyModel',
        'OccupationGroupModel',
        'OccupationTypeModel',
        'PositionModel',
        'IncomeMainModel',
        'IncomeSubModel',
        'IncomeOtherModel',
        'GurantorGridModel',
        'GaranterOccupationCatelogyModel',
        'GaranterOccupationGroupModel',
        'CommitinSpecialModel',
        'TypeCardModel',
        'SunsidyModel',
        'StatusModel',
        'JobIndex',
        'GridLeadModel',
        'MarketModel',
        'DealerSelectModel',
        'AddressCusModel',
        'TypePopupCardModel',
        'ComHirModel',
        'ComInsModel',
        'TypeCustomerModel'
    ],
    stores: [
        'combo.LoginStore',
        'combo.TestStore',
        'RequestStatusStores',
        'BranchStore',
        'requestModels',
        'historyCheckDocumentModels',
        'checkPaperModels',
        'cancelRequestLimit60Models',
        'typePaperModels',
        'browsePaperMyModels',
        'commonModels',
        'provinceModels',
        'districtModels',
        'subDistrictModels',
        'occupationCatelogyModels',
        'occupationGroupModels',
        'occupationTypeModels',
        'positionModels',
        'incomeMainModels',
        'incomeSubModels',
        'incomeOtherModels',
        'gurantorGridModels',
        'commitinSpecialModels',
        'typeCardModels',
        'sunsidyModels',
        'statusModels',
        'gridLeadModels',
        'marketModels',
        'dealerSelectModels',
        'addressCusModels',
        'typePopupCardModels',
        'comHirModels',
        'comInsModels',
        'typeCustomerModels'
    ],
    views: [
        'main.MainViewport',
        'main.mainmarketing.window.CommHiringWindow',
        'main.mainmarketing.MarketingTab',
        'main.mainmarketing.window.GarantorWindow',
        'main.mainmarketing.window.TypeCardWindow',
        'main.mainmarketing.window.SubsidyWindow',
        'main.mainmarketing.window.StatusInfoWindow',
        'Tab1.window.FrmCreditNode',
        'main.maincheckdoc.CheckDocumentTab',
        'Tab2.window.FrmPopupBrowsePaper',
        'main.maincheckdoc.DocumentHistoryTab',
        'Tab2.window.FrmBrowseFileCheck',
        'MyForm1',
        'MyGridPanel1',
        'main.mainmarketing.window.CommInsWindow',
        'main.mainmarketing.window.comspecial.ComSpecialWindow',
        'WindowMainApp',
        'main.home.Indox',
        'main.mainmarketing.window.comspecial.PopupEmpSell',
        'main.mainmarketing.MktLimit60Tab',
        'main.mainmarketing.window.commonpopup.PopupCusAddress',
        'main.mainmarketing.window.commonpopup.PopupDealer',
        'main.mainmarketing.window.commonpopup.PopupTypeCard',
        'main.mainmarketing.window.requestcustomer.popup.PopupBranch',
        'main.mainmarketing.window.requestcustomer.RequestCustomerWindow',
        'main.mainmarketing.window.requestcustomer.popup.PopupLead',
        'main.mainmarketing.window.requestcustomer.popup.PopupMarketing',
        'main.mainmarketing.window.CustomeraddressWindow',
        'main.mainmarketing.window.InsuranceWindow',
        'main.mainmarketing.window.LeadWindow'
    ],
    name: 'FrontHPApp',

    launch: function() {
        Ext.create('FrontHPApp.view.main.MainViewport');
    }

});
