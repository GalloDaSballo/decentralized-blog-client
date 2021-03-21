import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import { Post } from "../types";
import { getFirst100Posts } from "../utils/graphql";

const Home: React.FC<{ posts: Post[] }> = ({ posts }): JSX.Element => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h2>Articles</h2>
                {posts.map((post) => (
                    <Link href={`/post/${post.id}`} key={post.id}>
                        <a>
                            <div>
                                <img alt={post.title} src={post.imageHash} />
                                <h3>{post.title}</h3>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const res = await getFirst100Posts();
    return {
        props: {
            posts: res,
        }, // will be passed to the page component as props
    };
}
