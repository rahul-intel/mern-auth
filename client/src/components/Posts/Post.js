import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Paragraph } from 'grommet';
import { Like,Trash } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../api';

const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><Button icon={<Like color="brand" />} />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><Button
                        icon={<Like color={undefined} />}
                        hoverIndicator />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </>
                );
        }

        return <><Button
            icon={<Like color={undefined} />}
            hoverIndicator onClick={() => dispatch(likePost(post._id))} /></>;
    };
    return (
        <Card elevation="large" width="medium">
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
                <Box direction="row" align="center" gap="small">
                    {Likes}
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Button color="secondary" onClick={() => dispatch(deletePost(post._id))} icon={<Trash color={undefined} />}
                        hoverIndicator/>
                    )}
                </Box>
            </CardFooter>
        </Card>
    );
};
export default Post;