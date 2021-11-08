import './Header.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Divider from '@mui/material/Divider';
import ReorderIcon from '@mui/icons-material/ReorderRounded';
import * as CaseInfo from './../../global';



export default function Header() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            <Helmet>
                <title>{CaseInfo.CaseName}</title>
            </Helmet>
            <div className="Navbar">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Divider/>
                    <a href="/">Home</a>
                    <Divider/>
                    <a href="/Forms">Claim Form</a>
                    <Divider/>
                    <a href="/Contact">Contact</a>
                    <Divider/>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon />
                </button>
            </div>
        </>
    )
}
