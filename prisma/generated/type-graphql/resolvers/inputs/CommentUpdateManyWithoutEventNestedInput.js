"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutEventNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyEventInputEnvelope_1 = require("../inputs/CommentCreateManyEventInputEnvelope");
const CommentCreateOrConnectWithoutEventInput_1 = require("../inputs/CommentCreateOrConnectWithoutEventInput");
const CommentCreateWithoutEventInput_1 = require("../inputs/CommentCreateWithoutEventInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutEventInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutEventInput");
const CommentUpdateWithWhereUniqueWithoutEventInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutEventInput");
const CommentUpsertWithWhereUniqueWithoutEventInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutEventInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutEventNestedInput = exports.CommentUpdateManyWithoutEventNestedInput = class CommentUpdateManyWithoutEventNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutEventInput_1.CommentCreateOrConnectWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutEventInput_1.CommentUpsertWithWhereUniqueWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyEventInputEnvelope_1.CommentCreateManyEventInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyEventInputEnvelope_1.CommentCreateManyEventInputEnvelope)
], CommentUpdateManyWithoutEventNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutEventInput_1.CommentUpdateWithWhereUniqueWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutEventInput_1.CommentUpdateManyWithWhereWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutEventNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutEventNestedInput = CommentUpdateManyWithoutEventNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutEventNestedInput", {})
], CommentUpdateManyWithoutEventNestedInput);
