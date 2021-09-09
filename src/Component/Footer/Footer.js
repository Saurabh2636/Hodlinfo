import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import image from "./image/intern2.png";
import Button from "@material-ui/core/Button";
import Appbar from "@material-ui/core/Appbar";
import Grid from "@material-ui/core/Grid";
const Footer = () => {
  return (
    <div>
      <div className="img">
        <img src={image} alt="image is" width={"100%"} />
      </div>
      <hr />
      <p style={{marginBottom:'50px'}}>
        Copyright © 2019 &nbsp; &nbsp; &nbsp;HodlInfo.com &nbsp; &nbsp;
        &nbsp;Developed By QuadBTech
      </p>
     <div className="footer">
        <Button variant="outlined" color="secondary" style={{ margin: "auto" }}>
          Add hodlinfo to home screen
        </Button>
      </div>  
     
    </div>
  );
};

export default Footer;
