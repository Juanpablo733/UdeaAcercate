"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const AttendeeOrderByRelationAggregateInput_1 = require("../inputs/AttendeeOrderByRelationAggregateInput");
const CommentOrderByRelationAggregateInput_1 = require("../inputs/CommentOrderByRelationAggregateInput");
const EventOrderByRelationAggregateInput_1 = require("../inputs/EventOrderByRelationAggregateInput");
const InformationOrderByRelationAggregateInput_1 = require("../inputs/InformationOrderByRelationAggregateInput");
const ProfileOrderByWithRelationInput_1 = require("../inputs/ProfileOrderByWithRelationInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "profile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventOrderByRelationAggregateInput_1.EventOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventOrderByRelationAggregateInput_1.EventOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "eventsCreated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeOrderByRelationAggregateInput_1.AttendeeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeOrderByRelationAggregateInput_1.AttendeeOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationOrderByRelationAggregateInput_1.InformationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationOrderByRelationAggregateInput_1.InformationOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "newsCreated", void 0);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
], UserOrderByWithRelationInput);
