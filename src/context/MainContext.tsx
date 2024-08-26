import { createContext, FC, useContext, useEffect, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { StorageProviderFactory } from "@services/StorageProvider/StorageProviderFactory";
import {
	EStorageProviderType,
	IStorageProviderConfig,
} from "@services/StorageProvider/StorageProviderInterfaces";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { useStorage } from "@hooks/useStorage";
import { activeStorageProviders } from "@config/storageConfig";

const MainContext = createContext<IMainContext>({
	repo: null,
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
	updateRepo: () => {},
});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [repo, setRepo] = useState<IRepo | null>(null);
	const [mainBranchID, setMainBranchID] = useState<TBranchID | null>(null);

	const storageProvider = useStorage();

	const fetchRepo = async () => {
		//TODO: add error handling

		const rawRepo = await storageProvider.getRepo(DEFAULT_REPO_ID);

		if (rawRepo) {
			const repo = RepoBuilder.getFromRawObject({
				rawObject: rawRepo,
			});
			setRepo(repo);
			setMainBranchID(repo.mainBranchID ?? null);
		}
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		repo,
		currentBranchID: mainBranchID,
		updateRepo: (repo: IRepo) => {
			setRepo(repo);
			useStorage().saveRepo(repo);
		},
	};

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
