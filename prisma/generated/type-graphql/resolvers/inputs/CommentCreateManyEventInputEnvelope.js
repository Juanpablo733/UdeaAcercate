"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyEventInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyEventInput_1 = require("../inputs/CommentCreateManyEventInput");
let CommentCreateManyEventInputEnvelope = exports.CommentCreateManyEventInputEnvelope = class CommentCreateManyEventInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyEventInput_1.CommentCreateManyEventInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyEventInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentCreateManyEventInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyEventInputEnvelope = CommentCreateManyEventInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyEventInputEnvelope", {})
], CommentCreateManyEventInputEnvelope);
