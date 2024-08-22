import {
	IBranch,
	IBranchBuilderProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import {
	EBranchConnectionMemberRole,
	IBranchConnection,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const createBranchID = (): TBranchID => {
	return "branchID_" + Math.ceil(Math.random() * 1000000);
};

export const getBranchFromObject = (props: IBranchBuilderProps): IBranch => {
	const { rawObject, repo } = props;
	let _connections: IBranchConnection[] | null = null;

	const _getAllConnections = () => {
		if (_connections === null) {
			_connections = (rawObject.connectionIDs ?? [])
				.map((connectionID) => repo.getConnectionByID(connectionID))
				.filter(
					(connection) => connection !== undefined,
				) as IBranchConnection[];
		}

		return _connections;
	};

	const getChildren = () => {
		return _getAllConnections().reduce((acc: IBranch[], connection) => {
			connection
				.getBranchesByRole(EBranchConnectionMemberRole.CHILD)
				.map((branch) => {
					acc.push(branch);
				});
			return acc;
		}, []);
	};

	return {
		raw: rawObject,
		id: rawObject.id,
		name: rawObject.name,
		getChildren,
	};
};
