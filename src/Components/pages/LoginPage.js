import { Button, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Form, Formik } from "formik"
import React from "react"
import CustomTextfield from "../CustomComponents/CustomTextfield"
import * as yup from "yup"

const useStyles = makeStyles({
  paper: {
    maxWidth: "50%",
  },
})

export default function LoginPage() {
  const classes = useStyles()
  const textfieldsObject = [
    {
      name: "usuary",
      label: "Nombre de Usuario",
      key: 1,
      type: "text",
    },
    {
      name: "password",
      label: "Contraseña",
      key: 2,
      type: "password",
    },
  ]
  return (
    <Formik
      initialValues={{
        usuary: "",
        password: "",
      }}
      onSubmit={(valores) => {
        console.log(valores)
      }}
      validationSchema={yup.object({
        usuary: yup
          .string()
          .required("Este campo es obligatorio")
          .min(6, "Debe contener al menos 6 caracteres")
          .max(15, "Debe contener mas de 15 caracteres"),
        password: yup.string().required("Este campo es obligatorio"),
      })}
    >
      {() => (
        <Paper classname={classes.paper}>
          <Form autoComplete="off">
            <div>
              {textfieldsObject.map(({ name, label, key, type }) => (
                <CustomTextfield
                  key={key}
                  color="secondary"
                  name={name}
                  variant="standard"
                  label={label}
                  type={type}
                  variant="filled"
                />
              ))}
            </div>
            <div>
              <Button color="secondary" variant="contained" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Paper>
      )}
    </Formik>
  )
}
