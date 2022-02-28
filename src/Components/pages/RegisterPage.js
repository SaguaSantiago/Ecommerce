import { Grid } from "@mui/material"
import { Formik } from "formik"
import React from "react"
import { RegisterValidation } from "../../Validations/RegisterValidation"
import CustomForm from "../CustomComponents/CustomForm"
import CustomTextfield from "../CustomComponents/CustomTextfield"

export default function RegisterPage() {
  const registerTextfields = [
    { name: "name", label: "Nombre", type: "text" },

    { name: "lastName", label: "Apellido", type: "text" },
    {
      name: "userName",
      label: "Nombre de Usuario",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirmar Contraseña",
      type: "password",
    },
  ]
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastName: "",
      }}
      onSubmit={(valores) => {
        console.log(valores)
      }}
      validationSchema={RegisterValidation}
    >
      {() => (
        <CustomForm typography="Registrarse" button="Registrarse">
          {registerTextfields.map(({ name, label, type }) => (
            <Grid
              xs={6}
              sm={6}
              sx={{
                marginBottom: "10px",
              }}
              item
              key={name}
            >
              <CustomTextfield
                fullWidth
                variant="filled"
                color="secondary"
                name={name}
                label={label}
                type={type}
              />
            </Grid>
          ))}
        </CustomForm>
      )}
    </Formik>
  )
}
