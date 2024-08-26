import * as dayjs from "dayjs";
import { EBranchPalette } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import {
	IBranchConnection,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import {
	ILogicEntity,
	ILogicEntityBuilder,
	ILogicEntityBuilderProps,
	IRawObject,
} from "@logic/common/LogicEntityInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export type TBranchID = string;

export interface IBranchCompletionScoreCalculationMethod {
	(date?: dayjs.Dayjs): number;
}

export interface IDoCommitProps {
	message: string;
	value?: number;
}

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
	raw: IBranchRawObject;
	id: TBranchID;
	name: string;

	// getParents: () => IBranch[];
	addConnection: (connection: IBranchConnection) => void;

	getChildren: () => IBranch[];

	dumpToRawObject: () => IBranchRawObject;

	// getAllConnections: () => IBranchConnection[];
	// getChildren: () => IBranch[];
	// paletteType: EBranchPalette;
	// connections: IBranchConnection[];

	// commits: {
	// 	[date: string]: TCommitID[];
	// };

	/**
	 * How much value is passed to parent
	 */
	// contributionValue: number;
	// getConnections: () => IBranchConnection[];
	// getCompletionScore: IBranchCompletionScoreCalculationMethod;

	// doCommit: IDoCommit;

	// //TODO: check whether Dayjs object contains time. I need only date here, without time
	// getCommits: (dateStart?: Dayjs, dateEnd?: Dayjs) => {
	// 	[date: string]: ICommit
	// };

	// getValue: () => IBranchGetValue;

	//TODO: add filters? by date, priority, time
	// getParents: () => IBranch[];
	// getConnections: (type?: EBranchConnectionType) => IBranchConnection[];

	// frequency?: number;

	// status: string;
	// createdAt: string;
	// updatedAt: string;
	// deletedAt: string;
	// companyId: number;
	// company: ICompany;
	// branchType: IBranchType;
	// branchStatus: IBranchStatus;
	// branchUsers: IBranchUser[];
	// branchServices: IBranchService[];
	// branchSchedules: IBranchSchedule[];
}

export interface IBranchRawObject extends IRawObject {
	id: TBranchID;
	name: string;
	palette?: EBranchPalette;
	contributionValue?: number;

	connectionIDs?: TBranchConnectionID[];
	// commits: {
	// 	[date: string]: TCommitID[];
	// };
}

export interface IBranchBuilderProps extends ILogicEntityBuilderProps {
	rawObject: IBranchRawObject;
	repo: IRepo;
}

export interface IBranchBuilder extends ILogicEntityBuilder {
	getFromObject: (props: IBranchBuilderProps) => IBranch;
	getEmptyBranch: (repo: IRepo) => IBranch;
}
