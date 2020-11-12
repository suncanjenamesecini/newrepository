import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav className="zone blue sticky">
			<ul className="main-nav">
            	<li><a href="https://suncanjenamesecini.github.io/mojastranica/">Почетна</a></li>
            	<li><a href="https://suncanjenamesecini.github.io/moja_stranica/projekti/projekti.html">Пројекти</a></li>
				<li><a href="https://suncanjenamesecini.github.io/moja_stranica/crtezi/crtezi.html">Цртежи</a></li>
				<li><a href="https://suncanjenamesecini.github.io/moja_stranica/slike/slike.html">Слике</a></li>
				<li><a href="https://suncanjenamesecini.github.io/moja_stranica/murali/murali.html">Мурали</a></li>
            	<li><a href="https://suncanjenamesecini.github.io/moja_stranica/vez/vez.html">Вез</a></li>
				<li className="push"><a href="https://suncanjenamesecini.github.io/moja_stranica/o_meni/O_meni.html">О мени</a></li>
			</ul>
		</nav>
	);
}

export default Navigation;