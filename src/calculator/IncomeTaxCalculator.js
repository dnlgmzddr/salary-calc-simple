import {MINIMUM_MONTHLY_WAGE, UVT} from "../constants";
import CONTRACT_TYPES from "../constants";


class SalaryCalculator{
    constructor(salaryBase){
            this.salaryBase = salaryBase;
    }


    fixNumber(number){
        return Math.round((number + 0.00001) * 100) / 100;
    }
}

class EmployeeSalaryCalculator extends SalaryCalculator{

    constructor(salaryBase){
        super(salaryBase);



        const health = sanitizeSalary * 0.04;
        const pension = sanitizeSalary * 0.04;
        const fsp = sanitizeSalary > MINIMUM_MONTHLY_WAGE * 4 ? sanitizeSalary * 0.01 : 0;

        const grossSalary = sanitizeSalary - (health + pension + fsp);
        const exemptIncome = grossSalary * 0.25;
        const taxBase = grossSalary - exemptIncome;

        const incomeTax = incomeTaxCalculator.getIncomeTax(taxBase);
        const netMonthlySalary = grossSalary - incomeTax;


        // salary: sanitizeSalary + "",
        //     contractType: CONTRACT_TYPES.CONTRATO,
        //     health: health,
        //     pension: pension,
        //     FSP: fsp,
        //     taxBase: taxBase,
        //     incomeTax: incomeTax,
        //     netMonthlySalary: netMonthlySalary
        
    }


    function cetIncomeTax(taxBase) {


        const uvtSalary = taxBase / UVT;

        console.log(`salary in uvt::${uvtSalary}`);
        console.log(`salary in uvt::${fixNumber(uvtSalary)}`);

        return getTaxInUVT(uvtSalary,taxBase) * UVT;


    }
    
    function getTaxInUVT(uvtSalary) {
        if (uvtSalary > 0 && uvtSalary <= 95)
        {
            console.log(`bracket::0 - 95`);
            return 0;
        }
        if (uvtSalary > 95 && uvtSalary <= 150)
        {
            console.log(`bracket::95 - 150`);
            return (uvtSalary - 95) * 0.19;
        }
        if (uvtSalary > 150 && uvtSalary <= 360)
        {
            console.log(`bracket::150 - 360`);

            return ((uvtSalary - 150) * 0.28) + 10;
        }
        if (uvtSalary > 360)
        {
            console.log(`bracket::360 - inf`);
            return ((uvtSalary - 360) * 0.33) + 69;
        }

    }

}



// export default {getIncomeTax}