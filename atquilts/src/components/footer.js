import React from "react";

const Footer = () => {
    return (
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
            <small className="f6 db tc">© {new Date().getFullYear()} <b className="ttu">Athena Lynn Quilts</b>, All Rights Reserved</small>
            <small className="f6 db tc">© {new Date().getFullYear()} <b className="ttu black">created by:
                <a href='https://www.slushtec.com' target="_blank" rel="noreferrer">slushtec.com</a></b></small>

        </footer>
    )
}

export default Footer