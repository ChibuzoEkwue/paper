import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (src) => {
	try {
		const res = await fetch(src);

		if (!res.ok) {
			throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
		}

		const buffer = await res.arrayBuffer();

		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		return base64;
	} catch (err) {
		if (err instanceof Error) console.log(e.stack);
	}
};
