import fs from "fs";
import path from "path";

export async function GET(request: Request) {
	const filePath = path.join(process.cwd(), "/public", "jz-resume.pdf"); // file name and location
	const data = await fs.readFileSync(filePath);

	return new Response(data, {
		headers: {
			"Content-Type": "application/pdf", // hardcoded mime type, you can change it if you want
		},
	});
}
