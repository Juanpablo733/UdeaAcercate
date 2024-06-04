"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyUserInputEnvelope_1 = require("../inputs/AttendeeCreateManyUserInputEnvelope");
const AttendeeCreateOrConnectWithoutUserInput_1 = require("../inputs/AttendeeCreateOrConnectWithoutUserInput");
const AttendeeCreateWithoutUserInput_1 = require("../inputs/AttendeeCreateWithoutUserInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeCreateNestedManyWithoutUserInput = class AttendeeCreateNestedManyWithoutUserInput {
};
exports.AttendeeCreateNestedManyWithoutUserInput = AttendeeCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateOrConnectWithoutUserInput_1.AttendeeCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateManyUserInputEnvelope_1.AttendeeCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateManyUserInputEnvelope_1.AttendeeCreateManyUserInputEnvelope)
], AttendeeCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.AttendeeCreateNestedManyWithoutUserInput = AttendeeCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateNestedManyWithoutUserInput", {})
], AttendeeCreateNestedManyWithoutUserInput);
