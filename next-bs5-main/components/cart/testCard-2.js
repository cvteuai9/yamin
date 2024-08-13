import React, { useState, useRef } from 'react'
import Cards from 'react-credit-cards-2'
import {
  formatCVC,
  formatExpirationDate,
  formatCreditCardNumber,
  formatFormData,
} from '@/hooks/cartCheckNumber'

const PaymentForm = () => {
  // 測試
  const showCard = useRef(null)
  // 測試結束
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  })

  const handlePayChange = (e) => {
    if (e.target.checked) {
      showCard.current.style.display = flex
    }
  }

  const handleInputChange = (evt) => {
    let { name, value } = evt.target
    if (name === 'number') {
      evt.target.value = formatCreditCardNumber(evt.target.value)
    } else if (name === 'expiry') {
      evt.target.value = formatExpirationDate(evt.target.value)
    } else if (name === 'cvc') {
      evt.target.value = formatCVC(evt.target.value)
    }

    setState((prev) => ({ ...prev, [name]: evt.target.value }))
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }))
  }

  return (
    <div className="cartSubTotalBor mb-5 h5">
      <div className="cartGoBuyAllOption m-4">
        <div className="cartGoBuyOption mb-5">
          <input
            type="radio"
            id="cartBuy-card"
            name="card"
            className="cartBuyInput cartBuy-card"
          />
          <label htmlFor="">信用卡支付</label>
        </div>
        <div className="cartGoBuyOption mb-5">
          <input
            type="radio"
            id="cartBuy-linepay"
            name="card"
            className="cartBuyInput cartBuy-linepay"
          />
          <label htmlFor="">linepay</label>
        </div>
        <div className="cartGoBuyOption mb-5">
          <input
            type="radio"
            id="cartBuy-green"
            name="card"
            className="cartBuyInput cartBuy-green"
          />
          <label htmlFor="">綠界金流</label>
        </div>
      </div>

      <div
        ref={showCard}
        className="cardContainerAll d-none d-flex align-items-center  "
      >
        <form action="" className="CardForm h5">
          <div className="cardInputBox">
            <label htmlFor="">卡號</label>
            <input
              type="tel"
              name="number"
              maxLength={22}
              pattern="[\d| ]{16,22}"
              className="cardNumberInput"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="cardInputBox">
            <label htmlFor="">姓名</label>
            <input
              type="text"
              name="name"
              maxLength={19}
              className="cardHolderInput"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="CardflexBox">
            <div className="cardInputBox">
              <label htmlFor="">Expiration MM</label>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                class="monthInput"
              />
            </div>

            <div className="cardInputBox">
              <label htmlFor="">CVV</label>
              <input
                type="text"
                name="cvc"
                maxLength={4}
                className="cvvInput"
                pattern="\d{3,4}"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <input type="submit" defaultValue="送出" className="submitBtn h5" />
        </form>
        <div class="cardContainer">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentForm
