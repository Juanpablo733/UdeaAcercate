"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateNestedManyWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyEventInputEnvelope_1 = require("../inputs/AttendeeCreateManyEventInputEnvelope");
const AttendeeCreateOrConnectWithoutEventInput_1 = require("../inputs/AttendeeCreateOrConnectWithoutEventInput");
const AttendeeCreateWithoutEventInput_1 = require("../inputs/AttendeeCreateWithoutEventInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeCreateNestedManyWithoutEventInput = exports.AttendeeCreateNestedManyWithoutEventInput = class AttendeeCreateNestedManyWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutEventInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateOrConnectWithoutEventInput_1.AttendeeCreateOrConnectWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutEventInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateManyEventInputEnvelope_1.AttendeeCreateManyEventInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateManyEventInputEnvelope_1.AttendeeCreateManyEventInputEnvelope)
], AttendeeCreateNestedManyWithoutEventInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutEventInput.prototype, "connect", void 0);
exports.AttendeeCreateNestedManyWithoutEventInput = AttendeeCreateNestedManyWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateNestedManyWithoutEventInput", {})
], AttendeeCreateNestedManyWithoutEventInput);
