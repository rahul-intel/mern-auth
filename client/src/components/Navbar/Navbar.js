import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Nav, Anchor } from 'grommet';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='light-2'
        pad={{ vertical: 'small', horizontal: 'medium' }}
        elevation='medium'
        {...props}
    />
);
const Navbar = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        console.log(user);
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return (
        <AppBar>
            <Heading level='3' onClick={() => history.push('/')} margin={{ 'vertical': '0', 'right': '50px'}}>My Blogger</Heading>
            <Nav direction="row" flex gap="medium">
                <Anchor label="Home" href="/" />
                <Anchor label="Profile" href="#" />
            </Nav>
            <Box direction="row">
                {user?.result ? (
                    <Button color="primary" label='Logout' onClick={logout} />
                ) : (
                    <Button color="primary" label='Login' onClick={() =>  history.push('/auth') } />
                )}
            </Box>
        </AppBar>
    );
};

export default Navbar;