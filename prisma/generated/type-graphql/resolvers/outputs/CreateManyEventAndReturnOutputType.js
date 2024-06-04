"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEventAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Information_1 = require("../outputs/Information");
const User_1 = require("../outputs/User");
let CreateManyEventAndReturnOutputType = class CreateManyEventAndReturnOutputType {
};
exports.CreateManyEventAndReturnOutputType = CreateManyEventAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEventAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEventAndReturnOutputType.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEventAndReturnOutputType.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEventAndReturnOutputType.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyEventAndReturnOutputType.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Information_1.Information !== "undefined" && Information_1.Information) === "function" ? _b : Object)
], CreateManyEventAndReturnOutputType.prototype, "info", void 0);
exports.CreateManyEventAndReturnOutputType = CreateManyEventAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyEventAndReturnOutputType", {})
], CreateManyEventAndReturnOutputType);
