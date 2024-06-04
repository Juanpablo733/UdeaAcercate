"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereInput_1 = require("../inputs/AttendeeWhereInput");
let AttendeeListRelationFilter = class AttendeeListRelationFilter {
};
exports.AttendeeListRelationFilter = AttendeeListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], AttendeeListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], AttendeeListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], AttendeeListRelationFilter.prototype, "none", void 0);
exports.AttendeeListRelationFilter = AttendeeListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeListRelationFilter", {})
], AttendeeListRelationFilter);
