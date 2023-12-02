export function checkEmail(email) {
  const error = []

  if (email.lenght === 0) error.push("Required")
  if (!email.endsWith("@gmail.com")) error.push("Must end with @gmail.com")
  return error
}

export function checkPassword(password) {
  const error = []

  if (password.length < 10) error.push("Must at lest 10 characters")

  if (!password.match(/[a-z]/))
    error.push("Must include at least 1 lower case letter ")
  if (!password.match(/[A-Z]/))
    error.push("Must include at least 1 Upper case letter ")
  if (!password.match(/[0-9]/)) error.push("Must include at least 1 Number ")

  return error
}
