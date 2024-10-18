import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	IBranchConnection,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const setRepo = (repo: IRepo): IRepo => {
	return repo;
};

export const setBranch = (repo: IRepo, branch: IBranch): IRepo => {
	return {
		...repo,
		branches: repo.branches.find((b) => b.id === branch.id)
			? repo.branches.map((b) => (b.id === branch.id ? branch : b))
			: [...repo.branches, branch],
	};
};

export const setMainBranch = (repo: IRepo, branchID: string): IRepo => {
	return {
		...repo,
		mainBranchID: branchID,
	};
};

export const setConnection = (
	repo: IRepo,
	connection: IBranchConnection,
): IRepo => {
	return {
		...repo,
		connections: repo.connections.find((c) => c.id === connection.id)
			? repo.connections.map((c) =>
					c.id === connection.id ? connection : c,
				)
			: [...repo.connections, connection],
	};
};

export const setBranchConnection = (
	repo: IRepo,
	branchID: TBranchID,
	connectionID: TBranchConnectionID,
): IRepo => {
	return {
		...repo,
		branches: repo.branches.map((b) =>
			b.id === branchID
				? { ...b, connectionIDs: [...b.connectionIDs, connectionID] }
				: b,
		),
	};
};

export const removeBranch = (state: IRepo, branchID: TBranchID): IRepo => {
	return {
		...state,
		branches: state.branches.filter((b) => b.id !== branchID),
	};
};
