"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCommentAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Information_1 = require("../outputs/Information");
const User_1 = require("../outputs/User");
let CreateManyCommentAndReturnOutputType = class CreateManyCommentAndReturnOutputType {
};
exports.CreateManyCommentAndReturnOutputType = CreateManyCommentAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCommentAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCommentAndReturnOutputType.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyCommentAndReturnOutputType.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCommentAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCommentAndReturnOutputType.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyCommentAndReturnOutputType.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Information_1.Information !== "undefined" && Information_1.Information) === "function" ? _b : Object)
], CreateManyCommentAndReturnOutputType.prototype, "info", void 0);
exports.CreateManyCommentAndReturnOutputType = CreateManyCommentAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyCommentAndReturnOutputType", {})
], CreateManyCommentAndReturnOutputType);
