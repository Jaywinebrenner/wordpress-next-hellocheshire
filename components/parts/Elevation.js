

import React, {useEffect, useState} from 'react';
import FloorsSVG from '../../public/images/elevation/floors.svg';
import MinusSVG from '../../public/images/elevation/minus.svg';
import PlusSVG from '../../public/images/elevation/plus.svg';


export default function Elevation({elevations}) {

  
  console.log("elevations", elevations)
  console.log("FLOORS SVG", FloorsSVG.src)
  const [activeListItems, setActiveListItems] = useState(elevations[0].feature_list);
  const [activeFloorPlan, setActiveFloorPlan] = useState(elevations[0].floorplan)
  // console.log("elevations", activeListItems)
  console.log("Floor plan", activeFloorPlan)



  const [floorNavElements, setFloorNavElements] = useState();

  useEffect(() => {
    if (!floorNavElements) {
      const floorIDs = elevations.map((item) => {
        return `#floors_svg__f${item.floor_number}`;
      }).join(',');
      console.log("floorID", floorIDs)
      setFloorNavElements(Array.from(document.querySelectorAll(floorIDs)));
      console.log("Floor Nav Els", floorNavElements)
    }


  }, []);


  return (
      <section className="elevation">
          <div className="elevation__circle"></div>
          <div className="elevation__infoWrapper">
            <div className="elevation__infoWrapper--left">
              <h5>Office Level 1</h5>
              <h2>Interactive Elevation</h2>
            </div>

            <div className="elevation__infoWrapper--right">
              <h5 className="elevation__infoWrapper--moreInfo">For More infomation</h5>
              <h2 className="elevation__infoWrapper--download">Download the Book</h2>
            </div>

          </div>
          <div className="elevation__interactive">
            <div className="elevation__interactive--left">
              <div className="elevation__interactive--imgWrapper">
                <img src="/images/elevation/bg--red.png" alt="elevation background" />
                <img className="elevation__interactive--floorsSVG" src={FloorsSVG.src}/>
              </div>
            </div>

            <div className="elevation__interactive--controls">
              <div className="elevation__interactive--controls-top">
                <PlusSVG />
              </div>
              <div className="elevation__interactive--controls-bottom">
                <MinusSVG />
              </div>
            </div>

            <div className="elevation__interactive--right">
              <img src={activeFloorPlan} alt="elevation background" />
            </div>
            
          </div>

          <hr></hr>

          <div className="elevation__floor">
            <div className="elevation__floor--left">
              <h1>Floor features &amp; amenities</h1>
            </div>
            <div className="elevation__floor--right">
              <ul>
                {activeListItems.map((listItem, i) => {
                  return (
                    <li key={`elevation-floor--right-${i}`}>{listItem.feature}</li>
                  )
                })}
              </ul>
            </div>
          </div>

      </section>
    )
  }