import {
	IRepo,
	IRepoBuilderProps,
	IRepoRawObject,
} from "@logic/entities/Repo/RepoInterfaces";
import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import { getAllRepoEntities } from "@logic/common/LogicEntityMethods";
import {
	IBranchConnection,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { emptyRepo } from "@data/templates/emptyRepo";
import { BranchBuilder } from "@logic/entities/Branch/BranchConsts";
import { ConnectionBuilder } from "@logic/entities/Connection/ConnnectionBuilderConsts";
import { TGeneralEntityMap } from "@logic/common/LogicEntityInterfaces";

export const getRepoFromObject = (props: IRepoBuilderProps): IRepo => {
	const { rawObject } = props;
	const { id } = rawObject;
	let { mainBranchID } = rawObject;
	let _branches: TGeneralEntityMap<TBranchID, IBranch> | null = null;
	let _connections: TGeneralEntityMap<
		TBranchConnectionID,
		IBranchConnection
	> | null = null;
	let repo = emptyRepo;

	const getBranchByID = (branchID: TBranchID) => {
		_branches = getAllRepoEntities<TBranchID, IBranch, IBranchRawObject>({
			entitiesMap: _branches,
			rawEntities: rawObject.branches,
			entityBuilder: BranchBuilder,
			repo,
		});

		return _branches.get(branchID);
	};

	const getConnectionByID = (connectionID: TBranchConnectionID) => {
		_connections = getAllRepoEntities({
			entitiesMap: _connections,
			rawEntities: rawObject.connections,
			entityBuilder: ConnectionBuilder,
			repo,
		});

		return _connections.get(connectionID);
	};

	const dumpToRawObject = (): IRepoRawObject => {
		const branches = Array.from(_branches ?? []).map(([branchID, branch]) =>
			branch.dumpToRawObject(),
		);

		const connections = Array.from(_connections ?? []).map(
			([connectionID, connection]) => connection.dumpToRawObject(),
		);

		return {
			id,
			mainBranchID,
			branches,
			connections,
			commits: [],
		};
	};

	const setMainBranchID = (branchID: TBranchID) => {
		mainBranchID = branchID;
	};

	const saveBranch = (branch: IBranch) => {
		_branches = _branches ?? new Map();
		_branches.set(branch.id, branch);
	};

	const saveConnection = (connection: IBranchConnection) => {
		_connections = _connections ?? new Map();
		_connections.set(connection.id, connection);
	};

	const removeBranch = (branch: IBranch) => {
		_branches = _branches ?? new Map();
		_connections = _connections ?? new Map();

		_branches.delete(branch.id);

		branch.getAllConnections().forEach((connection) => {
			const connnectedBranches = connection
				.getConnectedBranches()
				.filter((connectedBranch) => connectedBranch.id !== branch.id);

			connnectedBranches.forEach((connectedBranch) =>
				connectedBranch.removeConnection(connection),
			);
			_connections?.delete(connection.id);
		});
	};

	repo = {
		id,
		mainBranchID,
		raw: rawObject,
		getBranchByID,
		getConnectionByID,
		dumpToRawObject,

		saveBranch,
		saveConnection,

		setMainBranchID,

		removeBranch,
	};

	return repo;
};
