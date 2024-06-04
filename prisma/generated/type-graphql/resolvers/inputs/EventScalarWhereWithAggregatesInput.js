"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let EventScalarWhereWithAggregatesInput = class EventScalarWhereWithAggregatesInput {
};
exports.EventScalarWhereWithAggregatesInput = EventScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], EventScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], EventScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], EventScalarWhereWithAggregatesInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], EventScalarWhereWithAggregatesInput.prototype, "place", void 0);
exports.EventScalarWhereWithAggregatesInput = EventScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventScalarWhereWithAggregatesInput", {})
], EventScalarWhereWithAggregatesInput);
