"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEmailTokenArgs_1 = require("./args/AggregateEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const AggregateEmailToken_1 = require("../../outputs/AggregateEmailToken");
const helpers_1 = require("../../../helpers");
let AggregateEmailTokenResolver = class AggregateEmailTokenResolver {
    async aggregateEmailToken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateEmailTokenResolver = AggregateEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmailToken_1.AggregateEmailToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmailTokenArgs_1.AggregateEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEmailTokenResolver.prototype, "aggregateEmailToken", null);
exports.AggregateEmailTokenResolver = AggregateEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], AggregateEmailTokenResolver);
