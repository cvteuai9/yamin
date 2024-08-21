import Leftnav from '@/components/member/left-nav'
import Link from 'next/link'
export default function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="titlenav">
            <img src="/images/favorite/title.svg" alt="" />
            <img
              src="/images/favorite/group.svg"
              alt=""
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-3">
            <Leftnav />
          </div>
          <div className="col-md-9">
            <h4 className="goldenf">
              <Link href="/member/profile" className="h5 goldenf">
                個人檔案
              </Link>
              &nbsp;/&nbsp;
              <Link href="/member/profile" className="h5 goldenf">
                已整合帳戶
              </Link>
              &nbsp;/&nbsp;
              <Link href="/member/profile" className="h5 goldenf">
                載具管理
              </Link>
            </h4>
             <p className="p whitef mt-5">
              請放心，你的電子郵件及所有與設計師溝通的訊息、檔案及相關購買資料，網站將依照個人資料保護法保障你的個人隱私！
            </p>
            <div>
              <div className="profile-pic">
                <div className="profile-picleft">
                   <p className="p whitef mt-5">更換頭貼</p>
                  <p2 className="p2 goldenf">
                    從電腦中選取圖檔：最佳大小為 600 x 600 px
                  </p2>
                  {/* <button>選擇照片</button> */}
                  <div type="file" className="p btn1 low mt-5">
                    選擇照片
                  </div>
                </div>
                <div className="profile-picright">
                  <img src="/images/favorite/user.svg" alt="" />
                </div>
              </div>
            </div>
            <div>
               <p className="p whitef mt-5">真實姓名（必填）</p>
              <input
                className="profile-inputtext p2 goldenf"
                type="text"
                placeholder="請輸入你的真實姓名"
              />
            </div>
            <div>
               <p className="p whitef mt-5">暱稱（必填）</p>
              <input
                className="profile-inputtext p2 goldenf"
                type="text"
                placeholder="請輸入你的暱稱"
              />
            </div>
            <div>
               <p className="p whitef mt-5">性別&nbsp;(必填)</p>
              <div className="profile-inputradio  ">
                <input
                  type="radio"
                  id="female"
                  name="fav_language"
                  defaultValue="男"
                />
                <p className="p whitef ms-3">男</p>
                <input
                  type="radio"
                  className="ms-3"
                  id="female"
                  name="fav_language"
                  defaultValue="女"
                />
                <p className="p whitef ms-3">女</p>
              </div>
            </div>
            <div>
               <p className="p whitef mt-5">生日</p>
              <input
                className="profile-inputtext p2 goldenf"
                type="text"
                placeholder="請輸入你的生日"
              />
            </div>
              <p2 className="p2 whitef">* 請正確填寫，註冊成功後將無法修改</p2>
            <div>
               <p className="p whitef mt-5">手機（必填）</p>
              <input
                className="profile-inputtext p2 goldenf"
                type="text"
                placeholder="請輸入你的手機"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div>
               <p className="p whitef mt-5">電子郵件（必填）</p>
              <input
                className="profile-inputtext p2 goldenf"
                type="email"
                placeholder="請輸入你的電子郵件"
              />
            </div>
            <div className="profile-btns  ">
              <div type="button" className="profile-checked  btn2 p">
                確認
              </div>
              <div type="button" className="profile-changepassword  btn1 p">
                <Link
                  href="/member/changeps"
                  className=" goldenf text-decoration-none  color-inherit"
                >
                  修改密碼
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
