import { Grid, Box } from 'grommet';
const Contact = () => {
    return (
        <Grid fill
            rows={['auto', 'flex']}
            columns={["auto", "1/3"]}
            gap="small"
            areas={[
                { name: 'ads', start: [1, 1], end: [1, 1] },
                { name: 'contactForm', start: [0, 1], end: [0, 1] },
            ]}>
            <Box gridArea="contactForm" background="light-1" pad="small">
                You will see Contact us form here.
            </Box>
            <Box gridArea="ads" background="light-2" align="center" pad="small">
                You will see advertisements here..
            </Box>
        </Grid>
    );
};
export default Contact;