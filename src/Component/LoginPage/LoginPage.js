import React from 'react' ;
import { Link } from 'react-router-dom';

export default function LoginPage() {

    const handleSubmitLogin = (e) =>{
       e.preventDefault()
    }
  return (
    <>
      <header>
            <section className="nav-content signUp_nav">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="logo-area">
                                <Link to="#"><span><i className="fas fa-cubes logoIconUp"></i> UI DASHBOARD</span></Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="nav-area">
                                <ul className="nav-element">
                                    <li><Link to="#"><i className="fas fa-user"></i>dashboard</Link></li>
                                    <li><Link to="#"><i className="fas fa-user"></i>profile</Link></li>
                                    <li><Link to="#"><i className="fas fa-user-circle"></i>sign up</Link></li>
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

            <section className="headerImg headerImg-signup"></section>

            <section className="register-area">
            <div className="container">
                <div className="row">
                    <div className="register-content signUp">
                        <div className="register-heading">
                            <h1>welcome back</h1>
                            <p>Enter your email and password to sign in</p>
                        </div>
                        <div>               
                         <form onSubmit={handleSubmitLogin}>
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
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                required
                                autoComplete='off'
                            /> <br />
                        
                            
                              <input
                                className="loginsSubmit mt-3"
                                type="submit"
                                value="Submit"
                             />
                            
                            </form>
                            <p className="sign-in-area"> New User ? <Link to="contact"> Please Sign Up</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        </header>
    </>
  )
}
