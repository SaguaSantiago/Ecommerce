import React from "react"

import { Button, Grid, Paper, Typography } from "@mui/material"
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
          <Grid alignItems="center" container>
            <Grid item xs={12} sx={{ marginBottom: "40px" }}>
              <Typography color="secondary" variant="h4" align="center">
                Iniciar Sesión
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Form autoComplete="off">
                <Grid
                  justifyContent="center"
                  spacing={3}
                  alignItems="center"
                  container
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
                  <Grid item xs={12} sm={7.2}>
                    <Button
                      size="large"
                      fullWidth
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Iniciar Sesión
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Formik>
  )
}
