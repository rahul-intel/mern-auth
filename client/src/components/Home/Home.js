import { Grid, Box } from 'grommet';
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
            <Box gridArea="posts" background="light-1">
                You will see posts here.
            </Box>
            <Box gridArea="form" background="light-2">
                You will see form here to add edit posts.
            </Box>
        </Grid>
    );
};
export default Home;