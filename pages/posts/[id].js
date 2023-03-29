import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import Head from 'next/head';
import NavBar from '../../components/NavBar';

export default function Post({ postData }) {
    return (
        <main>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <NavBar/>

            This is the title: {postData.title}
            <br />
            This is the id: {postData.id}
            <br />
            This is the date: <Date dateString={postData.date} />
            <br />
            This is the text:
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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