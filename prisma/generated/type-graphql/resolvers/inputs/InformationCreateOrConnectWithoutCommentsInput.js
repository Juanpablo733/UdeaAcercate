"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutCommentsInput_1 = require("../inputs/InformationCreateWithoutCommentsInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateOrConnectWithoutCommentsInput = class InformationCreateOrConnectWithoutCommentsInput {
};
exports.InformationCreateOrConnectWithoutCommentsInput = InformationCreateOrConnectWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput)
], InformationCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.InformationCreateOrConnectWithoutCommentsInput = InformationCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateOrConnectWithoutCommentsInput", {})
], InformationCreateOrConnectWithoutCommentsInput);
