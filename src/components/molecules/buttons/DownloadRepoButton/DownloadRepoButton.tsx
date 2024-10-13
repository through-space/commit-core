import { FC } from "react";
import { SimpleButton } from "@components/atoms/buttons/SimpleButton/SimpleButton";
import { useStorage } from "@hooks/useStorage";
import { useMainContext } from "@context/MainContext/MainContext";
import { saveFile } from "@components/molecules/buttons/DownloadRepoButton/DownloadRepoButtonConsts";

export const DownloadRepoButton: FC = () => {
	const storageProvider = useStorage();
	const { currentRepoID } = useMainContext();

	const onClick = async () => {
		if (!currentRepoID) {
			return;
		}

		const repoJson = storageProvider.getRepo(currentRepoID).then((repo) => {
			const blob = new Blob([JSON.stringify(repo)], {
				type: "application/json",
			});

			saveFile({ blob, filename: `${repo.id}.json` });
		});

		if (!repoJson) {
			return;
		}
	};
	return <SimpleButton onClick={onClick}>DownloadRepo</SimpleButton>;
};
