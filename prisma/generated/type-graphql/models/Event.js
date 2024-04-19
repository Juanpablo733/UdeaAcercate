"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCount_1 = require("../resolvers/outputs/EventCount");
let Event = exports.Event = class Event {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Event.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Event.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Event.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Event.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCount_1.EventCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCount_1.EventCount)
], Event.prototype, "_count", void 0);
exports.Event = Event = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Event", {})
], Event);
