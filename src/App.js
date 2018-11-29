import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculators: [1]
        }
    }


    addCalc = () => {
        this.state.calculators.push(1);
        this.setState({
            calculators: this.state.calculators
        });
    }gt

    render() {


        return (
            <div>
                {
                    this.state.calculators.map((calc, index) => {
                        <SalaryCalculator index={index} key={index}></SalaryCalculator>
                    })}

                <button onClick={this.addCalc}>add</button>
            </div>
        )
    };
}


class SalaryCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {base: undefined};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calcPension = this.calcPension.bind(this);
        this.calcHealth = this.calcHealth.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    calcHealth() {
        return this.state.base * 0.08;
    }

    calcPension() {
        return this.state.base * 0.06;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Base Salarial:
                        <input type="text" value={this.state.base} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Salud:
                        <input type="text" readOnly value={this.calcHealth()}/>
                    </label>
                    <label>
                        Pension:
                        <input type="text" readOnly value={this.calcPension()}/>
                    </label>
                </form>
                <div>
                    <p>Base: {this.state.base}</p>
                </div>
            </div>
        );
    }
}

export default App;
