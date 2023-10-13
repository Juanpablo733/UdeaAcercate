"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyEventInputEnvelope_1 = require("../inputs/CommentCreateManyEventInputEnvelope");
const CommentCreateOrConnectWithoutEventInput_1 = require("../inputs/CommentCreateOrConnectWithoutEventInput");
const CommentCreateWithoutEventInput_1 = require("../inputs/CommentCreateWithoutEventInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutEventInput = exports.CommentCreateNestedManyWithoutEventInput = class CommentCreateNestedManyWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutEventInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutEventInput_1.CommentCreateOrConnectWithoutEventInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutEventInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyEventInputEnvelope_1.CommentCreateManyEventInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyEventInputEnvelope_1.CommentCreateManyEventInputEnvelope)
], CommentCreateNestedManyWithoutEventInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutEventInput.prototype, "connect", void 0);
exports.CommentCreateNestedManyWithoutEventInput = CommentCreateNestedManyWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutEventInput", {})
], CommentCreateNestedManyWithoutEventInput);
