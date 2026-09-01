import fs from "fs";
import path from "path";

export async function GET() {
	const filePath = path.join(process.cwd(), "/public", "jz-cv-2026.pdf"); // file name and location
	const data = fs.readFileSync(filePath);

	return new Response(new Uint8Array(data), {
		headers: {
			"Content-Type": "application/pdf", // hardcoded mime type, you can change it if you want
		},
	});
}
