import React, { useState, useRef } from 'react'
import { X } from 'lucide-react'

const MapComponent = () => {
  const [hoveredRegion, setHoveredRegion] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const nameDivRef = useRef(null)

  const regionInfo = {
    桃園: {
      description:
        '桃園，北海道中央的賞藏之地，位於旭川市和富良野市之間，是一片充滿驚奇的自然寶庫。青池和白鬚瀑布等令人嘆為觀止的景點，使美瑛成為引人入勝的四季之地。春天，櫻花在五月初綻放，如夢如幻，彷彿走進了童話世界。隨著七月初的來臨，馬鈴薯開花，將山坡點綴成一片繽紛的花海。',
      image: '/images/yaming/tea_class_picture/1-tea-class.jpeg',
    },
    台北: {
      description:
        '台北,台灣的首都,是一座充滿活力的國際大都市。這裡融合了現代與傳統，高樓大廈與古老寺廟相映成趣。101大樓是城市的地標，而夜市文化則展現了台北的庶民風情。台北擁有豐富的文化資源，從故宮博物院到中正紀念堂，處處可見歷史的痕跡。',
      image: '',
    },
    台中: {
      description:
        '台中位於台灣的中心，是一座兼具文化與自然美的城市。這裡有著名的高美濕地，日落時分景色壯麗。台中歌劇院以其獨特的建築設計聞名於世，而逢甲夜市則是品嚐地道小吃的絕佳去處。台中也以其宜人的氣候和綠地公園聞名，是休閒娛樂的理想之地。',
      image: '',
    },
    新竹: {
      description:
        '台中位於台灣的中心，是一座兼具文化與自然美的城市。這裡有著名的高美濕地，日落時分景色壯麗。台中歌劇院以其獨特的建築設計聞名於世，而逢甲夜市則是品嚐地道小吃的絕佳去處。台中也以其宜人的氣候和綠地公園聞名，是休閒娛樂的理想之地。',
      image: '',
    },
  }

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

  const handleClick = (e) => {
    const regionName = e.target.getAttribute('name')
    setSelectedRegion(regionName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div id="shane_map_name" className="shane_map_name" ref={nameDivRef}>
        <p className="shane_map_p" id="shane_map_namep">
          {hoveredRegion}
        </p>
        <img
          src="/images/yaming/course/外框-01.svg"
          alt=""
          className="shane_map_image1"
        />
      </div>

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
        className="shane_map_svg"
      >
        <g id="shane_map_features">
          <path
            d="M657.2 325.1l6.4-10.3 5-5.9 5.2-4.4 13.2-4.4 3.1-1.9 2.7-2.4 3.3-1.8 6.4-2.3 14.5-2.6 3 3.3 4.6 2.2 3.4 2.2 2.3 2.1 2.9 0.7 3.1 1.6 3.7 5.4 0.3 2.9-0.7 3-2.4 2.5-9.4 2.8-2.7 2.9 0.2 4.5-0.8 4.1 0.8 3.7 3.8 3.7 0.8 3.7-1 4.8 3.7 2.1 5.3-0.3 3.7 1.4 6 8.9-1 3.8-2.3 2.7 0.6 3.7 1 4.1 6.4 6 1.8 4-2.2 0.6-3.9 2.8 2.3 9-1.6 2.7-2.5 1-2.3-0.5-2.9 1.1-0.3 1.1-3.5-1.5-5.2-3-2.9-2.1-4-0.7-4.5-2.6-3.7-2.9-0.4-3.1 3.3-4.7 1.4-5.6-1.2-5.2-0.2-3.6-2.5-1.9-3.1-1.6-1.9-3.3-2.4-2.5-2.8 0.2-2.8-0.5-2.2-2.2-3-2.2-4.8-1.5-2.4-2.7 0.8-4.2-2.6-3-4.9-1.6-3-1.4-3.1-0.9-3.6-1.4-2.9-6.3-3.3-2.2-9.8 0.7-2.3-0.8z"
            id="shane_map_TWTAO"
            name="桃園"
            className="shane_map_path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          />
          <path
            d="M776.8 321.1l-4.2 0-3.5-0.8-2.6-2.3-2.8-3.2-4.1-3.2-2.9-4.9 1.1-5.3-0.8-4.5-4.2-4-2.7-3.1 1.2-2.1 1.3-1.7 1.5-3.3 2.6-2.9 7.8-4.7 2.1-1.8 2.9-1.4 2.8 0.9 1.5 1.6-0.4 2.6 0.3 2.4 1.1 2.4 1.2 2.6 1.8 7.2 2.8 2.5 1.1 3.2-1.1 4.8 0.1 3.6 3.3 1.9 2.7 2.3-1.4 3-5.5 7-3 1.2z"
            id="shane_map_TWTPE"
            name="台北"
            className="shane_map_path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          />
          <path
            d="M563.1 480.3l0.5-0.6 0.5-2.4 2.4-1.9 1.6-4.7 1.9-8.8 6.7-11.7 2.1-7.1 2.4-4 9.6-10.6 6.6 10.3 3.4 3.6 4.5 3.9 10.9 8 5.3 2.6 4.7 0.9 8.4 4.8 8.8-0.5 3.7-2 0.6-5.3 4-2.4 7.1 0.6 4.4 1.7 3.6 4 3.9 1.6 6.4-3.5 4.9-2 8.4-6.6 4.2-2.4 3.3-3.1 3-2.2 3.9 0.1 3.5-1.5 1.3-4 2.7-1.9 0.5-0.4 7.7-0.7 2 0.5 2.6 0.8-0.5 4 1.1 2.6 3.5 0.8 3.2 1.9 2.7 1.8 2.8-0.4 3.4-1.7 3.6 0 4.2 3.4-3.4 3.5-0.3 3-1.7 4.5-5.4 3.4-2.2 3.6-0.9 3.7-2.2 2.7-2.5 1.3-0.9 1.4-2 1.5-9.6-0.9-3.4-0.8-3.4 0.2-8 3.2-4.5 0.7-4.4 0.2-6.4 3.3-3.2 0.6-3.6 2.1-5.7 5.5-3.6 1.4-4.8-0.1-3.4 2.8-1.9 3.9-2.5 0.7-6.4-4.8-2.2 1.4-4.2 5.5-4.3 0.2-7.3-1.1-4.6 2.2-2.7 6.1-5.4 10.4-3.6 3.4-3 0.5-13-1.8-3-0.1-0.1-1-3.9-2.6-3.1-0.5-0.9-2.5 0-2.8-1.4-2.9-2.3-3.6-3.2-2.6-8.5-2.5-3.3-3.9-0.7-5.5-1.9-4.6-2.9-2.5-4.2-1.3z"
            id="shane_map_TWCHG"
            name="台中"
            className="shane_map_path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          />
          <path
            d="M646.3 345.6l0.1-0.1 1.1-1.6 0.4-2.7 0.6-2.1 1.5-2.1 1.9-1.6 1.8-0.6-0.1-0.9 0.5-2.1 1.6-4.4 1.5-2.3 2.3 0.8 9.8-0.7 3.3 2.2 2.9 6.3 3.6 1.4 3.1 0.9 3 1.4 4.9 1.6 2.6 3-0.8 4.2 2.4 2.7 4.8 1.5 3 2.2 2.2 2.2 2.8 0.5 2.8-0.2 2.4 2.5 1.9 3.3 3.1 1.6 2.5 1.9 0.2 3.6 1.2 5.2-1.4 5.6-3.3 4.7 0.4 3.1 3.7 2.9 4.5 2.6 4 0.7 2.9 2.1 5.2 3 3.5 1.5-1.7 4.7-1 3.4 0.4 3.2-2.7 4.2-10.1 10.2-3.1 7.5-2-0.5-7.7 0.7-0.5 0.4-0.5-3.5-3.3-5.6-2.3-2.4-1-3.1-3.6-2.9-9.1 2.3-3.4-0.4-4.9 0.4-5.5 1.5-3-0.7 0.7-3.7 0.9-3.3-0.7-2.9-0.7-2.1 0.7-2.3 0.5-2.4 0.3-2.8-0.6-3.8-2.7-2.4-8.8-4.2-4.3-3.2-2.8-3.2-3.2-8 1.8-2.2 1.6-4.1 2.5-3.1 4.2-1.7 3.7-0.6 1.7-1 0.7-2.7-1.3-2.6-2.8-2.8-3.9-2-10.9-3.5-6-2.6z"
            id="shane_map_TWHSQ"
            name="新竹"
            className="shane_map_path"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          />
        </g>
      </svg>

      {isModalOpen && (
        <div className="shane_map_fixed shane_map_inset-0 shane_map_bg-black shane_map_bg-opacity-50 shane_map_flex shane_map_items-center shane_map_justify-center">
          <div className="shane_map_bg-white shane_map_p-6 shane_map_rounded-lg shane_map_max-w-xl shane_map_w-full shane_map_relative">
            <button
              onClick={closeModal}
              className="shane_map_absolute shane_map_top-2 shane_map_right-2 shane_map_text-gray-500 shane_map_hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="shane_map_flex shane_map_flex-col shane_map_items-center">
              <h2 className="shane_map_text-2xl shane_map_font-bold shane_map_mb-4">
                {selectedRegion}
              </h2>
              <img
                src={regionInfo[selectedRegion].image}
                alt={selectedRegion}
                className="shane_map_w-full shane_map_max-w-md shane_map_h-48 shane_map_object-cover shane_map_rounded-lg shane_map_mb-4"
              />
              <p className="shane_map_text-gray-700 shane_map_text-center">
                {regionInfo[selectedRegion].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MapComponent
