import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection: "column", padding:"10px"})}
`
const ImageContainer = styled.div`
flex:1
`
const Image = styled.img`
height: 90vh;   // kyunki height ko 100% karne par bhi image ki height bohot jyada ho rahi thi
width: 100%;
object-fit: cover;
${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
${mobile({padding: "10px"})}
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-size: 40px;
font-weight: 100;
`
const FilterContainer = styled.div`
/* border: 2px solid red; */
display: flex;
justify-content: space-between;
width: 50%;    // InfoContainer jiski width flex: 1; hai us infocontainer ki bhi 50% width kardo bas
margin: 30px 0px;
${mobile({width: "100%"})}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-weight: 200;
font-size: 20px;
`

const FilterColor = styled.div`
 height: 20px;
 width: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};
 margin: 0 5px;
 cursor: pointer;
`
const Select = styled.select`
margin-left: 10px;
padding: 5px;
`
const Option = styled.option`

`
const AddContainer = styled.div`
/* border: 2px solid red; */
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
border: 1px solid teal;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`

const SingleProduct = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17031509_TM-99999999_01.jpg?ts=1625724353844&imwidth=412&imdensity=2" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima  ipsum dolor sit amet, consectetur adipisicing elit sit natus vitae provident et? Molestiae eius sint praesentium sunt nisi consectetur velit nobis ducimus modi.</Desc>
                    <Price>$ 20.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" ></FilterColor>
                            <FilterColor color="darkblue" ></FilterColor>
                            <FilterColor color="gray" ></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>

                            <Select defaultValue={"XS"} >
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct
