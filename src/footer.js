import React from "react";

const Footer = () => {
    const year = new Date();
    return (
      <small> <footer style={{ padding: "0px",textAlign :"center",backgroundColor :"bisque"}}><br></br>Yamini's TO-DO-LIST<br></br> Copyright &copy; {year.getFullYear()} </footer></small> 
    )
}

export default Footer;