import { useState, useEffect } from 'react';
import { Grid, Box, ResponsiveContext } from 'grommet';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import { PostForm, Posts } from '../Posts/index';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const columns = {
        small: ['1'],
        medium: ['auto', '1/3'],
        large: ['auto', '1/3'],
        xlarge: ['auto', '1/3'],
    };

    const rows = {
        small: ['auto', 'auto'],
        medium: ['auto', 'auto'],
        large: ['auto', 'flex'],
        xlarge: ['auto', 'flex'],
    };
    const fixedGridAreas = {
        small: [
            { name: 'posts', start: [0, 0], end: [0, 0] },
            { name: 'form', start: [0, 1], end: [0, 1] },
        ],
        medium: [
            { name: 'posts', start: [0, 1], end: [0, 1] },
            { name: 'form', start: [1, 1], end: [1, 1] },
        ],
        large: [
            { name: 'posts', start: [0, 1], end: [0, 1] },
            { name: 'form', start: [1, 1], end: [1, 1] },
        ],
        xlarge: [
            { name: 'posts', start: [0, 1], end: [0, 1] },
            { name: 'form', start: [1, 1], end: [1, 1] },
        ],
    };
    return (
        <ResponsiveContext.Consumer>
            {size => {
                       console.log(size,111);return ( <Grid fill
                            rows={rows[size]}
                            columns={columns[size]}
                            gap="small"
                            areas={fixedGridAreas[size]}>
                            <Box gridArea="posts" background="light-1" pad="small">
                                <Posts setCurrentId={setCurrentId}/>
                            </Box>
                            <Box gridArea="form" background="light-2" align="center" pad="small">
                                <PostForm currentId={currentId} setCurrentId={setCurrentId}></PostForm>
                            </Box>
                        </Grid> )
                }
            }
        </ResponsiveContext.Consumer>
    );
};
export default Home;