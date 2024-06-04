"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutAuthorInput_1 = require("../inputs/InformationCreateWithoutAuthorInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateOrConnectWithoutAuthorInput = class InformationCreateOrConnectWithoutAuthorInput {
};
exports.InformationCreateOrConnectWithoutAuthorInput = InformationCreateOrConnectWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput)
], InformationCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
exports.InformationCreateOrConnectWithoutAuthorInput = InformationCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateOrConnectWithoutAuthorInput", {})
], InformationCreateOrConnectWithoutAuthorInput);
