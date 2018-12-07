import React, {Component} from "react";
import { Button} from "reactstrap";
import SalaryCalculator from "./calculator/SalaryCalculator";

class App extends Component {
    constructor(props) {
        super(props);

        this.ids = 1;
        this.state = {
            calculators: [this.ids]
        };
    }

    addCalc = () => {
        this.ids = this.ids + 1;
        this.state.calculators.push(this.ids);
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
                            <SalaryCalculator index={index} key={index}/>
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
