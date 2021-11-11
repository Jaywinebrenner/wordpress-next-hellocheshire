import HomeContent from '../components/parts/HomeContent';
import Footer from '../components/parts/Footer'

export default function Home({posts}) {

  console.log("posts", posts)
  return (
    <div>
      <HomeContent/>
      {/* <Footer/> */}
    </div>
  )
}


// use embed tag if there is image in the data
export async function getServerSideProps() {
  const posts = await fetch('http://localhost:8888/wordpress-installation/wp-json/wp/v2/posts?_embed').then((res) => res.json());

  return {
    props: {
      posts
    }
  }
}