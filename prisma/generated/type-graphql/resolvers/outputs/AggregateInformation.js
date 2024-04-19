"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInformation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCountAggregate_1 = require("../outputs/InformationCountAggregate");
const InformationMaxAggregate_1 = require("../outputs/InformationMaxAggregate");
const InformationMinAggregate_1 = require("../outputs/InformationMinAggregate");
let AggregateInformation = exports.AggregateInformation = class AggregateInformation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCountAggregate_1.InformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCountAggregate_1.InformationCountAggregate)
], AggregateInformation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMinAggregate_1.InformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMinAggregate_1.InformationMinAggregate)
], AggregateInformation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMaxAggregate_1.InformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMaxAggregate_1.InformationMaxAggregate)
], AggregateInformation.prototype, "_max", void 0);
exports.AggregateInformation = AggregateInformation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInformation", {})
], AggregateInformation);
