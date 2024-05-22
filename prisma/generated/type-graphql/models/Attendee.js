"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendee = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Attendee = exports.Attendee = class Attendee {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Attendee.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Attendee.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Attendee.prototype, "dateTime", void 0);
exports.Attendee = Attendee = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Attendee", {})
], Attendee);
