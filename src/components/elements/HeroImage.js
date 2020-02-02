import React from 'react'

const HeroImage = ({ image, title, overview }) => {
    // console.log(props.state.HeroImage)
    return (
        <div style={{ height: "90vh", position: "relative" }}>
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    background: "cover",
                    margin: "auto",
                    position: "absolute",
                    zIndex: "1"
                }}
                src={image}
                alt="Hero"
            />
            <div
                style={{
                    position: "absolute",
                    textAlign: "center",
                    width: "70%",
                    top: "90%",
                    transform: "translateY(-90%)",
                    left: "0",
                    right: "0",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    background: "rgba(0, 0, 0, 0.6)",
                    paddingBottom: "20px",
                    fontFamily: "Open Sans, sans-serif",
                    zIndex: "10",
                    borderRadius: "10px",
                    lineHeight: "1.5"


                    /* style={{
                    position: "absolute",
                    top: "70vh",
                    left: "0",
                    zIndex: "10",
                    padding: "0.8rem 1rem",
                    background: "linear-gradient(360deg, rgba(105,104,104,1) 36%, rgba(142,136,136,1) 52%, rgba(255,255,255,1) 94%)" */

                }}>

                <h1>{title}</h1>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default HeroImage
