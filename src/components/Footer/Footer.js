import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 my-20 bg-[#59C49D] text-base-content">
                <div>
                    <span className="footer-title text-white">Services</span>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-white">Legal</span>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-white">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn  bg-[#FEE5D7] border-0 text-black absolute top-0 right-0 rounded-l-none hover:text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;