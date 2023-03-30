import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Image from "next/image";
import styles from '../../styles/Blog.module.css';

export default function Post({ postData }) {
    return (
        <main>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="sticky top-0 z-50">
                <NavBar />
            </div>
            <section className={styles.post_container}>
                <div className={"lg:ml-3 2xl:ml-80 3xl:ml-[34rem]"}>
                    {/* <div className={styles.post_content}> */}
                    <Image
                        width="960"
                        height="540"
                        src={postData.hero_image}
                        alt={`blog_hero_${postData.title}`}
                    />

                    <h1><strong> This is the title: {postData.title}</strong></h1>
                    <br />
                    This is the date: <Date dateString={postData.date} />
                    <br />
                    This is the text:
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </section>
        </main>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}