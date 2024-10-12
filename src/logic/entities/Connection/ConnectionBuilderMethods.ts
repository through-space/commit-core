// import {
// 	EBranchConnectionMemberRole,
// 	IBranchConnection,
// 	IBranchConnectionBuilderProps,
// 	IBranchConnectionMember,
// 	IBranchConnectionRawObject,
// 	TBranchConnectionID,
// } from "@logic/entities/Connection/ConnectionInterfaces";
// import dayjs from "dayjs";
//
// export const createConnectionID = (): TBranchConnectionID => {
// 	return (
// 		"connectionID_" +
// 		Math.ceil(Math.random() * 1000000) +
// 		"_" +
// 		dayjs().unix()
// 	);
// };
//
// export const getBranchConnectionFromObject = (
// 	props: IBranchConnectionBuilderProps,
// ): IBranchConnection => {
// 	const { rawObject, repo } = props;
// 	const { id, type } = rawObject;
// 	let _members: IBranchConnectionMember[] | null = null;
//
// 	const getMembers = () => {
// 		if (_members === null) {
// 			_members = rawObject.members.map((member) => ({
// 				role: member.role,
// 				branch: repo.getBranchByID(member.branchID),
// 			})) as IBranchConnectionMember[];
// 		}
//
// 		return _members;
// 	};
//
// 	const getBranchesByRole = (role: EBranchConnectionMemberRole) => {
// 		return getMembers()
// 			.filter((member) => member.role === role)
// 			.map((member) => member.branch);
// 	};
//
// 	const getConnectedBranches = () => {
// 		return getMembers().map((member) => member.branch);
// 	};
//
// 	const dumpToRawObject = (): IBranchConnectionRawObject => {
// 		return {
// 			id,
// 			type,
// 			members: getMembers().map((member) => ({
// 				role: member.role,
// 				branchID: member.branch.id,
// 			})),
// 		};
// 	};
//
// 	return {
// 		id,
// 		type,
// 		getBranchesByRole,
// 		getConnectedBranches,
// 		dumpToRawObject,
// 	};
// };

import { emptyConnection } from "@data/templates/emptyConnection";
import {
	EBranchConnectionMemberRole,
	EBranchConnectionType,
	IBranchConnection,
	IBranchConnectionParentChildProps,
	IBranchConnectionRawObject,
	TBranchConnectionBuilderProps,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import dayjs from "dayjs";

//TODO: add repo to find whether already exists?

export const createBranchConnectionID = (): TBranchID => {
	return (
		"connectionID_" +
		Math.ceil(Math.random() * 1000000) +
		"_" +
		dayjs().unix()
	);
};

const createParenChildConnection = (
	props: IBranchConnectionParentChildProps,
): IBranchConnection => {
	return {
		id: createBranchConnectionID(),
		type: EBranchConnectionType.PARENT_CHILD,
		members: [
			{
				role: EBranchConnectionMemberRole.PARENT,
				branchID: props?.parentID,
			},
			{
				role: EBranchConnectionMemberRole.CHILD,
				branchID: props.childID,
			},
		],
	};
};

export const getFromObject = (
	rawEntity: IBranchConnectionRawObject,
): IBranchConnection => {
	return {
		id: rawEntity.id,
		type: rawEntity.type,
		members: rawEntity.members.map((member) => ({
			role: member.role,
			branchID: member.branchID,
		})),
	};
};

export const createByType = (props: TBranchConnectionBuilderProps) => {
	const type = props.type;

	switch (type) {
		case EBranchConnectionType.PARENT_CHILD:
			return createParenChildConnection({ ...props });
		default:
			return emptyConnection;
	}
};

export const dumpConnectionToRawObject = (connection: IBranchConnection) => {
	return {
		id: connection.id,
		type: connection.type,
		members: connection.members.map((member) => ({
			role: member.role,
			branchID: member.branchID,
		})),
	};
};
