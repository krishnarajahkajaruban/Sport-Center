
function Header() {
    return (
        <>
            <header className='header-section'>
                <div className="header-top-area">
                    <div className="container">
                        <img src="./logo-icon.png" className='header-logo' alt="" />
                        <h2 className='head-title'>Sabaragamuwa University of Sri Lanka - Sport Center</h2>
                    </div>
                </div>

                <nav>
                    <div className="container">
                        <ul className='nav-link-area'>
                            <li className='nav-item'>
                                <a href="/" className={`${window.location.pathname === "/" && 'active'} nav-link`}>Sport Schedules</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/swimming" className={`${window.location.pathname === "/swimming" && 'active'} nav-link`}>Swimming</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
