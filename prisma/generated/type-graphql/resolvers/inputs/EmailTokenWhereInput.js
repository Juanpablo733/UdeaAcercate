"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let EmailTokenWhereInput = class EmailTokenWhereInput {
};
exports.EmailTokenWhereInput = EmailTokenWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmailTokenWhereInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmailTokenWhereInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EmailTokenWhereInput.prototype, "expires", void 0);
exports.EmailTokenWhereInput = EmailTokenWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenWhereInput", {})
], EmailTokenWhereInput);
