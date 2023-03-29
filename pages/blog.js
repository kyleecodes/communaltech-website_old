import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';

export default function Blog({ allPostsData }) {
    return (
        <div className={styles.landing_container}>
            <Head>
                <title>Communal Tech</title>
                <meta name="description" content="Website for Communal Tech" />
                <meta name="keywords" content="Developer Relations, Technical, Content Creation, Community Management "></meta>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <NavBar />
            <main className={"mx-6 md:mx-10 lg:mx-40 2xl:mx-80 my-1 lg:my-10"}>
                This is my blog
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            {id}
                            <br/>
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}