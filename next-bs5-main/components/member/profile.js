// NE為了測試修改過，如果有衝突麻煩再跟我說一下，感恩～
import { useState, useEffect, useCallback } from 'react'
import Leftnav from '@/components/member/left-nav'
import Link from 'next/link'
import {
  updateProfile,
  getUserById,
  updateProfileAvatar,
} from '@/services/my-user'
import { useAuth } from '@/hooks/my-use-auth'
import toast, { Toaster } from 'react-hot-toast'
import MyPreviewUploadImage from '@/components/user/my-preview-upload-image'
import { avatarBaseUrl } from '@/configs'

export default function Profile() {
  // 定義要在此頁呈現/編輯的會員資料初始物件
  const initUserProfile = {
    id: '',
    user_name: '',
    nick_name: '',
    gender: '',
    phone: '',
    birthday: null,
    user_image: '',
    email: '',
  }
  const { auth } = useAuth()
  console.log('auth', auth)
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [hasProfile, setHasProfile] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const getUserData = async (id) => {
    const res = await getUserById(id)

    // console.log('res.data', res.data)
    // console.log('auth.userData', auth.userData)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      // console.log('dbUser ', dbUser) //有ＩＤ
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      // 設定到狀態中
      setUserProfile(dbUserProfile)

      toast.success('會員資料載入成功')
    } else {
      toast.error(`會員資料載入失敗`)
    }
  }
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  // 提示其它相關個人資料元件可以載入資料
  useEffect(() => {
    // 純粹觀察userProfile狀態變化用
    // console.log('userProfile狀態變化', userProfile)
    if (userProfile.user_name) {
      setHasProfile(true)
    }
  }, [userProfile])

  const handleFieldChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 這裡可以作表單驗証

    // 送到伺服器進行更新
    // 更新會員資料用，排除avatar
    let isUpdated = false

    const { user_image, ...user } = userProfile
    if (user.birthday === '') {
      user.birthday = null
    }
    // console.log('user:', auth.userData)
    const res = await updateProfile(auth.userData.id, user)

    // console.log(res.data)

    // 上傳頭像用，有選擇檔案時再上傳
    if (selectedFile) {
      const formData = new FormData()
      // 對照server上的檔案名稱 req.files.avatar
      formData.append('avatar', selectedFile)
      console.log(formData)

      const res2 = await updateProfileAvatar(formData)

      console.log(res2.data)
      if (res2.data.status === 'success') {
        toast.success('會員頭像修改成功')
      }
    }

    if (res.data.status === 'success') {
      toast.success('會員資料修改成功')
    } else {
      toast.error('會員資料修改失敗')
      console.log(res.data)
    }
  }

  if (!auth.isAuth) return <></>

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

            {hasProfile ? (
              <MyPreviewUploadImage
                avatarImg={userProfile.user_image}
                // uploadImg={updateProfileAvatar}
                avatarBaseUrl={avatarBaseUrl}
                // toast={toast}
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
              />
            ) : (
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
                  <div>
                    <div className="profile-picright">
                      <img src="/images/favorite/user.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <p className="p whitef mt-5">真實姓名（必填）</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="text"
                  name="user_name"
                  placeholder="請輸入你的真實姓名"
                  value={userProfile.user_name}
                  onChange={handleFieldChange}
                />
              </div>
              <div>
                <p className="p whitef mt-5">暱稱（必填）</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="text"
                  placeholder="請輸入你的暱稱"
                  name="nick_name"
                  value={userProfile.nick_name}
                  onChange={handleFieldChange}
                />
              </div>
              <div>
                <p className="p whitef mt-5">性別&nbsp;(必填)</p>
                <div className="profile-inputradio">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="男性"
                    checked={userProfile.gender === '男性'}
                    onChange={handleFieldChange}
                  />
                  <p className="p whitef ms-3">男</p>
                  <input
                    type="radio"
                    className="ms-3"
                    id="female"
                    name="gender"
                    value="女性"
                    checked={userProfile.gender === '女性'}
                    onChange={handleFieldChange}
                  />
                  <p className="p whitef ms-3">女</p>
                </div>
              </div>
              <div>
                <p className="p whitef mt-5">生日</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="date"
                  placeholder="請輸入你的生日"
                  name="birthday"
                  value={userProfile.birthday}
                  onChange={handleFieldChange}
                />
              </div>
              <p2 className="p2 whitef">* 請正確填寫，註冊成功後將無法修改</p2>
              <div>
                <p className="p whitef mt-5">手機（必填）</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="text"
                  placeholder="請輸入你的手機"
                  // pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                  name="phone"
                  value={userProfile.phone}
                  onChange={handleFieldChange}
                />
              </div>
              <div>
                <p className="p whitef mt-5">
                  電子郵件（為登入帳號，不可修改）
                </p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="email"
                  name="email"
                  placeholder="請輸入你的電子郵件"
                  value={userProfile.email}
                />
              </div>
              {/* <span className="error">{errors.email}</span> */}
              <div className="profile-btns  ">
                <button type="submit" className="profile-checked  btn2 p">
                  確認
                </button>
                <div type="button" className="profile-changepassword  btn1 p">
                  <Link
                    href="/member/changeps"
                    className=" goldenf text-decoration-none  color-inherit"
                  >
                    修改密碼
                  </Link>
                </div>
              </div>
            </form>
            {/* 土司訊息視窗用 */}
            <Toaster />
          </div>
        </div>
      </div>
    </>
  )
}
