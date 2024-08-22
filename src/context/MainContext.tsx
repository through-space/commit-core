import { createContext, FC, useContext, useEffect, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { StorageProviderFactory } from "@services/StorageProvider/StorageProviderFactory";
import { activeStorageProviders } from "@config/storageConfig";
import { IStorageProviderConfig } from "@services/StorageProvider/StorageProviderInterfaces";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { repoExampleObj } from "@data/repoExampleObj";

const MainContext = createContext<IMainContext>({
	repo: null,
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [repo, setRepo] = useState<IRepo | null>(null);
	const [mainBranchID, setMainBranchID] = useState<TBranchID | null>(null);

	const fetchRepo = async () => {
		//TODO: add error handling
		const storageConfig: IStorageProviderConfig = {
			type: activeStorageProviders[0],
		};
		const storageProvider =
			StorageProviderFactory.getStorageProvider(storageConfig);

		const repo = await storageProvider.getRepo(DEFAULT_REPO_ID);

		if (repo) {
			const loadedRepo = RepoBuilder.getFromRawObject({
				rawObject: repo,
			});
			setRepo(loadedRepo);
			setMainBranchID(loadedRepo.mainBranchID ?? null);
		}
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		repo,
		currentBranchID: mainBranchID,
	};

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
