import React from "react";

import styles from "./page.module.css";
import BlogList from "@/components/BlogList/BlogList";
import Featured from "@/components/Featured/Featured";
import Categories from "@/components/Categories/Categories";

const HomePage = () => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.content}`}>
				<h2>
					Welcome to Paper <span>Your Stories, Your Way</span>
				</h2>
				<Featured />
				<Categories />
				<h3>
					Recent Stories
				</h3>
				<BlogList />
			</div>
		</section>
	);
};

export default HomePage;
