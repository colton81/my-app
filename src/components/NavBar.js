import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './NavBar.css'




class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){


        return(
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            {/* top bar left */}
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--default d-inline-block">GET A QUOTE</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/home`}> HOME </Link>
                                                <ul className="submenu">
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home`}>Homepage</Link></li>
                                                    
                                                </ul>
                                            </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/home`}>ABOUT</Link></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/home`}>SERVICE</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/home`}>Service</Link></li>
                                                
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/home`} >PROJECT</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/home`} >Project</Link></li>
                                                
                                                </ul>
                                            </li>
                                            
                                            <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
                
                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;