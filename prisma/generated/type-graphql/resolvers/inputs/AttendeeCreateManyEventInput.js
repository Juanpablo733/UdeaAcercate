"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateManyEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeCreateManyEventInput = exports.AttendeeCreateManyEventInput = class AttendeeCreateManyEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeCreateManyEventInput.prototype, "userId", void 0);
exports.AttendeeCreateManyEventInput = AttendeeCreateManyEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateManyEventInput", {})
], AttendeeCreateManyEventInput);
