"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    EmailToken: crudResolvers.EmailTokenCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    Event: crudResolvers.EventCrudResolver,
    Attendee: crudResolvers.AttendeeCrudResolver,
    Comment: crudResolvers.CommentCrudResolver
};
const actionResolversMap = {
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    },
    EmailToken: {
        aggregateEmailToken: actionResolvers.AggregateEmailTokenResolver,
        createManyEmailToken: actionResolvers.CreateManyEmailTokenResolver,
        createOneEmailToken: actionResolvers.CreateOneEmailTokenResolver,
        deleteManyEmailToken: actionResolvers.DeleteManyEmailTokenResolver,
        deleteOneEmailToken: actionResolvers.DeleteOneEmailTokenResolver,
        findFirstEmailToken: actionResolvers.FindFirstEmailTokenResolver,
        findFirstEmailTokenOrThrow: actionResolvers.FindFirstEmailTokenOrThrowResolver,
        emailTokens: actionResolvers.FindManyEmailTokenResolver,
        emailToken: actionResolvers.FindUniqueEmailTokenResolver,
        getEmailToken: actionResolvers.FindUniqueEmailTokenOrThrowResolver,
        groupByEmailToken: actionResolvers.GroupByEmailTokenResolver,
        updateManyEmailToken: actionResolvers.UpdateManyEmailTokenResolver,
        updateOneEmailToken: actionResolvers.UpdateOneEmailTokenResolver,
        upsertOneEmailToken: actionResolvers.UpsertOneEmailTokenResolver
    },
    Profile: {
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        createOneProfile: actionResolvers.CreateOneProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        findFirstProfileOrThrow: actionResolvers.FindFirstProfileOrThrowResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        profile: actionResolvers.FindUniqueProfileResolver,
        getProfile: actionResolvers.FindUniqueProfileOrThrowResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        updateOneProfile: actionResolvers.UpdateOneProfileResolver,
        upsertOneProfile: actionResolvers.UpsertOneProfileResolver
    },
    Event: {
        aggregateEvent: actionResolvers.AggregateEventResolver,
        createManyEvent: actionResolvers.CreateManyEventResolver,
        createOneEvent: actionResolvers.CreateOneEventResolver,
        deleteManyEvent: actionResolvers.DeleteManyEventResolver,
        deleteOneEvent: actionResolvers.DeleteOneEventResolver,
        findFirstEvent: actionResolvers.FindFirstEventResolver,
        findFirstEventOrThrow: actionResolvers.FindFirstEventOrThrowResolver,
        events: actionResolvers.FindManyEventResolver,
        event: actionResolvers.FindUniqueEventResolver,
        getEvent: actionResolvers.FindUniqueEventOrThrowResolver,
        groupByEvent: actionResolvers.GroupByEventResolver,
        updateManyEvent: actionResolvers.UpdateManyEventResolver,
        updateOneEvent: actionResolvers.UpdateOneEventResolver,
        upsertOneEvent: actionResolvers.UpsertOneEventResolver
    },
    Attendee: {
        aggregateAttendee: actionResolvers.AggregateAttendeeResolver,
        createManyAttendee: actionResolvers.CreateManyAttendeeResolver,
        createOneAttendee: actionResolvers.CreateOneAttendeeResolver,
        deleteManyAttendee: actionResolvers.DeleteManyAttendeeResolver,
        deleteOneAttendee: actionResolvers.DeleteOneAttendeeResolver,
        findFirstAttendee: actionResolvers.FindFirstAttendeeResolver,
        findFirstAttendeeOrThrow: actionResolvers.FindFirstAttendeeOrThrowResolver,
        attendees: actionResolvers.FindManyAttendeeResolver,
        attendee: actionResolvers.FindUniqueAttendeeResolver,
        getAttendee: actionResolvers.FindUniqueAttendeeOrThrowResolver,
        groupByAttendee: actionResolvers.GroupByAttendeeResolver,
        updateManyAttendee: actionResolvers.UpdateManyAttendeeResolver,
        updateOneAttendee: actionResolvers.UpdateOneAttendeeResolver,
        upsertOneAttendee: actionResolvers.UpsertOneAttendeeResolver
    },
    Comment: {
        aggregateComment: actionResolvers.AggregateCommentResolver,
        createManyComment: actionResolvers.CreateManyCommentResolver,
        createOneComment: actionResolvers.CreateOneCommentResolver,
        deleteManyComment: actionResolvers.DeleteManyCommentResolver,
        deleteOneComment: actionResolvers.DeleteOneCommentResolver,
        findFirstComment: actionResolvers.FindFirstCommentResolver,
        findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
        comments: actionResolvers.FindManyCommentResolver,
        comment: actionResolvers.FindUniqueCommentResolver,
        getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
        groupByComment: actionResolvers.GroupByCommentResolver,
        updateManyComment: actionResolvers.UpdateManyCommentResolver,
        updateOneComment: actionResolvers.UpdateOneCommentResolver,
        upsertOneComment: actionResolvers.UpsertOneCommentResolver
    }
};
const crudResolversInfo = {
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"],
    EmailToken: ["aggregateEmailToken", "createManyEmailToken", "createOneEmailToken", "deleteManyEmailToken", "deleteOneEmailToken", "findFirstEmailToken", "findFirstEmailTokenOrThrow", "emailTokens", "emailToken", "getEmailToken", "groupByEmailToken", "updateManyEmailToken", "updateOneEmailToken", "upsertOneEmailToken"],
    Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "findFirstProfileOrThrow", "profiles", "profile", "getProfile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
    Event: ["aggregateEvent", "createManyEvent", "createOneEvent", "deleteManyEvent", "deleteOneEvent", "findFirstEvent", "findFirstEventOrThrow", "events", "event", "getEvent", "groupByEvent", "updateManyEvent", "updateOneEvent", "upsertOneEvent"],
    Attendee: ["aggregateAttendee", "createManyAttendee", "createOneAttendee", "deleteManyAttendee", "deleteOneAttendee", "findFirstAttendee", "findFirstAttendeeOrThrow", "attendees", "attendee", "getAttendee", "groupByAttendee", "updateManyAttendee", "updateOneAttendee", "upsertOneAttendee"],
    Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"]
};
const argsInfo = {
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"],
    AggregateEmailTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyEmailTokenArgs: ["data", "skipDuplicates"],
    CreateOneEmailTokenArgs: ["data"],
    DeleteManyEmailTokenArgs: ["where"],
    DeleteOneEmailTokenArgs: ["where"],
    FindFirstEmailTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstEmailTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEmailTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueEmailTokenArgs: ["where"],
    FindUniqueEmailTokenOrThrowArgs: ["where"],
    GroupByEmailTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyEmailTokenArgs: ["data", "where"],
    UpdateOneEmailTokenArgs: ["data", "where"],
    UpsertOneEmailTokenArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    CreateOneProfileArgs: ["data"],
    DeleteManyProfileArgs: ["where"],
    DeleteOneProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProfileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProfileArgs: ["where"],
    FindUniqueProfileOrThrowArgs: ["where"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProfileArgs: ["data", "where"],
    UpdateOneProfileArgs: ["data", "where"],
    UpsertOneProfileArgs: ["where", "create", "update"],
    AggregateEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyEventArgs: ["data", "skipDuplicates"],
    CreateOneEventArgs: ["data"],
    DeleteManyEventArgs: ["where"],
    DeleteOneEventArgs: ["where"],
    FindFirstEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstEventOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueEventArgs: ["where"],
    FindUniqueEventOrThrowArgs: ["where"],
    GroupByEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyEventArgs: ["data", "where"],
    UpdateOneEventArgs: ["data", "where"],
    UpsertOneEventArgs: ["where", "create", "update"],
    AggregateAttendeeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAttendeeArgs: ["data", "skipDuplicates"],
    CreateOneAttendeeArgs: ["data"],
    DeleteManyAttendeeArgs: ["where"],
    DeleteOneAttendeeArgs: ["where"],
    FindFirstAttendeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAttendeeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAttendeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAttendeeArgs: ["where"],
    FindUniqueAttendeeOrThrowArgs: ["where"],
    GroupByAttendeeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAttendeeArgs: ["data", "where"],
    UpdateOneAttendeeArgs: ["data", "where"],
    UpsertOneAttendeeArgs: ["where", "create", "update"],
    AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCommentArgs: ["data", "skipDuplicates"],
    CreateOneCommentArgs: ["data"],
    DeleteManyCommentArgs: ["where"],
    DeleteOneCommentArgs: ["where"],
    FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCommentArgs: ["where"],
    FindUniqueCommentOrThrowArgs: ["where"],
    GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCommentArgs: ["data", "where"],
    UpdateOneCommentArgs: ["data", "where"],
    UpsertOneCommentArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    Event: relationResolvers.EventRelationsResolver,
    Attendee: relationResolvers.AttendeeRelationsResolver,
    Comment: relationResolvers.CommentRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    Profile: ["user"],
    Event: ["author", "comments", "attendees"],
    Attendee: ["user", "event"],
    Comment: ["user", "event"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    Session: ["id", "sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    VerificationToken: ["identifier", "token", "expires"],
    EmailToken: ["identifier", "token", "expires"],
    Profile: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks"],
    Event: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags"],
    Attendee: ["userId", "eventId"],
    Comment: ["id", "text", "dateTime", "userId", "eventId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateEmailToken: ["_count", "_min", "_max"],
    EmailTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateProfile: ["_count", "_min", "_max"],
    ProfileGroupBy: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks", "_count", "_min", "_max"],
    AggregateEvent: ["_count", "_min", "_max"],
    EventGroupBy: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "_count", "_min", "_max"],
    AggregateAttendee: ["_count", "_min", "_max"],
    AttendeeGroupBy: ["userId", "eventId", "_count", "_min", "_max"],
    AggregateComment: ["_count", "_min", "_max"],
    CommentGroupBy: ["id", "text", "dateTime", "userId", "eventId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    UserCount: ["eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    EmailTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    EmailTokenMinAggregate: ["identifier", "token", "expires"],
    EmailTokenMaxAggregate: ["identifier", "token", "expires"],
    ProfileCountAggregate: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks", "_all"],
    ProfileMinAggregate: ["faculty", "career", "type", "campus", "userId", "description", "hobbies"],
    ProfileMaxAggregate: ["faculty", "career", "type", "campus", "userId", "description", "hobbies"],
    EventCount: ["comments", "attendees"],
    EventCountAggregate: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "_all"],
    EventMinAggregate: ["id", "title", "description", "place", "date", "image", "tag", "authorId"],
    EventMaxAggregate: ["id", "title", "description", "place", "date", "image", "tag", "authorId"],
    AttendeeCountAggregate: ["userId", "eventId", "_all"],
    AttendeeMinAggregate: ["userId", "eventId"],
    AttendeeMaxAggregate: ["userId", "eventId"],
    CommentCountAggregate: ["id", "text", "dateTime", "userId", "eventId", "_all"],
    CommentMinAggregate: ["id", "text", "dateTime", "userId", "eventId"],
    CommentMaxAggregate: ["id", "text", "dateTime", "userId", "eventId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken", "AND", "OR", "NOT", "userId", "expires", "user"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token", "AND", "OR", "NOT", "identifier", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    EmailTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    EmailTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    EmailTokenWhereUniqueInput: ["identifier", "AND", "OR", "NOT", "token", "expires"],
    EmailTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    EmailTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    ProfileWhereInput: ["AND", "OR", "NOT", "faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks", "user"],
    ProfileOrderByWithRelationInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks", "user"],
    ProfileWhereUniqueInput: ["userId", "AND", "OR", "NOT", "faculty", "career", "type", "campus", "description", "hobbies", "socialLinks", "user"],
    ProfileOrderByWithAggregationInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks", "_count", "_max", "_min"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks"],
    EventWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "author", "comments", "attendees"],
    EventOrderByWithRelationInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "author", "comments", "attendees"],
    EventWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "author", "comments", "attendees"],
    EventOrderByWithAggregationInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags", "_count", "_max", "_min"],
    EventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags"],
    AttendeeWhereInput: ["AND", "OR", "NOT", "userId", "eventId", "user", "event"],
    AttendeeOrderByWithRelationInput: ["userId", "eventId", "user", "event"],
    AttendeeWhereUniqueInput: ["userId_eventId", "AND", "OR", "NOT", "userId", "eventId", "user", "event"],
    AttendeeOrderByWithAggregationInput: ["userId", "eventId", "_count", "_max", "_min"],
    AttendeeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "eventId"],
    CommentWhereInput: ["AND", "OR", "NOT", "id", "text", "dateTime", "userId", "eventId", "user", "event"],
    CommentOrderByWithRelationInput: ["id", "text", "dateTime", "userId", "eventId", "user", "event"],
    CommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "text", "dateTime", "userId", "eventId", "user", "event"],
    CommentOrderByWithAggregationInput: ["id", "text", "dateTime", "userId", "eventId", "_count", "_max", "_min"],
    CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "dateTime", "userId", "eventId"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    EmailTokenCreateInput: ["identifier", "token", "expires"],
    EmailTokenUpdateInput: ["identifier", "token", "expires"],
    EmailTokenCreateManyInput: ["identifier", "token", "expires"],
    EmailTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    ProfileCreateInput: ["faculty", "career", "type", "campus", "description", "hobbies", "socialLinks", "user"],
    ProfileUpdateInput: ["faculty", "career", "type", "campus", "description", "hobbies", "socialLinks", "user"],
    ProfileCreateManyInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks"],
    ProfileUpdateManyMutationInput: ["faculty", "career", "type", "campus", "description", "hobbies", "socialLinks"],
    EventCreateInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "comments", "attendees"],
    EventUpdateInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "comments", "attendees"],
    EventCreateManyInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags"],
    EventUpdateManyMutationInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags"],
    AttendeeCreateInput: ["user", "event"],
    AttendeeUpdateInput: ["user", "event"],
    AttendeeCreateManyInput: ["userId", "eventId"],
    AttendeeUpdateManyMutationInput: [],
    CommentCreateInput: ["id", "text", "dateTime", "user", "event"],
    CommentUpdateInput: ["id", "text", "dateTime", "user", "event"],
    CommentCreateManyInput: ["id", "text", "dateTime", "userId", "eventId"],
    CommentUpdateManyMutationInput: ["id", "text", "dateTime"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    SortOrderInput: ["sort", "nulls"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProfileNullableRelationFilter: ["is", "isNot"],
    EventListRelationFilter: ["every", "some", "none"],
    AttendeeListRelationFilter: ["every", "some", "none"],
    CommentListRelationFilter: ["every", "some", "none"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    EventOrderByRelationAggregateInput: ["_count"],
    AttendeeOrderByRelationAggregateInput: ["_count"],
    CommentOrderByRelationAggregateInput: ["_count"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    EmailTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    EmailTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    EmailTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    EnumUserTypeNullableFilter: ["equals", "in", "notIn", "not"],
    EnumCampusNullableFilter: ["equals", "in", "notIn", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    ProfileCountOrderByAggregateInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies", "socialLinks"],
    ProfileMaxOrderByAggregateInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies"],
    ProfileMinOrderByAggregateInput: ["faculty", "career", "type", "campus", "userId", "description", "hobbies"],
    EnumUserTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumCampusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumTagFilter: ["equals", "in", "notIn", "not"],
    EventCountOrderByAggregateInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags"],
    EventMaxOrderByAggregateInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId"],
    EventMinOrderByAggregateInput: ["id", "title", "description", "place", "date", "image", "tag", "authorId"],
    EnumTagWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EventRelationFilter: ["is", "isNot"],
    AttendeeUserIdEventIdCompoundUniqueInput: ["userId", "eventId"],
    AttendeeCountOrderByAggregateInput: ["userId", "eventId"],
    AttendeeMaxOrderByAggregateInput: ["userId", "eventId"],
    AttendeeMinOrderByAggregateInput: ["userId", "eventId"],
    CommentCountOrderByAggregateInput: ["id", "text", "dateTime", "userId", "eventId"],
    CommentMaxOrderByAggregateInput: ["id", "text", "dateTime", "userId", "eventId"],
    CommentMinOrderByAggregateInput: ["id", "text", "dateTime", "userId", "eventId"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    EventCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AttendeeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    EventUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AttendeeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProfileCreatesocialLinksInput: ["set"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    NullableEnumUserTypeFieldUpdateOperationsInput: ["set"],
    NullableEnumCampusFieldUpdateOperationsInput: ["set"],
    ProfileUpdatesocialLinksInput: ["set", "push"],
    UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    EventCreatehashtagsInput: ["set"],
    UserCreateNestedOneWithoutEventsCreatedInput: ["create", "connectOrCreate", "connect"],
    CommentCreateNestedManyWithoutEventInput: ["create", "connectOrCreate", "createMany", "connect"],
    AttendeeCreateNestedManyWithoutEventInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumTagFieldUpdateOperationsInput: ["set"],
    EventUpdatehashtagsInput: ["set", "push"],
    UserUpdateOneRequiredWithoutEventsCreatedNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CommentUpdateManyWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AttendeeUpdateManyWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAttendeesInput: ["create", "connectOrCreate", "connect"],
    EventCreateNestedOneWithoutAttendeesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutAttendeesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    EventUpdateOneRequiredWithoutAttendeesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    EventCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    EventUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumUserTypeNullableFilter: ["equals", "in", "notIn", "not"],
    NestedEnumCampusNullableFilter: ["equals", "in", "notIn", "not"],
    NestedEnumUserTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumCampusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumTagFilter: ["equals", "in", "notIn", "not"],
    NestedEnumTagWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "comments", "accounts"],
    ProfileCreateWithoutUserInput: ["faculty", "career", "type", "campus", "description", "hobbies", "socialLinks"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    EventCreateWithoutAuthorInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "comments", "attendees"],
    EventCreateOrConnectWithoutAuthorInput: ["where", "create"],
    EventCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    AttendeeCreateWithoutUserInput: ["event"],
    AttendeeCreateOrConnectWithoutUserInput: ["where", "create"],
    AttendeeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    CommentCreateWithoutUserInput: ["id", "text", "dateTime", "event"],
    CommentCreateOrConnectWithoutUserInput: ["where", "create"],
    CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ProfileUpsertWithoutUserInput: ["update", "create", "where"],
    ProfileUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
    ProfileUpdateWithoutUserInput: ["faculty", "career", "type", "campus", "description", "hobbies", "socialLinks"],
    EventUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    EventUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    EventUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    EventScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "place", "date", "image", "tag", "authorId", "hashtags"],
    AttendeeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AttendeeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AttendeeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AttendeeScalarWhereInput: ["AND", "OR", "NOT", "userId", "eventId"],
    CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "dateTime", "userId", "eventId"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserCreateWithoutProfileInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutProfileInput: ["where", "data"],
    UserUpdateWithoutProfileInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "eventsCreated", "attendees", "comments", "accounts", "sessions"],
    UserCreateWithoutEventsCreatedInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "attendees", "comments", "accounts", "sessions"],
    UserCreateOrConnectWithoutEventsCreatedInput: ["where", "create"],
    CommentCreateWithoutEventInput: ["id", "text", "dateTime", "user"],
    CommentCreateOrConnectWithoutEventInput: ["where", "create"],
    CommentCreateManyEventInputEnvelope: ["data", "skipDuplicates"],
    AttendeeCreateWithoutEventInput: ["user"],
    AttendeeCreateOrConnectWithoutEventInput: ["where", "create"],
    AttendeeCreateManyEventInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutEventsCreatedInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutEventsCreatedInput: ["where", "data"],
    UserUpdateWithoutEventsCreatedInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "attendees", "comments", "accounts", "sessions"],
    CommentUpsertWithWhereUniqueWithoutEventInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutEventInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutEventInput: ["where", "data"],
    AttendeeUpsertWithWhereUniqueWithoutEventInput: ["where", "update", "create"],
    AttendeeUpdateWithWhereUniqueWithoutEventInput: ["where", "data"],
    AttendeeUpdateManyWithWhereWithoutEventInput: ["where", "data"],
    UserCreateWithoutAttendeesInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "comments", "accounts", "sessions"],
    UserCreateOrConnectWithoutAttendeesInput: ["where", "create"],
    EventCreateWithoutAttendeesInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "comments"],
    EventCreateOrConnectWithoutAttendeesInput: ["where", "create"],
    UserUpsertWithoutAttendeesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAttendeesInput: ["where", "data"],
    UserUpdateWithoutAttendeesInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "comments", "accounts", "sessions"],
    EventUpsertWithoutAttendeesInput: ["update", "create", "where"],
    EventUpdateToOneWithWhereWithoutAttendeesInput: ["where", "data"],
    EventUpdateWithoutAttendeesInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "comments"],
    UserCreateWithoutCommentsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "accounts", "sessions"],
    UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
    EventCreateWithoutCommentsInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "attendees"],
    EventCreateOrConnectWithoutCommentsInput: ["where", "create"],
    UserUpsertWithoutCommentsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    UserUpdateWithoutCommentsInput: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "image", "profile", "eventsCreated", "attendees", "accounts", "sessions"],
    EventUpsertWithoutCommentsInput: ["update", "create", "where"],
    EventUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    EventUpdateWithoutCommentsInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "author", "attendees"],
    EventCreateManyAuthorInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags"],
    AttendeeCreateManyUserInput: ["eventId"],
    CommentCreateManyUserInput: ["id", "text", "dateTime", "eventId"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    EventUpdateWithoutAuthorInput: ["id", "title", "description", "place", "date", "image", "tag", "hashtags", "comments", "attendees"],
    AttendeeUpdateWithoutUserInput: ["event"],
    CommentUpdateWithoutUserInput: ["id", "text", "dateTime", "event"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    CommentCreateManyEventInput: ["id", "text", "dateTime", "userId"],
    AttendeeCreateManyEventInput: ["userId"],
    CommentUpdateWithoutEventInput: ["id", "text", "dateTime", "user"],
    AttendeeUpdateWithoutEventInput: ["user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
