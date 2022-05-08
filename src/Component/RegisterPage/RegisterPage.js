import React from 'react'
import { Link } from 'react-router-dom';

 const LoginPage = () =>{

 const handleSubmitRegister = (e) =>{
    e.preventDefault();
 }
  return (
      <>
          <header>
            <section className="nav-content signIn_nav">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="logo-area">
                              <Link to="#"><span><i class="fas fa-cubes logoIconIn"></i> Sign In</span></Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="nav-area">
                                <ul className="nav-element">
                                    <li><Link to="#"><i className="fas fa-user"></i>dashboard</Link></li>
                                    <li><Link to="#"><i className="fas fa-user"></i>profile</Link></li>
                                    <li><Link to="#"><i className="fas fa-key"></i>sign in</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="download-btn">
                                <Link to="#"><span className="btn-text">free download</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </header>

        <section className="headerImg">
            <div className="container">
                <div className="row">
                    <div className="headerImg-content">
                        <h1>welcome!</h1>
                        <p>Create new account in your project for free.</p>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="register-area">
            <div className="container">
                <div className="row">
                    <div className="register-content">
                        <div className="signUp-header">
                            <h2 className="reg-header">Register with</h2>
                            <div className="social-area">
                              <Link to="#"><i className="fab fa-facebook"></i></Link>
                              <Link to="#"><i className="fab fa-apple"></i></Link>
                              <Link to="#"><i className="fab fa-google"></i></Link>
                            </div>
                            <span>or</span>
                        </div>
                        <div>               
                         <form onSubmit={handleSubmitRegister}>
                            <input
                                // onBlur={handleOnBlur}
                                className="input-area "
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                                autoComplete='off'
                            />
                            <br />
                            <input
                                // onBlur={handleOnBlur}
                                className="input-area mt-3"
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                required
                                autoComplete='off'
                            />
                            <br />
                            <input
                                // onBlur={handleOnBlur}
                                className="input-area mt-3"
                                name="phone"
                                type="number"
                                placeholder="Phone Number"
                                required
                                autoComplete='off'
                            />
                            <br />
                            <input
                                // onBlur={handleOnBlur}
                                className="input-area mt-3"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                required
                                autoComplete='off'
                            /> <br />
                            <input
                                // onBlur={handleOnBlur}
                                className="input-area mt-3"
                                name="cPassword"
                                type="password"
                                placeholder="confirm password"
                                required
                                autoComplete='off'
                            />
                            <br />
                             <div className="submit mt-3">
                              <input
                                className="input-submit"
                                type="submit"
                                value="Submit"
                             />
                             </div>
                            </form>
                            <p className="sign-in-area">Already have an account? <Link to="contact">Sign in</Link></p>

                        </div>
                    </div>
                </div>
            </div>
         </section>
       
      </>
  );
 }

export default LoginPage ;
