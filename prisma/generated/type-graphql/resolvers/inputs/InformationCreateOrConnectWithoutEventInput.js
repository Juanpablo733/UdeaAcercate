"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateOrConnectWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutEventInput_1 = require("../inputs/InformationCreateWithoutEventInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateOrConnectWithoutEventInput = exports.InformationCreateOrConnectWithoutEventInput = class InformationCreateOrConnectWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationCreateOrConnectWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput)
], InformationCreateOrConnectWithoutEventInput.prototype, "create", void 0);
exports.InformationCreateOrConnectWithoutEventInput = InformationCreateOrConnectWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateOrConnectWithoutEventInput", {})
], InformationCreateOrConnectWithoutEventInput);
