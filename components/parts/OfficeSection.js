

import React, {useEffect, useState, useRef} from 'react';



export default function OfficeSection({copy_1, copy_2, copy_3}) {

 
return (
    <section className="office">


      <div className="office__section office__section--1">
          <div className="container">

              <div className="left">
                  <div dangerouslySetInnerHTML={{ __html: copy_1}}/>
              </div>

              <div className="right">
                  <img src="/images/office/tesselation.jpg" alt="building wall" />
              </div>

          </div>
      </div>

      <div className="office__section office__section--2">

      </div>

      <div className="office__section office__section--2">

      </div>

    </section>
    )
  }