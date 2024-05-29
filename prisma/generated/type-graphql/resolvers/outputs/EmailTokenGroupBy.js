"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCountAggregate_1 = require("../outputs/EmailTokenCountAggregate");
const EmailTokenMaxAggregate_1 = require("../outputs/EmailTokenMaxAggregate");
const EmailTokenMinAggregate_1 = require("../outputs/EmailTokenMinAggregate");
let EmailTokenGroupBy = exports.EmailTokenGroupBy = class EmailTokenGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenGroupBy.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenGroupBy.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmailTokenGroupBy.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenCountAggregate_1.EmailTokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenCountAggregate_1.EmailTokenCountAggregate)
], EmailTokenGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMinAggregate_1.EmailTokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMinAggregate_1.EmailTokenMinAggregate)
], EmailTokenGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMaxAggregate_1.EmailTokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMaxAggregate_1.EmailTokenMaxAggregate)
], EmailTokenGroupBy.prototype, "_max", void 0);
exports.EmailTokenGroupBy = EmailTokenGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailTokenGroupBy", {})
], EmailTokenGroupBy);
