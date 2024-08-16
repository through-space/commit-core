import { ICommit, TCommitID } from "@logic/entities/Commit/CommitInterfaces";

export interface IScoreEntry {
	score: number;
	max: number;
	commitID: TCommitID;

	getCommit: () => ICommit;
}
