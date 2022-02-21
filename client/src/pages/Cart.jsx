import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const KEY = "pk_test_51KAcNdSCSjhmXZtkqXPpTHzIr6qfJhJM1kKlsQrAv2YQqdMAB6aYKfCaIwyVNlucXXsYB6Plc0ItEyk1cODJTATn00JUDqulQv";

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`

const Title = styled.h1`
font-weight: 200;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
border: ${props => props.type === "filled" && "none"};
`

const TopTexts = styled.div`
 ${mobile({ display: "none" })}   
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width:200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
/* background-color: burlywood; */
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({ margin: "20px" })}

`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;    // height isliye set ki hai kyunki jaise jaise no. of products badte jaayenge waise waise summary box ka size badta chala jayega and to prevent this we fixed the height to 50vh
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
margin: 30px 0px;
font-weight: ${props => props.type === "total" && 500};    // or can be wriiten as- font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && 24}px;     // or can be wriiten as- font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
color: white;
background-color: black;
font-weight: 600;
cursor: pointer;
`
// const SummaryTitle = styled.div``
// const SummaryTitle = styled.div``

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart);

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }
    console.log(stripeToken);

    // to go to success page after payment, for that use history hook
    const navigate = useNavigate();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                // POST request using fetch with async/await
                console.log("success navigation");
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tokenId: stripeToken.id, amount: 500 })
                };
                const response = await fetch('http://localhost:5000/api/checkout/payment', requestOptions);
                const data = await response.json();
                console.log(data);
                // navigating to success page
                navigate("/success", { data: data });
            }
            catch (error) {
                console.log(error);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton  >CONTINUE SHOPPING</TopButton>

                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>

                    <TopButton type={"filled"} >CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>

                    <Info>
                        {cart.products.map(product => (

                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} ></ProductColor>
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))};

                        <Hr></Hr>

                    </Info>


                    {/* ------------------------------------------------------------------------------------------ */}

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <StripeCheckout name='MUnnuDada'
                            image='https://cdn.dribbble.com/users/6192700/screenshots/14682400/media/895972e3e8316a62c6eee7b13a4421e2.png?compress=1&resize=50x50'
                            billingAddress
                            shippingAddress
                            description={`Your total is INR ${cart.total}`}
                            amount={cart.total * 100}    // it's going to be 20 but stripe working on cents so you should add here two more zero that is 20.00
                            token={onToken}
                            stripeKey={KEY}

                        >
                            <SummaryButton>
                                    Checkout Now
                            </SummaryButton>

                        </StripeCheckout>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart


// style={{ border: "none", width: 120, borderRadius: 5, padding: "20px", backgroundColor: "black", color: "white", fontWeight: "600", cursor: "pointer" }}
