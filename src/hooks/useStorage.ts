import { activeStorageProviders } from "@config/storageConfig";
import { StorageProviderFactory } from "@services/StorageProvider/StorageProviderFactory";

export const useStorage = () => {
	const readStorageProvider = StorageProviderFactory.getStorageProvider({
		type: activeStorageProviders.read,
	});
	const writeStorageProvider = StorageProviderFactory.getStorageProvider({
		type: activeStorageProviders.write,
	});

	return {
		getRepo: readStorageProvider.getRepo,
		saveRepo: writeStorageProvider.saveRepo,
	};
};
