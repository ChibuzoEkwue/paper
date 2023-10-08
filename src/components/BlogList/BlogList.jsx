import React from "react";
import styles from "./BlogList.module.css";
import Card from "../Card/Card";

const BlogList = () => {
	return (
		<div className={styles.bloglist}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default BlogList;
