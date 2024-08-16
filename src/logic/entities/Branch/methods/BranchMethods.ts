import {
	EBranchConnectionType,
	IBranchConnection,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";

export function getConnections(
	this: IBranch,
	connectionType?: EBranchConnectionType,
): IBranchConnection[] {
	return this.connections.filter(
		(connection) => connection.type === connectionType,
	);
}
