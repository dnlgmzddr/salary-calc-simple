import React, {Component} from "react";
import { Button} from "reactstrap";
import SalaryCalculator from "./calculator/SalaryCalculator";

import shortid from 'shortid';

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            calculators: [shortid.generate()]
        };
    }

    addCalc = () => {

        this.state.calculators.push(shortid.generate());
        this.setState({
            calculators: this.state.calculators
        });
    };

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr className={"header"}>
                        <td>
                            _______
                        </td>
                        <td>
                            Tipo de vinculación
                        </td>
                        <td>
                            Salario
                        </td>
                        <td>
                            Salud Obligatoria
                        </td>
                        <td>
                            Pensión Obligatoria
                        </td>
                        <td>
                            FSP
                        </td>
                        <td>
                            Base Gravable
                        </td>
                        <td>
                            Retención en la Fuente
                        </td>
                        <td>
                            Salario Neto Mensual
                        </td>
                    </tr>

                    {this.state.calculators.map((calc, index) => {
                        return (
                            <SalaryCalculator index={index} key={calc}/>
                        );
                    })}

                    </tbody>
                </table>
                <Button onClick={this.addCalc}>add</Button>
            </div>
        );
    }
}

export default App;
