import Hero from '../components/parts/Hero';
import UserContent from '../components/parts/UserContent';
import AboutContent from '../components/parts/AboutContent';
import HomeContent from '../components/parts/HomeContent';
import Navbar from '../components/parts/Navbar';
import React, { useState } from 'react';
import CtaBanner from '../components/parts/CtaBanner';
import Info from '../components/parts/Info';
import Footer from '../components/parts/Footer';

export default function Page({page}) {

    const [isHeroOpen, setIsHeroOpen]  = useState(true);
    const toggleHero = () => {
        setIsHeroOpen((prevExpanded) => !prevExpanded)
    }

    console.log("page", page[0].acf.builder)
    // const image = page[0]._embedded['wp:featuredmedia'][0].source_url

    const builderArray = page[0]?.acf.builder?.map((layout) => {

        if(layout.acf_fc_layout === "about_content") {
            return (
                <AboutContent
                    title={layout.title}
                    url={layout.image.url}
                    description={layout.description}
                />
            )
        }

        if(layout.acf_fc_layout === "hero" && isHeroOpen) {
            return (
                <Hero
                    title={layout.hero_title}
                    url={layout.hero_image.url}
                    toggleHero={toggleHero}
                />
            )
        }

        if(layout.acf_fc_layout === "user_content") {
            return (
                <UserContent
                    name={layout.name}
                    image={layout.image}
                    email={layout.email}
                    quote={layout.quote}
                />
            )
        }

        if(layout.acf_fc_layout === "home_content") {
            return (
                <HomeContent
                    title={layout.site_title}
                    description={layout.site_description}
                    url={layout.site_image.url}
                    toggle={layout.site_toggle}
                />
            )
        }

        if(layout.acf_fc_layout === "info") {
            return (
                <Info
                    title={layout.title}
                    body={layout.body}
                    url={layout.image.url}
                    alt={layout.image.alt}
                />
            )
        }

        if(layout.acf_fc_layout === "cta_banner") {
            return (
                <CtaBanner
                    buttonLink={layout.button_link}
                    buttonText={layout.button_text}
                    content={layout.content}
                />
            )
        }

        if(layout.acf_fc_layout === "footer") {
            return (
                <Footer
                    header={layout.header}
                    buttonOneText={layout.button_one_text}
                    buttonTwoText={layout.button_two_text}
                    buttonThreeText={layout.button_three_text}
                    bgImageOne={layout.background_image_one.url}
                    bgImageTwo={layout.background_image_two.url}
                    footerIcon={layout.footer_icon.url}
                    address={layout.address}
                />
            )
        }




    })



  return (
    <div home>
        <Navbar/>
        {builderArray}
   
        {/* {page[0].title.rendered} */}
        {/* <img style={{
            width: "150px"
        }} src={page[0].acf.user_image.url}/> 
        <div dangerouslySetInnerHTML={{ __html: page[0].acf.user_description}}/>
        <p>{page[0].acf.user_name}</p> */}
    </div>
  )
}

// 1 param in a url requires a ?, any param after that requires an &

// Reason for &_embed ??? I forgot.
export async function getServerSideProps({params}) {
    const page = await fetch(`http://localhost:8888/wordpress-installation/wp-json/wp/v2/pages?slug=${params.slug[0]}&_embed`).then((res) => res.json());

  return {
    props: {
        page
    }
  }

//   const posts = await fetch('http://localhost:8888/wordpress-installation/wp-json/wp/v2/posts?_embed').then((res) => res.json());

//   return {
//     props: {
//       posts
//     }
//   }
}