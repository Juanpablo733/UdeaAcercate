"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenUpdateManyMutationInput_1 = require("../../../inputs/EmailTokenUpdateManyMutationInput");
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
let UpdateManyEmailTokenArgs = exports.UpdateManyEmailTokenArgs = class UpdateManyEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenUpdateManyMutationInput_1.EmailTokenUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenUpdateManyMutationInput_1.EmailTokenUpdateManyMutationInput)
], UpdateManyEmailTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], UpdateManyEmailTokenArgs.prototype, "where", void 0);
exports.UpdateManyEmailTokenArgs = UpdateManyEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEmailTokenArgs);
