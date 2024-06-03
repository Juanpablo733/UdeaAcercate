"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProfileOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProfileOrThrowArgs_1 = require("./args/FindUniqueProfileOrThrowArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let FindUniqueProfileOrThrowResolver = class FindUniqueProfileOrThrowResolver {
    async getProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueProfileOrThrowResolver = FindUniqueProfileOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProfileOrThrowArgs_1.FindUniqueProfileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProfileOrThrowResolver.prototype, "getProfile", null);
exports.FindUniqueProfileOrThrowResolver = FindUniqueProfileOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], FindUniqueProfileOrThrowResolver);
