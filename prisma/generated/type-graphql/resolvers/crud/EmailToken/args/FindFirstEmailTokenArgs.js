"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenOrderByWithRelationInput_1 = require("../../../inputs/EmailTokenOrderByWithRelationInput");
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
const EmailTokenScalarFieldEnum_1 = require("../../../../enums/EmailTokenScalarFieldEnum");
let FindFirstEmailTokenArgs = exports.FindFirstEmailTokenArgs = class FindFirstEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], FindFirstEmailTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenOrderByWithRelationInput_1.EmailTokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmailTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], FindFirstEmailTokenArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmailTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmailTokenArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenScalarFieldEnum_1.EmailTokenScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmailTokenArgs.prototype, "distinct", void 0);
exports.FindFirstEmailTokenArgs = FindFirstEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEmailTokenArgs);
