import { useSelector } from 'react-redux';
import { Grid, Box } from 'grommet';

import Post from './Post';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? "There's no post to show here." : (
            <Grid fill
                rows={['auto', 'flex']}
                columns={{count: "fit",size: '25%'}}
                gap="medium">
                {posts.map((post) => (
                    <Post key={post._id} post={post} setCurrentId={setCurrentId} />
                ))}
            </Grid>
        )
    );
};

export default Posts;