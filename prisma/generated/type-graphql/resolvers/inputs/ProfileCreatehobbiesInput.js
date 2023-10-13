"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreatehobbiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileCreatehobbiesInput = exports.ProfileCreatehobbiesInput = class ProfileCreatehobbiesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreatehobbiesInput.prototype, "set", void 0);
exports.ProfileCreatehobbiesInput = ProfileCreatehobbiesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreatehobbiesInput", {})
], ProfileCreatehobbiesInput);
