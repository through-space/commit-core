import { IStorageProviderConfig } from "@services/StorageProvider/StorageProviderInterfaces";
import { activeStorageProviders } from "@config/storageConfig";
import { StorageProviderFactory } from "@services/StorageProvider/StorageProviderFactory";

export const useStorage = () => {
	const storageConfig: IStorageProviderConfig = {
		type: activeStorageProviders[0],
	};
	return StorageProviderFactory.getStorageProvider(storageConfig);
};
