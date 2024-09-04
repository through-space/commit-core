import {
	IBranch,
	IBranchBuilderProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import {
	EBranchConnectionMemberRole,
	IBranchConnection, TBranchConnectionID
} from "@logic/entities/Connection/ConnectionInterfaces";
import dayjs, { Dayjs, name } from "dayjs";
import {
	IScoreEntry,
	TDailyScoreMap,
} from "@logic/entities/Score/ScoreInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { DAILY_DATE_FORMAT, T_DEFAULT_DATE_FORMAT } from "@config/commonConsts";
import { ScoreBuilder } from "@logic/entities/Score/ScoreConsts";

export const createBranchID = (): TBranchID => {
	return (
		"branchID_" + Math.ceil(Math.random() * 1000000) + "_" + dayjs().unix()
	);
};

export const getBranchFromObject = (props: IBranchBuilderProps): IBranch => {
	const { rawObject, repo } = props;
	const { name, id } = rawObject;
	let _connections: IBranchConnection[] | null = null;
	let _dailyScoreMap: TDailyScoreMap | null = null;

	const getAllConnections = () => {
		if (_connections !== null) {
			return _connections;
		}

		_connections = (rawObject.connectionIDs ?? [])
			.map((connectionID) => repo.getConnectionByID(connectionID))
			.filter(
				(connection) => connection !== undefined,
			) as IBranchConnection[];

		return _connections;
	};

	const getDailyScoresMap = () => {
		if (_dailyScoreMap !== null) {
			return _dailyScoreMap;
		}

		const dailyScoreMap = new Map<T_DEFAULT_DATE_FORMAT, IScoreEntry[]>();

		(rawObject?.scores ?? []).forEach((score) => {
			const entry = ScoreBuilder.getFromObject({
				rawObject: score,
			});

			const date = entry.time.format(DAILY_DATE_FORMAT);
			const dailyEntries = dailyScoreMap.get(date) ?? [];
			entries.push(entry);
			_dailyScoreMap.set(date, entries);
		}

	};

	const getChildren = () => {
		return getAllConnections().reduce((acc: IBranch[], connection) => {
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
		const connectionIDs = getAllConnections().map(
			(connection) => connection.id,
		);
		return {
			id,
			name,
			connectionIDs,
		};
	};

	const addConnection = (connection: IBranchConnection) => {
		_connections = [...getAllConnections(), connection];

		rawObject.connectionIDs = _connections.map(
			(connection) => connection.id,
		);
	};

	const removeConnection = (connection: IBranchConnection) => {
		_connections = getAllConnections().filter(
			(_connection) => _connection.id !== connection.id,
		);

		rawObject.connectionIDs = _connections.map(
			(connection) => connection.id,
		);
	};

	// const getDailyScore = (date: dayjs.Dayjs): IScoreEntry => {};

	return {
		raw: rawObject,
		id,
		name,
		addConnection,
		getAllConnections,
		getChildren,
		removeConnection,
		dumpToRawObject,
		getDailyScore,
	};
};
