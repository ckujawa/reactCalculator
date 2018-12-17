import React, { Component } from 'react';
import Calculator from './components/Calculator'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');

     :root{
        --black: #161919;
    }
    body{
        padding: 10px;
        background-image: url('https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
    }
    
    .App {
        height: 100vh;
        width: 100vw;        
        display: grid;
        justify-content: center;
        align-content: center;
    }

    h1 {
      font-family: 'ZCOOL XiaoWei', serif;
    }
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Calculator />
      </div>
    );
  }
}

export default App;
