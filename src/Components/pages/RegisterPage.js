import { Grid } from "@mui/material"
import { Formik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { generateToken } from "../../Modules/Functions"
import { registerTextfields } from "../../objects"
import { signUp } from "../../Redux/Actions/AuthActions"
import { RegisterValidation } from "../../Validations/RegisterValidation"
import CustomForm from "../CustomComponents/CustomForm"
import CustomTextfield from "../CustomComponents/CustomTextfield"

export default function RegisterPage() {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        UserName: "",
        Email: "",
        password: "",
        confirmPassword: "",
        Name: "",
        LastName: "",
      }}
      onSubmit={(valores) => {
        delete valores.confirmPassword
        const userData = { ...valores, authToken: generateToken() }
        dispatch(signUp(userData))

        console.log(userData)
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
