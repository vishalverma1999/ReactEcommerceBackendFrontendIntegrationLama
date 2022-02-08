import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ flexDirection: "column", padding: "10px" })}
`
const ImageContainer = styled.div`
flex:1
`
const Image = styled.img`
height: 90vh;   // kyunki height ko 100% karne par bhi image ki height bohot jyada ho rahi thi
width: 100%;
object-fit: cover;
${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
${mobile({ padding: "10px" })}
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
${mobile({ width: "100%" })}
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
${mobile({ width: "100%" })}
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

    // grabbing product id from end point
    const location = useLocation();
    console.log(location.pathname.split(":")[1]);    // split at :, means array banado at : aur us array ka 2nd element show karo
    const productId = location.pathname.split(":")[1];     // pata nahi product page par route karne par colon id ke peeche chipak ke kyu aa raha hai like --> :6200281ff210a3c8a14038df

    // setting singleproduct
    const [singleproduct, setsingleproduct] = useState({});   // initially put it empty object or empty array does not matter
    const [loading, setLoading] = useState(true);
    const [quantity, setquantity] = useState(1);
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");


    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products/find/" + productId);
                const data = await response.json();
                console.log(data);
                setsingleproduct(data);
                // data fetch hote hi and state set hote hi loading ko false kardiya aur ab mapping ho jayegi
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getSingleProduct();
    }, [productId]);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setquantity(quantity - 1);
        }
        else {
            setquantity(quantity + 1);
        }
    }

    const handleClick = ()=>{
        // update cart, for that we will use redux
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="{singleproduct.img}" />
                </ImageContainer>
                <InfoContainer>
                    <Title>{singleproduct.title}</Title>
                    <Desc>{singleproduct.desc}</Desc>
                    <Price>$ {singleproduct.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {/* either use the method of setting loading state to resolve the problem of mapping before fetching or use optional chaining(?) used in size mapping */}
                            {!loading &&
                                singleproduct.color.map((col) => (
                                    <FilterColor color={col} key={col} onClick={()=>{setcolor(col); console.log(col)}} ></FilterColor>
                                ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            {/* Article when mapping done on null useState https://typeofnan.dev/fix-cannot-read-property-map-of-undefined-error-in-react/ */}
                            {/* mount hote hi return chal jayega isliye loading initially true hai */}
                            {/* optional chaninig   https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/ */}
                            <Select defaultValue={"XS"} onChange={(e)=>{setsize(e.target.value); console.log(size)}} >
                                {singleproduct.size?.map(sz => (
                                    <Option key={sz}>{sz}</Option>
                                ))}
                            </Select>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => { handleQuantity('dec') }} style={{ cursor: "pointer" }} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => { handleQuantity('inc') }} style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button onClick={handleClick} >ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct
