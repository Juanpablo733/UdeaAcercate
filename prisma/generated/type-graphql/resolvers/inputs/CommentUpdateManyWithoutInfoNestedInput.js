"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutInfoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyInfoInputEnvelope_1 = require("../inputs/CommentCreateManyInfoInputEnvelope");
const CommentCreateOrConnectWithoutInfoInput_1 = require("../inputs/CommentCreateOrConnectWithoutInfoInput");
const CommentCreateWithoutInfoInput_1 = require("../inputs/CommentCreateWithoutInfoInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutInfoInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutInfoInput");
const CommentUpdateWithWhereUniqueWithoutInfoInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutInfoInput");
const CommentUpsertWithWhereUniqueWithoutInfoInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutInfoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutInfoNestedInput = exports.CommentUpdateManyWithoutInfoNestedInput = class CommentUpdateManyWithoutInfoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutInfoInput_1.CommentCreateOrConnectWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutInfoInput_1.CommentUpsertWithWhereUniqueWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyInfoInputEnvelope_1.CommentCreateManyInfoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyInfoInputEnvelope_1.CommentCreateManyInfoInputEnvelope)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutInfoInput_1.CommentUpdateWithWhereUniqueWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutInfoInput_1.CommentUpdateManyWithWhereWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutInfoNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutInfoNestedInput = CommentUpdateManyWithoutInfoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutInfoNestedInput", {})
], CommentUpdateManyWithoutInfoNestedInput);
