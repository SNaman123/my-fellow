import { Grid } from "@material-ui/core"
import React from "react"
import { HomeRightBar } from "../../pages/Home/HomeRightBar"
import { HomeSideBar } from "../../pages/Home/HomeSideBar"
import { InputBox } from "../../pages/Home/InputBox"
import Header from "../Header/Header"
import "./Home.css"

export const Home = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="home">
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item md={3}>
            <HomeSideBar />
          </Grid>
          <Grid item md={5}>
            <div id="home-center-wrapper">
              <InputBox />
              {children}
            </div>
          </Grid>
          <Grid item md={3}>
            <HomeRightBar />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
