import React from 'react';
import {Wrapper,Planet, Details, Stats, Buttons} from "./styles/Body.styled.js"
import logo from '../images/planet-mercury.svg'
function Body(){
    return (
    <Wrapper>
        <Planet className="left-content"><img src={logo} className="App-logo" alt="logo" /></Planet>
        <Details> 
            <div classname="right-1st-content">
                <h1>Mercury</h1> 
                 <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. 
                   Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
                   Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                </div>
                <div classname="right-2nd-content"></div>
            <Buttons><button>01 Overview</button> <button>02 Internal</button> <button>Structure 03</button> </Buttons>
        </Details>
        <Stats><div>Surface Geology Rotation Time 58.6 Days Revolution Time 87.97 Days Radius 2,439.7 KM Average Temp. 430°c</div>
        </Stats>
    </Wrapper>
    );
}

export default Body;