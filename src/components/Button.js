import React from 'react'
import styled from 'styled-components'

const ButtonSpan = styled.span`
    display: grid;
    align-content: center;
    justify-content: center;
    border: 2px solid var(--black);
    color:  var(--black);
    background: #F7CB9E;
    font-size: 2em;
    padding: 2px;
`

class Button extends React.Component {
    keyPressed(e) {
        this.props.updateValue(e.currentTarget.textContent);
    }

    render() {
        return (
            <ButtonSpan onClick={e => { this.keyPressed(e) }}>
                {this.props.value}
            </ButtonSpan>
        );
    }
}

export default Button;