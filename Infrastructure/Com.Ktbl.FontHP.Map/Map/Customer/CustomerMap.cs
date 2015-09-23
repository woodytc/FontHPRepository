﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Com.Ktbl.FontHP.Domain.Customer;
using FluentNHibernate.Mapping;

namespace Com.Ktbl.FontHP.Map.Map.Customer
{
    public class CustomerMap : ClassMap<CustomerDomain>
    {

        public CustomerMap()
        {
            Table("Customer");
            LazyLoad();
            Id(x => x.CustomerCode).GeneratedBy.Assigned().Column("Customer_Code");
            Map(x => x.CustomerGroup).Column("Customer_Group").Length(5);
            Map(x => x.Titlename).Column("TitleName").Length(5);
            Map(x => x.FNameEng).Column("F_Name_Eng").Length(50);
            Map(x => x.LNameEng).Column("L_Name_Eng").Length(50);
            Map(x => x.FNameThai).Column("F_Name_Thai").Length(50);
            Map(x => x.LNameThai).Column("L_Name_Thai").Length(50);
            Map(x => x.CustNature).Column("Cust_Nature").Length(5);
            Map(x => x.Contactname).Column("ContactName").Length(50);
            Map(x => x.Email).Column("Email").Length(50);
            Map(x => x.Telephone).Column("Telephone").Length(50);
            Map(x => x.Bot).Column("BOT").Length(20);
            Map(x => x.BirthDate).Column("Birth_Date");
            Map(x => x.ProvinceCode).Column("Province_Code").Length(5);
            Map(x => x.Sex).Column("Sex").Length(5);
            Map(x => x.Marriage).Column("Marriage").Length(5);
            Map(x => x.StartWorkDate).Column("Start_Work_Date");
            Map(x => x.OccupationGroup).Column("Occupation_Group").Length(5);
            Map(x => x.Occupation).Column("Occupation").Length(20);
            Map(x => x.Officeaddress).Column("OfficeAddress").Length(200);
            Map(x => x.Positions).Column("Positions").Length(200);
            Map(x => x.PositionCode).Column("Position_Code").Length(20);
            Map(x => x.StartDate).Column("Start_Date").Length(50);
            Map(x => x.Salary).Column("Salary").Precision(13).Scale(2);
            Map(x => x.PayBy).Column("Pay_By").Length(5);
            Map(x => x.DwellLong).Column("Dwell_Long").Precision(10);
            Map(x => x.Typehost).Column("TypeHost").Length(5);
            Map(x => x.Rent).Column("Rent").Precision(13).Scale(2);
            Map(x => x.Deub).Column("Deub").Precision(13).Scale(2);
            Map(x => x.Hrname).Column("HRName").Length(100);
            Map(x => x.Hrtelephone).Column("HRTelephone").Length(50);
            Map(x => x.Lastcompanyname).Column("LastCompanyName").Length(50);
            Map(x => x.Lastpositionname).Column("LastPositionName").Length(50);
            Map(x => x.Lasttelephone).Column("LastTelephone").Length(30);
            Map(x => x.Lastage).Column("LastAge").Precision(10);
            Map(x => x.EducationOfSon).Column("Education_Of_Son").Precision(10);
            Map(x => x.SpouseName).Column("Spouse_Name").Length(100);
            Map(x => x.SpouseOccupation).Column("Spouse_Occupation").Length(5);
            Map(x => x.SpouseCompany).Column("Spouse_Company").Length(50);
            Map(x => x.SpousePosition).Column("Spouse_Position").Length(50);
            Map(x => x.SpouseSalary).Column("Spouse_Salary").Precision(13).Scale(2);
            Map(x => x.SpouseDeub).Column("Spouse_Deub").Precision(13).Scale(2);
            Map(x => x.SpouseTelephone).Column("Spouse_Telephone").Length(50);
            Map(x => x.SpouseAge).Column("Spouse_Age").Precision(10);
            Map(x => x.Typecard).Column("TypeCard").Length(5);
            Map(x => x.Idcode).Column("IDCode").Length(30);
            Map(x => x.IssuedDate).Column("Issued_Date");
            Map(x => x.ExpriedDate).Column("Expried_Date");
            Map(x => x.IssuedBy).Column("Issued_By").Length(50);
            Map(x => x.Bank).Column("Bank").Length(5);
            Map(x => x.AccountType).Column("Account_Type").Length(5);
            Map(x => x.AccountNo).Column("Account_No").Length(30);
            Map(x => x.AccountLife).Column("Account_Life").Precision(10);
            Map(x => x.AccountOutstanding).Column("Account_Outstanding").Precision(10);
            Map(x => x.AccountOverbal).Column("Account_OverBal").Precision(10);
            Map(x => x.Bank1).Column("Bank1").Length(5);
            Map(x => x.BankDeb1).Column("Bank_Deb1").Precision(13).Scale(2);
            Map(x => x.Bank2).Column("Bank2").Length(5);
            Map(x => x.BankDeb2).Column("Bank_Deb2").Precision(13).Scale(2);
            Map(x => x.Bank3).Column("Bank3").Length(5);
            Map(x => x.BankDeb3).Column("Bank_Deb3").Precision(13).Scale(2);
            Map(x => x.CalculateBy).Column("Calculate_By").Length(5);
            Map(x => x.FinanceSalaryAmt).Column("Finance_Salary_Amt").Precision(13).Scale(2);
            Map(x => x.FinanceSalaryMonth).Column("Finance_Salary_Month").Precision(10);
            Map(x => x.FinanceSalaryPercent).Column("Finance_Salary_Percent").Precision(5).Scale(2);
            Map(x => x.FinanceSalaryNet).Column("Finance_Salary_Net").Precision(13).Scale(2);
            Map(x => x.FinanceBonusAmt).Column("Finance_Bonus_Amt").Precision(13).Scale(2);
            Map(x => x.FinanceBonusMonth).Column("Finance_Bonus_Month").Precision(10);
            Map(x => x.FinanceBonusPercent).Column("Finance_Bonus_Percent").Precision(5).Scale(2);
            Map(x => x.FinanceBonusNet).Column("Finance_Bonus_Net").Precision(13).Scale(2);
            Map(x => x.FinanceCommAmt).Column("Finance_Comm_Amt").Precision(13).Scale(2);
            Map(x => x.FinanceCommMonth).Column("Finance_Comm_Month").Precision(10);
            Map(x => x.FinanceCommPercent).Column("Finance_Comm_Percent").Precision(5).Scale(2);
            Map(x => x.FinanceCommNet).Column("Finance_Comm_Net").Precision(13).Scale(2);
            Map(x => x.FinanceOthAmt).Column("Finance_Oth_Amt").Precision(13).Scale(2);
            Map(x => x.FinanceOthMonth).Column("Finance_Oth_Month").Precision(10);
            Map(x => x.FinanceOthPercent).Column("Finance_Oth_Percent").Precision(5).Scale(2);
            Map(x => x.FinanceOthNet).Column("Finance_Oth_Net").Precision(13).Scale(2);
            Map(x => x.OtherIncome).Column("Other_Income").Length(200);
            Map(x => x.DebRentHouse).Column("Deb_Rent_House").Precision(13).Scale(2);
            Map(x => x.DebHouse).Column("Deb_House").Precision(13).Scale(2);
            Map(x => x.DebLeaseCar).Column("Deb_Lease_Car").Precision(13).Scale(2);
            Map(x => x.DebOth).Column("Deb_Oth").Precision(13).Scale(2);
            Map(x => x.TotalIncome).Column("Total_Income").Precision(13).Scale(2);
            Map(x => x.TotalDeb).Column("Total_Deb").Precision(13).Scale(2);
            Map(x => x.TotalIncomeDeb).Column("Total_Income_Deb").Precision(13).Scale(2);
            Map(x => x.TotalPercent).Column("Total_Percent").Precision(5).Scale(2);
            Map(x => x.Posted).Column("Posted");
            Map(x => x.Entcode).Column("ENTCODE").Length(50);
            Map(x => x.Remark1).Column("Remark1").Length(200);
            Map(x => x.Remark2).Column("Remark2").Length(200);
            Map(x => x.Remark3).Column("Remark3").Length(200);
            Map(x => x.Remark4).Column("Remark4").Length(200);
            Map(x => x.Remark5).Column("Remark5").Length(200);
            Map(x => x.DocIncome).Column("Doc_Income").Precision(13).Scale(2);
            Map(x => x.StatementIncome).Column("Statement_Income").Precision(13).Scale(2);
            Map(x => x.KtbsalaryFlag).Column("KTBSalary_Flag");
            Map(x => x.KtbAccno).Column("KTB_AccNo").Length(20);
            Map(x => x.Department).Column("Department").Length(50);
            Map(x => x.CreateDate).Column("Create_Date");
            Map(x => x.CreateUser).Column("Create_User").Length(10);
            Map(x => x.ModifyDate).Column("Modify_Date");
            Map(x => x.ModifyUser).Column("Modify_User").Length(10);
            Map(x => x.Active).Column("Active");
            Map(x => x.FinanceGrp).Column("Finance_Grp").Length(2);
            Map(x => x.Webposition).Column("WebPosition").Length(20);
            Map(x => x.Mobile).Column("Mobile").Length(50);
            Map(x => x.OccDetail).Column("OCC_DETAIL").Length(200);
            Map(x => x.CareerId).Column("CAREER_ID").Length(20);
            Map(x => x.GroupId).Column("Group_ID").Length(20);
            Map(x => x.Parentcompany).Column("ParentCompany").Length(5);
        }
    }
}
