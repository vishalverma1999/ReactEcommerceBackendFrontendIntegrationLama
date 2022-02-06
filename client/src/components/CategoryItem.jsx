import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 90vh;   // parent container ka 70 % height, here parent container is container component of categories
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;   // parent container ka 100 % height, here parent container is container component of categoryItem
object-fit: cover;  // images ka size small hone par image appearance distort ho gaya, isliye use sahi karne ke liye we cropped it as a cover image
${mobile({height: "35vh"})}
`

const Info = styled.div`
/* border: 2px solid green; */
position: absolute;
top: 0px;
left: 0px;
width: 100%;    // ab info waala componenet complete width le lega jitni uski parent container ki hai categoryItem mein which is flex: 1
height: 100%;   // ab info waala componenet complete height le lega jitni uski parent container ki hai categoryItem mein which is height: 80vh
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
padding: 10px;
/* font-size: 20px; */
background-color: white;
cursor: pointer;
color: gray;
border: none;
font-weight: 600;
`

const CategoryItem = ({item}) => {   // props na likhkar direct uske andar ke content ko curly braces mein likhkar pass kar diya i.e destructuring
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
