"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstEmailTokenArgs_1 = require("./args/FindFirstEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let FindFirstEmailTokenResolver = class FindFirstEmailTokenResolver {
    async findFirstEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstEmailTokenResolver = FindFirstEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailTokenArgs_1.FindFirstEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEmailTokenResolver.prototype, "findFirstEmailToken", null);
exports.FindFirstEmailTokenResolver = FindFirstEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], FindFirstEmailTokenResolver);
