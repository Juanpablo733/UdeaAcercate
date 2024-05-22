"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateInput_1 = require("../../../inputs/InformationUpdateInput");
const InformationWhereUniqueInput_1 = require("../../../inputs/InformationWhereUniqueInput");
let UpdateOneInformationArgs = exports.UpdateOneInformationArgs = class UpdateOneInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateInput_1.InformationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateInput_1.InformationUpdateInput)
], UpdateOneInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], UpdateOneInformationArgs.prototype, "where", void 0);
exports.UpdateOneInformationArgs = UpdateOneInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInformationArgs);
