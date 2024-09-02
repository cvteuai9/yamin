import React, { useState, useRef } from 'react'

const MapComponent = () => {
  const [hoveredRegion, setHoveredRegion] = useState('')
  const nameDivRef = useRef(null)

  const handleMouseOver = (e) => {
    const regionName = e.target.getAttribute('name')
    setHoveredRegion(regionName)
    if (nameDivRef.current) {
      nameDivRef.current.style.opacity = 1
      nameDivRef.current.style.left = `${e.pageX + 20}px`
      nameDivRef.current.style.top = `${e.pageY + 20}px`
    }
    e.target.style.fill = '#ffffff'
  }

  const handleMouseOut = (e) => {
    setHoveredRegion('')
    if (nameDivRef.current) {
      nameDivRef.current.style.opacity = 0
    }
    e.target.style.fill = '#003E52'
  }

  return (
    <>
      <div id="shane_map_name" className="shane_map_name" ref={nameDivRef}>
        <p className="shane_map_p" id="namep">
          {hoveredRegion}
        </p>
        <img
          src="/images/yaming/course/外框.png"
          alt=""
          className="shane_map_image1"
        />
      </div>

      {/* Simplemaps SVG */}
      <svg
        baseProfile="tiny"
        fill="#003E52"
        height="1000"
        stroke="#B29564"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        version="1.2"
        viewBox="100 200 1000 1000"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
      >
        <g id="features">
          <path
            d="M657.2 325.1l6.4-10.3 5-5.9 5.2-4.4 13.2-4.4 3.1-1.9 2.7-2.4 3.3-1.8 6.4-2.3 14.5-2.6 3 3.3 4.6 2.2 3.4 2.2 2.3 2.1 2.9 0.7 3.1 1.6 3.7 5.4 0.3 2.9-0.7 3-2.4 2.5-9.4 2.8-2.7 2.9 0.2 4.5-0.8 4.1 0.8 3.7 3.8 3.7 0.8 3.7-1 4.8 3.7 2.1 5.3-0.3 3.7 1.4 6 8.9-1 3.8-2.3 2.7 0.6 3.7 1 4.1 6.4 6 1.8 4-2.2 0.6-3.9 2.8 2.3 9-1.6 2.7-2.5 1-2.3-0.5-2.9 1.1-0.3 1.1-3.5-1.5-5.2-3-2.9-2.1-4-0.7-4.5-2.6-3.7-2.9-0.4-3.1 3.3-4.7 1.4-5.6-1.2-5.2-0.2-3.6-2.5-1.9-3.1-1.6-1.9-3.3-2.4-2.5-2.8 0.2-2.8-0.5-2.2-2.2-3-2.2-4.8-1.5-2.4-2.7 0.8-4.2-2.6-3-4.9-1.6-3-1.4-3.1-0.9-3.6-1.4-2.9-6.3-3.3-2.2-9.8 0.7-2.3-0.8z"
            id="TWTAO"
            name="桃園"
            className="shane_map_path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></path>
          <path
            d="M646.3 345.6l0.1-0.1 1.1-1.6 0.4-2.7 0.6-2.1 1.5-2.1 1.9-1.6 1.8-0.6-0.1-0.9 0.5-2.1 1.6-4.4 1.5-2.3 2.3 0.8 9.8-0.7 3.3 2.2 2.9 6.3 3.6 1.4 3.1 0.9 3 1.4 4.9 1.6 2.6 3-0.8 4.2 2.4 2.7 4.8 1.5 3 2.2 2.2 2.2 2.8 0.5 2.8-0.2 2.4 2.5 1.9 3.3 3.1 1.6 2.5 1.9 0.2 3.6 1.2 5.2-1.4 5.6-3.3 4.7 0.4 3.1 3.7 2.9 4.5 2.6 4 0.7 2.9 2.1 5.2 3 3.5 1.5-1.7 4.7-1 3.4 0.4 3.2-2.7 4.2-10.1 10.2-3.1 7.5-2-0.5-7.7 0.7-0.5 0.4-0.5-3.5-3.3-5.6-2.3-2.4-1-3.1-3.6-2.9-9.1 2.3-3.4-0.4-4.9 0.4-5.5 1.5-3-0.7 0.7-3.7 0.9-3.3-0.7-2.9-0.7-2.1 0.7-2.3 0.5-2.4 0.3-2.8-0.6-3.8-2.7-2.4-8.8-"
            id="TWTAO"
            name="台中"
            className="path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></path>
        </g>
      </svg>
    </>
  )
}

export default MapComponent
