import { Box, Chip, Grid, Paper, TextField } from "@material-ui/core"
import React from "react"
import { Base } from "../../common/Base/Base"
import { HomeRightBar } from "./components/HomeRightBar"
import { HomeSideBar } from "./components/HomeSideBar"
import "./Home.css"

export const Home = () => {
  return (
    <Base>
      <div className="home">
        <Grid container justify="space-evenly" direction="row">
          <Grid item xs={3}>
            <HomeSideBar />
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <Box p={2}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="create-post-inputfield"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Create a post"
                />
                <Box my={1}>
                  <Grid>
                    <Grid item>
                      <Chip label="Poll" variant="outlined" />
                      <Chip label="Photo" variant="outlined" />
                      <Chip label="Video" variant="outlined" />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <HomeRightBar />
          </Grid>
        </Grid>
      </div>
    </Base>
  )
}
