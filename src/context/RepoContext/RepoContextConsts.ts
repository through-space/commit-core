import { DEFAULT_REPO_ID } from "@config/commonConsts";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { ERepReducerActionTypes } from "../../reducers/repo/repoReducerInterfaces";
import {
	IFetchRepoProps,
	ILoadRepoProps,
} from "@context/RepoContext/RepoContextInterfaces";
import { IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";

export const fetchRepo = async (props: IFetchRepoProps) => {
	const { storageProvider, onResolve, onReject } = props;

	storageProvider.getRepo(DEFAULT_REPO_ID).then((res) => {
		if (!res) {
			return;
		}

		return onResolve && onResolve(res);
	});
};

export const loadRepo = async (props: ILoadRepoProps) => {
	const {
		storageProvider,
		dispatchRepo,
		setCurrentBranchID,
		setCurrentRepoID,
	} = props;
	const onResolve = (repoRawObject: IRepoRawObject) => {
		const fetchedRepo = RepoBuilder.getFromRawObject(repoRawObject);

		dispatchRepo({
			type: ERepReducerActionTypes.SET_REPO,
			repo: fetchedRepo,
		});

		setCurrentRepoID(fetchedRepo.id);

		if (fetchedRepo.mainBranchID) {
			setCurrentBranchID(fetchedRepo.mainBranchID);
		}
	};

	return fetchRepo({ storageProvider, onResolve });
};
