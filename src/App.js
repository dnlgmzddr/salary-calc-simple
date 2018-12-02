import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SalaryCalculator from  './calculator/SalaryCalculator'


class App extends Component {

    constructor(props) {
        super(props);

        this.ids  = 1;
        this.state = {
            calculators: [this.ids]
        }
    }



    addCalc = () => {
        this.ids = this.ids + 1;
        this.state.calculators.push(this.ids);
        this.setState({
            calculators: this.state.calculators
        });
    }

    render() {


        return (
            <Container>
                <Row>
                {
                    this.state.calculators.map((calc, index) => {
                       return <Col xs="12" sm="6" md="4" index={index} key={index}> <SalaryCalculator></SalaryCalculator> </Col>
                    })}
                </Row>
                <Button onClick={this.addCalc}>add</Button>
            </Container>
        )
    };
}


export default App;
