"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateInput_1 = require("../../../inputs/InformationCreateInput");
const InformationUpdateInput_1 = require("../../../inputs/InformationUpdateInput");
const InformationWhereUniqueInput_1 = require("../../../inputs/InformationWhereUniqueInput");
let UpsertOneInformationArgs = class UpsertOneInformationArgs {
};
exports.UpsertOneInformationArgs = UpsertOneInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], UpsertOneInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateInput_1.InformationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateInput_1.InformationCreateInput)
], UpsertOneInformationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateInput_1.InformationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateInput_1.InformationUpdateInput)
], UpsertOneInformationArgs.prototype, "update", void 0);
exports.UpsertOneInformationArgs = UpsertOneInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInformationArgs);
