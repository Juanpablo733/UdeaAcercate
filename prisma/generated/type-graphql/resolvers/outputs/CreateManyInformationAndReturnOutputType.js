"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInformationAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyInformationAndReturnOutputTypeAuthorArgs_1 = require("./args/CreateManyInformationAndReturnOutputTypeAuthorArgs");
const User_1 = require("../outputs/User");
const Tag_1 = require("../../enums/Tag");
let CreateManyInformationAndReturnOutputType = class CreateManyInformationAndReturnOutputType {
    getAuthor(root, args) {
        return root.author;
    }
};
exports.CreateManyInformationAndReturnOutputType = CreateManyInformationAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyInformationAndReturnOutputType.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInformationAndReturnOutputType.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInformationAndReturnOutputType.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInformationAndReturnOutputType.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        name: "author",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyInformationAndReturnOutputType, CreateManyInformationAndReturnOutputTypeAuthorArgs_1.CreateManyInformationAndReturnOutputTypeAuthorArgs]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyInformationAndReturnOutputType.prototype, "getAuthor", null);
exports.CreateManyInformationAndReturnOutputType = CreateManyInformationAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyInformationAndReturnOutputType", {})
], CreateManyInformationAndReturnOutputType);
