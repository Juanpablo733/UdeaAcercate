"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeOrderByRelationAggregateInput_1 = require("../inputs/AttendeeOrderByRelationAggregateInput");
const InformationOrderByWithRelationInput_1 = require("../inputs/InformationOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EventOrderByWithRelationInput = class EventOrderByWithRelationInput {
};
exports.EventOrderByWithRelationInput = EventOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventOrderByWithRelationInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventOrderByWithRelationInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], EventOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationOrderByWithRelationInput_1.InformationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationOrderByWithRelationInput_1.InformationOrderByWithRelationInput)
], EventOrderByWithRelationInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeOrderByRelationAggregateInput_1.AttendeeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeOrderByRelationAggregateInput_1.AttendeeOrderByRelationAggregateInput)
], EventOrderByWithRelationInput.prototype, "attendees", void 0);
exports.EventOrderByWithRelationInput = EventOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventOrderByWithRelationInput", {})
], EventOrderByWithRelationInput);
