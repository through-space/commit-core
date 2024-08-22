import { IRepo, IRepoBuilderProps } from "@logic/entities/Repo/RepoInterfaces";
import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import { getRepoEntityByID } from "@logic/common/LogicEntityMethods";
import {
	IBranchConnection,
	IBranchConnectionRawObject,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { emptyRepo } from "@data/templates/emptyRepo";
import { BranchBuilder } from "@logic/entities/Branch/BranchConsts";
import { ConnectionBuilder } from "@logic/entities/Connection/ConnnectionBuilderConsts";
import { repoExampleObj } from "@data/repoExampleObj";

export const getRepoFromObject = (props: IRepoBuilderProps): IRepo => {
	const { rawObject } = props;
	const _branches = null;
	const _connections = null;
	let repo = emptyRepo;

	const getBranchByID = (branchID: TBranchID) =>
		getRepoEntityByID<TBranchID, IBranch, IBranchRawObject>({
			entitiesMap: _branches,
			entityID: branchID,
			rawEntities: rawObject.branches,
			entityBuilder: BranchBuilder,
			repo,
		});
	const getConnectionByID = (connectionID: TBranchConnectionID) =>
		getRepoEntityByID<
			TBranchConnectionID,
			IBranchConnection,
			IBranchConnectionRawObject
		>({
			entitiesMap: _connections,
			entityID: connectionID,
			rawEntities: rawObject.connections,
			entityBuilder: ConnectionBuilder,
			repo,
		});

	const dumpToRawObject = () => {
		return repoExampleObj;
	};

	repo = {
		id: rawObject.id,
		mainBranchID: rawObject?.mainBranchID,
		raw: rawObject,
		getBranchByID,
		getConnectionByID,
		dumpToRawObject,
	};

	return repo;
};
