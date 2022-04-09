import React from "react"

import { Grid } from "@mui/material"

import { Formik } from "formik"
import { textfieldsLoginObject } from "../../objects"
import { LoginValidation } from "../../Validations/LoginValidation"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../Redux/Actions/AuthActions"
import CustomForm from "../CustomComponents/CustomForm"
import CustomTextfield from "../CustomComponents/CustomTextfield"
import { useHistory } from "react-router-dom"

export default function LoginPage() {
  const dispatch = useDispatch()
  const { loading } = useSelector((auth) => auth)
  const history = useHistory()
  const handleSubmit = ({ userName, password }) => {
    const values = {
      userName: userName.toLowerCase(),
      password: password.toLowerCase(),
    }
    dispatch(login(values))
    setTimeout(() => {
      history.push("/")
    }, 1000)
  }

  return (
    <Formik
      initialValues={{
        userName: "",
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
