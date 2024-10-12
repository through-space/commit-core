import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import dayjs from "dayjs";
import { TGetEntityFromObjectFunction } from "@logic/common/LogicEntityInterfaces";
import { RepoGetters } from "../../../selectors/RepoSelectors";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { emptyBranch } from "@data/templates/emptyBranch";

export const createBranchID = (): TBranchID => {
	return (
		"branchID_" + Math.ceil(Math.random() * 1000000) + "_" + dayjs().unix()
	);
};

export const getBranchFromObject: TGetEntityFromObjectFunction<
	IBranchRawObject,
	IBranch
> = (rawBranch) => {
	return {
		id: rawBranch.id,
		name: rawBranch.name,
		connectionIDs: rawBranch.connectionIDs,
	};
	// const { rawObject, repo } = props;
	// const { name, id } = rawObject;
	// let _connections: IBranchConnection[] | null = null;
	//
	// const getAllConnections = () => {
	// 	if (_connections === null) {
	// 		_connections = (rawObject.connectionIDs ?? [])
	// 			.map((connectionID) => repo.getConnectionByID(connectionID))
	// 			.filter(
	// 				(connection) => connection !== undefined,
	// 			) as IBranchConnection[];
	// 	}
	//
	// 	return _connections;
	// };
	//
	// const getChildren = () => {
	// 	return getAllConnections().reduce((acc: IBranch[], connection) => {
	// 		connection
	// 			.getBranchesByRole(EBranchConnectionMemberRole.CHILD)
	// 			.filter((branch) => branch.id !== id)
	// 			.map((branch) => {
	// 				acc.push(branch);
	// 			});
	// 		return acc;
	// 	}, []);
	// };
	//
	// const dumpToRawObject = () => {
	// 	const connectionIDs = getAllConnections().map(
	// 		(connection) => connection.id,
	// 	);
	// 	return {
	// 		id,
	// 		name,
	// 		connectionIDs,
	// 	};
	// };
	//
	// const addConnection = (connection: IBranchConnection) => {
	// 	_connections = [...getAllConnections(), connection];
	//
	// 	rawObject.connectionIDs = _connections.map(
	// 		(connection) => connection.id,
	// 	);
	// };
	//
	// const removeConnection = (connection: IBranchConnection) => {
	// 	_connections = getAllConnections().filter(
	// 		(_connection) => _connection.id !== connection.id,
	// 	);
	//
	// 	rawObject.connectionIDs = _connections.map(
	// 		(connection) => connection.id,
	// 	);
	// };
	//
	// return {
	// 	raw: rawObject,
	// 	id,
	// 	name,
	// 	addConnection,
	// 	getAllConnections,
	// 	getChildren,
	// 	removeConnection,
	// 	dumpToRawObject,
	// };
};

export const getEmptyBranch = (repo: IRepo): IBranch => {
	let id: TBranchID;
	do {
		id = createBranchID();
	} while (RepoGetters.getBranchByID(repo, id));

	return {
		...emptyBranch,
		id,
	};
};

export const dumpBranchToRawObject = (branch: IBranch): IBranchRawObject => {
	return {
		id: branch.id,
		name: branch.name,
		connectionIDs: branch.connectionIDs,
	};
};
