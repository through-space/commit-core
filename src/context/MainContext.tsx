import { createContext, FC, useContext, useEffect, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { useStorage } from "@hooks/useStorage";
import { emptyRepo } from "@data/templates/emptyRepo";

const MainContext = createContext<IMainContext>({
	repo: emptyRepo,
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
	updateRepo: () => {},
	setCurrentBranchID: () => {},
});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [repo, setRepo] = useState<IRepo>(emptyRepo);
	const [currentBranchID, setCurrentBranchID] = useState<TBranchID | null>(
		null,
	);

	const storageProvider = useStorage();

	const fetchRepo = async () => {
		//TODO: add error handling

		const rawRepo = await storageProvider.getRepo(DEFAULT_REPO_ID);

		if (rawRepo) {
			const repo = RepoBuilder.getFromRawObject({
				rawObject: rawRepo,
			});
			setRepo(repo);
			setCurrentBranchID(repo.mainBranchID ?? null);
		}
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		repo,
		currentBranchID,
		setCurrentBranchID,
		updateRepo: (repo: IRepo) => {
			const newRepo = { ...repo, raw: repo.dumpToRawObject() };
			setRepo(newRepo);
			useStorage().saveRepo(repo);
		},
	};

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
