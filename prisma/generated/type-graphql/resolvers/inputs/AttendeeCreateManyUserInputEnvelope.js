"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyUserInput_1 = require("../inputs/AttendeeCreateManyUserInput");
let AttendeeCreateManyUserInputEnvelope = exports.AttendeeCreateManyUserInputEnvelope = class AttendeeCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateManyUserInput_1.AttendeeCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttendeeCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.AttendeeCreateManyUserInputEnvelope = AttendeeCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateManyUserInputEnvelope", {})
], AttendeeCreateManyUserInputEnvelope);
