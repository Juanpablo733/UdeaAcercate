"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCreateInput_1 = require("../../../inputs/EmailTokenCreateInput");
const EmailTokenUpdateInput_1 = require("../../../inputs/EmailTokenUpdateInput");
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let UpsertOneEmailTokenArgs = exports.UpsertOneEmailTokenArgs = class UpsertOneEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], UpsertOneEmailTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenCreateInput_1.EmailTokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenCreateInput_1.EmailTokenCreateInput)
], UpsertOneEmailTokenArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenUpdateInput_1.EmailTokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenUpdateInput_1.EmailTokenUpdateInput)
], UpsertOneEmailTokenArgs.prototype, "update", void 0);
exports.UpsertOneEmailTokenArgs = UpsertOneEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEmailTokenArgs);
