"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateOrConnectWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateWithoutEventInput_1 = require("../inputs/AttendeeCreateWithoutEventInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeCreateOrConnectWithoutEventInput = exports.AttendeeCreateOrConnectWithoutEventInput = class AttendeeCreateOrConnectWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeCreateOrConnectWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateWithoutEventInput_1.AttendeeCreateWithoutEventInput)
], AttendeeCreateOrConnectWithoutEventInput.prototype, "create", void 0);
exports.AttendeeCreateOrConnectWithoutEventInput = AttendeeCreateOrConnectWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateOrConnectWithoutEventInput", {})
], AttendeeCreateOrConnectWithoutEventInput);
