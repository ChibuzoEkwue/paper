import React from "react";
import styles from "./Categories.module.css";

const cat = [
	{
		cat: "Travel",
		bg: "#FF8080",
		color: "#fff",
	},
	{
		cat: "Finance",
		bg: "#186F65",
		color: "#fff",
	},
	{
		cat: "Technology",
		bg: "black",
		color: "white",
	},
	{
		cat: "E-commerce",
		bg: "#79AC78",
	},
	{
		cat: "Leadership",
		bg: "Purple",
		color: "white",
	},
	{
		cat: "Self",
		bg: "#F5FCCD",
	},
	{
		cat: "Productivity",
		bg: "#6499E9",
		color: "black",
	},
	{
		cat: "Mindfulness",
		bg: "#98FB98",
		color: "black",
	},
];

const Categories = () => {
	return (
		<section className={styles.cat}>
			<div className="container">
				<h3>Popular Topics</h3>
				<div className={styles.catlist}>
					{cat.map((c, index) => (
						<span
							style={{
								backgroundColor: c.bg || "rgba(128, 128, 128, 0.555)",
								color: c.color || "black",
							}}
							key={index}
						>
							{c.cat}
						</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
