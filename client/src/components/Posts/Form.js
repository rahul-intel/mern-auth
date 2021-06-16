import { Box,Text } from 'grommet';
const Form = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    if (!user?.result?.name) {
        return (
            <Box pad="small" align="center" justify="center" margin="medium">
                <Text> Please login to create your own posts and like other's posts.</Text>
            </Box>
        );
    }else{
        return (
            <Box pad="small">
                You will see post Form here.
            </Box>
        );
    }
};
export default Form;