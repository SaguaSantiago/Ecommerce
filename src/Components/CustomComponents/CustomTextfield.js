import { TextField, Typography } from "@mui/material"
import { useField } from "formik"
import React from "react"

export default function CustomTextfield({ ...props }) {
  const [field, meta] = useField(props)
  function Errors(props) {
    return (
      <div>
        <Typography variant="body2" color="error">
          {props.error}
        </Typography>
      </div>
    )
  }

  return (
    <div>
      <TextField {...field} {...props} error={meta.touched && meta.error} />
      <Errors error={meta.touched && meta.error} />
    </div>
  )
}
