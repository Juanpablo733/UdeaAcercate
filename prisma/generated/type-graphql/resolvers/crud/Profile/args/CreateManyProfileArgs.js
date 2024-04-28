"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateManyInput_1 = require("../../../inputs/ProfileCreateManyInput");
let CreateManyProfileArgs = exports.CreateManyProfileArgs = class CreateManyProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateManyInput_1.ProfileCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProfileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProfileArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyProfileArgs = CreateManyProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProfileArgs);
