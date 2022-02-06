import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
/* position: relative; */
background-color: #fcf5f5;
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
font-size: 70px;
text-align: center;
/* position: absolute; */
margin-bottom: 20px;
`

const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign: "center"})}
`

const InputContainer = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 50%;
height: 40px;
background-color: white;
border: 1px solid lightgray;
${mobile({width: "80%"})}
`

const Input = styled.input`
padding-left: 20px;
flex: 8;
/* height: 100%; */
border: none;
`

const Button = styled.button`
flex: 1;
/* height: 100%; */
border: none;
background-color: teal;
color: white;

`

// const Send = styled.div``

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Lorem ipsum dolor sit amet adipisicing elit.</Desc>
            <InputContainer>
            <Input placeholder="your email" ></Input>
            <Button>
                <Send></Send>
            </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
