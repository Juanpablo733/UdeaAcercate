"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailTokenOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEmailTokenOrThrowArgs_1 = require("./args/FindUniqueEmailTokenOrThrowArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let FindUniqueEmailTokenOrThrowResolver = class FindUniqueEmailTokenOrThrowResolver {
    async getEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueEmailTokenOrThrowResolver = FindUniqueEmailTokenOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailTokenOrThrowArgs_1.FindUniqueEmailTokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmailTokenOrThrowResolver.prototype, "getEmailToken", null);
exports.FindUniqueEmailTokenOrThrowResolver = FindUniqueEmailTokenOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], FindUniqueEmailTokenOrThrowResolver);
