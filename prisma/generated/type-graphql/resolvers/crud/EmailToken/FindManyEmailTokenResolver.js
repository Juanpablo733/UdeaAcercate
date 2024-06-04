"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyEmailTokenArgs_1 = require("./args/FindManyEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let FindManyEmailTokenResolver = class FindManyEmailTokenResolver {
    async emailTokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyEmailTokenResolver = FindManyEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailToken_1.EmailToken], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmailTokenArgs_1.FindManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyEmailTokenResolver.prototype, "emailTokens", null);
exports.FindManyEmailTokenResolver = FindManyEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], FindManyEmailTokenResolver);
