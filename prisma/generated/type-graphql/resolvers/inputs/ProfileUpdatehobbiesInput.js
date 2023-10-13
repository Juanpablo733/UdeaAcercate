"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdatehobbiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileUpdatehobbiesInput = exports.ProfileUpdatehobbiesInput = class ProfileUpdatehobbiesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdatehobbiesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdatehobbiesInput.prototype, "push", void 0);
exports.ProfileUpdatehobbiesInput = ProfileUpdatehobbiesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdatehobbiesInput", {})
], ProfileUpdatehobbiesInput);
