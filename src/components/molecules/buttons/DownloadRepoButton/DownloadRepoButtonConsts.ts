import { ISaveFileProps } from "@components/molecules/buttons/DownloadRepoButton/DownloadRepoButtonInterfaces";

export const saveFile = async (props: ISaveFileProps) => {
	const { blob, filename = "my-file.txt" } = props;
	const a = document.createElement("a");
	a.download = filename;
	a.href = URL.createObjectURL(blob);
	a.addEventListener("click", (e) => {
		setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
	});
	a.click();
};
