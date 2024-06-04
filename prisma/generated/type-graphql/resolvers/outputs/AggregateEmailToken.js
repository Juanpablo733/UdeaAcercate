"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmailToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCountAggregate_1 = require("../outputs/EmailTokenCountAggregate");
const EmailTokenMaxAggregate_1 = require("../outputs/EmailTokenMaxAggregate");
const EmailTokenMinAggregate_1 = require("../outputs/EmailTokenMinAggregate");
let AggregateEmailToken = class AggregateEmailToken {
};
exports.AggregateEmailToken = AggregateEmailToken;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenCountAggregate_1.EmailTokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenCountAggregate_1.EmailTokenCountAggregate)
], AggregateEmailToken.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMinAggregate_1.EmailTokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMinAggregate_1.EmailTokenMinAggregate)
], AggregateEmailToken.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMaxAggregate_1.EmailTokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMaxAggregate_1.EmailTokenMaxAggregate)
], AggregateEmailToken.prototype, "_max", void 0);
exports.AggregateEmailToken = AggregateEmailToken = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEmailToken", {})
], AggregateEmailToken);
