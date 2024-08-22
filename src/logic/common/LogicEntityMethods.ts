import {
	IBuildObjectsMapProps,
	IGetAllRepoEntitiesProps,
	IGetRepoEntityByIDProps,
	IInitRawObjectProps,
	TGeneralEntityMap,
	TLogicEntity,
	TLogicEntityID,
	TLogicEntityRawObject,
} from "@logic/common/LogicEntityInterfaces";
import { BranchBuilder } from "@logic/entities/Branch/BranchConsts";

const initRawObject = (props: IInitRawObjectProps): TLogicEntity => {
	const { rawObject, builder, repo } = props;

	return builder.getFromObject({
		rawObject: rawObject,
		repo: repo,
	});
};

export const buildObjectsMap = <
	T_KEY extends TLogicEntityID,
	T_ENTITY extends TLogicEntity,
>(
	props: IBuildObjectsMapProps,
): TGeneralEntityMap<T_KEY, T_ENTITY> => {
	const { rawObjects, builder, repo } = props;

	return new Map(
		rawObjects.map((rawObject) => {
			const entity = initRawObject({
				rawObject,
				builder,
				repo,
			}) as TLogicEntity;
			return [entity.id as T_KEY, entity as T_ENTITY];
		}),
	);
};
//
// export const getEntityByID = (
// 	props: IGetEntityByIDProps,
// ): ILogicEntity | undefined => {
// 	const { entityMap, id } = props;
//
// 	const entity = entityMap.get(id);
// 	if (!entity) {
// 		throw new Error(`Entity with ID ${id} not found`);
// 	}
// 	return entity;
// };

// export const getAllEntities = <ENTITY extends TLogicEntity>(
// 	props: IBuildObjectsMapProps,
// ): TGeneralEntityMap<TLogicEntityID, ENTITY> =>

export const getAllRepoEntities = <
	T_ENTITY_ID extends TLogicEntityID,
	T_ENTITY extends TLogicEntity,
	T_RAW_ENTITY extends TLogicEntityRawObject,
>(
	props: IGetAllRepoEntitiesProps<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>,
): TGeneralEntityMap<T_ENTITY_ID, T_ENTITY> => {
	let entitiesMap = props.entitiesMap;
	const { rawEntities, repo, entityBuilder } = props;

	if (entitiesMap === null) {
		entitiesMap = buildObjectsMap<T_ENTITY_ID, T_ENTITY>({
			rawObjects: rawEntities,
			builder: entityBuilder,
			repo,
		});
	}

	return entitiesMap;
};

export const getRepoEntityByID = <
	T_ENTITY_ID extends TLogicEntityID,
	T_ENTITY extends TLogicEntity,
	T_RAW_ENTITY extends TLogicEntityRawObject,
>(
	props: IGetRepoEntityByIDProps<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>,
): T_ENTITY | undefined => {
	const { rawEntities, entityID, entitiesMap, repo, entityBuilder } = props;

	return getAllRepoEntities<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>({
		rawEntities,
		entitiesMap,
		entityBuilder,
		repo,
	}).get(entityID);
};
