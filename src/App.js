import React, { Component } from "react";
import { Table, Button } from "reactstrap";
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
        <table className={"table table-striped"}>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Salario Base</td>
                    </tr>
                    <tr>
                      <td>Salud</td>
                    </tr>
                    <tr>
                      <td>Pension</td>
                    </tr>
                    <tr>
                      <td>FSP</td>
                    </tr>
                    <tr>
                      <td>Base Salarial</td>
                    </tr>
                    <tr>
                      <td>Retencion en la fuente</td>
                    </tr>
                    <tr>
                      <td>Salario Neto Mensual</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              {this.state.calculators.map((calc, index) => {
                return (
                  <td index={index} key={index}>
                    {" "}
                    <SalaryCalculator />{" "}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <Button onClick={this.addCalc}>add</Button>
      </div>
    );
  }
}

export default App;
