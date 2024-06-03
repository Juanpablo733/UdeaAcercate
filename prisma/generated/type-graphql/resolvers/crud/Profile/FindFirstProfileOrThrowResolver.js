"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProfileOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProfileOrThrowArgs_1 = require("./args/FindFirstProfileOrThrowArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let FindFirstProfileOrThrowResolver = class FindFirstProfileOrThrowResolver {
    async findFirstProfileOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstProfileOrThrowResolver = FindFirstProfileOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProfileOrThrowArgs_1.FindFirstProfileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProfileOrThrowResolver.prototype, "findFirstProfileOrThrow", null);
exports.FindFirstProfileOrThrowResolver = FindFirstProfileOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], FindFirstProfileOrThrowResolver);
