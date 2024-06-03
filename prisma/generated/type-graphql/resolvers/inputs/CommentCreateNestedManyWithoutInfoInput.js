"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyInfoInputEnvelope_1 = require("../inputs/CommentCreateManyInfoInputEnvelope");
const CommentCreateOrConnectWithoutInfoInput_1 = require("../inputs/CommentCreateOrConnectWithoutInfoInput");
const CommentCreateWithoutInfoInput_1 = require("../inputs/CommentCreateWithoutInfoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutInfoInput = class CommentCreateNestedManyWithoutInfoInput {
};
exports.CommentCreateNestedManyWithoutInfoInput = CommentCreateNestedManyWithoutInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutInfoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutInfoInput_1.CommentCreateOrConnectWithoutInfoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutInfoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyInfoInputEnvelope_1.CommentCreateManyInfoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyInfoInputEnvelope_1.CommentCreateManyInfoInputEnvelope)
], CommentCreateNestedManyWithoutInfoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutInfoInput.prototype, "connect", void 0);
exports.CommentCreateNestedManyWithoutInfoInput = CommentCreateNestedManyWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutInfoInput", {})
], CommentCreateNestedManyWithoutInfoInput);
