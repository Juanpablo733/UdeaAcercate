"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenOrderByWithRelationInput_1 = require("../../../inputs/EmailTokenOrderByWithRelationInput");
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let AggregateEmailTokenArgs = class AggregateEmailTokenArgs {
};
exports.AggregateEmailTokenArgs = AggregateEmailTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], AggregateEmailTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenOrderByWithRelationInput_1.EmailTokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEmailTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], AggregateEmailTokenArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmailTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmailTokenArgs.prototype, "skip", void 0);
exports.AggregateEmailTokenArgs = AggregateEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEmailTokenArgs);
