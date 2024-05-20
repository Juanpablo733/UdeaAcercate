"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventNullableRelationFilter = exports.EventNullableRelationFilter = class EventNullableRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventNullableRelationFilter.prototype, "isNot", void 0);
exports.EventNullableRelationFilter = EventNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EventNullableRelationFilter", {})
], EventNullableRelationFilter);
