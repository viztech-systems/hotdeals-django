import { NavLink } from 'react-router-dom';


const Footer = () =>{
    return(
        <>
          <footer className="bg-dark text-light text-center text-lg-start">
            <section className="d-flex justify-content-center justify-justify-content-evenly p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              <div>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3"></i>hotDeals
                    </h6>
                    <p>
                    A platform where you can grab multiple deals from various shopping websites.</p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <NavLink to="/" className="text-reset">Home</NavLink>
                    </p>
                    <p>
                      <NavLink to="/adminlogin" className="text-reset">Admin Login</NavLink>
                    </p>
                    <p>
                      <NavLink to="/userlogin" className="text-reset">Sign in</NavLink>
                    </p>
                    <p>
                      <NavLink to="/signup" className="text-reset">Sign Up</NavLink>
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i>London, ST 10012, UK</p>
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                      info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i>+ 01 234 567 88</p>
                    <p><i className="fas fa-print me-3"></i>+ 01 234 567 89</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-center p-4 bg-dark">
              © 2021 Copyright
              <NavLink className="text-reset fw-bold" to="/"> hotDeals.com</NavLink>
            </div>
          </footer>
        </>
      );
    }

export default Footer;