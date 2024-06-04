"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCountOrderByAggregateInput_1 = require("../inputs/ProfileCountOrderByAggregateInput");
const ProfileMaxOrderByAggregateInput_1 = require("../inputs/ProfileMaxOrderByAggregateInput");
const ProfileMinOrderByAggregateInput_1 = require("../inputs/ProfileMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileOrderByWithAggregationInput = class ProfileOrderByWithAggregationInput {
};
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProfileOrderByWithAggregationInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileOrderByWithAggregationInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput)
], ProfileOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {})
], ProfileOrderByWithAggregationInput);
