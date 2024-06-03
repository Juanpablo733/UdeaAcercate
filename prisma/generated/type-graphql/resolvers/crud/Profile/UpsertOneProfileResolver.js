"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneProfileArgs_1 = require("./args/UpsertOneProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let UpsertOneProfileResolver = class UpsertOneProfileResolver {
    async upsertOneProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneProfileResolver = UpsertOneProfileResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProfileArgs_1.UpsertOneProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProfileResolver.prototype, "upsertOneProfile", null);
exports.UpsertOneProfileResolver = UpsertOneProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], UpsertOneProfileResolver);
