import { createContext, FC, useContext, useMemo, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { TRepoID } from "@logic/entities/Repo/RepoInterfaces";

const MainContext = createContext<IMainContext>({
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
	setCurrentBranchID: () => {},
	currentRepoID: null,
	setCurrentRepoID: () => {},
	// repo: emptyRepo,
	// repoDispatch: () => {},
});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [currentBranchID, setCurrentBranchID] = useState<TBranchID | null>(
		null,
	);

	const [currentRepoID, setCurrentRepoID] = useState<TRepoID | null>(
		DEFAULT_REPO_ID,
	);

	const context = useMemo(() => {
		return {
			currentBranchID,
			setCurrentBranchID,

			currentRepoID,
			setCurrentRepoID,
		};
	}, [currentBranchID]);

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
