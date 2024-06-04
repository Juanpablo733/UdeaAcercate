"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyEmailTokenArgs_1 = require("./args/CreateManyEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyEmailTokenResolver = class CreateManyEmailTokenResolver {
    async createManyEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyEmailTokenResolver = CreateManyEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmailTokenArgs_1.CreateManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyEmailTokenResolver.prototype, "createManyEmailToken", null);
exports.CreateManyEmailTokenResolver = CreateManyEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], CreateManyEmailTokenResolver);
