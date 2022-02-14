import React from "react"

import { Button, Paper, Typography } from "@mui/material"
import CustomTextfield from "../CustomComponents/CustomTextfield"

import { Form, Formik } from "formik"
import { Styles } from "../../Styles"
import { textfieldsLoginObject } from "../../objects"
import { LoginValidation } from "../../Validations/LoginValidation"

const useStyles = Styles.loginStyles

export default function LoginPage() {
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        usuary: "",
        password: "",
      }}
      onSubmit={(valores) => {
        console.log(valores)
      }}
      validationSchema={LoginValidation}
    >
      {() => (
        <Paper className={classes.paper}>
          <div className={classes.Typography}>
            <Typography color="secondary" variant="h4" align="center">
              Iniciar Sesión
            </Typography>
          </div>
          <Form autoComplete="off">
            <div>
              {textfieldsLoginObject.map(({ name, label, key, type }) => (
                <div className={classes.textfield}>
                  <CustomTextfield
                    key={key}
                    color="secondary"
                    name={name}
                    variant="standard"
                    label={label}
                    type={type}
                    variant="filled"
                    className={classes.textfield}
                    fullWidth
                  />
                </div>
              ))}
            </div>
            <div className={classes.button}>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                type="submit"
              >
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </Paper>
      )}
    </Formik>
  )
}
