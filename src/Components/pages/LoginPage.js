import React from "react"

import { Grid } from "@mui/material"

import { Formik } from "formik"
import { textfieldsLoginObject } from "../../objects"
import { LoginValidation } from "../../Validations/LoginValidation"
import { useDispatch } from "react-redux"
import { Login } from "../../Redux/Actions/AuthActions"
import CustomForm from "../CustomComponents/CustomForm"
import CustomTextfield from "../CustomComponents/CustomTextfield"
import { useHistory } from "react-router-dom"

export default function LoginPage() {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (valores) => {
    dispatch(Login())
    setTimeout(() => {
      history.push("/")
      console.log(valores)
    }, 1000)
  }

  return (
    <Formik
      initialValues={{
        usuary: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginValidation}
    >
      {() => (
        <>
          <CustomForm
            typography="Iniciar Sesión"
            button="Iniciar Sesión"
            caption="¿Aun no tienes cuenta?"
          >
            {textfieldsLoginObject.map(({ name, label, key, type }) => (
              <Grid xs={12} sm={8.4} item key={key}>
                <CustomTextfield
                  color="secondary"
                  name={name}
                  label={label}
                  type={type}
                  variant="filled"
                  fullWidth
                />
              </Grid>
            ))}
          </CustomForm>
        </>
      )}
    </Formik>
  )
}
