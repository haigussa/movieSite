import React from 'react'
import logo from '../images/newReactMovie_logo.png';
import omdbLogo from '../images/tmdb_logo.svg'
const style = {
    color: "whitesmoke",
    display: "flex",
    justifyContent: "1rem",
    justifySelf: "center",
    width: "100%",
    margin: "0 auto 2rem",
    // borderRadius: "10px"
}
const headerText = {
    padding: "1rem",
    alignSelf: "center"
}
const headerSpan = {
    display: "block",
    color: "#334"
}
const header = {
    display: "flex",
    height: "6rem",
    color: "white",
    backgroundColor: "teal",
    position: "relative"

}
const imgStyle = {
    height: "3rem",
    position: "absolute",
    bottom: "0",
    right: "0"
}
const Header = () => {
    return (
        <div style={header}>
            <div style={style}>
                <img style={headerText} src={logo} alt="" />
                <h3 style={headerText}>Fiilmii <span style={headerSpan}><em>Afaan Oromootiin</em></span></h3>
            </div>
            <img style={imgStyle} src={omdbLogo} alt="OMDB Logo" />

        </div>
    )
}

export default Header
