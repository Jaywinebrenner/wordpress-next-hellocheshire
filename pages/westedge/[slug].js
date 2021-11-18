


import React, { useState } from 'react';

import WestedgeTeam from '../../components/parts/WestedgeTeam';

export default function Page({page}) {

    console.log("WE PAGE", page)



  const builderArray = page[0]?.acf.builder?.map((layout) => {
    if(layout.acf_fc_layout === "team") {
      return (
        <WestedgeTeam
            contact_row={layout.contact_row}
            content_row={layout.content_row}
            sub_image_url={layout.sub_image.url}
            main_image_url={layout.main_image.url}
        />
      )
    }})

  return (
    <div className="westedge">
      <div className="westedge__nav"><p>Westedge Clone</p><a href="/">Home</a></div>
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

