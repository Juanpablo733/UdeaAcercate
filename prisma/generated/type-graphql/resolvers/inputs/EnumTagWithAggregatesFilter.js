"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTagWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTagFilter_1 = require("../inputs/NestedEnumTagFilter");
const NestedEnumTagWithAggregatesFilter_1 = require("../inputs/NestedEnumTagWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Tag_1 = require("../../enums/Tag");
let EnumTagWithAggregatesFilter = exports.EnumTagWithAggregatesFilter = class EnumTagWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTagWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTagWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTagWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagWithAggregatesFilter_1.NestedEnumTagWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagWithAggregatesFilter_1.NestedEnumTagWithAggregatesFilter)
], EnumTagWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumTagWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1.NestedEnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter_1.NestedEnumTagFilter)
], EnumTagWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1.NestedEnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter_1.NestedEnumTagFilter)
], EnumTagWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumTagWithAggregatesFilter = EnumTagWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTagWithAggregatesFilter", {})
], EnumTagWithAggregatesFilter);
