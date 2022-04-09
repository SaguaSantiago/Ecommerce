// login

export const datesValidation = (dates, params) => {
  const { password } = params
  const paramsUserName = params.userName
  // console.log(userName)

  const passwordValue = dates.find((date) => date.password === password)
  const userNameValue = dates.find((date) => date.UserName === paramsUserName)
  console.log("1", userNameValue, "2", passwordValue)

  if (
    userNameValue !== undefined &&
    passwordValue !== undefined &&
    userNameValue === passwordValue
  ) {
    return { validate: true, userData: passwordValue }
  } else {
    return {
      validate: false,
      error: "el nombre de usuario o contraseña es incorrecto",
    }
  }
}

export const setItemStorage = (itemValue) => {
  localStorage.setItem("User", itemValue)
}

function random() {
  return Math.random().toString(36).substr(2) // Eliminar `0.`
}
export const generateToken = () => {
  return random() + random() + random()
}
