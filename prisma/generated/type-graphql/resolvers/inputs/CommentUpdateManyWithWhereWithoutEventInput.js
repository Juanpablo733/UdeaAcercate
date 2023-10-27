"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithWhereWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyMutationInput_1 = require("../inputs/CommentUpdateManyMutationInput");
let CommentUpdateManyWithWhereWithoutEventInput = exports.CommentUpdateManyWithWhereWithoutEventInput = class CommentUpdateManyWithWhereWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentScalarWhereInput_1.CommentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentScalarWhereInput_1.CommentScalarWhereInput)
], CommentUpdateManyWithWhereWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput)
], CommentUpdateManyWithWhereWithoutEventInput.prototype, "data", void 0);
exports.CommentUpdateManyWithWhereWithoutEventInput = CommentUpdateManyWithWhereWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithWhereWithoutEventInput", {})
], CommentUpdateManyWithWhereWithoutEventInput);
