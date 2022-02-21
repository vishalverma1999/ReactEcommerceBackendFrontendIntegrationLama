import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.css'
import { productData } from '../../data'
import { Publish } from '@material-ui/icons'

function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Edit User</h1>
                {/* Redirecting to /newUser on clicking on Creete button at /user/:userId */}
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    {/* not sending prop grid because we don't need grid */}
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple airpod</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">1823</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">active:</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stock:</div>
                            <div className="productInfoValue">no</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder='Apple Airpod' />
                        <label >In Stock</label>
                        <select name="idStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish className='productUploadIcon'/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
