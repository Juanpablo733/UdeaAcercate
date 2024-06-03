"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateInput_1 = require("../../../inputs/ProfileCreateInput");
let CreateOneProfileArgs = class CreateOneProfileArgs {
};
exports.CreateOneProfileArgs = CreateOneProfileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateInput_1.ProfileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateInput_1.ProfileCreateInput)
], CreateOneProfileArgs.prototype, "data", void 0);
exports.CreateOneProfileArgs = CreateOneProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProfileArgs);
