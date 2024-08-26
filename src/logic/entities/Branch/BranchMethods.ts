import {
	IBranch,
	IBranchBuilderProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import {
	EBranchConnectionMemberRole,
	IBranchConnection,
} from "@logic/entities/Connection/ConnectionInterfaces";
import dayjs from "dayjs";

export const createBranchID = (): TBranchID => {
	return (
		"branchID_" + Math.ceil(Math.random() * 1000000) + "_" + dayjs().unix()
	);
};

export const getBranchFromObject = (props: IBranchBuilderProps): IBranch => {
	const { rawObject, repo } = props;
	const { name, id } = rawObject;
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
				.filter((branch) => branch.id !== id)
				.map((branch) => {
					acc.push(branch);
				});
			return acc;
		}, []);
	};

	const dumpToRawObject = () => {
		const connectionIDs = _getAllConnections().map(
			(connection) => connection.id,
		);
		return {
			id,
			name,
			connectionIDs,
		};
	};

	const addConnection = (connection: IBranchConnection) => {
		_connections = [..._getAllConnections(), connection];

		rawObject.connectionIDs = _connections.map(
			(connection) => connection.id,
		);
	};

	return {
		raw: rawObject,
		id,
		name,
		addConnection,
		getChildren,
		dumpToRawObject,
	};
};
