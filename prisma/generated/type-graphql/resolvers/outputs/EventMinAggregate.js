"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventMinAggregate = class EventMinAggregate {
};
exports.EventMinAggregate = EventMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinAggregate.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinAggregate.prototype, "place", void 0);
exports.EventMinAggregate = EventMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventMinAggregate", {})
], EventMinAggregate);
