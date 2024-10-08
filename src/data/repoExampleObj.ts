import { IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";
import {
	EBranchConnectionMemberRole,
	EBranchConnectionType,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const repoExampleObj: IRepoRawObject = {
	id: "repoExampleObj_1",
	mainBranchID: "branchID_1",
	branches: [
		{
			id: "branchID_1",
			name: "main",
			connectionIDs: ["connectionID_1", "connectionID_2"],
		},
		{
			id: "branchID_2",
			name: "mind",
			contributionValue: 10,
			connectionIDs: ["connectionID_1"],
		},
		{
			id: "branchID_3",
			name: "read",
			contributionValue: 4,
			connectionIDs: ["connectionID_2"],
		},
	],
	connections: [
		{
			id: "connectionID_1",
			type: EBranchConnectionType.PARENT_CHILD,
			members: [
				{
					role: EBranchConnectionMemberRole.PARENT,
					branchID: "branchID_1",
				},
				{
					role: EBranchConnectionMemberRole.CHILD,
					branchID: "branchID_2",
				},
			],
		},
		{
			id: "connectionID_2",
			type: EBranchConnectionType.PARENT_CHILD,
			members: [
				{
					role: EBranchConnectionMemberRole.PARENT,
					branchID: "branchID_1",
				},
				{
					role: EBranchConnectionMemberRole.CHILD,
					branchID: "branchID_3",
				},
			],
		},
	],
	commits: [],
};
