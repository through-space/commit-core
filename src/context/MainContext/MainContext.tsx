import { createContext, FC, useContext, useMemo, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID } from "@config/commonConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";

const MainContext = createContext<IMainContext>({
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
	setCurrentBranchID: () => {},
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

	const context = useMemo(() => {
		return {
			currentBranchID,
			setCurrentBranchID,
		};
	}, [currentBranchID]);

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
