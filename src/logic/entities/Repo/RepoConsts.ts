import {
	IRepo,
	IRepoBuilder,
	IRepoBuilderProps,
	IRepoRawObject,
} from "@logic/entities/Repo/RepoInterfaces";
import { CommitBuilder } from "@logic/entities/Commit/CommitConsts";
import {
	buildObjectsMap,
	getEntityByID,
} from "@logic/common/LogicEntitiesConsts";
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { ICommit, TCommitID } from "@logic/entities/Commit/CommitInterfaces";
import { IBranchConnection } from "@logic/entities/Connection/ConnectionInterfaces";

const getRepoFromObject = (props: IRepoBuilderProps): IRepo => {
	const { rawObject } = props;

	const repo = {
		...rawObject,
		branches: new Map(),
		connections: new Map(),
		commits: new Map(),

		getBranchByID(id: TBranchID) {
			return getEntityByID({ entityMap: this.branches, id }) as IBranch;
		},
		getCommitByID(id: TCommitID) {
			return getEntityByID({ entityMap: this.commits, id }) as ICommit;
		},
		getConnectionByID(id: TCommitID) {
			return getEntityByID({
				entityMap: this.branches,
				id,
			}) as IBranchConnection;
		},

		createBranchID() {
			return "branchID_" + Math.ceil(Math.random() * 1000000);
		},
	};

	repo.commits = buildObjectsMap({
		rawObjects: rawObject.commits,
		builder: CommitBuilder,
		repo,
	});

	return repo;
};

export const RepoBuilder: IRepoBuilder = {
	getEntityFromObject: getRepoFromObject,
};
