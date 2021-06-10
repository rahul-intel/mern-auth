import React, { useState } from 'react';
import {
    Box,
    Button,
    Form,
    TextInput
} from 'grommet';
import { Hide, View } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../actions/auth';
//import { AUTH } from '../../constants/actionTypes';

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

    return (
        <Box fill align="center" justify="center" margin={{top: '50px'}}>
            <Form
            value={form}
            onReset={() => setForm(initialState)}
            onChange={(nextValue, { touched }) => {
                console.log('Change', nextValue, touched);
                setForm(nextValue);
            }}
            onSubmit={handleSubmit}
          >
            {isSignup && (
                <Box direction="row"
                    margin="small"
                    align="center"
                    round="small">
                    <Box
                        width="small"
                        direction="row-responsive"
                        margin={{vertical:0}}
                        pad={{right: '10px'}}
                        align="center"
                        round="small"
                        >
                        <TextInput
                        placeholder="First Name"
                        name="firstName"
                        required
                        validate={{ regexp: /^[a-z]/i }}
                        />
                    </Box>
                    <Box
                        width="small"
                        direction="row-responsive"
                        margin={{ vertical: 0}}
                        align="center"
                        round="small"
                        >
                            <TextInput
                            placeholder="Last Name"
                            name="lastName"
                            required
                            validate={{ regexp: /^[a-z]/i }}
                            />
                    </Box>
                </Box>
            )}
                <Box
                    width="medium"
                    direction="row"
                    margin="small"
                    align="center"
                    round="small"
                    border
                >
                    <TextInput placeholder="Email" plain name="email" type="email" required />
                </Box>
                {/*<FormField label="Email" name="email" type="email" required />
                 <FormField label="Password" name="password" type="password" required /> */}
                <Box
                    width="medium"
                    direction="row"
                    margin="small"
                    align="center"
                    round="small"
                    border
                >
                    <TextInput placeholder="Password" plain type={showPassword ? 'text' : 'password'} name="password" required />
                    <Button margin={{ right: '8px' }} plain icon={showPassword ? <View/> : <Hide />}
                        onClick={handleShowPassword} />
                </Box>
            { isSignup && 
            <Box
                width="medium"
                direction="row"
                margin="small"
                align="center"
                round="small"
                border
                >
                    <TextInput placeholder="Confirm Password" plain type="password" name="confirmPassword" required/>
                </Box> }
            <Box direction="row" width="medium" justify={isSignup ? "between" : "end"} margin={{ vertical: "medium", horizontal: "small" }}>
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
                <Box direction="row" width="medium" justify="end" margin={{ vertical: "medium", horizontal: "small" }}>
                <Button onClick={switchMode}>
                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
            </Box>
          </Form>
        </Box>
    );
};

export default SignUp