import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
   /* border: 2px solid red; */
   display: flex;
   padding: 20px;
   justify-content: space-between;
   ${mobile({flexDirection: "column", padding:"0px"})}
`

// const item1 = styled.div`
// flex: 1;
// `
// const item1 = styled.div`flex: 1;`
// const item1 = styled.div`flex: 1;`

const Categories = () => {
    return (
        <Container>                       {/*For each item present in categories array, categoryItem component will be called and item prop is passed*/}
            {categories.map((item)=>(             
                <CategoryItem item={item} key={item.id} />   
            ))}
        </Container>
    )
}

export default Categories
