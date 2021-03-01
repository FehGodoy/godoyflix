import React from 'react';
import './Header.css';


export default ({black}) =>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://godoydev.com.br/wp-content/uploads/2021/02/logo.png" alt="Logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRNiJttbCo6qoa2wM8zl6mOrssv53Mkjmmtkf3Djf5isy5ekz9KBEb-Qha3JsdhoycwyuKTewXHE_UgjtEe-sINdDYs1.png?r=191" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}