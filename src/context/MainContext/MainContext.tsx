import { createContext, FC, useContext, useReducer, useState } from "react";
import { IMainContext, IMainContextProps } from "./MainContextTypes";
import { DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID } from "@config/commonConsts";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { useStorage } from "@hooks/useStorage";
import { emptyRawRepo, emptyRepo } from "@data/templates/emptyRepo";
import { repoReducer } from "../../reducers/repo/repoReducer";
import { ERepReducerActionTypes } from "../../reducers/repo/repoReducerInterfaces";
import { RepoGetters } from "../../selectors/RepoSelectors";

const MainContext = createContext<IMainContext>({
	currentBranchID: DEFAULT_MAIN_BRANCH_ID,
	setCurrentBranchID: () => {},
	repo: emptyRepo,
	repoDispatch: () => {},
});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({ children }) => {
	const [repoState, repoDispatch] = useReducer(repoReducer, emptyRepo);
	const [currentBranchID, setCurrentBranchID] = useState<TBranchID | null>(
		null,
	);
	const [repoLoaded, setRepoLoaded] = useState(false);

	const storageProvider = useStorage();

	const fetchRepo = async () => {
		//TODO: add error handling
		console.log("fetching repo");
		storageProvider
			.getRepo(DEFAULT_REPO_ID)
			.then((res) => {
				// console.log("res", res);
				const repo = RepoBuilder.getFromRawObject(res ?? emptyRawRepo);

				repoDispatch({
					type: ERepReducerActionTypes.SET_REPO,
					repo: repo,
				});
				console.log("Repo loaded", repo);
				if (
					repo.mainBranchID &&
					RepoGetters.getBranchByID(repo, repo.mainBranchID)
				) {
					setCurrentBranchID(repo.mainBranchID);
				}
			})
			.catch((err) => {
				console.log("Repo not loaded", err);
			});
	};

	if (!repoLoaded) {
		fetchRepo();
		setRepoLoaded(true);
	}
	// useEffect(() => {
	// fetchRepo();
	// }, []);

	const context = {
		currentBranchID,
		setCurrentBranchID,
		repo: repoState,
		repoDispatch,
	};

	return (
		<MainContext.Provider value={context}>{children}</MainContext.Provider>
	);
};
