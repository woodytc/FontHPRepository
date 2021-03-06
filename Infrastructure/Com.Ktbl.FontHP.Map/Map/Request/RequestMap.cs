﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Com.Ktbl.FontHP.Domain.Request;
using FluentNHibernate.Mapping;

namespace Com.Ktbl.FontHP.Map.Map.Request
{
    class RequestMap : ClassMap<RequestDomain>
    {

        public RequestMap()
        {
            Table("Request");
            LazyLoad();
            Id(x => x.RequestNo).GeneratedBy.Assigned().Column("Request_No");
            Map(x => x.RequestDate).Column("Request_Date");
            Map(x => x.Branch).Column("Branch").Length(5);
            Map(x => x.Agrcode).Column("AGRCODE").Length(20);
            Map(x => x.CustomerCode).Column("Customer_Code").Length(10);
            Map(x => x.ThirdpartyCode).Column("ThirdParty_Code").Length(20);
            Map(x => x.ThirdRecAmt).Column("Third_Rec_Amt").Length(20);
            Map(x => x.ComGroup).Column("Com_Group").Length(5);
            Map(x => x.AO).Column("A_O").Length(5);
            Map(x => x.VatBy).Column("VAT_By").Length(5);
            Map(x => x.Checker).Column("Checker").Length(10);
            Map(x => x.Creditor).Column("Creditor").Length(10);
            Map(x => x.LeadNo).Column("Lead_No").Length(10);
            Map(x => x.Advisor).Column("advisor").Length(20);
            Map(x => x.BranchAdvisor).Column("branch_advisor").Length(20);
            Map(x => x.AdvisorCom).Column("advisor_com");
            Map(x => x.RequestDoc).Column("Request_Doc").Length(5);
            Map(x => x.RequestDocfileDate).Column("Request_DocFile_Date");
            Map(x => x.RequestDocfaxDate).Column("Request_DocFax_Date");
            Map(x => x.FlagFax2file).Column("Flag_FAX2FILE");
            Map(x => x.InterestStartDate).Column("Interest_Start_Date");
            Map(x => x.BeginTerm).Column("Begin_Term").Precision(10);
            Map(x => x.Campaign).Column("Campaign").Length(20);
            Map(x => x.CarType).Column("Car_Type").Length(5);
            Map(x => x.DownType).Column("Down_Type").Length(5);
            Map(x => x.Priceofcar).Column("PriceofCar").Length(5);
            Map(x => x.PricevatCar).Column("PriceVAT_Car").Precision(13).Scale(2);
            Map(x => x.PriceCar).Column("Price_Car").Precision(13).Scale(2);
            Map(x => x.VatCar).Column("VAT_CAR").Precision(13).Scale(2);
            Map(x => x.DownPercent).Column("Down_Percent").Precision(5).Scale(2);
            Map(x => x.DownTotal).Column("Down_Total").Precision(13).Scale(2);
            Map(x => x.DownCar).Column("Down_Car").Precision(13).Scale(2);
            Map(x => x.DownVat).Column("Down_VAT").Precision(13).Scale(2);
            Map(x => x.Term).Column("Term").Precision(10);
            Map(x => x.Termtype).Column("TERMTYPE").Length(5);
            Map(x => x.Cost).Column("Cost").Precision(13).Scale(2);
            Map(x => x.CostVat).Column("Cost_VAT").Precision(13).Scale(2);
            Map(x => x.Typeinterest).Column("TypeInterest").Length(5);
            Map(x => x.Typeround).Column("TypeRound").Length(5);
            Map(x => x.FlatRate).Column("Flat_Rate").Precision(10).Scale(7);
            Map(x => x.Benefit).Column("Benefit").Precision(13).Scale(2);
            Map(x => x.BenefitVat).Column("Benefit_VAT").Precision(13).Scale(2);
            Map(x => x.EffectiveRate).Column("Effective_Rate").Precision(24);
            Map(x => x.IrrRate).Column("IRR_Rate").Precision(24);
            Map(x => x.RentTotal).Column("Rent_Total").Precision(13).Scale(2);
            Map(x => x.RentVat).Column("Rent_VAT").Precision(13).Scale(2);
            Map(x => x.TermAmount).Column("Term_Amount").Precision(13).Scale(2);
            Map(x => x.TermVat).Column("Term_VAT").Precision(13).Scale(2);
            Map(x => x.TermNet).Column("Term_Net").Precision(13).Scale(2);
            Map(x => x.LastAmount).Column("Last_Amount").Precision(13).Scale(2);
            Map(x => x.LastVat).Column("Last_VAT").Precision(13).Scale(2);
            Map(x => x.LastNet).Column("Last_Net").Precision(13).Scale(2);
            Map(x => x.PayTermType).Column("Pay_Term_Type").Length(5);
            Map(x => x.SubPayTermType).Column("Sub_Pay_Term_Type").Length(5);
            Map(x => x.FirstDate).Column("First_Date");
            Map(x => x.FirstDueDate).Column("First_Due_Date");
            Map(x => x.InvDate).Column("INV_Date");
            Map(x => x.InvNo).Column("INV_No").Length(50);
            Map(x => x.TransDate).Column("Trans_Date");
            Map(x => x.LastDueDate).Column("Last_Due_Date");
            Map(x => x.ConditionPayDown).Column("Condition_Pay_Down").Length(5);
            Map(x => x.Custpaysellman).Column("CustPaySellMan").Length(5);
            Map(x => x.Typeofconsumer).Column("TypeOfConsumer").Length(5);
            Map(x => x.Conditionpayment).Column("ConditionPayment").Length(5);
            Map(x => x.AccountNo).Column("Account_No").Length(20);
            Map(x => x.BankCode).Column("Bank_Code").Length(5);
            Map(x => x.ObjectLeasing).Column("Object_Leasing").Length(5);
            Map(x => x.OthSpecial1).Column("Oth_special1").Length(50);
            Map(x => x.OthSpecial2).Column("Oth_special2").Length(50);
            Map(x => x.Marriage).Column("Marriage").Length(5);
            Map(x => x.SpouseNameEng).Column("Spouse_Name_Eng").Length(50);
            Map(x => x.SpouseNameThai).Column("Spouse_Name_Thai").Length(50);
            Map(x => x.SpouseCompany).Column("Spouse_Company").Length(50);
            Map(x => x.SpousePosition).Column("Spouse_Position").Length(50);
            Map(x => x.SpouseTelephone).Column("Spouse_Telephone").Length(50);
            Map(x => x.AssetAmount).Column("Asset_Amount").Precision(13).Scale(2);
            Map(x => x.EmployeeQty).Column("Employee_Qty").Precision(10);
            Map(x => x.CustomerPosition).Column("Customer_Position").Length(50);
            Map(x => x.Incomepermonth).Column("IncomePerMonth").Precision(13).Scale(2);
            Map(x => x.Debts).Column("Debts").Precision(13).Scale(2);
            Map(x => x.RateDebtincome).Column("Rate_DebtIncome").Precision(5).Scale(2);
            Map(x => x.Oth1).Column("Oth1").Length(100);
            Map(x => x.Oth2).Column("Oth2").Length(100);
            Map(x => x.Oth3).Column("Oth3").Length(100);
            Map(x => x.ApproveSpecial).Column("Approve_Special").Length(5);
            Map(x => x.Othspecial).Column("OthSpecial").Length(100);
            Map(x => x.ConditionSpecial).Column("Condition_Special").Length(5);
            Map(x => x.AssetNo).Column("Asset_No").Length(50);
            Map(x => x.ShowRoom).Column("Show_Room").Length(20);
            Map(x => x.ComRateAbsorb).Column("Com_Rate_Absorb").Length(5);
            Map(x => x.ComRateHiring).Column("Com_Rate_Hiring").Precision(13).Scale(2);
            Map(x => x.ComRateIns).Column("Com_Rate_Ins").Precision(13).Scale(2);
            Map(x => x.SubidynetFlatRate).Column("SubidyNet_Flat_Rate").Precision(13).Scale(4);
            Map(x => x.SubidyflatRateCust).Column("SubidyFlat_Rate_Cust").Precision(5).Scale(2);
            Map(x => x.PayDeduction).Column("Pay_Deduction").Length(5);
            Map(x => x.NetPreminumAmount).Column("Net_Preminum_Amount").Precision(13).Scale(2);
            Map(x => x.DeductBaseAmount).Column("Deduct_Base_Amount").Precision(13).Scale(2);
            Map(x => x.WithholdingTaxAmt).Column("WithHolding_Tax_Amt").Precision(13).Scale(2);
            Map(x => x.SubsidyAmt).Column("Subsidy_AMT").Precision(13).Scale(2);
            Map(x => x.SubsidyVatAmt).Column("Subsidy_VAT_Amt").Precision(13).Scale(2);
            Map(x => x.SubsidynetpaidAmt).Column("SubsidyNetPaid_Amt").Precision(13).Scale(2);
            Map(x => x.ReqStatus).Column("Req_Status").Length(5);
            Map(x => x.ReqReason).Column("Req_Reason").Length(5);
            Map(x => x.FlagBlacklist).Column("Flag_BlackList");
            Map(x => x.FlagCreditscoring).Column("Flag_CreditScoring");
            Map(x => x.Guaruntor1).Column("Guaruntor1").Length(10);
            Map(x => x.Relation1).Column("Relation1").Length(5);
            Map(x => x.Income1).Column("Income1").Precision(13).Scale(2);
            Map(x => x.Debt1).Column("Debt1").Precision(13).Scale(2);
            Map(x => x.Guaruntor2).Column("Guaruntor2").Length(10);
            Map(x => x.Relation2).Column("Relation2").Length(5);
            Map(x => x.Income2).Column("Income2").Precision(13).Scale(2);
            Map(x => x.Debt2).Column("Debt2").Precision(13).Scale(2);
            Map(x => x.Guaruntor3).Column("Guaruntor3").Length(10);
            Map(x => x.Relation3).Column("Relation3").Length(5);
            Map(x => x.Income3).Column("Income3").Precision(13).Scale(2);
            Map(x => x.Debt3).Column("Debt3").Precision(13).Scale(2);
            Map(x => x.Guaruntor4).Column("Guaruntor4").Length(10);
            Map(x => x.Relation4).Column("Relation4").Length(5);
            Map(x => x.Income4).Column("Income4").Precision(13).Scale(2);
            Map(x => x.Debt4).Column("Debt4").Precision(13).Scale(2);
            Map(x => x.Posted).Column("Posted");
            Map(x => x.Pending).Column("Pending");
            Map(x => x.PendingBy).Column("Pending_By").Length(10);
            Map(x => x.PendingDate).Column("Pending_Date");
            Map(x => x.Approved).Column("Approved");
            Map(x => x.ApproveBy).Column("Approve_By").Length(10);
            Map(x => x.ApproveDate).Column("Approve_Date");
            Map(x => x.ApproveByMkt).Column("Approve_By_Mkt").Length(50);
            Map(x => x.FlagPolymath).Column("Flag_Polymath");
            Map(x => x.TermDateRequest).Column("Term_Date_Request");
            Map(x => x.FlagRecept).Column("Flag_Recept");
            Map(x => x.FlagPo).Column("Flag_PO");
            Map(x => x.PaidCommDate).Column("PAID_COMM_DATE");
            Map(x => x.ComDate).Column("COM_DATE");
            Map(x => x.ScoringNo).Column("Scoring_No").Length(10);
            Map(x => x.LevelApprove).Column("Level_Approve").Length(2);
            Map(x => x.CreateDate).Column("Create_Date");
            Map(x => x.CreateUser).Column("Create_User").Length(10);
            Map(x => x.ModifyDate).Column("Modify_Date");
            Map(x => x.ModifyUser).Column("Modify_User").Length(20);
            Map(x => x.Active).Column("Active");
            Map(x => x.LeadCreateDate).Column("Lead_Create_Date");
            Map(x => x.LeadCreateUser).Column("Lead_Create_User").Length(10);
            Map(x => x.CustomerCode2).Column("Customer_Code2").Length(10);
            Map(x => x.CustomerPosition2).Column("Customer_Position2").Length(50);
            Map(x => x.Incomepermonth2).Column("IncomePerMonth2").Precision(13).Scale(2);
            Map(x => x.Debts2).Column("Debts2").Precision(13).Scale(2);
            Map(x => x.RateDebtincome2).Column("Rate_DebtIncome2").Precision(5).Scale(2);
            Map(x => x.ScoringNo2).Column("Scoring_No2").Length(10);
            Map(x => x.ApproveLevel).Column("Approve_Level").Length(5);
            Map(x => x.CampaignintCode).Column("CampaignINT_Code").Length(15);
            Map(x => x.CampaignsubCode).Column("CampaignSUB_Code").Length(15);
            Map(x => x.SubsidyAmt2).Column("Subsidy_Amt2").Precision(13).Scale(2);
            Map(x => x.SubsidyVatAmt2).Column("Subsidy_VAT_Amt2").Precision(13).Scale(2);
            Map(x => x.PromotionEventCode).Column("Promotion_Event_Code").Length(10);
            Map(x => x.FlagPost).Column("FLAG_POST");
            Map(x => x.Unpost).Column("UNPOST");
            Map(x => x.Unpostby).Column("UNPOSTBY").Length(10);
            Map(x => x.Ktbsalary).Column("KTBSalary");
            Map(x => x.HoldType).Column("Hold_Type").Length(1);
            Map(x => x.Cat3).Column("CAT3").Length(1);
            Map(x => x.NreqStatus).Column("NREQ_STATUS").Length(10);
            Map(x => x.CrRemark).Column("CR_REMARK").Length(3000);
            Map(x => x.ScoringSeq).Column("Scoring_Seq").Precision(10);
            Map(x => x.FlagLoan).Column("Flag_Loan");
            Map(x => x.Loanprtc).Column("LoanPrtc");
            Map(x => x.ComInvRef).Column("Com_INV_Ref").Length(50);
            Map(x => x.ComInvDate).Column("Com_INV_Date");
            Map(x => x.ComTermHiring).Column("Com_Term_Hiring").Precision(10);
            Map(x => x.Topuploan).Column("TopupLoan");
            Map(x => x.DebsIns).Column("Debs_INS").Precision(18).Scale(2);
            Map(x => x.DebsInsFlag).Column("Debs_INS_Flag");
            Map(x => x.DebsAgr).Column("Debs_AGR").Precision(18).Scale(2);
            Map(x => x.DebsAgrFlag).Column("Debs_Agr_Flag");
            Map(x => x.DebsCompolFlag).Column("Debs_Compol_Flag");
            Map(x => x.Ddtypereg).Column("DDTypeReg").Length(50);
            Map(x => x.Loanproctectionchq).Column("LoanProctectionChq");
            Map(x => x.DebCarforcash).Column("Deb_CarForCash").Precision(18).Scale(2);
            Map(x => x.DebCarforcashRef).Column("Deb_CarForCash_Ref").Length(20);
            Map(x => x.HiringIncamountvat).Column("Hiring_IncAmountVAT").Precision(18).Scale(2);
            Map(x => x.SubFinAmt).Column("Sub_Fin_Amt").Precision(18).Scale(2);
            Map(x => x.InsComAbsorb).Column("INS_COM_Absorb").Length(5);
            Map(x => x.HiringChargincvat).Column("Hiring_ChargIncVAT").Precision(18).Scale(2);
            Map(x => x.ComRateInsvat).Column("COM_RATE_INSVAT").Precision(18).Scale(2);
            Map(x => x.SubsidyWh).Column("Subsidy_WH").Precision(18).Scale(2);
            Map(x => x.ComRateVat).Column("COM_Rate_VAT").Precision(18).Scale(2);
            Map(x => x.SubsidyNetpaid).Column("Subsidy_NetPaid").Precision(18).Scale(2);
            Map(x => x.SubHpAmt).Column("Sub_HP_Amt").Precision(18).Scale(2);
            Map(x => x.InsComPayto).Column("INS_Com_PayTo").Length(10);
            Map(x => x.HiringNet).Column("Hiring_NET").Precision(18).Scale(2);
            Map(x => x.HiringAmountvat).Column("Hiring_AmountVAT").Precision(18).Scale(2);
            Map(x => x.ComInsWh).Column("COM_INS_WH").Precision(18).Scale(2);
            Map(x => x.ProductType).Column("Product_type").Length(10);
            Map(x => x.ComInsNetpaid).Column("COM_INS_NetPaid").Precision(18).Scale(2);
            Map(x => x.ComHiringPayto).Column("Com_Hiring_PayTo").Length(10);
            Map(x => x.HiringWh).Column("Hiring_WH").Precision(18).Scale(2);
            Map(x => x.ComMaxTerm).Column("COM_Max_Term").Precision(10);
            Map(x => x.ComMaxRate).Column("COM_Max_Rate").Precision(5).Scale(2);
            Map(x => x.ComTermHirring).Column("COM_TERM_HIRRING").Precision(10);
            Map(x => x.Alertbooking).Column("AlertBooking");
            Map(x => x.FlagWeb).Column("flag_web");
            Map(x => x.Mktcde).Column("MKTCDE").Length(2);
            Map(x => x.AgrStartDd).Column("AGR_START_DD");
            Map(x => x.FlagCommHirr).Column("FLAG_Comm_Hirr");
            Map(x => x.Ages).Column("AGES").Precision(10);
            Map(x => x.TransComsaleDd).Column("Trans_COMSale_DD");
            Map(x => x.Nagrcode).Column("NAGRCODE").Length(20);
            Map(x => x.Opergroup).Column("OperGroup").Length(10);
            Map(x => x.Balloonamt).Column("BalloonAmt").Precision(18).Scale(2);
            Map(x => x.Dealertocustomer).Column("DealerToCustomer");
            Map(x => x.DueDay).Column("Due_Day").Precision(10);
            Map(x => x.EffYield).Column("EFF_YIELD").Precision(18).Scale(8);
            Map(x => x.PaidDate).Column("Paid_Date");
            Map(x => x.Unearn).Column("UNEarn").Precision(18).Scale(4);
        }
    }
}
