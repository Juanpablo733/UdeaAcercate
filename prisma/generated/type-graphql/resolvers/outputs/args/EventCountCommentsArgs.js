"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCountCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../../inputs/CommentWhereInput");
let EventCountCommentsArgs = exports.EventCountCommentsArgs = class EventCountCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], EventCountCommentsArgs.prototype, "where", void 0);
exports.EventCountCommentsArgs = EventCountCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], EventCountCommentsArgs);
