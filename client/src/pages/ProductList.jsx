import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`margin: 20px;`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
/* display: flex;
align-items: center; */
margin: 20px;
${mobile({display: "flex", flexDirection: "column"})}   // or can use flexWrap: "wrap"

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}

`


const Select = styled.select`
 /* border: 2px solid red; */
 padding: 10px;
 margin-right: 20px;
 ${mobile({margin: "10px 0px"})}
`
const Option = styled.option`

`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue={"Color"}>
                        <Option disabled >Color</Option>     {/*disabled selected means by default to color selected rahega par disabled mode mein hai means select or unselect from drop down list */}
                        <Option >White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select defaultValue={"Size"}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select defaultValue={"Newest"}>
                        <Option  >Newest</Option>   {/*selected means by default to color selected rahega means we can select or unselect from drop down list */}
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
