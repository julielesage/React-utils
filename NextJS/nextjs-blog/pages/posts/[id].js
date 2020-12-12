import Layout from '../../components/layout';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false // render a 404 page if no post found
  }
}

export async function getStaticProps({ params }) { // = les params de l'url de chaque page
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {/* for meta data */}
      <Head>{postData.title}</Head>
      {/* content */}
      <article>
        <h1 className={utilStyles.headingXl}>
          {postData.title}
        </h1>
        <br />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
};