// single page user as well we can update the the user from here only
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                {/* Redirecting to /newUser on clicking on Creete button at /user/:userId */}
                <Link to="/newUser">   
                <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">9639865407270</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Ballo Ki gadiya | Near Bakewar</span>
                        </div>
                    </div>
                </div>



                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateFormLeft">
                            <div className="userUpdateFormLeftItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateFormLeftInput" />
                            </div>
                            <div className="userUpdateFormLeftItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateFormLeftInput" />
                            </div>
                            <div className="userUpdateFormLeftItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateFormLeftInput" />
                            </div>
                            <div className="userUpdateFormLeftItem">
                                <label>Phone</label>
                                <input type="text" placeholder="9639865407270" className="userUpdateFormLeftInput" />
                            </div>
                            <div className="userUpdateFormLeftItem">
                                <label>Addtess</label>
                                <input type="text" placeholder="Ballo Ki gadiya | Near Bakewar" className="userUpdateFormLeftInput" />
                            </div>
                        </div>


                        <div className="userUpdateFormRight">
                            <div className="userUpdateFormRightUpload">
                                <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="userUpdateFormRightUploadImg" />
                                {/* Since htmlFor and input id are same that is file, which means label tag is gonna take reference from input tag with id file, hence Publish Icon will still open the file  */}
                                <label htmlFor="file">  
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateFormRightUploadButton">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
