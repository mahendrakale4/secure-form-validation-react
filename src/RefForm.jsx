import { useEffect, useRef, useState } from "react"
import { checkEmail, checkPassword } from "./Validators"

export function RefForm() {
  //   const [email, setemail] = useState("")
  //   const [password, setpassword] = useState("")
  const emailref = useRef()
  const passwordref = useRef()

  const [emailError, setEmailError] = useState([])
  const [passwordError, setPasswordError] = useState([])
  const [isAfterFirstSubmit, setisAfterFirstSubmit] = useState(false)

  useEffect(() => console.log("render"))

  function onsubmit(e) {
    e.preventDefault()
    setisAfterFirstSubmit(true)
    const emailResult = checkEmail(emailref.current.value)
    const passwordResult = checkPassword(passwordref.current.value)
    setEmailError(emailResult)
    setPasswordError(passwordResult)
    if (emailResult.length === 0 && passwordResult.length === 0) {
      alert("Success")
    }

    console.log("Form submitted:")
  }
  return (
    <>
      <form onSubmit={onsubmit} className="form">
        <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            onChange={
              isAfterFirstSubmit
                ? (e) => setEmailError(checkEmail(e.target.value))
                : undefined
            }
            className="input"
            type="email"
            id="email"
            ref={emailref}
          />
          {emailError.length > 0 && (
            <div className="msg">{emailError.join(" , ")}</div>
          )}
        </div>

        <div
          className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            onChange={
              isAfterFirstSubmit
                ? (e) => setPasswordError(checkPassword(e.target.value))
                : undefined
            }
            className="input"
            type="password"
            id="password"
            ref={passwordref}
          />
          {passwordError.length > 0 && (
            <div className="msg">{passwordError.join(" , ")}</div>
          )}
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
