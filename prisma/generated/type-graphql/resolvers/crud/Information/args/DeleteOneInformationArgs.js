"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationWhereUniqueInput_1 = require("../../../inputs/InformationWhereUniqueInput");
let DeleteOneInformationArgs = class DeleteOneInformationArgs {
};
exports.DeleteOneInformationArgs = DeleteOneInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], DeleteOneInformationArgs.prototype, "where", void 0);
exports.DeleteOneInformationArgs = DeleteOneInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneInformationArgs);
