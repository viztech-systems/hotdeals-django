import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import UserLoginPage from "./Forms/UserLoginPage";
import SignUpPage from './Forms/SignUpPage';
import ResetPassword from './Forms/ResetPassword';
import ResetPasswordConfirm from './Forms/ResetPasswordConfirm';
import ActivateAccount from './Forms/ActivateAccount';
import AdminLoginPage from "./Forms/AdminLoginPage";
import DealSubmit from "./Forms/DealSubmit";
import DealDetails from "./deals components/DealDetails";
import UserHome from "./user components/UserHome";
import AdminHome from "./admin components/AdminHome";
import Google from './Forms/Google';
import Facebook from './Forms/Facebook';


const App = () =>{

    return(
        <>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/userlogin' element={<UserLoginPage/>}/>
            <Route exact path='/signup' element={<SignUpPage/>}/>
            <Route exact path='/facebook' element={<Facebook/>}/>
            <Route exact path='/google' element={<Google/>}/>
            <Route exact path='/adminlogin' element={<AdminLoginPage/>}/>
            <Route exact path='/submitdeal' element={<DealSubmit/>}/>
            <Route exact path='/dealdetails/:id' element={<DealDetails/>}/>
            <Route exact path='/userhome' element={<UserHome/>}/>
            <Route exact path='/adminhome' element={<AdminHome/>}/>
            <Route exact path='/reset_password' element={<ResetPassword/>}/>
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
            <Route exact path='/activate/:uid/:token' element={<ActivateAccount/>} />
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </>
    );
}

export default App;