import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ViewPort from './Viewport';

const CalcDiv = styled.div`
  display: grid;
  background: #AA92BA;
  padding: 20px;
  grid-row-gap: 5px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-column-gap: 5px;
`
const EqualsRow = styled.div`
  display: grid;
  grid-column: 1 / -1;
`

class Calculator extends React.Component {
    operators = ["-", "+", "÷", "×"];

    constructor(props) {
        super(props);
        this.state = {
            currentOperation: "0",
            reset: false
        };
        this.calclulateAndUpdate = this.calculateAndUpdate.bind(this);
    }


    calculateAndUpdate(e) {
        let op = this.state.currentOperation;
        const eq = op.split(' ');
        let prevValue = parseInt(eq[0]);
        for (var c = 1; c < eq.length; c++) {
            if (this.operators.includes(eq[c])) {
                const oper = eq[c];
                c++;
                const nextValue = eq[c];
                switch (oper) {
                    case "+":
                        prevValue += parseInt(nextValue);
                        break;
                    case "-":
                        prevValue -= parseInt(nextValue);
                        break;
                    case "÷":
                        prevValue /= parseInt(nextValue);
                        break;
                    case "×":
                        prevValue *= parseInt(nextValue);
                        break;
                    default:
                        break;
                }
            }
        }
        op = prevValue.toString();
        this.setState({
            currentOperation: op,
            reset: true
        });
    }


    updateCurrentValue = (e) => {
        let currentOp = this.state.currentOperation;
        let reset = this.state.reset;
        if (reset && !(this.operators.includes(e) || 'C' === e || 'CE' === e)) {
            currentOp = "0";
        }
        reset = false;
        if (this.operators.includes(e)) {
            currentOp += " " + e + " ";
        } else if (currentOp === "0") {
            currentOp = e;
        } else if ("CE" === e) {
            const elements = currentOp.split(' ');
            elements.pop();
            currentOp = elements.join(' ');
            currentOp += " ";
        } else if ("C" === e) {
            currentOp = "0";
        } else if ("=" === e) {
            this.calclulateAndUpdate(e);
            return;
        } else {
            currentOp += e;
        }
        this.setState({
            currentOperation: currentOp,
            reset: reset
        });
    }

    render() {
        return (
            <CalcDiv>
                <h1>
                    React Calculator
                </h1>
                <Row>
                    <ViewPort displayValue={this.state.currentOperation} />
                </Row>
                <Row>
                    <Button value="8" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="7" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="9" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="×" updateValue={this.updateCurrentValue} ></Button>
                </Row>
                <Row>
                    <Button value="4" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="5" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="6" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="÷" updateValue={this.updateCurrentValue} ></Button>
                </Row>
                <Row>
                    <Button value="1" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="2" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="3" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="-" updateValue={this.updateCurrentValue} ></Button>
                </Row>
                <Row>
                    <Button value="CE" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="C" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="0" updateValue={this.updateCurrentValue} ></Button>
                    <Button value="+" updateValue={this.updateCurrentValue} ></Button>
                </Row>
                <EqualsRow>
                    <Button value="=" updateValue={this.updateCurrentValue} ></Button>
                </EqualsRow>
            </CalcDiv>
        )
    };
}

export default Calculator;