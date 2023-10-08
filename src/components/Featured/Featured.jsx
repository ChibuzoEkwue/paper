import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { getBase64 } from "@/utils/getBase64";

const Featured = async () => {
	const blurDataUrl = await getBase64(
		"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
	);
	return (
		<div className={styles.featured}>
			<div className={styles.image}>
				<Image
					src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
					alt=""
					fill
					placeholder="blur"
					blurDataURL={blurDataUrl}
					priority
				/>
			</div>
			<div className={styles.text}>
				<span>Travel </span>
				<h1>
					London&rsquo;s Art and Culture Scene: A Traveler&rsquo;s Delight 🎨🎭
				</h1>
				<p>
					Venturing into the heart of England&rsquo;s majestic capital city is
					like stepping into a living history book where centuries-old
					architecture harmoniously coexists with the pulse of a modern
					metropolis. Join me as I recount my unforgettable journey through the
					iconic streets of London, where every cobblestone, every double-decker
					bus, and every glimpse of the River Thames tells a story. From the
					grandeur of Buckingham Palace to the mystical aura of the Tower of
					London, I&rsquo;ll take you on a captivating tour of the city&rsquo;s
					most celebrated landmarks. But London isn&rsquo;t just about history;
					it&rsquo;s a vibrant tapestry of diverse neighborhoods, each offering
					its own unique charm and character. Get ready to explore the lively
					markets, cozy pubs, and the ever-evolving art and culinary scenes that
					make London a true traveler&rsquo;s delight. So, fasten your seatbelts
					as we embark on this London adventure, where culture, tradition, and
					modernity converge in a city that never ceases to amaze
				</p>

				<Link href="/blog/1">Read More</Link>
			</div>
		</div>
	);
};

export default Featured;
