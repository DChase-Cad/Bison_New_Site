import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="site-footer sticky-bottom footer-styles w-100 m-0 p-0">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-4 d-none d-sm-block col-sm-2 offset-1">
                        <h5 className="text-center w-100">Links</h5>
                        <ul className="list-unstyled">
                            <li className="foot-link text-center"><Link className="fot-a" to='/hom'>Home</Link></li>
                            <li className="foot-link text-center"><Link className="fot-a" to='/aboutus'>About</Link></li>
                            <li className="foot-link text-center"><Link className="fot-a" to='/'>Other Sites</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-5 text-center">
                        <h5>Socials</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/lathechucks"><i className="fa fa-facebook"></i></a>
                        <a className='btn btn-social-icon btn-youtube' href='www.youtube.com'><i class="fa fa-youtube yt"></i></a>
                        
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Email us</h5>
                        <a role="button" className="email btn btn-link m-0" href="mailto:"><i className="fa fa-envelope fa-2x"></i></a>
                    </div>
                </div>
            </div   >
        </footer>
    );

}
