import { useState, useEffect } from 'react';
import { Grid, Box } from 'grommet';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import { PostForm, Posts } from '../Posts/index';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
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
                <Posts setCurrentId={setCurrentId}/>
            </Box>
            <Box gridArea="form" background="light-2" align="center" pad="small">
                <PostForm currentId={currentId} setCurrentId={setCurrentId}></PostForm>
            </Box>
        </Grid>
    );
};
export default Home;