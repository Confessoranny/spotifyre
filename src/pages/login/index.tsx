import React from 'react'
// import baseStyles from '.'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background: red;
`
const Content = styled.div`
display: flex;
width: calc(100% - 10%);
height: calc(100% - 10%);
background: pink;
`

function Login() {
    return (
        <Container>
            <Content>
            </Content>
        </Container>
    )
}

export default Login;