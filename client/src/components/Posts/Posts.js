import { useSelector } from 'react-redux';
import { Grid, Box } from 'grommet';

import Post from './Post';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? "There's no post to show here." : (
            <Grid fill
                rows={['auto', 'flex']}
                columns={["auto", "auto"]}
                gap="small">
                {posts.map((post) => (
                    <Post post={post} setCurrentId={setCurrentId} />
                ))}
            </Grid>
        )
    );
};

export default Posts;