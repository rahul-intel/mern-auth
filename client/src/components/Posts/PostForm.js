import { useState, useEffect } from 'react';
import { Box, Text, Form, FormField,TextArea, Button } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';
const initialState = { title: '', message: '', tags: '', selectedFile: '' };
const PostForm = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState(initialState);
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
    };

    if (!user?.result?.name) {
        return (
            <Box pad="small" align="center" justify="center" margin="medium">
                <Text> Please login to create your own posts and like other's posts.</Text>
            </Box>
        );
    }else{
        return (
            <Box fill align="center" margin={{ top: '20px' }}>
                <Text weight="bold" size="large">{currentId ? `Editing "${post.title}"` : 'Creating a Post'}</Text>
                <Box width="medium" margin={{ top: 'medium' }}>
                    <Form
                        value={postData}
                        onReset={() => setPostData(initialState)}
                        onChange={(nextValue, { touched }) => {
                            setPostData(nextValue);
                        }}
                        onSubmit={handleSubmit}
                    >
                        <FormField
                            placeholder="Title"
                            name="title"
                            required
                            type="text">
                        </FormField>
                        <FormField
                            name="message">
                            <TextArea placeholder="Describe about the post" plain name="message" />
                        </FormField>
                        <Box width="medium" margin={{ vertical: 'small' }}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        </Box>
                        <Button type="submit" label={currentId ? 'Update' : 'Create'} primary />
                    </Form>
                </Box>
            </Box>
        );
    }
};
export default PostForm;