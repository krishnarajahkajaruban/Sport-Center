import logo from './logo.png';

function Footer() {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 mx-auto">
                        <img src={logo} className='footer-logo' alt="Logo" />
                    </div>
                </div>
                <hr />
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                        <h6 className='footer-link-head'>QUICK LINKS</h6>
                        <ul className='footer-link-area'>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Undergraduate</a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Study</a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Postgraduate Study</a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>For Students</a>
                            </li>
                            <li className='footer-link-item mb-0'>
                                <a href="#" className='footer-link'>For Staff</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                        <h6 className='footer-link-head'>FACULTIES & DEPTS</h6>
                        <ul className='footer-link-area'>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Arts & Social Sciences</a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Health & Medicine</a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="#" className='footer-link'>Management School</a>
                            </li>
                            <li className='footer-link-item mb-0'>
                                <a href="#" className='footer-link'>Science & Technology</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                        <h6 className='footer-link-head'>CONNECT</h6>

                        <div className="footer-social-area">
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/facebook.png" alt="" />
                            </a>
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/instagram.png" alt="" />
                            </a>
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/linkedin.png" alt="" />
                            </a>
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/youtube.png" alt="" />
                            </a>
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/twitter.png" alt="" />
                            </a>
                            <a href="#" className='footer-social-link'>
                                <img src="../icons/tik-tok.png" alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-3 ">
                        <h6 className='footer-link-head'>CONTACT US</h6>

                        <p className='footer-para'></p>
                        <ul className='footer-link-area'>
                            <li className='footer-link-item'>
                                <a href="https://maps.app.goo.gl/rDQE4AFmsf6BopHx6" target='_blank' rel="noreferrer"
                                    className='footer-link no-transform'>
                                    Sabaragamuwa University of Sri Lanka,
                                    <br />
                                    Belihuloya 70140,
                                    <br />
                                    Sri Lanka
                                </a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="tel:0452280014" className='footer-link no-transform with-icon'>
                                    <div className="link-icon-area">
                                        <i class="bi bi-telephone-fill"></i>
                                    </div>
                                    0452 280 014
                                </a>
                            </li>
                            <li className='footer-link-item'>
                                <a href="mailto:info@sab.ac.lk" className='footer-link no-transform with-icon'>
                                    <div className="link-icon-area">
                                        <i class="bi bi-envelope-fill"></i>
                                    </div>
                                    info@sab.ac.lk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="sub-footer">
                <img src="./logo-icon.png" alt="Logo" />
                <p>Sabaragamuwa University of Sri Lanka</p>
            </div>
        </footer>
    );
}

export default Footer;