import { useState, useEffect } from "react"
import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
/* border: 2px solid green; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {

    console.log(category, filters, sort);
    const [products, setproducts] = useState([]);
    const [filteredproducts, setfilteredproducts] = useState([]);

    useEffect(() => {
        console.log("useeffect", category);
        const getProducts = async () => {
            const response = await fetch(category ? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products");  // home page par products display ho rahe hai aur wo saari categories se hai, isliye agar category hai to category waale products fetch karo or else products without any specific category fetch karo
            console.log(response);
            const data = await response.json();
            console.log(data);
            setproducts(data);
        }
        getProducts();
    }, [category]);  // when the category changes run the content inside useEffect and we are going to fetch the products according to the category

    // filter and category useEffect
    useEffect(() => {
        category && setfilteredproducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )
    }, [products, category, filters]);

    // sort useEffect
    useEffect(() => {

        /*  
        if (sort === "newest") {
            setfilteredproducts([...filteredproducts].sort((a, b) => a.createdAt - b.createdAt));
        }
        else if (sort === "asc") {
            setfilteredproducts([...filteredproducts].sort((a, b) => a.price - b.price));
        }
        else {
            setfilteredproducts([...filteredproducts].sort((a, b) => b.price - a.price));
        }
*/

        if (sort === "newest") {
            setfilteredproducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt));
        }
        else if (sort === "asc") {
            setfilteredproducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price));
        }
        else {
            setfilteredproducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price));
        }

    }, [sort]);


    return (
        <Container>
            {category ? filteredproducts.map(item => (
                <Product item={item} key={item._id} ></Product>
            ))
                : products.slice(0, 8).map(item => (
                    <Product item={item} key={item._id} ></Product>
                ))}
        </Container>
    )
}

export default Products
