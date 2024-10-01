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

export {};
