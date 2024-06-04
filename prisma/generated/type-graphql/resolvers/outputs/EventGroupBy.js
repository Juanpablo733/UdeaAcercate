"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCountAggregate_1 = require("../outputs/EventCountAggregate");
const EventMaxAggregate_1 = require("../outputs/EventMaxAggregate");
const EventMinAggregate_1 = require("../outputs/EventMinAggregate");
let EventGroupBy = class EventGroupBy {
};
exports.EventGroupBy = EventGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventGroupBy.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventGroupBy.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCountAggregate_1.EventCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCountAggregate_1.EventCountAggregate)
], EventGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventMinAggregate_1.EventMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventMinAggregate_1.EventMinAggregate)
], EventGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventMaxAggregate_1.EventMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventMaxAggregate_1.EventMaxAggregate)
], EventGroupBy.prototype, "_max", void 0);
exports.EventGroupBy = EventGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventGroupBy", {})
], EventGroupBy);
