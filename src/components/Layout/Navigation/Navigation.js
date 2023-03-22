import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classes from "./Navigation.module.scss";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import LogoutButton from "@/components/UI/LogOut";

import { useSelector } from "react-redux";
function Navigation() {
	const userState = useSelector((state) => state.userLoggedIn);
	const auth = getAuth();

	const navLinks = [
		{ link: "Sign Up", href: "/auth?mode=Login", id: "Login", show: false },
		{
			link: "About Me",
			href: "/about",
			id: "aboutMe",
		},
		{ link: "New Post", href: "/new-post", id: "newpost", show: true },
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
						{/* {navLinks.map((navLink) => {


							return (
							<li key={navLink.href} className={classes.navigation__li}>
									<Link href={navLink.href} onClick={toggleNav}>
										{navLink.link}
									</Link>
								</li>
							);
						})} */}
						
						<li className={classes.navigation__li}>
							<Link href='/about' onClick={toggleNav}>
								About page
							</Link>
						</li>
						{!userState &&<li className={classes.navigation__li}>
							<Link href='/auth?mode=Login' onClick={toggleNav}>
								Sign Up
							</Link>
						</li>}
						{userState && <LogoutButton />}
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
					{/* {navLinks.map((navLink) => {
						return (
							<li
								key={navLink.href}
								className={classes.navigation__desktop__li}>
								<Link
									className={classes.navigation__desktop__link}
									href={navLink.href}
									onClick={toggleNav}>
									{navLink.link}
								</Link>
							</li>
						);
					})} */}
					{/* <li className={classes.navigation__desktop__li}>
						<Link href='/about'>About page</Link>
					</li>
					<li className={classes.navigation__desktop__li}>
						<Link href='/signIn' onClick={toggleNav}>
							SignIN
						</Link>
					</li> */}
					
					<li className={classes.navigation__desktop__li}>
						<Link
							href='/about'
							onClick={toggleNav}
							className={classes.navigation__desktop__link}>
							About page
						</Link>
					</li>
					{!userState && <li className={classes.navigation__desktop__li}>
						<Link
							href='/auth?mode=Login'
							onClick={toggleNav}
							className={classes.navigation__desktop__link}>
							Sign Up
						</Link>
					</li>}
					{userState && <LogoutButton />}
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
