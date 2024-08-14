import React from 'react'

export default function Course() {
  return (
    <>
      <>
        <div className="shane-body">
          <div className="container mb-5">
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/course/上.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="shane-course-wood mb-4" />
              <div className="h1 shane-course-store row text-center justify-content-center">
                課程
                <div className="shane-course-store p text-center ">store</div>
              </div>
              <div className="shane-course-wood mb-4" />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/course/下.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
          </div>
          <div className="container shane-course-activity mt-5 px-5">
            <img
              src="/images/yaming/course/2304241441551418071000.jpg"
              alt=""
            />
          </div>
          <div className=" container d-flex">
            <div className="shane-course-scroll-container  mt-5">
              <div className="shane-course-class-all">
                <img
                  src="/images/yaming/course/all-inclusive (1) 1.png"
                  alt=""
                />
                <h5 className="text-center mt-3">全部</h5>
              </div>
              <div className="shane-course-class-all">
                <img src="/images/yaming/course/history-01 1.png" alt="" />
                <h5 className="text-center mt-3"> 茶文化與歷史課程</h5>
              </div>
              <div className="shane-course-class-all">
                <img src="/images/yaming/course/sip 2.png" alt="" />
                <h5 className="text-center mt-3">茶葉鑑定品茶課程</h5>
              </div>
              <div className="shane-course-class-all">
                <img src="/images/yaming/course/hand 2.png" alt="" />
                <h5 className="text-center mt-3">茶葉製作與加工課程</h5>
              </div>
              <div className="shane-course-class-all">
                <img
                  src="/images/yaming/course/all-inclusive-01 1.png"
                  alt=""
                />
                <h5 className="text-center mt-3">茶藝表演與茶道學習</h5>
              </div>
              <div className="shane-course-class-all">
                <img src="/images/yaming/course/online-learning 2.png" alt="" />
                <h5 className="text-center mt-3">茶葉證照與經營課程</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="shane-course-star mt-5 mb-5 mx-5">
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images/yaming/course/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="container justify-content-between d-flex px-5 align-items-center">
            <div className="shane-course-breadcrumb mt-1">
              <h5>全部課程 / 茶文化與歷史課程</h5>
            </div>
            <div className="shane-dropdown-flex">
              <div className="shane-dropdown text-center ">
                <button className="shane-dropdown-toggle">
                  <h5 className="m-0 p-0" style={{ fontWeight: 300 }}>
                    價格
                  </h5>
                </button>
                <ul className="shane-dropdown-menu">
                  <li>
                    <a href="#">價格&nbsp;▲</a>
                  </li>
                  <li>
                    <a href="#">價格&nbsp;▼</a>
                  </li>
                </ul>
              </div>
              <div className="px-2" />
              <div className="shane-dropdown">
                <button className="shane-dropdown-toggle">
                  <h5 className="m-0 p-0" style={{ fontWeight: 300 }}>
                    地區
                  </h5>
                </button>
                <ul className="shane-dropdown-menu justify-content-center align-items-center">
                  <li>
                    <a href="#">台北</a>
                  </li>
                  <li>
                    <a href="#">台南</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                  <li>
                    <a href="#">高雄</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 這邊是課程 */}
          <div className="container mt-5 px-5">
            <div className="shane-course-card mb-3" style={{ maxWidth: 1440 }}>
              <div className="row">
                <div className="col-md-4 shane-course-activity_left ">
                  <img
                    src="/images/yaming/course/2304241441551418071000.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="shane-course-card-body position-relative px-3">
                    <div className=" text-center justify-content-center position-absolute top-50 start-50 translate-middle">
                      <img
                        src="/images/yaming/course/LOGO 直向.png"
                        alt=""
                        width={150}
                        height={240}
                      />
                    </div>
                    <h3 className="card-title mt-4">
                      茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                    </h3>
                    <p className="card-text">茶文化與歷史課程</p>
                    <p>
                      茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                    </p>
                    <p />
                    <p>2024/08/20-2024/08/20</p>
                    <p>已經報名 12 個人 /人數限制 24 人</p>
                    <div className="d-flex text-center">
                      <img
                        src="/images/yaming/course/geo-alt (1) 1.png"
                        alt=""
                        width="13px"
                        height="13px"
                        className="mt-2 me-2"
                      />
                      <p>台北市</p>
                    </div>
                    <h3 className="mt-3">NT 1200 </h3>
                    <div className="d-flex align-items-center mt-3 mb-2">
                      <img
                        src="/images/yaming/course/love.png"
                        alt=""
                        width={20}
                        height={18}
                        className="me-3"
                      />
                      <img
                        src="/images/yaming/course/Group 115.png"
                        alt=""
                        width={20}
                        height={18}
                        className="me-3"
                      />
                      <div className="ms-3">
                        <button type="button" className="btn rounded-pill">
                          購買
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="shane-course-star mt-5 mb-5 mx-5">
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images/yaming/course/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="container justify-content-center d-flex course-shane-number  align-items-center ">
            <img
              src="/images/yaming/course/Vector 34 (Stroke).png"
              alt=""
              width={8}
              height={16}
            />
            <div className="d-flex mt-2">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <img
              src="images/yaming/course/Vector 35 (Stroke).png"
              alt=""
              width={8}
              height={16}
            />
          </div>
          <div className="container">
            <div className="shane-course-star mb-5 mx-5 align-items-center justify-content-center d-flex">
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={8}
                height={8}
              />
              <img
                src="/images/yaming/course/Vector 25.png"
                alt=""
                width="240px"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/course/star.png"
                alt=""
                width={8}
                height={8}
              />
            </div>
          </div>
        </div>
      </>
    </>
  )
}
