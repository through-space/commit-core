import { ISaveBranchProps } from "@components/organisms/forms/BranchEditForm/BranchEditFormInterfaces";
import { ConnectionBuilder } from "@logic/entities/Connection/ConnnectionBuilderConsts";
import { createConnectionID } from "@logic/entities/Connection/ConnectionBuilderMethods";
import {
	EBranchConnectionMemberRole,
	EBranchConnectionType,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const getUpdatedRepo = (props: ISaveBranchProps) => {
	const { branch, parent, repo } = props;

	if (parent) {
		const connection = ConnectionBuilder.getFromObject({
			rawObject: {
				id: createConnectionID(),
				type: EBranchConnectionType.PARENT_CHILD,
				members: [
					{
						role: EBranchConnectionMemberRole.PARENT,
						branchID: parent.id,
					},
					{
						role: EBranchConnectionMemberRole.CHILD,
						branchID: branch.id,
					},
				],
			},
			repo,
		});

		branch.addConnection(connection);
		parent.addConnection(connection);
		repo.saveConnection(connection);
		repo.saveBranch(parent);
	}

	repo.saveBranch(branch);

	return repo;
};
