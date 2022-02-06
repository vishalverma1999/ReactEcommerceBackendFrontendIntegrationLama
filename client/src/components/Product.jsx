import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
/* border: 2px solid black; */
opacity: 0;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
/* border: 2px solid red; */
flex: 1;
margin: 5px;
min-width: 300px;
height: 450px;
display: flex;
align-items: center;
justify-content: center;
background-color: #eef3f5;
position: relative;

&:hover ${Info} {
   opacity: 1;
}
`

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
/* z-index: 5; */
`

const Image = styled.img`
height: 80%;
/* width: 100%; */
/* object-fit: cover; */
z-index: 2;
`

const Icon = styled.div`
/* border: 2px solid red; */
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-evenly;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`


const Product = ({ item }) => {
    return (
        <>
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
         
        </>
    )
}

export default Product
