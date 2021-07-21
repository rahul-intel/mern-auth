import { useSelector } from 'react-redux';
import { Grid, ResponsiveContext, Box, Text, Spinner } from 'grommet';

import Post from './Post';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const columns = {
        xsmall: ['small'],
        small: ['auto'],
        medium: ['50%','50%'],
        large: { count: "fit", size: '25%' },
        xlarge: { count: "fit", size: '25%' },
    };
    const rows = {
        xsmall: ['full'],
        small: ['full'],
        medium: ['auto', '1/2'],
        large: ['auto', 'flex'],
        xlarge: ['auto', 'flex'],
    };
    return (
        <ResponsiveContext.Consumer>
            {size => { console.log(size);
                return (!posts.length ? <Box align="center" direction="row" gap="small">
                    <Spinner
                        border={[
                            { side: 'all', color: 'background-contrast', size: 'medium' },
                            { side: 'right', color: 'brand', size: 'medium' },
                            { side: 'top', color: 'brand', size: 'medium' },
                            { side: 'left', color: 'brand', size: 'medium' },
                        ]}
                    />
                    <Text>Loading...</Text>
                </Box> : (
                        <Grid fill
                            justifyContent="center"
                            rows={rows[size]}
                            columns={columns[size]}
                            gap="small">
                                {posts.map((post) => (
                                    <Post key={post._id} post={post} setCurrentId={setCurrentId} />
                                ))}
                        </Grid>
                    )
                )}
            }
        </ResponsiveContext.Consumer>
    );
};

export default Posts;