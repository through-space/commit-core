import {
	EStorageProviderType,
	IStorageProvider,
	IStorageProviderConfig,
	IStorageProviderFactory,
} from "./StorageProviderInterfaces";
import { LocalStorageProvider } from "@services/StorageProvider/providers/LocalStorageProvider";
import { MockupStorageProvider } from "@services/StorageProvider/providers/MockupStorageProvider";

const getStorageProviderByType = (
	storageProviderType: EStorageProviderType,
): IStorageProvider => {
	switch (storageProviderType) {
		case EStorageProviderType.MOCKUP:
			return MockupStorageProvider;
		case EStorageProviderType.OBSIDIAN:
			return LocalStorageProvider;
		case EStorageProviderType.LOCAL_STORAGE:
			return LocalStorageProvider;
		default:
			throw new Error("Invalid repo provider type");
	}
};

export const StorageProviderFactory: IStorageProviderFactory = {
	getStorageProvider: (config: IStorageProviderConfig) => {
		return getStorageProviderByType(config.type);
	},
};
