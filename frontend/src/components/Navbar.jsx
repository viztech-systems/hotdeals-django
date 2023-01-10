import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthenticated, load_user, logout } from '../actions/auth';
import { useEffect, useState } from 'react';
import queryString from 'query-string';


const Navbar = () =>{

  const userStatus = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(checkAuthenticated());
      dispatch(load_user());
  }, []);

  const logout_user = () => {
    dispatch(logout());
    setRedirect(true);
    navigate("/");
};

  const guestLinks = () => (
    <>
        <li className="nav-item">
            <NavLink className="nav-link" to="/userlogin">Sign in</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
        </li>
    </>
  );

  const authLinks = () => (
     <>
      <li className="nav-item">
        <NavLink className='nav-link' to='/userhome'>Profile</NavLink>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
      </li>
     </>
  );

    
    return(
        <>            
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-none" style={{fontSize:"15px"}}>
            <div className="container-lg p-2 px-sm-2 px-lg-0">
            <NavLink className="navbar-brand" to="/">hotDeals</NavLink>
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                  {userStatus.isAuthenticated ? authLinks() : guestLinks()}
                  <li>
                    <NavLink className="nav-link p-0 " to="/submitdeal"><button className="btn btn-primary rounded-3" type="submit" ><span className="text-capitalize" style={{fontSize:"14px"}}>Submit Deal</span></button></NavLink>                
                  </li>
                </ul>          
              </div>
            </div>
          </nav>     
          {redirect ? <NavLink to='/' /> : <></>}     
        </>
    );
}

export default Navbar;