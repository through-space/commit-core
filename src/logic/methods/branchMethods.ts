import {IBranch} from "@logic/entities/Branch/Branch";
import {EBranchConnectionType, IBranchConnection} from "@logic/entities/Connection/ConnectionInterfaces";

export function getConnections(this: IBranch, connectionType?: EBranchConnectionType): IBranchConnection[] {
	return this.connections.filter(connection => connection.type === connectionType);
}
