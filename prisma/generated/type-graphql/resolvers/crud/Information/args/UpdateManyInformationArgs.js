"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateManyMutationInput_1 = require("../../../inputs/InformationUpdateManyMutationInput");
const InformationWhereInput_1 = require("../../../inputs/InformationWhereInput");
let UpdateManyInformationArgs = exports.UpdateManyInformationArgs = class UpdateManyInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateManyMutationInput_1.InformationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateManyMutationInput_1.InformationUpdateManyMutationInput)
], UpdateManyInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], UpdateManyInformationArgs.prototype, "where", void 0);
exports.UpdateManyInformationArgs = UpdateManyInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInformationArgs);
