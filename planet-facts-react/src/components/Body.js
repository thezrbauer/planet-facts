import React from 'react';
import {} from "./styles/Body.styled.js"
import logo from '../images/planet-mercury.svg'
function Body(){
    return (
    <div>
        <div className="left">
            <div className="left-content"><img src={logo} className="App-logo" alt="logo" /><img 
           />
             </div>
        </div>
        <div className="right"> 
            <div classname="right-1st-content">Mercury Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth. </div>
            <div classname="right-2nd-content">Source : Wikipedia Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density. Source : Wikipedia Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s. Source : Wikipedia 01 Overview 02 Internal Structure 03 Surface Geology Rotation Time 58.6 Days Revolution Time 87.97 Days Radius 2,439.7 KM Average Temp. 430°c</div>
        </div>
    </div>
    );
}

export default Body;