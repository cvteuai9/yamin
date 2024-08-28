import React from 'react'
import { useState, useEffect, useRef } from 'react'
import TeaMapComponent from '@/components/teamap/teamap'
import { CiGlass } from 'react-icons/ci'

export default function TeaMapPage() {
  const [type, setType] = useState('teaHouse')
  const [data, setData] = useState([])
  const typeRadioHouseRef = useRef(null)
  const typeRadioFactoryRef = useRef(null)
  const [getToday, setGetToday] = useState(0)
  const [today, setToday] = useState('')

  function handleTypeToggle(e) {
    setType(e.target.value)
  }
  async function getMapData(type) {
    const apiUrl = new URL(`http://localhost:3005/api/teamap?type=${type}`)
    // console.log(apiUrl.href)
    const mapDataRes = await fetch(apiUrl)
    const mapData = await mapDataRes.json()
    // console.log(mapData)
    setData(mapData)
  }
  useEffect(() => {
    let tmp = new Date().getDay()
    setGetToday(tmp)
  }, [])
  useEffect(() => {
    switch (getToday) {
      case 0:
        setToday('日')
        break
      case 1:
        setToday('一')
        break
      case 2:
        setToday('二')
        break
      case 3:
        setToday('三')
        break
      case 4:
        setToday('四')
        break
      case 5:
        setToday('五')
        break
      case 6:
        setToday('六')
        break
    }
  }, [getToday])
  useEffect(() => {
    const typeRadioHouse = typeRadioHouseRef.current
    const typeRadioFactory = typeRadioFactoryRef.current
    // console.log(typeRadioFactory, typeRadioHouse)
    if (type === 'teaHouse') {
      typeRadioHouse.classList.add('active')
      typeRadioFactory.classList.remove('active')
    } else {
      typeRadioFactory.classList.add('active')
      typeRadioHouse.classList.remove('active')
    }
  }, [type])
  useEffect(() => {
    getMapData(type)
    // console.log(type)
  }, [type])
  return (
    <>
      <div className="teaMap">
        {/* title */}
        <div className="teaMapTitle d-flex justify-content-center align-items-center mb-5">
          <div className="text-center">
            <img src="/images/teamap/decoration-top.svg" alt="" />
            <div>
              <div className="d-flex gap-3">
                <img src="/images/teamap/dash.svg" alt="" />
                <h1 className="m-0">茶館/茶廠地圖</h1>
                <img src="/images/teamap/dash.svg" alt="" />
              </div>
              <h5 className="m-0">TeaMap</h5>
            </div>
            <img src="/images/teamap/decoration-bottom.svg" alt="" />
          </div>
        </div>
        {/* 茶館/茶廠切換radio */}
        <div className="d-flex typeRadio gap-3 mb-3">
          <input
            className="d-none"
            type="radio"
            id="houseRadio"
            name="type"
            value="teaHouse"
            onChange={(e) => {
              handleTypeToggle(e)
            }}
            defaultChecked={true}
          />
          <label
            htmlFor="houseRadio"
            className="typeRadioLabel active"
            ref={typeRadioHouseRef}
          >
            <div className="houseRadioBackgroundDiv"></div>
            <p>茶館</p>
          </label>
          <input
            className="d-none"
            type="radio"
            id="factoryRadio"
            name="type"
            value="teaFactory"
            onChange={(e) => {
              handleTypeToggle(e)
            }}
          />
          <label
            htmlFor="factoryRadio"
            className="typeRadioLabel"
            ref={typeRadioFactoryRef}
          >
            <div className="factoryRadioBackgroundDiv"></div>
            <p>茶廠</p>
          </label>
        </div>
        <div className="d-flex gap-3">
          <div className="cardArea p-2 justify-content-center">
            {data.length > 0 ? (
              data.map((v) => {
                const starFillNum = isNaN(Number(v.rating))
                  ? 0
                  : Math.max(0, Math.min(5, Math.floor(Number(v.rating))))
                const starFillArray = new Array(starFillNum).fill(0)
                const starUnFillArray = new Array(5 - starFillNum).fill(0)
                return (
                  <div
                    className="storeCard d-flex py-2 mb-1 flex-wrap"
                    key={v.id}
                  >
                    <div className="img">
                      <img
                        className="img-fluid object-fit-cover"
                        src={`/images/teamap/${
                          type === 'teaHouse'
                            ? 'tea_house_images'
                            : 'tea_factory_images'
                        }/${v.images || 'default-placeholder.png'}`}
                        alt={`${v.images || 'default-placeholder.png'}`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src =
                            '/images/teamap/default-placeholder.png'
                        }}
                      />
                    </div>
                    <div className="cardInfo ps-2">
                      <h5 className="fw-bold fs-3">{v.name}</h5>
                      <div className="starArea fs-3">
                        {starFillArray.map((v, i) => {
                          return (
                            <i
                              className="fa-solid fa-star starLight"
                              key={`factory-${i}`}
                            />
                          )
                        })}
                        {starUnFillArray.map((v, i) => {
                          return (
                            <i
                              className="fa-regular fa-star"
                              key={`house-${i}`}
                            />
                          )
                        })}
                        <p className="ms-2 d-inline">
                          ({v.user_ratings_total})
                        </p>
                      </div>
                      <p>
                        <i className="fa-solid fa-location-dot" /> 地址:
                        {v.address}
                      </p>
                    </div>
                    <div className="me-1 align-items-center fs-3">
                      營業時間:
                    </div>
                    <div>
                      {v.opening_hours !== '(無提供)' ? (
                        <select defaultValue={today}>
                          {v.opening_hours.map((item, i) => {
                            return (
                              <option value={item.slice(0, 1)} key={`星期${i}`}>
                                {item}
                              </option>
                            )
                          })}
                        </select>
                      ) : (
                        <select defaultValue={'(無提供)'}>
                          <option value="(無提供)">{v.opening_hours}</option>
                        </select>
                      )}
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
          <div className="googleMapArea">
            <TeaMapComponent />
          </div>
        </div>
      </div>
    </>
  )
}
