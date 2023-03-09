import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Navigation.module.scss";

import { useState } from "react";
function Navigation() {
	const navLinks = [
		{ link: "Sign In", href: "/", id: 'signIn' },
		{
			link: "About Me",
			href: "/about",
			id: 'aboutMe',
		},
	];

	const [active, setActive] = useState(false);

	const toggleNav = () => {
		setActive(!active);
	};

	const cssClasses = active
		? `${classes.mobileNav} ${classes.active}`
		: classes.mobileNav;
	return (
		<>
			<nav className={classes.navigation}>
				<Link href='/' className={classes.navigation__title}>
					<div className={classes.logo}>
						<h1>CodeCrush</h1>
					</div>
				</Link>
				<FontAwesomeIcon
					icon={faBars}
					className={classes.hamburger}
					onClick={toggleNav}
				/>

				<div className={cssClasses}>
					<FontAwesomeIcon
						icon={faX}
						className={classes.navExit}
						onClick={toggleNav}
					/>
					<ul className={`${classes.navigation__ul} `}>
						{navLinks.map((navLink) => {
							return (
								<li key={navLink.href} className={classes.navigation__li}>
									<Link href={navLink.href} onClick={toggleNav}>
										{navLink.link}
									</Link>
								</li>
							);
						})}
						{/* <li className={classes.navigation__li}>
							<Link href='/' onClick={toggleNav}>
								Home
							</Link>
						</li>
						<li className={classes.navigation__li}>
							<Link href='/about' onClick={toggleNav}>
								About page
							</Link>
						</li>
						<li className={classes.navigation__li}>
							<Link href='/signIn' onClick={toggleNav}>
								SignIN
							</Link>
						</li> */}
					</ul>
				</div>

				{/* <ul className={classes.navigation__ul}>
					<li className={classes.navigation__li}>
						<Link href='/about'>About page</Link>
					</li>
				</ul> */}
			</nav>
			<nav className={classes.navigation__desktop}>
				<Link href='/' className={classes.navigation__title}>
					<div className={classes.logo}>
						<h1>CodeCrush</h1>
					</div>
				</Link>
				<ul className={classes.navigation__desktop__ul}>
					{navLinks.map((navLink) => {
						return (
							<li key={navLink.href} className={classes.navigation__desktop__li}>
								<Link
									className={classes.navigation__desktop__link}
									href={navLink.href}
									onClick={toggleNav}>
									{navLink.link}
								</Link>
							</li>
						);
					})}
					{/* <li className={classes.navigation__desktop__li}>
						<Link href='/about'>About page</Link>
					</li>
					<li className={classes.navigation__desktop__li}>
						<Link href='/signIn' onClick={toggleNav}>
							SignIN
						</Link>
					</li> */}
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
