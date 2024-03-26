function NavBar() {
    return (
        <>
            <nav>
                <div id="home">
                    <div className="profile_name">
                        Islam Galal
                        <div className="contact_info">
                            <img src="html_finalprojimages/envelope.png"
                                 alt="https://icons8.com/icon/124377/circled-envelope"/>
                            Islam.m.galal@gmail.com
                        </div>
                        <div style="clear:both;"></div>
                        <div className="contact_info">
                            <img src="html_finalprojimages/phone.png"
                                 alt="https://icons8.com/icon/124377/circled-envelope"/>
                            +201118246626

                        </div>
                    </div>
                    <div className="topdiv">
                        <a className="topmenu" href="#about-me">About Me</a>
                        <div className="topdiv">
                            <a className="topmenu" href="#skills">Skills</a>
                            <div className="topdiv">
                                <a className="topmenu" href="#projects">Projects</a>
                                <div className="topdiv">
                                    <a className="topmenu" href="#recommendation">Recommendations</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
)
}

export default NavBar;


