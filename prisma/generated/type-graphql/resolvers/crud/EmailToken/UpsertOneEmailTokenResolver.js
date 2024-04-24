"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneEmailTokenArgs_1 = require("./args/UpsertOneEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let UpsertOneEmailTokenResolver = exports.UpsertOneEmailTokenResolver = class UpsertOneEmailTokenResolver {
    async upsertOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEmailTokenArgs_1.UpsertOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneEmailTokenResolver.prototype, "upsertOneEmailToken", null);
exports.UpsertOneEmailTokenResolver = UpsertOneEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], UpsertOneEmailTokenResolver);
