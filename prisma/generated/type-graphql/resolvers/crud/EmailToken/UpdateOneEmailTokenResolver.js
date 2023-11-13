"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneEmailTokenArgs_1 = require("./args/UpdateOneEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let UpdateOneEmailTokenResolver = exports.UpdateOneEmailTokenResolver = class UpdateOneEmailTokenResolver {
    async updateOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmailTokenArgs_1.UpdateOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneEmailTokenResolver.prototype, "updateOneEmailToken", null);
exports.UpdateOneEmailTokenResolver = UpdateOneEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], UpdateOneEmailTokenResolver);
