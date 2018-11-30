import {UVT} from "../constants";


function getIncomeTax(taxBase) {
    const uvtSalary = taxBase / UVT;
    return getTaxInUVT(uvtSalary) * UVT;


}

function getTaxInUVT(uvtSalary) {
    if (uvtSalary > 0 && uvtSalary <= 95) return 0;
    if (uvtSalary > 95 && uvtSalary <= 150) return (uvtSalary - 95) * 0.19;
    if (uvtSalary > 150 && uvtSalary <= 360) return ((uvtSalary - 150) * 0.19) + 10;
    if (uvtSalary > 360) return ((uvtSalary - 360) * 0.33) + 69;
}

export default {getIncomeTax}