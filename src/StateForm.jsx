import { useEffect, useMemo, useState } from "react"
import { checkEmail, checkPassword } from "./Validators"

export function StateForm() {
  const [email, setemail] = useState("test@test.com")
  const [password, setpassword] = useState("Abcd@1234")
  const [isAfterFirstSubmit, setisAfterFirstSubmit] = useState(false)

  //   const [emailError, setEmailError] = useState([])
  //   const [passwordError, setPasswordError] = useState([])
  // setEmailError(emailResult)
  // setPasswordError(passwordResult)

  const emailError = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : []
  }, [isAfterFirstSubmit, email])
  const passwordError = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : []
  }, [isAfterFirstSubmit, password])

  useEffect(() => console.log("render"))

  function onsubmit(e) {
    e.preventDefault()
    setisAfterFirstSubmit(true)
    const emailResult = checkEmail(email)
    const passwordResult = checkPassword(password)
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
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            // required
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
            className="input"
            value={password}
            type="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          {passwordError.length > 0 && (
            <div className="msg">{passwordError.join(" , ")}</div>
          )}
        </div>
        {/* ------------------------------------------------------
        <p>
          just for displaying
          <br />
          email: {email}
          <br />
          password : {password}
        </p>
        ------------------------------------------------------ */}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
