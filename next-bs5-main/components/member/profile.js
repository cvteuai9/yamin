// NE為了測試修改過，如果有衝突麻煩再跟我說一下，感恩～
import { useState, useEffect,useCallback } from 'react'
import Leftnav from '@/components/member/left-nav'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
// import useAuth from '@/hooks/useAuth'
import {
  googleLogin,
  parseJwt,
  getUserById,
  checkAuth,
} from '@/services/my-user'

export default function Profile() {
  // const { user } = useContext(AuthContext)
  // const [userdata, setUserData] = useState([])
  const { user, setUser, setToken } = useContext(AuthContext)
  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    email: '',
    // agree: '', // 錯誤訊息用字串
  })
  const [formData, setFormData] = useState({
    id: '',
    user_name: '',
    nick_name: '',
    gender: '',
    birthday: '',
    phone: '',
    email: '',
    // 添加其他需要的字段
  })

  const [isLoading, setIsLoading] = useState(true)

  const getUserData = useCallback(async () => {
    if (!user?.id) return
    try {
      setIsLoading(true)
      const res = await checkAuth(user.id)
      if (res.data.status === 'success') {
        setFormData(res.data.data.user)
        console.log(res.data.data.user);
      } else {
        console.error('Failed to fetch user data')
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  const handleFieldChange = (e) => {
    // console.log(e.target.name, e.target.value, e.target.type)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newErrors = {
      user_name: '',
      email: '',
      password: '',
    }

    if (!formData.user_name) {
      newErrors.user_name = '姓名為必填'
    }
    if (!formData.email) {
      newErrors.email = 'email為必填'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    }else{
      try {
        setIsLoading(true)
        let apiUrl = `http://localhost:3005/api/my-users/${formData.id}`
        const res = await fetch(apiUrl, {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (data.status === 'success') {
          console.log(data.data.user);
          setFormData(data.data.user)
          setUser(prev => ({ ...prev, ...data.data.user }))
          alert('資料更新成功')
        } else {
          alert('更新失敗，請稍後再試')
        }
      } catch (error) {
        console.error('Error updating user data:', error)
        alert('更新時發生錯誤')
      } finally {
        setIsLoading(false)
      }
    }
    
  }
  if (!user) {
    return <p>Loading...</p>
  }
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
            <form onSubmit={handleSubmit}>
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
                  name='user_name'
                  placeholder="請輸入你的真實姓名"
                  value={formData.user_name}
                  onChange={handleFieldChange}
                />
              </div>
              <div>
                <p className="p whitef mt-5">暱稱（必填）</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="text"
                  placeholder="請輸入你的暱稱"
                  name='nick_name'
                  value={formData.nick_name}
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
                    checked={formData.gender === '男性'}
                    onChange={handleFieldChange}
                  />
                  <p className="p whitef ms-3">男</p>
                  <input
                    type="radio"
                    className="ms-3"
                    id="female"
                    name="gender"
                    value="女性"
                    checked={formData.gender === '女性'}
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
                  name='birthday'
                  value={formData.birthday}
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
                  name='phone'
                  value={formData.phone}
                  onChange={handleFieldChange}
                />
              </div>
              <div>
                <p className="p whitef mt-5">電子郵件（必填）</p>
                <input
                  className="profile-inputtext p2 goldenf"
                  type="email"
                  name="email"
                  placeholder="請輸入你的電子郵件"
                  value={formData.email}
                  onChange={handleFieldChange}
                />
              </div>
              <span className="error">{errors.email}</span>
              <div className="profile-btns  ">
                <button type="submit"
                  className="profile-checked  btn2 p"
                >
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
          </div>
        </div>
      </div>
    </>
  )
}
