"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyInfoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyInfoInput_1 = require("../inputs/CommentCreateManyInfoInput");
let CommentCreateManyInfoInputEnvelope = exports.CommentCreateManyInfoInputEnvelope = class CommentCreateManyInfoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyInfoInput_1.CommentCreateManyInfoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyInfoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentCreateManyInfoInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyInfoInputEnvelope = CommentCreateManyInfoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyInfoInputEnvelope", {})
], CommentCreateManyInfoInputEnvelope);
