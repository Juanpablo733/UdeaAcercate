"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdatesocialLinksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileUpdatesocialLinksInput = class ProfileUpdatesocialLinksInput {
};
exports.ProfileUpdatesocialLinksInput = ProfileUpdatesocialLinksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdatesocialLinksInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdatesocialLinksInput.prototype, "push", void 0);
exports.ProfileUpdatesocialLinksInput = ProfileUpdatesocialLinksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdatesocialLinksInput", {})
], ProfileUpdatesocialLinksInput);
