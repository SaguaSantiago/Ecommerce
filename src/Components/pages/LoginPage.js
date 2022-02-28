import React from "react"

import { Grid, Typography } from "@mui/material"

import { Formik } from "formik"
import { textfieldsLoginObject } from "../../objects"
import { LoginValidation } from "../../Validations/LoginValidation"
import { useDispatch } from "react-redux"
import { Login } from "../../Redux/Actions/AuthActions"
import { MyPromise } from "./../../Redux/Promise"
import { GetUsuaries } from "./../../Redux/Actions/UsuariesActions"
import CustomForm from "../CustomComponents/CustomForm"
import CustomTextfield from "../CustomComponents/CustomTextfield"

export default function LoginPage() {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        usuary: "",
        password: "",
      }}
      onSubmit={(valores) => {
        dispatch(Login())
        console.log(valores)
      }}
      validationSchema={LoginValidation}
    >
      {() => (
        <>
          <CustomForm typography="Iniciar Sesión" button="Iniciar Sesión" caption="¿Aun no tienes cuenta?">
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
