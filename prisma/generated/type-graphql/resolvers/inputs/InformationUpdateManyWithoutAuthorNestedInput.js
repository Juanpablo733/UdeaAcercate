"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateManyWithoutAuthorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateManyAuthorInputEnvelope_1 = require("../inputs/InformationCreateManyAuthorInputEnvelope");
const InformationCreateOrConnectWithoutAuthorInput_1 = require("../inputs/InformationCreateOrConnectWithoutAuthorInput");
const InformationCreateWithoutAuthorInput_1 = require("../inputs/InformationCreateWithoutAuthorInput");
const InformationScalarWhereInput_1 = require("../inputs/InformationScalarWhereInput");
const InformationUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/InformationUpdateManyWithWhereWithoutAuthorInput");
const InformationUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/InformationUpdateWithWhereUniqueWithoutAuthorInput");
const InformationUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/InformationUpsertWithWhereUniqueWithoutAuthorInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationUpdateManyWithoutAuthorNestedInput = class InformationUpdateManyWithoutAuthorNestedInput {
};
exports.InformationUpdateManyWithoutAuthorNestedInput = InformationUpdateManyWithoutAuthorNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateOrConnectWithoutAuthorInput_1.InformationCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationUpsertWithWhereUniqueWithoutAuthorInput_1.InformationUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateManyAuthorInputEnvelope_1.InformationCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateManyAuthorInputEnvelope_1.InformationCreateManyAuthorInputEnvelope)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationWhereUniqueInput_1.InformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationWhereUniqueInput_1.InformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationWhereUniqueInput_1.InformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationWhereUniqueInput_1.InformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationUpdateWithWhereUniqueWithoutAuthorInput_1.InformationUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationUpdateManyWithWhereWithoutAuthorInput_1.InformationUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationScalarWhereInput_1.InformationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.InformationUpdateManyWithoutAuthorNestedInput = InformationUpdateManyWithoutAuthorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateManyWithoutAuthorNestedInput", {})
], InformationUpdateManyWithoutAuthorNestedInput);
