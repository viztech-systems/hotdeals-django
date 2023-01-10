import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { facebookAuthenticate } from '../../actions/auth';
import queryString from 'query-string';

const Facebook = () => {
    let location = useLocation();

    const userStatus = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        if (state && code) {
            dispatch(facebookAuthenticate(state, code));
        }
    }, [location]);

    if (userStatus.isAuthenticated) {
        navigate("/")
    }

    return null;
};

export default Facebook;