"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailTokenMinAggregate = class EmailTokenMinAggregate {
};
exports.EmailTokenMinAggregate = EmailTokenMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMinAggregate.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMinAggregate.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailTokenMinAggregate.prototype, "expires", void 0);
exports.EmailTokenMinAggregate = EmailTokenMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailTokenMinAggregate", {})
], EmailTokenMinAggregate);
