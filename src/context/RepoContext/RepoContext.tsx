import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { repoReducer } from "../../reducers/repo/repoReducer";
import { emptyRepo } from "@data/templates/emptyRepo";
import {
	ERepReducerActionTypes,
	TRepoAction,
} from "../../reducers/repo/repoReducerInterfaces";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { DEFAULT_REPO_ID } from "@config/commonConsts";
import { useStorage } from "@hooks/useStorage";
import { useMainContext } from "@context/MainContext/MainContext";
import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { fetchRepo, loadRepo } from "@context/RepoContext/RepoContextConsts";

export const RepoContext = createContext<IRepo>(emptyRepo);
export const RepoDispatchContext = createContext<React.Dispatch<TRepoAction>>(
	() => {},
);

interface IRepoProviderProps {
	children: ReactNode;
}

export const RepoProvider = ({ children }: IRepoProviderProps) => {
	const [isInitialized, setIsInitialized] = useState(false);
	const [repo, dispatchRepo] = useReducer(repoReducer, emptyRepo);
	const storageProvider = useStorage();
	const { setCurrentBranchID } = useMainContext();

	const saveRepo = async (repo: IRepo) => {
		storageProvider.saveRepo(repo);
	};

	useEffect(() => {
		loadRepo({ storageProvider, dispatchRepo, setCurrentBranchID }).then(
			() => {
				setIsInitialized(true);
			},
		);
	}, []);

	useEffect(() => {
		if (!isInitialized) {
			return;
		}

		console.log("Save", repo.branches.length);
		saveRepo(repo);
	}, [repo]);

	return (
		<RepoContext.Provider value={repo}>
			<RepoDispatchContext.Provider value={dispatchRepo}>
				{children}
			</RepoDispatchContext.Provider>
		</RepoContext.Provider>
	);
};

export function useRepo() {
	return useContext(RepoContext);
}

export function useRepoDispatch() {
	return useContext(RepoDispatchContext);
}
