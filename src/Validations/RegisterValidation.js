import * as yup from "yup"

export const RegisterValidation = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
  Name: yup
    .string()
    .required("Este campo es obligatorio")
    .matches(/^[aA-zZ\s]+$/, "Debe contener solo letras"),
  LastName: yup
    .string()
    .required("Este campo es obligatorio")
    .matches(/^[aA-zZ\s]+$/, "Debe contener solo letras"),
  UserName: yup
    .string()
    .required("Este campo es obligatorio")
    .min(6, "Debe contener al menos 6 caracteres")
    .max(20, "Debe contener un maximo de 15 letras"),
  Email: yup.string().email().required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Debe contener al menos 8 caracteres, una mayúscula, una minúscula,un numero y un caracter especial"
  // ),
})
