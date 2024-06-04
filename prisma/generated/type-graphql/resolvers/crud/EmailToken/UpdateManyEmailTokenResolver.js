"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEmailTokenArgs_1 = require("./args/UpdateManyEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEmailTokenResolver = class UpdateManyEmailTokenResolver {
    async updateManyEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyEmailTokenResolver = UpdateManyEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmailTokenArgs_1.UpdateManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEmailTokenResolver.prototype, "updateManyEmailToken", null);
exports.UpdateManyEmailTokenResolver = UpdateManyEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], UpdateManyEmailTokenResolver);
