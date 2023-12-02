import React, { useState, useEffect } from "react"

const MyForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  useEffect(() => console.log("render"))

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Email validation
    if (!email.trim()) {
      setEmailError("Email cannot be blank")
      return
    }

    // Check if the email ends with "@webdevsimplified.com"
    if (!email.trim().toLowerCase().endsWith("@webdevsimplified.com")) {
      setEmailError("Email must end with @webdevsimplified.com")
      return
    }

    // Clear any previous email error
    setEmailError("")

    // Password validation
    if (!password.trim()) {
      setPasswordError("Password cannot be blank")
      return
    } else if (password.length < 10) {
      setPasswordError("Password must be 10 characters or longer")
      return
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must include a lowercase letter")
      return
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must include an uppercase letter")
      return
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must include a number")
      return
    }

    // Clear any previous password error
    setPasswordError("")

    // You can perform additional form validation or submit data here
    console.log("Form submitted:", { email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        <span style={{ color: "red" }}>{emailError}</span>
      </label>

      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          minLength="10"
          required
        />
        <span style={{ color: "red" }}>{passwordError}</span>
      </label>

      <br />

      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default MyForm
