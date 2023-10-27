"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProfileArgs_1 = require("./args/FindUniqueProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let FindUniqueProfileResolver = exports.FindUniqueProfileResolver = class FindUniqueProfileResolver {
    async profile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProfileArgs_1.FindUniqueProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProfileResolver.prototype, "profile", null);
exports.FindUniqueProfileResolver = FindUniqueProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], FindUniqueProfileResolver);
