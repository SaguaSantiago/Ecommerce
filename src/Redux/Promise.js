export const MyPromise = new Promise((resolve, reject) => {
  const response = {
    data: [
      {
        id: 1,
        name: "santiago",
        lastName: "Sagua",
        userName: "sagua1",
        password: "santy123",
      },
      {
        id: 2,
        name: "aaron",
        lastName: "piniero",
        userName: "aaron1",
        password: "aaron123",
      },
    ],
  }

  resolve(response)

  reject("Sucedio un Error")
})
