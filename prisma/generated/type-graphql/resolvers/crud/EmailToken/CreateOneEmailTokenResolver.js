"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneEmailTokenArgs_1 = require("./args/CreateOneEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const helpers_1 = require("../../../helpers");
let CreateOneEmailTokenResolver = exports.CreateOneEmailTokenResolver = class CreateOneEmailTokenResolver {
    async createOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEmailTokenArgs_1.CreateOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneEmailTokenResolver.prototype, "createOneEmailToken", null);
exports.CreateOneEmailTokenResolver = CreateOneEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], CreateOneEmailTokenResolver);
