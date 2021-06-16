import React, { useState } from 'react';
import {
    Box,
    Button,
    Form,
    TextInput,
    FormField,
    Text,
    Anchor
} from 'grommet';
import { Hide, View } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../actions/auth';
//import { AUTH } from '../../constants/actionTypes';
import '../../styles.css';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const SignUp = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };
    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;

    //     try {
    //         dispatch({ type: AUTH, data: { result, token } });

    //         history.push('/');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    //const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const equalsField = (value,values) => {
        //console.log(value, values);
        const isEqual = value === values['password'];
        return { message: isEqual ? '' : 'Confirm password must match with password.', status: isEqual ? 'info' : 'error'};
    }

    return (
        <Box fill align="center" margin={{top: '50px'}}>
            <Text weight="bold" size="large">{isSignup ? 'Register' : 'Login'}</Text>
            <Box width="medium" margin={{top: 'medium'}}>
                <Form
                value={form}
                onReset={() => setForm(initialState)}
                onChange={(nextValue, { touched }) => {
                    //console.log('Change', nextValue, touched);
                    setForm(nextValue);
                }}
                onSubmit={handleSubmit}
                >
                    { isSignup && (
                        <Box direction="row">
                            <FormField
                                required
                                validate={{ regexp: /^[a-z]/i }}
                                name="firstName"
                                placeholder="First Name"
                                margin={{right: '10px'}}
                            ></FormField>
                            <FormField
                                name="lastName"
                                placeholder="Last Name"
                            ></FormField>
                        </Box>
                    )}
                    <FormField 
                        placeholder="Email" 
                        name="email"
                        required
                        type="email">
                    </FormField>
                    <Box margin={{ bottom: 'small' }} className="password-box">
                        <FormField className="password-formfield" plain name="password"required htmlFor="password-field">
                            <TextInput placeholder="Password" type={showPassword ? 'text' : 'password'}  className="password-input" size="medium" plain name="password" id="password-field"></TextInput>
                            <Button className="password-show-btn" plain icon={showPassword ? <View /> : <Hide />} onClick={handleShowPassword} />
                        </FormField>
                        
                    </Box>
                    { isSignup && <FormField placeholder="Confirm Password" type="password" name="confirmPassword" required validate={equalsField}></FormField> }
                    <Box direction="row" width="medium" justify={isSignup ? "between" : "end"} margin={{ vertical: "medium"}}>
                        {isSignup && <Button type="reset" label="Reset" /> }
                        <Button type="submit" label={isSignup ? 'Sign Up' : 'Sign In'} primary />
                    </Box>
                    {/* <Box direction="row" width="medium" justify="between" margin={{ top: 'medium' }}>
                        <GoogleLogin
                            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button primary type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} label="Google Sign In"/>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />
                    </Box> */}
                    <Box direction="row" width="medium" justify="end" margin={{ vertical: "medium" }}>
                        <Anchor onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                        </Anchor>
                    </Box>
                </Form>
            </Box>
        </Box>
    );
};

export default SignUp