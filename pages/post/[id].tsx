import { Post } from "../../types";
import { getFirst100Posts, getPost } from "../../utils/graphql";

const SinglePost: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div>
            <img alt={post.title} src={post.imageHash} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};
export default SinglePost;

export async function getStaticProps({ params }) {
    const postRes = await getPost(params.id);
    return {
        props: {
            post: postRes[0],
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const res = await getFirst100Posts();
    return {
        paths: res.map((post) => ({ params: { id: post.id } })),
        fallback: false,
    };
}
