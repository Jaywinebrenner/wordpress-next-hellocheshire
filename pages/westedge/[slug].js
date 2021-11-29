


import React, { useState } from 'react';

import WestedgeTeam from '../../components/parts/WestedgeTeam';
import WestedgeNav from '../../components/parts/WestedgeNav';
import WestedgeOffice from '../../components/parts/WestedgeOffice';
import Expandable from '../../components/parts/Expandable';
import Elevation from '../../components/parts/Elevation';

export default function Page({page}) {

    console.log("WE PAGE", page);

  const builderArray = page[0]?.acf.builder?.map((layout, i) => {

    if(layout.acf_fc_layout === "team") {
      return (
        <WestedgeTeam
            key={`westedge-builder-${i}`}
            contact_row={layout.contact_row}
            content_row={layout.content_row}
            sub_image_url={layout.sub_image.url}
            main_image_url={layout.main_image.url}
        />
      )
    }

    if(
      layout.acf_fc_layout === "page_title" 
      ) {
      return (
        <WestedgeOffice
            key={`westedge-office-${i}`}
            content={layout.content}
            title={layout.title}
            sub_image_url={layout.sub_image.url}
            video_url={layout.background_video}
            main_image_url={layout.main_image.url}
        />
      )
    }

    if(
      layout.acf_fc_layout === "expandable_content" 
      ) {
      return (
        <Expandable
          key={`westedge-expandable-${i}`}
          logos={layout.logos}
          background_image_url={layout.background_image.url}
          main_image_url={layout.main_image.url}
          title={layout.title}
          content={layout.content}
        />
      )
    }

    if(
      layout.acf_fc_layout === "elevations" 
      ) {
      return (
        <Elevation
          key={`westedge-elevation-${i}`}
          elevations={layout.elevations}
   
        />
      )
    }
    
  
  })

  return (
    <div className="westedge">
      <div className="westedge__nav"><p>Westedge Clone</p><a href="/">Home</a></div>
      <WestedgeNav/>
      {builderArray}
    </div>
  )
}

// 1 param in a url requires a ?, any param after that requires an &

// Reason for &_embed ??? I forgot.
export async function getServerSideProps({params}) {

  const page = await fetch(`https://api.westedgela.com/wp-json/wp/v2/pages?slug=${params.slug}`).then((res) => res.json());

  return {
    props: {
        page
    }
  }
}


