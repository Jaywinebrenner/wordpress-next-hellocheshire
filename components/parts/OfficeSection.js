

import React, {useEffect, useState, useRef} from 'react';



export default function OfficeSection({copy_1, copy_2, copy_3}) {
    console.log('2', copy_2)
 
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
        <div className="container">

            <div className="left">
                <div className="clouds-container">
                    <img className="clouds" src="/images/office/clouds.jpg" />
                </div>
                <img className="balcony" src="/images/office/balcony.png" alt="building wall" />
            </div>

            <div className="right">
                <div className="right-copy" dangerouslySetInnerHTML={{ __html: copy_2}}/>
            </div>

        </div>
          

      </div>

      <div className="office__section office__section--2">

      </div>

    </section>
    )
  }