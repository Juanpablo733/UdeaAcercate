"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCountAggregate_1 = require("../outputs/InformationCountAggregate");
const InformationMaxAggregate_1 = require("../outputs/InformationMaxAggregate");
const InformationMinAggregate_1 = require("../outputs/InformationMinAggregate");
const Tag_1 = require("../../enums/Tag");
let InformationGroupBy = class InformationGroupBy {
};
exports.InformationGroupBy = InformationGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InformationGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationGroupBy.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationGroupBy.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationGroupBy.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCountAggregate_1.InformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCountAggregate_1.InformationCountAggregate)
], InformationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMinAggregate_1.InformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMinAggregate_1.InformationMinAggregate)
], InformationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMaxAggregate_1.InformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMaxAggregate_1.InformationMaxAggregate)
], InformationGroupBy.prototype, "_max", void 0);
exports.InformationGroupBy = InformationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InformationGroupBy", {})
], InformationGroupBy);
