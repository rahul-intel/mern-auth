import { useState, useEffect, useContext } from 'react';
import { Box, ResponsiveContext, DropButton } from 'grommet';
import { Add, Close } from 'grommet-icons';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import { PostForm, Posts } from '../Posts/index';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const [open, setOpen] = useState();
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        <ResponsiveContext.Consumer>
            {size => {
                        return ( 
                            <Box direction="row">
                                <Box width={size ==='xsmall' || size === 'small' ? '100%' : '70%'} background="light-1" pad="small" className="posts-outer">
                                    {(size === 'xsmall' || size === 'small') &&
                                        <DropButton
                                            label="Create New Post"
                                            open={open}
                                            onOpen={onOpen}
                                            onClose={onClose}
                                            icon={<Add color="brand"/>}
                                            hoverIndicator
                                            dropContent={<Box width="medium" pad="medium"><Close onClick={onClose} className="drop-content-close" color="brand"/><PostForm currentId={currentId} setCurrentId={setCurrentId} /></Box>}
                                            dropProps={{ align: { top: 'bottom' } }}
                                            className="create-post-butn-box"
                                        />
                                    }
                                    <Posts setCurrentId={setCurrentId} />
                                </Box>
                                {(size !== 'xsmall' && size !== 'small') &&
                                    <Box width="30%" background="light-1" align="center" pad="small" className="posts-form-outer">
                                        <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                                    </Box>
                                }
                                
                            </Box>
                         )
                }
            }
        </ResponsiveContext.Consumer>
    );
};
export default Home;