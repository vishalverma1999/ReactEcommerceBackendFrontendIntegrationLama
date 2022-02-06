import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useState } from "react"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
// Overflow: hidden;   // is used to prevent any overflow horizontally or vertically from component/div/screen

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; 
    top: 0px;
    bottom: 0px;
    left: ${props => props.direction === "left" && "10px"};   
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;   
    opacity: 0.5;
    z-index: 2;
`
// ${props=> props.direction === "left" && "10px"}  -- passing the prop using arrow function, which helps to run the left and right positions conditionally on the basis of condition. Agar && ke peeche likha hua true hoga to  && ke baad likha hua execute hoga else nahi

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex* -100}vw);
`
// height and width jo percentage mein hai wo respect to parent container ke hai aur yaha parent container Container component hai

const Slide = styled.div`
width: 100vw;
height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
border: 2px solid red;
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background: transparent;
cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setslideIndex] = useState(0);   // initial set to 0 because slides ko hum array se nikalkar display karayenge

    const handleClick = (direction) => {

        if(direction=== "left"){
            setslideIndex(slideIndex>0 ? slideIndex-1 : 2)
        } else{
            setslideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >   {/*direction="left"  is a prop and we are gonna pass it to the styled components Arrow*/}
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg = {item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} ></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
