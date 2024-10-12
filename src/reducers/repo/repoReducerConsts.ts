import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import {
	IBranchConnection,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const setRepo = (state: IRepo): IRepo => {
	return state;
};

export const setBranch = (repo: IRepo, branch: IBranch): IRepo => {
	return {
		...repo,
		branches: repo.branches.find((b) => b.id === branch.id)
			? repo.branches.map((b) => (b.id === branch.id ? branch : b))
			: [...repo.branches, branch],
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

export const addBranchConnection = (
	repo: IRepo,
	branch: IBranch,
	connectionID: TBranchConnectionID,
): IRepo => {
	return {
		...repo,
		branches: repo.branches.map((b) =>
			b.id === branch.id
				? { ...b, connectionIDs: [...b.connectionIDs, connectionID] }
				: b,
		),
	};
};
