"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventMaxAggregate = exports.EventMaxAggregate = class EventMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxAggregate.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxAggregate.prototype, "place", void 0);
exports.EventMaxAggregate = EventMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventMaxAggregate", {})
], EventMaxAggregate);
