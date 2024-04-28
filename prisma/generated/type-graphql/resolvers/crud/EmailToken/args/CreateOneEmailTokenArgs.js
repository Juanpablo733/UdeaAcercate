"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCreateInput_1 = require("../../../inputs/EmailTokenCreateInput");
let CreateOneEmailTokenArgs = exports.CreateOneEmailTokenArgs = class CreateOneEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenCreateInput_1.EmailTokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenCreateInput_1.EmailTokenCreateInput)
], CreateOneEmailTokenArgs.prototype, "data", void 0);
exports.CreateOneEmailTokenArgs = CreateOneEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEmailTokenArgs);
