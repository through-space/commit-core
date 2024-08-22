import {
	EBranchConnectionMemberRole,
	IBranchConnection,
	IBranchConnectionBuilderProps,
	IBranchConnectionMember,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const getBranchConnectionFromObject = (
	props: IBranchConnectionBuilderProps,
): IBranchConnection => {
	const { rawObject, repo } = props;
	let _members: IBranchConnectionMember[] | null = null;

	const getMembers = () => {
		if (_members === null) {
			_members = rawObject.members.map((member) => ({
				role: member.role,
				branch: repo.getBranchByID(member.branchID),
			})) as IBranchConnectionMember[];
		}

		return _members;
	};

	const getBranchesByRole = (role: EBranchConnectionMemberRole) => {
		return getMembers()
			.filter((member) => member.role === role)
			.map((member) => member.branch);
	};

	return {
		id: rawObject.id,
		type: rawObject.type,
		getBranchesByRole,
	};
};
