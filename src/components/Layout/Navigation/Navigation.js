import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Navigation.module.scss";

import { useState } from "react";
function Navigation() {
	const [active, setActive] = useState(false);

	const toggleNav = () => {
		setActive(!active);
	};
	return (
		<>
			<nav className={classes.navigation}>
				<Link href='/' className={classes.navigation__title}>
					BulletPoint
				</Link>
				<FontAwesomeIcon
					icon={faBars}
					className={classes.hamburger}
					onClick={toggleNav}
				/>
				{active && (
					<div className={active ? `${classes.mobileNav} ${classes.active}`: classes.mobileNav}>
						<FontAwesomeIcon icon={faX} className={classes.hamburger} onClick={toggleNav}/>
						<ul className={`${classes.navigation__ul} `}>
							<li className={classes.navigation__li}>
								<Link href='/' onClick={toggleNav}>Home</Link>
							</li>
							<li className={classes.navigation__li}>
								<Link href='/about' onClick={toggleNav}>About page</Link>
							</li>
						</ul>
					</div>
				)}
				{/* <ul className={classes.navigation__ul}>
					<li className={classes.navigation__li}>
						<Link href='/about'>About page</Link>
					</li>
				</ul> */}
			</nav>
			<nav className={classes.navigation__desktop}>
				<Link href='/' className={classes.navigation__title}>
					BulletPoint
				</Link>
				<ul className={classes.navigation__desktop__ul}>
					<li className={classes.navigation__desktop__li}>
						<Link href='/about'>About page</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
