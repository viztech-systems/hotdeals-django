import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { googleAuthenticate } from '../../actions/auth';
import queryString from 'query-string';

const Google = () => {
    let location = useLocation();

    const userStatus = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;
        
        if (state && code) {
            dispatch(googleAuthenticate(state, code));
        }
    }, [location]);

    if (userStatus.isAuthenticated) {
        navigate("/")
    }

    return null;
};

export default Google;