"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const isAuthenticated = true;

	const [open, setOpen] = useState(false);
	return (
		<header className={styles.header}>
			<div className={`container ${styles.content}`}>
				<nav>
					<Link href={"/"} className={styles.logo}>
						Paper
					</Link>
					{/* <div className={styles.search}>
						<input type="text" placeholder="Search" />
						<button>
							<Image src="/search.png" alt="" width={20} height={20} />
						</button>
					</div> */}

					{isAuthenticated ? (
						<ul className={styles.links}>
							<li>
								<Link href={"/write"}>Write</Link>
							</li>
							<li className={styles.user}>
								<span>Hi, Chibuzo</span>
								<Image
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
									alt=""
									height={30}
									width={30}
									style={{ borderRadius: "50%" }}
								/>
							</li>
						</ul>
					) : (
						<ul className={styles.links}>
							<li>
								<Link href={"/login"}>Login</Link>
							</li>
							<li>
								<Link href={"/create-account"} className={styles.cta}>
									Sign up
								</Link>
							</li>
						</ul>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
