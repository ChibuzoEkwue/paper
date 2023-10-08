import Image from "next/image";
import styles from "./Card.module.css";
import { getBase64 } from "@/utils/getBase64";

const Card = async () => {
	const profileBlur = await getBase64(
		"https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
	);
	const featuredImageBlur = await getBase64(
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
	);
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
					alt=""
					fill
					style={{ objectFit: "cover" }}
					placeholder="blur"
					blurDataURL={profileBlur}

				/>
			</div>
			<div className={styles.author}>
				<Image
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
					alt=""
					height={30}
					width={30}
					
					placeholder="blur"
					blurDataURL={featuredImageBlur}
				/>
				<span>Chibuzo Ekwue</span>
			</div>
			<h2 className={styles.heading}>
				Welcome to paper Your Stories, Your Way
			</h2>
			<p className={styles.desc}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nesciunt
				sunt repellendus consectetur hic illum. Hic ab eveniet alias ad vitae
				est? Optio voluptatum ipsa iusto omnis repudiandae deserunt modi.
			</p>
			<div className={styles.tags}>
				<span>Welcome</span>
			</div>
		</div>
	);
};

export default Card;
