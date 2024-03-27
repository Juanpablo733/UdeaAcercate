"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Information = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../enums/Tag");
const InformationCount_1 = require("../resolvers/outputs/InformationCount");
let Information = exports.Information = class Information {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Information.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Information.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Information.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Information.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Information.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Information.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Information.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCount_1.InformationCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCount_1.InformationCount)
], Information.prototype, "_count", void 0);
exports.Information = Information = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Information", {})
], Information);
