import React from 'react';
import Header from './elements/Header';
import Home from './Home';

const appStyle = {
    margin: "0 auto",
    padding: "0",
    backgroundColor: "#333",
    color: "#eee", 
    height: "100vh",
    width: "100vw",
    borderSizing: "border-box",
    fontFamily: "Arial, sanserif"

}
const App = () => {
    return (
        <div className="App" style={appStyle}>
            <Header />
            <Home />
        </div>
    )
}

export default App;
