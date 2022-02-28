import React from "react"
import { Button, Grid, Paper, Typography } from "@mui/material"
import { Form } from "formik"
import { Link } from "react-router-dom"

export default function CustomForm({ children, typography, button, caption }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={7.6} md={6.5}>
        <Paper sx={{ height: "88vh", padding: "40px" }}>
          <Grid alignItems="center" container>
            <Grid item xs={12} sx={{ marginBottom: "40px" }}>
              <Typography color="secondary" variant="h4" align="center">
                {typography}
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
                  {children}
                  <Grid item xs={12} sm={7.2}>
                    <Button
                      size="large"
                      fullWidth
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      {button}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Grid>
            <Link
              style={{
                marginTop: "20px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              to="register"
            >
              <Typography textAlign="center" variant="caption">
                {caption ? caption : null}
              </Typography>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
