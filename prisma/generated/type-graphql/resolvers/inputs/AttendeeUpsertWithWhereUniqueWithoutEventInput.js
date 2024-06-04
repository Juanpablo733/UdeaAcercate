"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpsertWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateWithoutEventInput_1 = require("../inputs/AttendeeCreateWithoutEventInput");
const AttendeeUpdateWithoutEventInput_1 = require("../inputs/AttendeeUpdateWithoutEventInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpsertWithWhereUniqueWithoutEventInput = class AttendeeUpsertWithWhereUniqueWithoutEventInput {
};
exports.AttendeeUpsertWithWhereUniqueWithoutEventInput = AttendeeUpsertWithWhereUniqueWithoutEventInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeUpsertWithWhereUniqueWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateWithoutEventInput_1.AttendeeUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateWithoutEventInput_1.AttendeeUpdateWithoutEventInput)
], AttendeeUpsertWithWhereUniqueWithoutEventInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput)
], AttendeeUpsertWithWhereUniqueWithoutEventInput.prototype, "create", void 0);
exports.AttendeeUpsertWithWhereUniqueWithoutEventInput = AttendeeUpsertWithWhereUniqueWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpsertWithWhereUniqueWithoutEventInput", {})
], AttendeeUpsertWithWhereUniqueWithoutEventInput);
