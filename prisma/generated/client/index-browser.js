
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  image: 'image'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.EmailTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ProfileScalarFieldEnum = {
  faculty: 'faculty',
  career: 'career',
  type: 'type',
  campus: 'campus',
  userId: 'userId',
  description: 'description',
  hobbies: 'hobbies',
  socialLinks: 'socialLinks'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  authorId: 'authorId',
  infoId: 'infoId',
  place: 'place'
};

exports.Prisma.InformationScalarFieldEnum = {
  id: 'id',
  authorId: 'authorId',
  title: 'title',
  description: 'description',
  date: 'date',
  image: 'image',
  tag: 'tag',
  hashtags: 'hashtags',
  official: 'official'
};

exports.Prisma.AttendeeScalarFieldEnum = {
  userId: 'userId',
  eventId: 'eventId',
  dateTime: 'dateTime'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  text: 'text',
  dateTime: 'dateTime',
  userId: 'userId',
  infoId: 'infoId'
};

exports.Prisma.CommentSentimentScalarFieldEnum = {
  id: 'id',
  sentiment: 'sentiment',
  confidence: 'confidence',
  commentTag: 'commentTag',
  dateTime: 'dateTime'
};

exports.Prisma.RoleScalarFieldEnum = {
  userId: 'userId',
  role: 'role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserType = exports.$Enums.UserType = {
  Estudiante: 'Estudiante',
  Profesor: 'Profesor',
  Administrativo: 'Administrativo',
  Egresado: 'Egresado',
  Jubilado: 'Jubilado'
};

exports.Campus = exports.$Enums.Campus = {
  Ciudad_Universitaria: 'Ciudad_Universitaria',
  Antigua_Escuela_de_Derecho: 'Antigua_Escuela_de_Derecho',
  Edificio_Suramericana_del_Centro: 'Edificio_Suramericana_del_Centro',
  Sede_Posgrados_Universidad_de_Antioquia: 'Sede_Posgrados_Universidad_de_Antioquia',
  Paraninfo: 'Paraninfo',
  Liceo_Francisco_Restrepo_Molina: 'Liceo_Francisco_Restrepo_Molina',
  Seccional_Oriente: 'Seccional_Oriente',
  Seccional_Occidente_de_la_Universidad_de_Antioquia: 'Seccional_Occidente_de_la_Universidad_de_Antioquia',
  Seccional_Bajo_Cauca: 'Seccional_Bajo_Cauca',
  Sede_Sonson_de_la_Universidad_de_Antioquia: 'Sede_Sonson_de_la_Universidad_de_Antioquia'
};

exports.Tag = exports.$Enums.Tag = {
  Deportivo: 'Deportivo',
  Academico: 'Academico',
  Cultural: 'Cultural'
};

exports.Sentiment = exports.$Enums.Sentiment = {
  Positive: 'Positive',
  Neutral: 'Neutral',
  Negative: 'Negative'
};

exports.RoleTag = exports.$Enums.RoleTag = {
  User: 'User',
  Admin: 'Admin'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  EmailToken: 'EmailToken',
  Profile: 'Profile',
  Event: 'Event',
  Information: 'Information',
  Attendee: 'Attendee',
  Comment: 'Comment',
  CommentSentiment: 'CommentSentiment',
  Role: 'Role'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
