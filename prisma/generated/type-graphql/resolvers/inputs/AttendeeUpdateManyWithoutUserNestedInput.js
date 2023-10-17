"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyUserInputEnvelope_1 = require("../inputs/AttendeeCreateManyUserInputEnvelope");
const AttendeeCreateOrConnectWithoutUserInput_1 = require("../inputs/AttendeeCreateOrConnectWithoutUserInput");
const AttendeeCreateWithoutUserInput_1 = require("../inputs/AttendeeCreateWithoutUserInput");
const AttendeeScalarWhereInput_1 = require("../inputs/AttendeeScalarWhereInput");
const AttendeeUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AttendeeUpdateManyWithWhereWithoutUserInput");
const AttendeeUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AttendeeUpdateWithWhereUniqueWithoutUserInput");
const AttendeeUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AttendeeUpsertWithWhereUniqueWithoutUserInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpdateManyWithoutUserNestedInput = exports.AttendeeUpdateManyWithoutUserNestedInput = class AttendeeUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateOrConnectWithoutUserInput_1.AttendeeCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpsertWithWhereUniqueWithoutUserInput_1.AttendeeUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateManyUserInputEnvelope_1.AttendeeCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateManyUserInputEnvelope_1.AttendeeCreateManyUserInputEnvelope)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpdateWithWhereUniqueWithoutUserInput_1.AttendeeUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpdateManyWithWhereWithoutUserInput_1.AttendeeUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarWhereInput_1.AttendeeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.AttendeeUpdateManyWithoutUserNestedInput = AttendeeUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateManyWithoutUserNestedInput", {})
], AttendeeUpdateManyWithoutUserNestedInput);
