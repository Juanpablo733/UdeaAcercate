"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAttendeeAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Event_1 = require("../outputs/Event");
const User_1 = require("../outputs/User");
let CreateManyAttendeeAndReturnOutputType = class CreateManyAttendeeAndReturnOutputType {
};
exports.CreateManyAttendeeAndReturnOutputType = CreateManyAttendeeAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAttendeeAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAttendeeAndReturnOutputType.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAttendeeAndReturnOutputType.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyAttendeeAndReturnOutputType.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Event_1.Event, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Event_1.Event !== "undefined" && Event_1.Event) === "function" ? _b : Object)
], CreateManyAttendeeAndReturnOutputType.prototype, "event", void 0);
exports.CreateManyAttendeeAndReturnOutputType = CreateManyAttendeeAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAttendeeAndReturnOutputType", {})
], CreateManyAttendeeAndReturnOutputType);
