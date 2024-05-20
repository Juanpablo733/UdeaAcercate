"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailTokenCountAggregate = exports.EmailTokenCountAggregate = class EmailTokenCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailTokenCountAggregate.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailTokenCountAggregate.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailTokenCountAggregate.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EmailTokenCountAggregate.prototype, "_all", void 0);
exports.EmailTokenCountAggregate = EmailTokenCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailTokenCountAggregate", {})
], EmailTokenCountAggregate);
