import React from 'react';
import {Navbar, Icon} from "./styles/Header.styled.js"
function Header(){
    return (
    <div>
       <div><Icon>The Planets</Icon></div>

        <ul >
       
            <Navbar><a>Neptune</a>
            </Navbar>
            <Navbar><a>Uranus</a>
            </Navbar>
            <Navbar><a>Saturn</a>
            </Navbar>
            <Navbar><a>Jupiter</a>
            </Navbar>
            <Navbar><a>Mars</a>
            </Navbar>
            <Navbar><a>Earth</a>
            </Navbar>
            <Navbar><a>Venus</a>
            </Navbar>
            <Navbar><a>Mercury</a>
            </Navbar>
        </ul>
    </div>
    );
}

export default Header;