"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeCreateManyInput = class AttendeeCreateManyInput {
};
exports.AttendeeCreateManyInput = AttendeeCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeCreateManyInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeCreateManyInput.prototype, "dateTime", void 0);
exports.AttendeeCreateManyInput = AttendeeCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateManyInput", {})
], AttendeeCreateManyInput);
