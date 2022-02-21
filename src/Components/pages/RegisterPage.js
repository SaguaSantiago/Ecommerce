import { Paper } from "@mui/material"
import { Formik } from "formik"
import React from "react"
import { Styles } from "../../Styles"
import CustomTextfield from "../CustomComponents/CustomTextfield"

const useStyles = Styles.loginStyles

export default function RegisterPage() {
  const classes = useStyles()
  const registerTextfields = [
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
    <Formik>
      {() => (
        <Paper className={classes.paper}>
          <form>
            {registerTextfields.map(({ name, label, type }) => (
              <div key={name}>
                <CustomTextfield
                  fullwidth="true"
                  variant="filled"
                  color="secondary"
                  name={name}
                  label={label}
                  type={type}
                />
              </div>
            ))}
          </form>
        </Paper>
      )}
    </Formik>
  )
}
