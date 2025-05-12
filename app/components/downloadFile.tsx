"use client";

import { useRef } from "react";

export function DownloadFile() {
	const linkRef = useRef(null);
	const handleDownload = async () => {
		const response = await fetch("http://localhost:3000/api/download");
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = linkRef.current as HTMLAnchorElement | null;

		if (!link) {
			return;
		}

		link.href = url;
		link.download = "jz-resume.pdf"; // Any name you want to download the file as
		link.click();
		window.URL.revokeObjectURL(url);
	};

	return (
		<>
			<a ref={linkRef} style={{ display: "none" }}></a>
			<button className="cursor-pointer" type="button" onClick={handleDownload}>
				resume
			</button>
		</>
	);
}
