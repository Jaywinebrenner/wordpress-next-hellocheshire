import Hero from '../components/parts/Hero';
import UserContent from '../components/parts/UserContent';
import AboutContent from '../components/parts/AboutContent';
import HomeContent from '../components/parts/HomeContent';
import React, { useState } from 'react';
import CtaBanner from '../components/parts/CtaBanner';
import Info from '../components/parts/Info';
import Footer from '../components/parts/Footer';
import Medtech from '../components/parts/Medtech';
import Navbar from '../components/parts/Navbar';
import WestedgeTeam from '../components/parts/WestedgeTeam';

export default function Page({page, westedgeTeam}) {


  const [isHeroOpen, setIsHeroOpen]  = useState(true);
  const toggleHero = () => {
    setIsHeroOpen((prevExpanded) => !prevExpanded)
  };

  console.log("page", page[0].acf.builder)

    // const image = page[0]._embedded['wp:featuredmedia'][0].source_url

  const builderArray = page[0]?.acf.builder?.map((layout) => {

    if(layout.acf_fc_layout === "navbar") {
      return (
          <Navbar
              title={layout.title}
              link_one={layout.link_one}
              link_two={layout.link_two}
              link_three={layout.link_three}
              link_four={layout.link_four}
          />
        )
    };
    if(layout.acf_fc_layout === "westedge") {
      return (
        <WestedgeTeam
            contact_row={contact_row}
        />
      )
    };

    if(layout.acf_fc_layout === "about_content") {
      return (
        <AboutContent
            title={layout.title}
            url={layout.image.url}
            description={layout.description}
        />
      )
    };

    if(layout.acf_fc_layout === "hero" && isHeroOpen) {
      return (
        <Hero
            title={layout.hero_title}
            url={layout.hero_image.url}
            toggleHero={toggleHero}
        />
      )
    };

    if(layout.acf_fc_layout === "user_content") {
      return (
        <UserContent
            name={layout.name}
            image={layout.image}
            email={layout.email}
            quote={layout.quote}
        />
      )
    };

    if(layout.acf_fc_layout === "home_content") {
      return (
        <HomeContent
            title={layout.site_title}
            description={layout.site_description}
            url={layout.site_image.url}
            toggle={layout.site_toggle}
        />
      )
    };

    if(layout.acf_fc_layout === "info") {
      return (
        <Info
            title={layout.title}
            body={layout.body}
            url={layout.image.url}
            alt={layout.image.alt}
        />
      )
    };

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
    };

    if(layout.acf_fc_layout === "medtech") {

      const navTextOne = layout.nav_text_one.toUpperCase();
      const navTextTwo = layout.nav_text_one.toUpperCase();
      return (
        <Medtech
            navTextOne={navTextOne}
            navTextTwo={navTextTwo}
            navTextThree={layout.nav_text_three}
            navTextFour={layout.nav_text_four}
            title={layout.title}
            description={layout.description}
            image={layout.image.url}
            navIcon={layout.nav_icon.url}
            imageLeft={layout.image_left}
        />
      )
    };


  })



  return (
    <div home>
      {builderArray}
    </div>
  )
}

// 1 param in a url requires a ?, any param after that requires an &

// Reason for &_embed ??? I forgot.
export async function getServerSideProps({params}) {
    const page = await fetch(`http://localhost:8888/learning-backend/wp-json/wp/v2/pages?slug=${params.slug[0]}&_embed`).then((res) => res.json());


  return {
    props: {
        page
    }
  }
}


