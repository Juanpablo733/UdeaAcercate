"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeCreateManyUserInput = class AttendeeCreateManyUserInput {
};
exports.AttendeeCreateManyUserInput = AttendeeCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeCreateManyUserInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeCreateManyUserInput.prototype, "dateTime", void 0);
exports.AttendeeCreateManyUserInput = AttendeeCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateManyUserInput", {})
], AttendeeCreateManyUserInput);
