import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
				</nav>
			</div>
		</header>
	);
};

export default Header;
