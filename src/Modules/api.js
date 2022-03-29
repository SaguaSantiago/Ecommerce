const tokenSimulation = "3215456442132"

const promesa = new Promise((resolve, reject) => {
  const data = {
    token: tokenSimulation,
    user: {
      userName: "santi123",
      Name: "santiago",
    },
  }
  resolve(data)
  reject("ocurrio un error")
})

export const login = () => {
  const data = promesa
  return data
}
export const logout = () => localStorage.removeItem("token")
