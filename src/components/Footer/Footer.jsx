import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.content}`}>
				<p>&copy; Paper Your Stories, Your Way</p>
				<div className={styles.logo}>
					<Image
						src="/logo-instagram.png"
						alt="Instagram logo"
						width={25}
						height={25}
					/>
					<Image
						src="/logo-twitter.png"
						alt="Twitter logo"
						width={25}
						height={25}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
