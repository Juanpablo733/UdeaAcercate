"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailTokenMaxAggregate = exports.EmailTokenMaxAggregate = class EmailTokenMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMaxAggregate.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMaxAggregate.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailTokenMaxAggregate.prototype, "expires", void 0);
exports.EmailTokenMaxAggregate = EmailTokenMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailTokenMaxAggregate", {})
], EmailTokenMaxAggregate);
