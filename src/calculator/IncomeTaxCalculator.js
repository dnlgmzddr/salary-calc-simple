import { UVT } from "../constants";

function getIncomeTax(taxBase) {


    const uvtSalary = taxBase / UVT;

    console.log(`salary in uvt::${uvtSalary}`);
    console.log(`salary in uvt::${fixNumber(uvtSalary)}`);

    return getTaxInUVT(uvtSalary,taxBase) * UVT;


}


function fixNumber(number){
    return Math.round((number + 0.00001) * 100) / 100;
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

export default {getIncomeTax}