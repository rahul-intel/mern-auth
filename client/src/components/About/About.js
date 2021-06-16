import { Grid, Box } from 'grommet';
const About = () => {
    return (
        <Grid fill
            rows={['auto', 'flex']}
            columns={["auto", "1/3"]}
            gap="small"
            areas={[
                { name: 'ads', start: [1, 1], end: [1, 1] },
                { name: 'content', start: [0, 1], end: [0, 1] },
            ]}>
            <Box gridArea="content" background="light-1" pad="small">
                You will see About content here.
            </Box>
            <Box gridArea="ads" background="light-2" align="center" pad="small">
                You will see advertisements here..
            </Box>
        </Grid>
    );
};
export default About;