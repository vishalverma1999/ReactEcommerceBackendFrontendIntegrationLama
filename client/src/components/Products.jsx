import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
/* border: 2px solid green; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id} ></Product>
            ))}
        </Container>
    )
}

export default Products
