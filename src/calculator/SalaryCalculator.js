import React from "react";
import {MINIMUM_MONTHLY_WAGE} from "../constants";
import incomeTaxCalculator from "./IncomeTaxCalculator";
import ContentEditable from "react-sane-contenteditable";
import {Table, Button} from "reactstrap";

export default class SalaryCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.doCalculation(MINIMUM_MONTHLY_WAGE);

        this.handleChangeOnBase = this.handleChangeOnBase.bind(this);


    }

    handleChangeOnBase(event, value) {
        const salaryBase = value;
        const updatedState = this.doCalculation(salaryBase);
        this.setState(updatedState);
    }


    doCalculation(salaryBase) {
        console.log(MINIMUM_MONTHLY_WAGE);

        const health = salaryBase * 0.04;
        const pension = salaryBase * 0.04;
        const fsp = salaryBase > MINIMUM_MONTHLY_WAGE * 4 ? salaryBase * 0.01 : 0;

        const grossSalary = salaryBase - (health + pension + fsp);
        const exemptIncome = grossSalary * 0.25;
        const taxBase = grossSalary - exemptIncome;

        const incomeTax = incomeTaxCalculator.getIncomeTax(taxBase);
        const netMonthlySalary = grossSalary - incomeTax;


        return {
            salary: salaryBase,
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
            <table>
                <tbody>
                <tr>
                    <ContentEditable
                        tagName="td"
                        content={this.state.salary}
                        editable={true}
                        maxLength={140}
                        multiLine={false}
                        onChange={this.handleChangeOnBase}/>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(this.state.health)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                        }).format(this.state.pension)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(this.state.FSP)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                        }).format(this.state.taxBase)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                        }).format(this.state.incomeTax)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                        }).format(this.state.netMonthlySalary)}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
