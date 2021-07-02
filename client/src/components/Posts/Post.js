import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Paragraph } from 'grommet';
import { Like, Trash, Edit } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../actions/posts';

const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(deletePost(post._id));
    };
    const handleLike = async (e) => {
        e.preventDefault();
        dispatch(likePost(post._id));
    };
    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><Button icon={<Like color="brand" />} hoverIndicator />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><Button
                        icon={<Like color="brand" />}
                        hoverIndicator onClick={handleLike} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </>
                );
        }
        return <Button
            icon={<Like color="brand" />}
            hoverIndicator onClick={ handleLike } />;
    };
    return (
        <Card elevation="small" width="medium">
            <CardBody height="small">
                <Image
                    fit="cover"
                    src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                    a11yTitle="Cover Photo"
                />
            </CardBody>
            <Box pad={{ horizontal: 'medium' }}>
                <Heading level="3" margin={{ vertical: 'medium' }}>
                    {post.title}
                </Heading>
                <Paragraph margin={{ top: 'none' }}>
                    {post.message}
                </Paragraph>
            </Box>
            <CardFooter>
                <Box width="50%" direction="row" align="center" gap="small">
                    <Likes />
                </Box>
                <Box width="50%" direction="row" justify="end" gap="small">
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <> 
                        <Button color="secondary" onClick={() => setCurrentId(post._id)} icon={<Edit color="brand" />}
                        hoverIndicator />
                        <Button color="secondary" onClick={handleDelete} icon={<Trash color="brand" />}
                        hoverIndicator/>
                        </>
                    )}
                </Box>
            </CardFooter>
        </Card>
    );
};
export default Post;