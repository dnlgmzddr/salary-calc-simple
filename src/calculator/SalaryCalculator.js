import React from "react";
import { MINIMUM_MONTHLY_WAGE } from '../constants';
import incomeTaxCalculator from './IncomeTaxCalculator';
import {Card, Form, FormGroup, Label, Input} from "reactstrap";
console.log(MINIMUM_MONTHLY_WAGE);


export default class SalaryCalculator extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            salary: 0,
            health: 0,
            pension: 0,
            FSP: 0,
            taxBase: 0,
            incomeTax: 0
        };

        this.handleChangeOnBase = this.handleChangeOnBase.bind(this);

    }

    handleChangeOnBase(event) {
        const salaryBase = event.target.value;


        console.log(MINIMUM_MONTHLY_WAGE);

        const health = salaryBase * 0.04;
        const pension = salaryBase * 0.04;
        const fsp = salaryBase > MINIMUM_MONTHLY_WAGE * 4 ? salaryBase * 0.01 : 0;

        const grossSalary = salaryBase - (health + pension + fsp);
        const exemptIncome = grossSalary * 0.25;
        const taxBase = grossSalary - exemptIncome;


        const incomeTax = incomeTaxCalculator.getIncomeTax(taxBase);

        this.setState({
            salary: salaryBase,
            health: health,
            pension: pension,
            FSP: fsp,
            taxBase: taxBase,
            incomeTax: incomeTax
        });
    }




    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <Card>
                <Form onSubmit={this.handleSubmit}>


                    <FormGroup>
                        <Label>
                            Base Salarial:
                        </Label>
                        <Input
                            type="text"
                            name="base"
                            value={this.state.base}
                            onChange={this.handleChangeOnBase}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Salud</Label>
                        <Input type="text" readOnly value={this.state.health}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Pension</Label>
                        <Input type="text" readOnly value={this.state.pension}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>FSP</Label>
                        <Input type="text" readOnly value={this.state.FSP}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Base gravable</Label>
                        <Input type="text" readOnly value={this.state.taxBase}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Rete Fuente</Label>
                        <Input type="text" readOnly value={this.state.incomeTax}/>
                    </FormGroup>
                </Form>
            </Card>
        );
    }
}
