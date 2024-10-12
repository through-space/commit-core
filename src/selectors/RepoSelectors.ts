import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	EBranchConnectionMemberRole,
	EBranchConnectionType,
	IBranchConnection,
} from "@logic/entities/Connection/ConnectionInterfaces";

//TODO: maybe change to maps
const getBranchByID = (repo: IRepo, branchID: TBranchID): IBranch | null => {
	return repo.branches.find((branch) => branch.id === branchID) ?? null;
};

const getConnectionByID = (
	repo: IRepo,
	connectionID: string,
): IBranchConnection | null => {
	return (
		repo.connections.find((connection) => connection.id === connectionID) ??
		null
	);
};

const getConnectedBranches = (
	repo: IRepo,
	branchID: string,
	connectionType?: EBranchConnectionType,
	role?: EBranchConnectionMemberRole,
): IBranch[] => {
	const branch = getBranchByID(repo, branchID);

	if (!branch) {
		return [];
	}

	const connections = branch.connectionIDs
		.map((connectionID) => getConnectionByID(repo, connectionID))
		.filter(
			(connection): connection is IBranchConnection =>
				connection !== null,
		)
		.filter(
			(connection) =>
				!connectionType || connection.type === connectionType,
		)
		.filter(
			(connection) =>
				!role ||
				connection.members.find(
					(member) =>
						member.branchID !== branchID && member.role === role,
				),
		);

	return connections
		.flatMap((connection) => connection.members)
		.filter((member) => member.branchID !== branchID)
		.map((member) =>
			member.branchID ? getBranchByID(repo, member.branchID) : null,
		)
		.filter((branch): branch is IBranch => branch !== null);
};

export const RepoGetters = {
	getBranchByID,
	getConnectedBranches,
};
