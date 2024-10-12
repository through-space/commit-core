import { EBranchPalette } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import {
	EBranchConnectionType,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import {
	ILogicEntity,
	ILogicEntityBuilder,
	IRawObject,
} from "@logic/common/LogicEntityInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export type TBranchID = string;

// export interface IBranchCompletionScoreCalculationMethod {
// 	(date?: dayjs.Dayjs): number;
// }
//
// export interface IDoCommitProps {
// 	message: string;
// 	value?: number;
// }

/**
 * The way the Branch is committed.
 * - Daily Tasks: like main->mind->read.
 *
 *
 * Can be fully committed VS Option to choose partial 3 out of 7
 *
 */

//TODO: ICommit should hold current values of the branch

export interface IBranch extends ILogicEntity {
	id: TBranchID;
	name: string;
	connectionIDs: TBranchConnectionID[];
}

export interface IBranchRawObject extends IRawObject {
	id: TBranchID;
	name: string;
	palette?: EBranchPalette;
	contributionValue?: number;

	connectionIDs: TBranchConnectionID[];
	// commits: {
	// 	[date: string]: TCommitID[];
	// };
}

// export interface IBranchBuilderProps extends ILogicEntityBuilderProps {
// 	rawObject: IBranchRawObject;
// 	repo: IRepo;
// }

export interface IBranchBuilder extends ILogicEntityBuilder {
	getFromObject: (rawEntity: IBranchRawObject) => IBranch;
	getEmptyBranch: (repo: IRepo) => IBranch;
	dumpToRawObject: (branch: IBranch) => IBranchRawObject;
}

export interface ISourceBranchProps {
	branchID?: TBranchID;
	connectionType?: EBranchConnectionType;
}
