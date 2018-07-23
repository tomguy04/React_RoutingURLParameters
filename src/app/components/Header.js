import React from 'react';
import {Link} from 'react-router-dom';

// export class Header extends React.Component {
// make it stateless!
export const Header = (props) => {
    // render(){
        return(
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to={"/home"}>Home&nbsp;</Link></li>
                            <li className="nav-item"><Link to={"/user/10"}>User</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
// }