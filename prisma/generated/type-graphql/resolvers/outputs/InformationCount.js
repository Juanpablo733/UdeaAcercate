"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCountCommentsArgs_1 = require("./args/InformationCountCommentsArgs");
let InformationCount = class InformationCount {
    getComments(root, args) {
        return root.comments;
    }
};
exports.InformationCount = InformationCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [InformationCount, InformationCountCommentsArgs_1.InformationCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], InformationCount.prototype, "getComments", null);
exports.InformationCount = InformationCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InformationCount", {})
], InformationCount);
