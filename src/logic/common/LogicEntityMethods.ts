import {
	TGetEntityFromObjectFunction,
	TLogicEntity,
	TLogicEntityRawObject,
} from "@logic/common/LogicEntityInterfaces";

// const initRawObject = (props: IInitRawObjectProps): TLogicEntity => {
// 	const { rawObject, builder, repo } = props;
//
// 	return builder.getFromObject({
// 		rawObject: rawObject,
// 		repo: repo,
// 	});
// };

// export const buildObjectsMap = <
// 	T_KEY extends TLogicEntityID,
// 	T_ENTITY extends TLogicEntity,
// >(
// 	props: IBuildObjectsMapProps,
// ): TGeneralEntityMap<T_KEY, T_ENTITY> => {
// 	const { rawObjects, builder, repo } = props;
//
// 	return new Map(
// 		(rawObjects ?? []).map((rawObject) => {
// 			const entity = initRawObject({
// 				rawObject,
// 				builder,
// 				repo,
// 			}) as TLogicEntity;
// 			return [entity.id as T_KEY, entity as T_ENTITY];
// 		}),
// 	);
// };

// export const getAllRepoEntities = <
// 	T_ENTITY_ID extends TLogicEntityID,
// 	T_ENTITY extends TLogicEntity,
// 	T_RAW_ENTITY extends TLogicEntityRawObject,
// >(
// 	props: IGetAllRepoEntitiesProps<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>,
// ): TGeneralEntityMap<T_ENTITY_ID, T_ENTITY> => {
// 	if (props.entitiesMap !== null) {
// 		return props.entitiesMap;
// 	}
// 	const { rawEntities, repo, entityBuilder } = props;
//
// 	return buildObjectsMap<T_ENTITY_ID, T_ENTITY>({
// 		rawObjects: rawEntities,
// 		builder: entityBuilder,
// 		repo,
// 	});
// };

// export const getRepoEntityByID = <
// 	T_ENTITY_ID extends TLogicEntityID,
// 	T_ENTITY extends TLogicEntity,
// 	T_RAW_ENTITY extends TLogicEntityRawObject,
// >(
// 	props: IGetRepoEntityByIDProps<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>,
// ): T_ENTITY | undefined => {
// 	const { rawEntities, entityID, entitiesMap, repo, entityBuilder } = props;
//
// 	return getAllRepoEntities<T_ENTITY_ID, T_ENTITY, T_RAW_ENTITY>({
// 		rawEntities,
// 		entitiesMap,
// 		entityBuilder,
// 		repo,
// 	}).get(entityID);
// };

export const getEntitiesArray = <
	T_RAW_ENTITY extends TLogicEntityRawObject,
	T_ENTITY extends TLogicEntity,
>(
	rawEntities: T_RAW_ENTITY[],
	builder: TGetEntityFromObjectFunction<T_RAW_ENTITY, T_ENTITY>,
) => {
	return rawEntities.map((rawEntity) => builder(rawEntity));
};
