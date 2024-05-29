"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateManyEventInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyEventInput_1 = require("../inputs/AttendeeCreateManyEventInput");
let AttendeeCreateManyEventInputEnvelope = exports.AttendeeCreateManyEventInputEnvelope = class AttendeeCreateManyEventInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateManyEventInput_1.AttendeeCreateManyEventInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateManyEventInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttendeeCreateManyEventInputEnvelope.prototype, "skipDuplicates", void 0);
exports.AttendeeCreateManyEventInputEnvelope = AttendeeCreateManyEventInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateManyEventInputEnvelope", {})
], AttendeeCreateManyEventInputEnvelope);
