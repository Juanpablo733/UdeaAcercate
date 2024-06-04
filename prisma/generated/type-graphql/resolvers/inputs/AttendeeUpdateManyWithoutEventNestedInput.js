"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateManyWithoutEventNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyEventInputEnvelope_1 = require("../inputs/AttendeeCreateManyEventInputEnvelope");
const AttendeeCreateOrConnectWithoutEventInput_1 = require("../inputs/AttendeeCreateOrConnectWithoutEventInput");
const AttendeeCreateWithoutEventInput_1 = require("../inputs/AttendeeCreateWithoutEventInput");
const AttendeeScalarWhereInput_1 = require("../inputs/AttendeeScalarWhereInput");
const AttendeeUpdateManyWithWhereWithoutEventInput_1 = require("../inputs/AttendeeUpdateManyWithWhereWithoutEventInput");
const AttendeeUpdateWithWhereUniqueWithoutEventInput_1 = require("../inputs/AttendeeUpdateWithWhereUniqueWithoutEventInput");
const AttendeeUpsertWithWhereUniqueWithoutEventInput_1 = require("../inputs/AttendeeUpsertWithWhereUniqueWithoutEventInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpdateManyWithoutEventNestedInput = class AttendeeUpdateManyWithoutEventNestedInput {
};
exports.AttendeeUpdateManyWithoutEventNestedInput = AttendeeUpdateManyWithoutEventNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateOrConnectWithoutEventInput_1.AttendeeCreateOrConnectWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpsertWithWhereUniqueWithoutEventInput_1.AttendeeUpsertWithWhereUniqueWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateManyEventInputEnvelope_1.AttendeeCreateManyEventInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateManyEventInputEnvelope_1.AttendeeCreateManyEventInputEnvelope)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpdateWithWhereUniqueWithoutEventInput_1.AttendeeUpdateWithWhereUniqueWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeUpdateManyWithWhereWithoutEventInput_1.AttendeeUpdateManyWithWhereWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarWhereInput_1.AttendeeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeUpdateManyWithoutEventNestedInput.prototype, "deleteMany", void 0);
exports.AttendeeUpdateManyWithoutEventNestedInput = AttendeeUpdateManyWithoutEventNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateManyWithoutEventNestedInput", {})
], AttendeeUpdateManyWithoutEventNestedInput);
