"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EmailTokenWhereInput_1 = require("../inputs/EmailTokenWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let EmailTokenWhereUniqueInput = class EmailTokenWhereUniqueInput {
};
exports.EmailTokenWhereUniqueInput = EmailTokenWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenWhereUniqueInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput_1.EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput_1.EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenWhereInput_1.EmailTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailTokenWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EmailTokenWhereUniqueInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EmailTokenWhereUniqueInput.prototype, "expires", void 0);
exports.EmailTokenWhereUniqueInput = EmailTokenWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenWhereUniqueInput", {})
], EmailTokenWhereUniqueInput);
