"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCountAttendeesArgs_1 = require("./args/EventCountAttendeesArgs");
let EventCount = class EventCount {
    getAttendees(root, args) {
        return root.attendees;
    }
};
exports.EventCount = EventCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "attendees",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [EventCount, EventCountAttendeesArgs_1.EventCountAttendeesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], EventCount.prototype, "getAttendees", null);
exports.EventCount = EventCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventCount", {})
], EventCount);
