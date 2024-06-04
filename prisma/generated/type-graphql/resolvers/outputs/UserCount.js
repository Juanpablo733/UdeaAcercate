"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAccountsArgs_1 = require("./args/UserCountAccountsArgs");
const UserCountAttendeesArgs_1 = require("./args/UserCountAttendeesArgs");
const UserCountCommentsArgs_1 = require("./args/UserCountCommentsArgs");
const UserCountEventsCreatedArgs_1 = require("./args/UserCountEventsCreatedArgs");
const UserCountNewsCreatedArgs_1 = require("./args/UserCountNewsCreatedArgs");
const UserCountSessionsArgs_1 = require("./args/UserCountSessionsArgs");
let UserCount = class UserCount {
    getEventsCreated(root, args) {
        return root.eventsCreated;
    }
    getAttendees(root, args) {
        return root.attendees;
    }
    getComments(root, args) {
        return root.comments;
    }
    getAccounts(root, args) {
        return root.accounts;
    }
    getSessions(root, args) {
        return root.sessions;
    }
    getNewsCreated(root, args) {
        return root.newsCreated;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "eventsCreated",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountEventsCreatedArgs_1.UserCountEventsCreatedArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getEventsCreated", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "attendees",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountAttendeesArgs_1.UserCountAttendeesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getAttendees", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCommentsArgs_1.UserCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getComments", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "accounts",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountAccountsArgs_1.UserCountAccountsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "sessions",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountSessionsArgs_1.UserCountSessionsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getSessions", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "newsCreated",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountNewsCreatedArgs_1.UserCountNewsCreatedArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getNewsCreated", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
