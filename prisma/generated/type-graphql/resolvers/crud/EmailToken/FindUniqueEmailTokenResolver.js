"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEmailTokenArgs_1 = require("./args/FindUniqueEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let FindUniqueEmailTokenResolver = exports.FindUniqueEmailTokenResolver = class FindUniqueEmailTokenResolver {
    async emailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailTokenArgs_1.FindUniqueEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmailTokenResolver.prototype, "emailToken", null);
exports.FindUniqueEmailTokenResolver = FindUniqueEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], FindUniqueEmailTokenResolver);
