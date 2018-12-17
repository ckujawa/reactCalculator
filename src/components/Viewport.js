import React from 'react'
import styled from 'styled-components'

const View = styled.div`
    background: var(--black);
    color: #E9C9FF;
    margin-top: 0;
    height: 2.2rem;
    font-family: Orbitron, sans-serif;
    font-size: 2em;
    text-align: right;
    grid-column: 1 / -1;
    padding: 5px 10px;
`

class ViewPort extends React.Component {
    render() {
        return (
            <View>{this.props.displayValue}</View>
        );
    }
}

export default ViewPort;