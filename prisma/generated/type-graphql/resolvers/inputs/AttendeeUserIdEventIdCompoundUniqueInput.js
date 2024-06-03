"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUserIdEventIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeUserIdEventIdCompoundUniqueInput = class AttendeeUserIdEventIdCompoundUniqueInput {
};
exports.AttendeeUserIdEventIdCompoundUniqueInput = AttendeeUserIdEventIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeUserIdEventIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeUserIdEventIdCompoundUniqueInput.prototype, "eventId", void 0);
exports.AttendeeUserIdEventIdCompoundUniqueInput = AttendeeUserIdEventIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUserIdEventIdCompoundUniqueInput", {})
], AttendeeUserIdEventIdCompoundUniqueInput);
