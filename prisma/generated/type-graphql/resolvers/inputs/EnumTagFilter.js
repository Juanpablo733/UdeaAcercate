"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTagFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTagFilter_1 = require("../inputs/NestedEnumTagFilter");
const Tag_1 = require("../../enums/Tag");
let EnumTagFilter = class EnumTagFilter {
};
exports.EnumTagFilter = EnumTagFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTagFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTagFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTagFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1.NestedEnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter_1.NestedEnumTagFilter)
], EnumTagFilter.prototype, "not", void 0);
exports.EnumTagFilter = EnumTagFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTagFilter", {})
], EnumTagFilter);
