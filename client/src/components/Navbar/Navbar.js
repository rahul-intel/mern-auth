import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Nav, Anchor, Menu, Header, ResponsiveContext } from 'grommet';
import { Power, User, Menu as MenuIcon, Login } from 'grommet-icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';

const AppBar = (props) => (
    <Header
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
    const [activePage, setActivePage] = useState('/');
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
        if(activePage !== location.pathname) {
            setActivePage(location.pathname);
        }
    }, [location]);
    return (
        <AppBar>
            <Heading level='3' onClick={() => history.push('/')} margin={{ 'vertical': '0', 'right': '50px'}}>My Blogger</Heading>
            <ResponsiveContext.Consumer>
                {size =>
                    size !== 'small' && size !== 'xsmall'  ? (
                    <>
                    <Nav direction="row" flex gap="medium">
                        <Anchor label="Home" color={activePage === '/' ? 'activeAnchor': 'brand'} href="/" />
                        <Anchor label="About" color={activePage === '/about' ? 'activeAnchor' : 'brand'} href="/about" />
                        <Anchor label="Contact" color={activePage === '/contact' ? 'activeAnchor' : 'brand'} href="/contact" />
                    </Nav>
                    <Box direction="row">
                        {user?.result ? (
                            <Menu
                                label={user?.result?.name}
                                items={[
                                    { label: 'Profile', onClick: () => { }, icon: <User />, gap: 'small' },
                                    { label: 'Logout', onClick: logout, icon: <Power />, gap: 'small' },
                                ]}
                            />
                        ) : (
                            <Button color="primary" icon={<Login color="brand" />} label='Login' onClick={() => history.push('/auth')} />
                        )}
                    </Box>
                    </>) : (
                    <Box direction="row">
                        <Menu
                            icon={<MenuIcon color="brand" />}
                            items={[
                                { label: 'Home', href: '/', gap: 'small' },
                                { label: 'About', href: '/about', gap: 'small' },
                                { label: 'Contact', href: '/contact', gap: 'small' }
                            ]}
                        />
                        <Box direction="row">
                            {user?.result ? (
                                <Menu
                                    label={user?.result?.name ? user?.result?.name.split(' ')[0] : ''}
                                    items={[
                                        { label: 'Profile', onClick: () => { }, icon: <User />, gap: 'small' },
                                        { label: 'Logout', onClick: logout, icon: <Power />, gap: 'small' },
                                    ]}
                                />
                            ) : (
                                    <Button color="primary" icon={<Login color="brand"/>} onClick={() =>  history.push('/auth') } />
                            )}
                        </Box>
                    </Box>
                )}
               </ResponsiveContext.Consumer>

        </AppBar>
    );
};

export default Navbar;