"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campus_1 = require("../../enums/Campus");
const UserType_1 = require("../../enums/UserType");
let ProfileMaxAggregate = exports.ProfileMaxAggregate = class ProfileMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileMaxAggregate.prototype, "description", void 0);
exports.ProfileMaxAggregate = ProfileMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileMaxAggregate", {})
], ProfileMaxAggregate);
