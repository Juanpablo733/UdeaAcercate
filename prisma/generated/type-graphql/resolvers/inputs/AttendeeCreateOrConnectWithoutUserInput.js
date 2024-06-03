"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateWithoutUserInput_1 = require("../inputs/AttendeeCreateWithoutUserInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeCreateOrConnectWithoutUserInput = class AttendeeCreateOrConnectWithoutUserInput {
};
exports.AttendeeCreateOrConnectWithoutUserInput = AttendeeCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput)
], AttendeeCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.AttendeeCreateOrConnectWithoutUserInput = AttendeeCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateOrConnectWithoutUserInput", {})
], AttendeeCreateOrConnectWithoutUserInput);
