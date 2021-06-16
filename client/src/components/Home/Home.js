import { Grid, Box } from 'grommet';
import { Form } from '../Posts/index';

const Home = () => {
    return (
        <Grid fill
            rows={['auto', 'flex']}
            columns={["auto", "1/3"]}
            gap="small"
            areas={[
                { name: 'form', start: [1, 1], end: [1, 1] },
                { name: 'posts', start: [0, 1], end: [0, 1] },
            ]}>
            <Box gridArea="posts" background="light-1" pad="small">
                You will see posts here.
            </Box>
            <Box gridArea="form" background="light-2" align="center" pad="small">
                <Form></Form>
            </Box>
        </Grid>
    );
};
export default Home;