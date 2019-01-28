import React from "react";
import {MINIMUM_MONTHLY_WAGE} from "../constants";
import incomeTaxCalculator from "./IncomeTaxCalculator";
import ContentEditable from "react-contenteditable";
import CONTRACT_TYPES from "../constants";


export default class SalaryCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.doCalculation(MINIMUM_MONTHLY_WAGE);

        this.engine =

        this.handleChangeOnBase = this.handleChangeOnBase.bind(this);
        this.handleContractChange = this.handleContractChange(this);

    }

    handleChangeOnBase(event) {
        const updatedState = this.doCalculation(event.target.value);
        this.setState(updatedState);
    }


    handleContractChange(event){
        const value = event.target.value;
        if(value === CONTRACT_TYPES.CONTRATO){

        }else if(value === CONTRACT_TYPES.SERVICIOS){

        }
    }

    calculateContractSalary(salaryBase){
        const sanitizeSalary = Number(salaryBase);

        console.log(MINIMUM_MONTHLY_WAGE);

        const health = sanitizeSalary * 0.04;
        const pension = sanitizeSalary * 0.04;
        const fsp = sanitizeSalary > MINIMUM_MONTHLY_WAGE * 4 ? sanitizeSalary * 0.01 : 0;

        const grossSalary = sanitizeSalary - (health + pension + fsp);
        const exemptIncome = grossSalary * 0.25;
        const taxBase = grossSalary - exemptIncome;

        const incomeTax = incomeTaxCalculator.getIncomeTax(taxBase);
        const netMonthlySalary = grossSalary - incomeTax;


        return {
            salary: sanitizeSalary + "",
            contractType: CONTRACT_TYPES.CONTRATO,
            health: health,
            pension: pension,
            FSP: fsp,
            taxBase: taxBase,
            incomeTax: incomeTax,
            netMonthlySalary: netMonthlySalary
        };
    }

    render() {
        return (
            <tr className={"calculator"}>
                <td>
                    Offer Name
                </td>
                <td>
                    <select value={this.state.contractType} onChange={this.handleContractChange}>
                        <option value={CONTRACT_TYPES.CONTRATO}>Contrato</option>
                        <option value={CONTRACT_TYPES.SERVICIOS}>Servicios</option>
                    </select>
                </td>
                <td>

                    <ContentEditable
                        html={this.state.salary} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={this.handleChangeOnBase} // handle innerHTML change
                    />

                </td>

                <td>
                    {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(this.state.health)}
                </td>


                <td>
                    {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                    }).format(this.state.pension)}
                </td>

                <td>
                    {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(this.state.FSP)}
                </td>

                <td>
                    {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                    }).format(this.state.taxBase)}
                </td>

                <td>
                    {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                    }).format(this.state.incomeTax)}
                </td>


                <td>
                    {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                    }).format(this.state.netMonthlySalary)}
                </td>
            </tr>

        );
    }
}
