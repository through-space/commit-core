import { createContext, FC, useContext, useEffect, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { StorageProviderFactory } from "@services/StorageProvider/StorageProviderFactory";
import { activeStorageProviders } from "@config/storageConfig";
import { IStorageProviderConfig } from "@services/StorageProvider/StorageProviderInterfaces";

const MainContext = createContext<IMainContext>({});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [repo, setRepo] = useState<IRepo | null>(null);

	const fetchRepo = async () => {
		//TODO: add error handling
		const storageConfig: IStorageProviderConfig = {
			type: activeStorageProviders[0],
		};
		const storageProvider =
			StorageProviderFactory.getStorageProvider(storageConfig);

		const repo = await storageProvider.getRepo(DEFAULT_REPO_ID);
		setRepo(repo);
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		repo,
		currentBranchID: repo ? repo.mainBranchID : DEFAULT_MAIN_BRANCH_ID,
	};

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
