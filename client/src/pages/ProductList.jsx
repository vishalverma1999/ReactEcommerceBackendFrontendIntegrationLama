import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"

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
${mobile({ display: "flex", flexDirection: "column" })}   // or can use flexWrap: "wrap"

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}

`


const Select = styled.select`
 /* border: 2px solid red; */
 padding: 10px;
 margin-right: 20px;
 ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`

`

const ProductList = () => {

    // grabbing category from end point
    const location = useLocation();
    // console.log(location.pathname.split("/")[2]);    // split at /, means array banado at / aur us array ka 2nd element show karo
    const category = location.pathname.split("/")[2];   // cayegory grabbed like woman, jeans, coat etc.

    // making filter products functional
    // an object contains color and size as filter keys
    const [filters, setfilters] = useState({});    // at the begining it will be an empty object and whenever we change color or size state will be updated
    // Making Sorting functional
    const [sort, setsort] = useState('Newest');

    const handleFilter = (e)=>{
        console.log(e.target.name, " " , e.target.value);
        const value = e.target.value;
        setfilters({
            ...filters,
            [e.target.name]: value,  //  square brackets represents that key is dynamic
        })
    }
    // console.log(filters);


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue={"Color"} name="color" onChange={handleFilter}>   {/*name attribute helps us to decide which Select want to choose, whether color one or size one  */}
                        <Option disabled >Color</Option>     {/*disabled selected means by default to color selected rahega par disabled mode mein hai means select or unselect from drop down list */}
                        <Option >White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select defaultValue={"Size"} name="size" onChange={handleFilter}>
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
                    <Select defaultValue={"Newest"} onChange={(e)=>{setsort(e.target.value)}}>   {/*directly setting the state in onChange event */}
                        <Option value='newest' >Newest</Option>   {/*selected means by default to color selected rahega means we can select or unselect from drop down list */}
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
