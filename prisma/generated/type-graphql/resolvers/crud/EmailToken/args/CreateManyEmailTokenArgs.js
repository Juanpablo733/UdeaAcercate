"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCreateManyInput_1 = require("../../../inputs/EmailTokenCreateManyInput");
let CreateManyEmailTokenArgs = exports.CreateManyEmailTokenArgs = class CreateManyEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenCreateManyInput_1.EmailTokenCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEmailTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEmailTokenArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyEmailTokenArgs = CreateManyEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEmailTokenArgs);
