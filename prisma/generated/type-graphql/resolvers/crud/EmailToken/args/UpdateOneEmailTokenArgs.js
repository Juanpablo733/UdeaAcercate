"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenUpdateInput_1 = require("../../../inputs/EmailTokenUpdateInput");
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let UpdateOneEmailTokenArgs = class UpdateOneEmailTokenArgs {
};
exports.UpdateOneEmailTokenArgs = UpdateOneEmailTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenUpdateInput_1.EmailTokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenUpdateInput_1.EmailTokenUpdateInput)
], UpdateOneEmailTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], UpdateOneEmailTokenArgs.prototype, "where", void 0);
exports.UpdateOneEmailTokenArgs = UpdateOneEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEmailTokenArgs);
