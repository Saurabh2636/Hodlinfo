import React, { useState, useEffect } from "react";
import "./Style.css";
import Grid from "@material-ui/core/Grid";
import Logo from "./image/logo.png";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
const Header = (props) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="header">
      <Grid container justifyContent="center">
        <Grid item sm={4}>
          <div className="logo">
            <img src={Logo} alt="logo.." height={45} />
          </div>
        </Grid>
        <Grid item sm={4}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            style={{ marginTop: "auto" }}
          >
            <Grid item>
              <Button variant="outlined" color="primary" className="btn">
                Primary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" className="btn">
                Secondary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" className="btn">
                Primary
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4}>
          <div className="corner">
            <Grid container justifyContent="center" spacing={2} >
              <Grid item>
                <CircularProgress variant="determinate" value={progress} />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="green"
                >
                  Connect telegram
                </Button>
              </Grid>
              <Grid item>
                <label className="switch">
                  <input type="checkbox"  onChange={(pre)=>props.setcheck(!pre)}/>
                  <span className="slider round"></span>
                </label>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
