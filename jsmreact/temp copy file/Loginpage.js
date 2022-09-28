// import React from "react";
// import Sty from './style.module.css'
// import ig from './jw.jpg'

// export default class Loginpage extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//             name: "",
//             pwd: "",
//             error: {
//                 nameerr: "",
//                 pwderr: ""

//             },
//             // suc:{
//             //     namesuc:"",
//             //     pwdsuc:""
//             // }
//             namevalid: false,
//             pwdvalid: false,
//             formvalid: false,

//         }
//     }
//     changeInpText = (event) => {
//         const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
//         const pwdregexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//         const en = event.target.name;
//         const val = event.target.value;
//         let error = this.state.error;
//         // let suc=this.state.suc;
//         let nameflag = this.state.namevalid;
//         let pwdflag = this.state.pwdvalid;
//         switch (en) {
//             case 'name':
//                 if (!emailregexp.test(val)) {
//                     error.nameerr = "User Name Invalid";
//                     nameflag = false;
//                 }
//                 else {
//                     error.nameerr = "";
//                     // suc.namesuc="Succefull";
//                     nameflag = true;
//                 }
//                 break;
//             case 'pwd':
//                 if (!pwdregexp.test(val)) {
//                     error.pwderr = "Password Invalid";
//                     pwdflag = false;
//                 }
//                 else {
//                     error.pwderr = "";
//                     // suc.namesuc="Succefull";
//                     pwdflag = true;
//                 }
//                 break;


//         }
//         this.setState({ error, [en]: val, namevalid: nameflag, pwdvalid: pwdflag }, () => { this.setState({ formvalid: this.state.namevalid && this.state.pwdvalid }) });

//     }

//     render() {
//         return (
//             <>
//                 <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//                     <button className="btn btn-primary  my-3"  style={{backgroundColor: "#34495E" }}type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//                         Click Here To Login
//                     </button>
//                     </div>

//                 <nav id="navbar-example2" className="navbar navbar-Dark px-3" style={{backgroundColor: "#34495E"}}>
//                     <a className="navbar-brand"  href="#" >User Manual</a>
//                     <ul className="nav nav-pills">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#scrollspyHeading1">First</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#scrollspyHeading2">Second</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//                             <ul className="dropdown-menu">
//                                 <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
//                                 <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
//                                 <li><hr className="dropdown-divider"/></li>
//                                 <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </nav>
//                 <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
//                     <h4 id="scrollspyHeading1">First heasdasscdfaaaaaaaaaaaaaaaaaaaaaaaaaa sdff asdg asdg asdddddddddddddddddddaf gadf gading</h4>
//                     <p>...</p>
//                     <h4 id="scrollspyHeading2">asdg sddddddddddddddddddddddddddddddddddddddddddddas gasdfg afffffffffffffff </h4>
//                     <p>...</p>
//                     <h4 id="scrollspyHeading3">sdf gadsg addddddddddddddddddddddddddag g </h4>
//                     <p>...</p>
//                     <h4 id="scrollspyHeading4">a gdfg adfg adffffffffffffffffffffffffffff </h4>
//                     <p>...</p>
//                     <h4 id="scrollspyHeading5">Fifth heading</h4>
//                     <p>...</p>
//                 </div>




//                 <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//                     <div className="offcanvas-header">
//                         <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
//                         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                     </div>
//                     <div className="offcanvas-body">
//                         <div>
//                             <form  onSubmit={handleonsubmit}>
//                                 <b>Enter Username:</b><br />
//                                 <input type="text" name="name" value={this.state.name} onChange={this.changeInpText} className={Sty.inpTextForm} ></input>
//                                 <span className=" text-danger"><b>   {this.state.error.nameerr}</b></span>

//                                 <br />
//                                 <b> Enter Password:</b><br />
//                                 <input type="password" name="pwd" value={this.state.pwd} onChange={this.changeInpText} className={Sty.inpTextForm} ></input>
//                                 <span className="text-danger"><b>   {this.state.error.pwderr}</b></span>
//                                 <br />

//                                 <input type="submit" value="LOGIN" disabled={!this.state.formvalid} className={Sty.btn} />
//                             </form>

//                         </div>
//                         <div className="dropdown mt-3">
//                             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
//                                 Dropdown button
//                             </button>
//                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                 <li><a className="dropdown-item" href="#">Action</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>




//                 {/* <img src={ig}></img> */}
//                 {/* <form>
//                     <b>Enter Username:</b><br />
//                     <input type="text" name="name" value={this.state.name} onChange={this.changeInpText} className={Sty.inpTextForm} ></input>
//                     <span className=" text-danger"><b>   {this.state.error.nameerr}</b></span>

//                     <br />
//                     <b> Enter Password:</b><br />
//                     <input type="password" name="pwd" value={this.state.pwd} onChange={this.changeInpText} className={Sty.inpTextForm} ></input>
//                     <span className="text-danger"><b>   {this.state.error.pwderr}</b></span>
//                     <br />

//                     <input type="submit" value="LOGIN" disabled={!this.state.formvalid} className={Sty.btn} />
//                 </form> */}

//                 {/* <form>
//                     <div className="mb-3">
//                         <label  className="form-label">Email address</label>
//                         <input type="text" className="form-control" value={this.state.name} onChange={this.changeInpText} id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label  className="form-label">Password</label>
//                         <input type="text" className="form-control"  value={this.state.pwd} onChange={this.changeInpText} id="exampleInputPassword1" />
//                     </div>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label">Check me out</label>
//                     </div>
//                     <button type="submit" className="btn btn-primary" disabled={!this.state.formvalid} >Submit</button>
//                 </form> */}


//             </>
//         )
//     }
// }