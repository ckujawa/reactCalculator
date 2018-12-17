import injectGlobal from 'styled-components'

injectGlobal`
    
    :root{
        --black: #161919;
    }

    body{
        display: grid;
        justify-content: center;
        align-content: center;
        padding: 10px;
        background: orange;
    }
    
    #root{
        height: 100vh;
        width: 100vw;
    }
`