import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
// since it is going to be full screen component therefore 100vw and 100vh
width: 100vw; 
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)) ,url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center center no-repeat;
/* opacity: 0.5; */
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width: "75%"})}
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
color: white;
background-color: teal;
margin-bottom: 10px;
`

const Link = styled.a`
cursor: pointer;
text-decoration: underline;
margin: 5px 0px;
font-size: 12px;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DON'T REMEMBER THE PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
