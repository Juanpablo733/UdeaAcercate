"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreatesocialLinksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileCreatesocialLinksInput = class ProfileCreatesocialLinksInput {
};
exports.ProfileCreatesocialLinksInput = ProfileCreatesocialLinksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreatesocialLinksInput.prototype, "set", void 0);
exports.ProfileCreatesocialLinksInput = ProfileCreatesocialLinksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreatesocialLinksInput", {})
], ProfileCreatesocialLinksInput);
