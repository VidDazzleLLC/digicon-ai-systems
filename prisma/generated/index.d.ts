
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ConferenceRoom
 * 
 */
export type ConferenceRoom = $Result.DefaultSelection<Prisma.$ConferenceRoomPayload>
/**
 * Model ConferenceRoomFile
 * 
 */
export type ConferenceRoomFile = $Result.DefaultSelection<Prisma.$ConferenceRoomFilePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model PayrollCorrection
 * 
 */
export type PayrollCorrection = $Result.DefaultSelection<Prisma.$PayrollCorrectionPayload>
/**
 * Model AutomationLog
 * 
 */
export type AutomationLog = $Result.DefaultSelection<Prisma.$AutomationLogPayload>
/**
 * Model StripeCustomer
 * 
 */
export type StripeCustomer = $Result.DefaultSelection<Prisma.$StripeCustomerPayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>
/**
 * Model AITableSync
 * 
 */
export type AITableSync = $Result.DefaultSelection<Prisma.$AITableSyncPayload>
/**
 * Model AuditRequest
 * 
 */
export type AuditRequest = $Result.DefaultSelection<Prisma.$AuditRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConferenceRoomStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CLOSED_WON: 'CLOSED_WON',
  CLOSED_LOST: 'CLOSED_LOST',
  REVOKED: 'REVOKED',
  SUSPENDED: 'SUSPENDED'
};

export type ConferenceRoomStatus = (typeof ConferenceRoomStatus)[keyof typeof ConferenceRoomStatus]


export const FileCategory: {
  PAYROLL: 'PAYROLL',
  FINANCIAL: 'FINANCIAL',
  HRIS: 'HRIS',
  ERP: 'ERP',
  CRM: 'CRM',
  COMPLIANCE: 'COMPLIANCE',
  AI_LOGS: 'AI_LOGS',
  OTHER: 'OTHER'
};

export type FileCategory = (typeof FileCategory)[keyof typeof FileCategory]


export const AuditEventType: {
  ROOM_CREATED: 'ROOM_CREATED',
  ACCESS_CODE_SENT: 'ACCESS_CODE_SENT',
  ACCESS_ATTEMPT_SUCCESS: 'ACCESS_ATTEMPT_SUCCESS',
  ACCESS_ATTEMPT_FAILED: 'ACCESS_ATTEMPT_FAILED',
  FILE_UPLOADED: 'FILE_UPLOADED',
  FILE_DOWNLOADED: 'FILE_DOWNLOADED',
  FILE_DELETED: 'FILE_DELETED',
  ROOM_ACCESSED: 'ROOM_ACCESSED',
  MFA_ENABLED: 'MFA_ENABLED',
  MFA_VERIFIED: 'MFA_VERIFIED',
  IP_WHITELIST_UPDATED: 'IP_WHITELIST_UPDATED',
  ROOM_EXPIRED: 'ROOM_EXPIRED',
  ROOM_CLOSED: 'ROOM_CLOSED',
  ROOM_REVOKED: 'ROOM_REVOKED',
  SUSPICIOUS_ACTIVITY: 'SUSPICIOUS_ACTIVITY'
};

export type AuditEventType = (typeof AuditEventType)[keyof typeof AuditEventType]


export const ApiKeyStatus: {
  ACTIVE: 'ACTIVE',
  REVOKED: 'REVOKED',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED'
};

export type ApiKeyStatus = (typeof ApiKeyStatus)[keyof typeof ApiKeyStatus]


export const BillingStatus: {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELLED: 'CANCELLED',
  TRIAL: 'TRIAL'
};

export type BillingStatus = (typeof BillingStatus)[keyof typeof BillingStatus]


export const CorrectionStatus: {
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type CorrectionStatus = (typeof CorrectionStatus)[keyof typeof CorrectionStatus]


export const AutomationEventType: {
  API_KEY_GENERATED: 'API_KEY_GENERATED',
  API_KEY_VALIDATED: 'API_KEY_VALIDATED',
  API_KEY_REVOKED: 'API_KEY_REVOKED',
  PAYROLL_WEBHOOK_RECEIVED: 'PAYROLL_WEBHOOK_RECEIVED',
  PAYROLL_CORRECTION_STARTED: 'PAYROLL_CORRECTION_STARTED',
  PAYROLL_CORRECTION_COMPLETED: 'PAYROLL_CORRECTION_COMPLETED',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
  STRIPE_PAYMENT_RECEIVED: 'STRIPE_PAYMENT_RECEIVED',
  SUBSCRIPTION_CREATED: 'SUBSCRIPTION_CREATED',
  SUBSCRIPTION_CANCELLED: 'SUBSCRIPTION_CANCELLED'
};

export type AutomationEventType = (typeof AutomationEventType)[keyof typeof AutomationEventType]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  TRIALING: 'TRIALING',
  PAST_DUE: 'PAST_DUE',
  CANCELLED: 'CANCELLED',
  UNPAID: 'UNPAID',
  INCOMPLETE: 'INCOMPLETE'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const FileUploadStatus: {
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type FileUploadStatus = (typeof FileUploadStatus)[keyof typeof FileUploadStatus]

}

export type ConferenceRoomStatus = $Enums.ConferenceRoomStatus

export const ConferenceRoomStatus: typeof $Enums.ConferenceRoomStatus

export type FileCategory = $Enums.FileCategory

export const FileCategory: typeof $Enums.FileCategory

export type AuditEventType = $Enums.AuditEventType

export const AuditEventType: typeof $Enums.AuditEventType

export type ApiKeyStatus = $Enums.ApiKeyStatus

export const ApiKeyStatus: typeof $Enums.ApiKeyStatus

export type BillingStatus = $Enums.BillingStatus

export const BillingStatus: typeof $Enums.BillingStatus

export type CorrectionStatus = $Enums.CorrectionStatus

export const CorrectionStatus: typeof $Enums.CorrectionStatus

export type AutomationEventType = $Enums.AutomationEventType

export const AutomationEventType: typeof $Enums.AutomationEventType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type FileUploadStatus = $Enums.FileUploadStatus

export const FileUploadStatus: typeof $Enums.FileUploadStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ConferenceRooms
 * const conferenceRooms = await prisma.conferenceRoom.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ConferenceRooms
   * const conferenceRooms = await prisma.conferenceRoom.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.conferenceRoom`: Exposes CRUD operations for the **ConferenceRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConferenceRooms
    * const conferenceRooms = await prisma.conferenceRoom.findMany()
    * ```
    */
  get conferenceRoom(): Prisma.ConferenceRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conferenceRoomFile`: Exposes CRUD operations for the **ConferenceRoomFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConferenceRoomFiles
    * const conferenceRoomFiles = await prisma.conferenceRoomFile.findMany()
    * ```
    */
  get conferenceRoomFile(): Prisma.ConferenceRoomFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollCorrection`: Exposes CRUD operations for the **PayrollCorrection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollCorrections
    * const payrollCorrections = await prisma.payrollCorrection.findMany()
    * ```
    */
  get payrollCorrection(): Prisma.PayrollCorrectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationLog`: Exposes CRUD operations for the **AutomationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationLogs
    * const automationLogs = await prisma.automationLog.findMany()
    * ```
    */
  get automationLog(): Prisma.AutomationLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeCustomer`: Exposes CRUD operations for the **StripeCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeCustomers
    * const stripeCustomers = await prisma.stripeCustomer.findMany()
    * ```
    */
  get stripeCustomer(): Prisma.StripeCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aITableSync`: Exposes CRUD operations for the **AITableSync** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AITableSyncs
    * const aITableSyncs = await prisma.aITableSync.findMany()
    * ```
    */
  get aITableSync(): Prisma.AITableSyncDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditRequest`: Exposes CRUD operations for the **AuditRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditRequests
    * const auditRequests = await prisma.auditRequest.findMany()
    * ```
    */
  get auditRequest(): Prisma.AuditRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ConferenceRoom: 'ConferenceRoom',
    ConferenceRoomFile: 'ConferenceRoomFile',
    AuditLog: 'AuditLog',
    ApiKey: 'ApiKey',
    PayrollCorrection: 'PayrollCorrection',
    AutomationLog: 'AutomationLog',
    StripeCustomer: 'StripeCustomer',
    FileUpload: 'FileUpload',
    AITableSync: 'AITableSync',
    AuditRequest: 'AuditRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "conferenceRoom" | "conferenceRoomFile" | "auditLog" | "apiKey" | "payrollCorrection" | "automationLog" | "stripeCustomer" | "fileUpload" | "aITableSync" | "auditRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ConferenceRoom: {
        payload: Prisma.$ConferenceRoomPayload<ExtArgs>
        fields: Prisma.ConferenceRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConferenceRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConferenceRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          findFirst: {
            args: Prisma.ConferenceRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConferenceRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          findMany: {
            args: Prisma.ConferenceRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>[]
          }
          create: {
            args: Prisma.ConferenceRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          createMany: {
            args: Prisma.ConferenceRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConferenceRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>[]
          }
          delete: {
            args: Prisma.ConferenceRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          update: {
            args: Prisma.ConferenceRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          deleteMany: {
            args: Prisma.ConferenceRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConferenceRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConferenceRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>[]
          }
          upsert: {
            args: Prisma.ConferenceRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomPayload>
          }
          aggregate: {
            args: Prisma.ConferenceRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConferenceRoom>
          }
          groupBy: {
            args: Prisma.ConferenceRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConferenceRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConferenceRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ConferenceRoomCountAggregateOutputType> | number
          }
        }
      }
      ConferenceRoomFile: {
        payload: Prisma.$ConferenceRoomFilePayload<ExtArgs>
        fields: Prisma.ConferenceRoomFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConferenceRoomFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConferenceRoomFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          findFirst: {
            args: Prisma.ConferenceRoomFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConferenceRoomFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          findMany: {
            args: Prisma.ConferenceRoomFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>[]
          }
          create: {
            args: Prisma.ConferenceRoomFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          createMany: {
            args: Prisma.ConferenceRoomFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConferenceRoomFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>[]
          }
          delete: {
            args: Prisma.ConferenceRoomFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          update: {
            args: Prisma.ConferenceRoomFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          deleteMany: {
            args: Prisma.ConferenceRoomFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConferenceRoomFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConferenceRoomFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>[]
          }
          upsert: {
            args: Prisma.ConferenceRoomFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferenceRoomFilePayload>
          }
          aggregate: {
            args: Prisma.ConferenceRoomFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConferenceRoomFile>
          }
          groupBy: {
            args: Prisma.ConferenceRoomFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConferenceRoomFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConferenceRoomFileCountArgs<ExtArgs>
            result: $Utils.Optional<ConferenceRoomFileCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      PayrollCorrection: {
        payload: Prisma.$PayrollCorrectionPayload<ExtArgs>
        fields: Prisma.PayrollCorrectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollCorrectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollCorrectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          findFirst: {
            args: Prisma.PayrollCorrectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollCorrectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          findMany: {
            args: Prisma.PayrollCorrectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>[]
          }
          create: {
            args: Prisma.PayrollCorrectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          createMany: {
            args: Prisma.PayrollCorrectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCorrectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>[]
          }
          delete: {
            args: Prisma.PayrollCorrectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          update: {
            args: Prisma.PayrollCorrectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          deleteMany: {
            args: Prisma.PayrollCorrectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollCorrectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollCorrectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>[]
          }
          upsert: {
            args: Prisma.PayrollCorrectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollCorrectionPayload>
          }
          aggregate: {
            args: Prisma.PayrollCorrectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollCorrection>
          }
          groupBy: {
            args: Prisma.PayrollCorrectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollCorrectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCorrectionCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCorrectionCountAggregateOutputType> | number
          }
        }
      }
      AutomationLog: {
        payload: Prisma.$AutomationLogPayload<ExtArgs>
        fields: Prisma.AutomationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          findFirst: {
            args: Prisma.AutomationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          findMany: {
            args: Prisma.AutomationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>[]
          }
          create: {
            args: Prisma.AutomationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          createMany: {
            args: Prisma.AutomationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>[]
          }
          delete: {
            args: Prisma.AutomationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          update: {
            args: Prisma.AutomationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          deleteMany: {
            args: Prisma.AutomationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>[]
          }
          upsert: {
            args: Prisma.AutomationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationLogPayload>
          }
          aggregate: {
            args: Prisma.AutomationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationLog>
          }
          groupBy: {
            args: Prisma.AutomationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationLogCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationLogCountAggregateOutputType> | number
          }
        }
      }
      StripeCustomer: {
        payload: Prisma.$StripeCustomerPayload<ExtArgs>
        fields: Prisma.StripeCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          findFirst: {
            args: Prisma.StripeCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          findMany: {
            args: Prisma.StripeCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          create: {
            args: Prisma.StripeCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          createMany: {
            args: Prisma.StripeCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripeCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          delete: {
            args: Prisma.StripeCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          update: {
            args: Prisma.StripeCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          deleteMany: {
            args: Prisma.StripeCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripeCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          upsert: {
            args: Prisma.StripeCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          aggregate: {
            args: Prisma.StripeCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeCustomer>
          }
          groupBy: {
            args: Prisma.StripeCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<StripeCustomerCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
      AITableSync: {
        payload: Prisma.$AITableSyncPayload<ExtArgs>
        fields: Prisma.AITableSyncFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AITableSyncFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AITableSyncFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          findFirst: {
            args: Prisma.AITableSyncFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AITableSyncFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          findMany: {
            args: Prisma.AITableSyncFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>[]
          }
          create: {
            args: Prisma.AITableSyncCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          createMany: {
            args: Prisma.AITableSyncCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AITableSyncCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>[]
          }
          delete: {
            args: Prisma.AITableSyncDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          update: {
            args: Prisma.AITableSyncUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          deleteMany: {
            args: Prisma.AITableSyncDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AITableSyncUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AITableSyncUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>[]
          }
          upsert: {
            args: Prisma.AITableSyncUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITableSyncPayload>
          }
          aggregate: {
            args: Prisma.AITableSyncAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAITableSync>
          }
          groupBy: {
            args: Prisma.AITableSyncGroupByArgs<ExtArgs>
            result: $Utils.Optional<AITableSyncGroupByOutputType>[]
          }
          count: {
            args: Prisma.AITableSyncCountArgs<ExtArgs>
            result: $Utils.Optional<AITableSyncCountAggregateOutputType> | number
          }
        }
      }
      AuditRequest: {
        payload: Prisma.$AuditRequestPayload<ExtArgs>
        fields: Prisma.AuditRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          findFirst: {
            args: Prisma.AuditRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          findMany: {
            args: Prisma.AuditRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>[]
          }
          create: {
            args: Prisma.AuditRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          createMany: {
            args: Prisma.AuditRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>[]
          }
          delete: {
            args: Prisma.AuditRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          update: {
            args: Prisma.AuditRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          deleteMany: {
            args: Prisma.AuditRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>[]
          }
          upsert: {
            args: Prisma.AuditRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRequestPayload>
          }
          aggregate: {
            args: Prisma.AuditRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditRequest>
          }
          groupBy: {
            args: Prisma.AuditRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AuditRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    conferenceRoom?: ConferenceRoomOmit
    conferenceRoomFile?: ConferenceRoomFileOmit
    auditLog?: AuditLogOmit
    apiKey?: ApiKeyOmit
    payrollCorrection?: PayrollCorrectionOmit
    automationLog?: AutomationLogOmit
    stripeCustomer?: StripeCustomerOmit
    fileUpload?: FileUploadOmit
    aITableSync?: AITableSyncOmit
    auditRequest?: AuditRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConferenceRoomCountOutputType
   */

  export type ConferenceRoomCountOutputType = {
    auditLog: number
    files: number
  }

  export type ConferenceRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLog?: boolean | ConferenceRoomCountOutputTypeCountAuditLogArgs
    files?: boolean | ConferenceRoomCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ConferenceRoomCountOutputType without action
   */
  export type ConferenceRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomCountOutputType
     */
    select?: ConferenceRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConferenceRoomCountOutputType without action
   */
  export type ConferenceRoomCountOutputTypeCountAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * ConferenceRoomCountOutputType without action
   */
  export type ConferenceRoomCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceRoomFileWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    corrections: number
    automationLogs: number
    fileUploads: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corrections?: boolean | ApiKeyCountOutputTypeCountCorrectionsArgs
    automationLogs?: boolean | ApiKeyCountOutputTypeCountAutomationLogsArgs
    fileUploads?: boolean | ApiKeyCountOutputTypeCountFileUploadsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountCorrectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollCorrectionWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountAutomationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationLogWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountFileUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ConferenceRoom
   */

  export type AggregateConferenceRoom = {
    _count: ConferenceRoomCountAggregateOutputType | null
    _avg: ConferenceRoomAvgAggregateOutputType | null
    _sum: ConferenceRoomSumAggregateOutputType | null
    _min: ConferenceRoomMinAggregateOutputType | null
    _max: ConferenceRoomMaxAggregateOutputType | null
  }

  export type ConferenceRoomAvgAggregateOutputType = {
    annualRevenue: number | null
    annualBudget: number | null
    accessCount: number | null
    dealValue: number | null
  }

  export type ConferenceRoomSumAggregateOutputType = {
    annualRevenue: number | null
    annualBudget: number | null
    accessCount: number | null
    dealValue: number | null
  }

  export type ConferenceRoomMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    companyEmail: string | null
    cfoName: string | null
    cfoEmail: string | null
    industry: string | null
    annualRevenue: number | null
    annualBudget: number | null
    accessCode: string | null
    accessCodeHash: string | null
    codeGeneratedAt: Date | null
    codeUsed: boolean | null
    firstAccessedAt: Date | null
    lastAccessedAt: Date | null
    accessCount: number | null
    status: $Enums.ConferenceRoomStatus | null
    expiresAt: Date | null
    closedAt: Date | null
    closureReason: string | null
    encryptionKey: string | null
    mfaEnabled: boolean | null
    mfaPhone: string | null
    dealValue: number | null
    dealStage: string | null
    salesRep: string | null
    notes: string | null
  }

  export type ConferenceRoomMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    companyEmail: string | null
    cfoName: string | null
    cfoEmail: string | null
    industry: string | null
    annualRevenue: number | null
    annualBudget: number | null
    accessCode: string | null
    accessCodeHash: string | null
    codeGeneratedAt: Date | null
    codeUsed: boolean | null
    firstAccessedAt: Date | null
    lastAccessedAt: Date | null
    accessCount: number | null
    status: $Enums.ConferenceRoomStatus | null
    expiresAt: Date | null
    closedAt: Date | null
    closureReason: string | null
    encryptionKey: string | null
    mfaEnabled: boolean | null
    mfaPhone: string | null
    dealValue: number | null
    dealStage: string | null
    salesRep: string | null
    notes: string | null
  }

  export type ConferenceRoomCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    companyName: number
    companyEmail: number
    cfoName: number
    cfoEmail: number
    industry: number
    annualRevenue: number
    annualBudget: number
    accessCode: number
    accessCodeHash: number
    codeGeneratedAt: number
    codeUsed: number
    firstAccessedAt: number
    lastAccessedAt: number
    accessCount: number
    status: number
    expiresAt: number
    closedAt: number
    closureReason: number
    encryptionKey: number
    ipWhitelist: number
    mfaEnabled: number
    mfaPhone: number
    dealValue: number
    dealStage: number
    salesRep: number
    notes: number
    _all: number
  }


  export type ConferenceRoomAvgAggregateInputType = {
    annualRevenue?: true
    annualBudget?: true
    accessCount?: true
    dealValue?: true
  }

  export type ConferenceRoomSumAggregateInputType = {
    annualRevenue?: true
    annualBudget?: true
    accessCount?: true
    dealValue?: true
  }

  export type ConferenceRoomMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    companyEmail?: true
    cfoName?: true
    cfoEmail?: true
    industry?: true
    annualRevenue?: true
    annualBudget?: true
    accessCode?: true
    accessCodeHash?: true
    codeGeneratedAt?: true
    codeUsed?: true
    firstAccessedAt?: true
    lastAccessedAt?: true
    accessCount?: true
    status?: true
    expiresAt?: true
    closedAt?: true
    closureReason?: true
    encryptionKey?: true
    mfaEnabled?: true
    mfaPhone?: true
    dealValue?: true
    dealStage?: true
    salesRep?: true
    notes?: true
  }

  export type ConferenceRoomMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    companyEmail?: true
    cfoName?: true
    cfoEmail?: true
    industry?: true
    annualRevenue?: true
    annualBudget?: true
    accessCode?: true
    accessCodeHash?: true
    codeGeneratedAt?: true
    codeUsed?: true
    firstAccessedAt?: true
    lastAccessedAt?: true
    accessCount?: true
    status?: true
    expiresAt?: true
    closedAt?: true
    closureReason?: true
    encryptionKey?: true
    mfaEnabled?: true
    mfaPhone?: true
    dealValue?: true
    dealStage?: true
    salesRep?: true
    notes?: true
  }

  export type ConferenceRoomCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    companyEmail?: true
    cfoName?: true
    cfoEmail?: true
    industry?: true
    annualRevenue?: true
    annualBudget?: true
    accessCode?: true
    accessCodeHash?: true
    codeGeneratedAt?: true
    codeUsed?: true
    firstAccessedAt?: true
    lastAccessedAt?: true
    accessCount?: true
    status?: true
    expiresAt?: true
    closedAt?: true
    closureReason?: true
    encryptionKey?: true
    ipWhitelist?: true
    mfaEnabled?: true
    mfaPhone?: true
    dealValue?: true
    dealStage?: true
    salesRep?: true
    notes?: true
    _all?: true
  }

  export type ConferenceRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConferenceRoom to aggregate.
     */
    where?: ConferenceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRooms to fetch.
     */
    orderBy?: ConferenceRoomOrderByWithRelationInput | ConferenceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConferenceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConferenceRooms
    **/
    _count?: true | ConferenceRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConferenceRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConferenceRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConferenceRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConferenceRoomMaxAggregateInputType
  }

  export type GetConferenceRoomAggregateType<T extends ConferenceRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateConferenceRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConferenceRoom[P]>
      : GetScalarType<T[P], AggregateConferenceRoom[P]>
  }




  export type ConferenceRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceRoomWhereInput
    orderBy?: ConferenceRoomOrderByWithAggregationInput | ConferenceRoomOrderByWithAggregationInput[]
    by: ConferenceRoomScalarFieldEnum[] | ConferenceRoomScalarFieldEnum
    having?: ConferenceRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConferenceRoomCountAggregateInputType | true
    _avg?: ConferenceRoomAvgAggregateInputType
    _sum?: ConferenceRoomSumAggregateInputType
    _min?: ConferenceRoomMinAggregateInputType
    _max?: ConferenceRoomMaxAggregateInputType
  }

  export type ConferenceRoomGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    companyName: string
    companyEmail: string
    cfoName: string | null
    cfoEmail: string
    industry: string | null
    annualRevenue: number | null
    annualBudget: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt: Date
    codeUsed: boolean
    firstAccessedAt: Date | null
    lastAccessedAt: Date | null
    accessCount: number
    status: $Enums.ConferenceRoomStatus
    expiresAt: Date
    closedAt: Date | null
    closureReason: string | null
    encryptionKey: string
    ipWhitelist: string[]
    mfaEnabled: boolean
    mfaPhone: string | null
    dealValue: number | null
    dealStage: string | null
    salesRep: string | null
    notes: string | null
    _count: ConferenceRoomCountAggregateOutputType | null
    _avg: ConferenceRoomAvgAggregateOutputType | null
    _sum: ConferenceRoomSumAggregateOutputType | null
    _min: ConferenceRoomMinAggregateOutputType | null
    _max: ConferenceRoomMaxAggregateOutputType | null
  }

  type GetConferenceRoomGroupByPayload<T extends ConferenceRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConferenceRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConferenceRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConferenceRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ConferenceRoomGroupByOutputType[P]>
        }
      >
    >


  export type ConferenceRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    companyEmail?: boolean
    cfoName?: boolean
    cfoEmail?: boolean
    industry?: boolean
    annualRevenue?: boolean
    annualBudget?: boolean
    accessCode?: boolean
    accessCodeHash?: boolean
    codeGeneratedAt?: boolean
    codeUsed?: boolean
    firstAccessedAt?: boolean
    lastAccessedAt?: boolean
    accessCount?: boolean
    status?: boolean
    expiresAt?: boolean
    closedAt?: boolean
    closureReason?: boolean
    encryptionKey?: boolean
    ipWhitelist?: boolean
    mfaEnabled?: boolean
    mfaPhone?: boolean
    dealValue?: boolean
    dealStage?: boolean
    salesRep?: boolean
    notes?: boolean
    auditLog?: boolean | ConferenceRoom$auditLogArgs<ExtArgs>
    files?: boolean | ConferenceRoom$filesArgs<ExtArgs>
    _count?: boolean | ConferenceRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conferenceRoom"]>

  export type ConferenceRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    companyEmail?: boolean
    cfoName?: boolean
    cfoEmail?: boolean
    industry?: boolean
    annualRevenue?: boolean
    annualBudget?: boolean
    accessCode?: boolean
    accessCodeHash?: boolean
    codeGeneratedAt?: boolean
    codeUsed?: boolean
    firstAccessedAt?: boolean
    lastAccessedAt?: boolean
    accessCount?: boolean
    status?: boolean
    expiresAt?: boolean
    closedAt?: boolean
    closureReason?: boolean
    encryptionKey?: boolean
    ipWhitelist?: boolean
    mfaEnabled?: boolean
    mfaPhone?: boolean
    dealValue?: boolean
    dealStage?: boolean
    salesRep?: boolean
    notes?: boolean
  }, ExtArgs["result"]["conferenceRoom"]>

  export type ConferenceRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    companyEmail?: boolean
    cfoName?: boolean
    cfoEmail?: boolean
    industry?: boolean
    annualRevenue?: boolean
    annualBudget?: boolean
    accessCode?: boolean
    accessCodeHash?: boolean
    codeGeneratedAt?: boolean
    codeUsed?: boolean
    firstAccessedAt?: boolean
    lastAccessedAt?: boolean
    accessCount?: boolean
    status?: boolean
    expiresAt?: boolean
    closedAt?: boolean
    closureReason?: boolean
    encryptionKey?: boolean
    ipWhitelist?: boolean
    mfaEnabled?: boolean
    mfaPhone?: boolean
    dealValue?: boolean
    dealStage?: boolean
    salesRep?: boolean
    notes?: boolean
  }, ExtArgs["result"]["conferenceRoom"]>

  export type ConferenceRoomSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    companyEmail?: boolean
    cfoName?: boolean
    cfoEmail?: boolean
    industry?: boolean
    annualRevenue?: boolean
    annualBudget?: boolean
    accessCode?: boolean
    accessCodeHash?: boolean
    codeGeneratedAt?: boolean
    codeUsed?: boolean
    firstAccessedAt?: boolean
    lastAccessedAt?: boolean
    accessCount?: boolean
    status?: boolean
    expiresAt?: boolean
    closedAt?: boolean
    closureReason?: boolean
    encryptionKey?: boolean
    ipWhitelist?: boolean
    mfaEnabled?: boolean
    mfaPhone?: boolean
    dealValue?: boolean
    dealStage?: boolean
    salesRep?: boolean
    notes?: boolean
  }

  export type ConferenceRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "companyName" | "companyEmail" | "cfoName" | "cfoEmail" | "industry" | "annualRevenue" | "annualBudget" | "accessCode" | "accessCodeHash" | "codeGeneratedAt" | "codeUsed" | "firstAccessedAt" | "lastAccessedAt" | "accessCount" | "status" | "expiresAt" | "closedAt" | "closureReason" | "encryptionKey" | "ipWhitelist" | "mfaEnabled" | "mfaPhone" | "dealValue" | "dealStage" | "salesRep" | "notes", ExtArgs["result"]["conferenceRoom"]>
  export type ConferenceRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLog?: boolean | ConferenceRoom$auditLogArgs<ExtArgs>
    files?: boolean | ConferenceRoom$filesArgs<ExtArgs>
    _count?: boolean | ConferenceRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConferenceRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConferenceRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConferenceRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConferenceRoom"
    objects: {
      auditLog: Prisma.$AuditLogPayload<ExtArgs>[]
      files: Prisma.$ConferenceRoomFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      companyName: string
      companyEmail: string
      cfoName: string | null
      cfoEmail: string
      industry: string | null
      annualRevenue: number | null
      annualBudget: number | null
      accessCode: string
      accessCodeHash: string
      codeGeneratedAt: Date
      codeUsed: boolean
      firstAccessedAt: Date | null
      lastAccessedAt: Date | null
      accessCount: number
      status: $Enums.ConferenceRoomStatus
      expiresAt: Date
      closedAt: Date | null
      closureReason: string | null
      encryptionKey: string
      ipWhitelist: string[]
      mfaEnabled: boolean
      mfaPhone: string | null
      dealValue: number | null
      dealStage: string | null
      salesRep: string | null
      notes: string | null
    }, ExtArgs["result"]["conferenceRoom"]>
    composites: {}
  }

  type ConferenceRoomGetPayload<S extends boolean | null | undefined | ConferenceRoomDefaultArgs> = $Result.GetResult<Prisma.$ConferenceRoomPayload, S>

  type ConferenceRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConferenceRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConferenceRoomCountAggregateInputType | true
    }

  export interface ConferenceRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConferenceRoom'], meta: { name: 'ConferenceRoom' } }
    /**
     * Find zero or one ConferenceRoom that matches the filter.
     * @param {ConferenceRoomFindUniqueArgs} args - Arguments to find a ConferenceRoom
     * @example
     * // Get one ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConferenceRoomFindUniqueArgs>(args: SelectSubset<T, ConferenceRoomFindUniqueArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConferenceRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConferenceRoomFindUniqueOrThrowArgs} args - Arguments to find a ConferenceRoom
     * @example
     * // Get one ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConferenceRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ConferenceRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConferenceRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFindFirstArgs} args - Arguments to find a ConferenceRoom
     * @example
     * // Get one ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConferenceRoomFindFirstArgs>(args?: SelectSubset<T, ConferenceRoomFindFirstArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConferenceRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFindFirstOrThrowArgs} args - Arguments to find a ConferenceRoom
     * @example
     * // Get one ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConferenceRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ConferenceRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConferenceRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConferenceRooms
     * const conferenceRooms = await prisma.conferenceRoom.findMany()
     * 
     * // Get first 10 ConferenceRooms
     * const conferenceRooms = await prisma.conferenceRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conferenceRoomWithIdOnly = await prisma.conferenceRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConferenceRoomFindManyArgs>(args?: SelectSubset<T, ConferenceRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConferenceRoom.
     * @param {ConferenceRoomCreateArgs} args - Arguments to create a ConferenceRoom.
     * @example
     * // Create one ConferenceRoom
     * const ConferenceRoom = await prisma.conferenceRoom.create({
     *   data: {
     *     // ... data to create a ConferenceRoom
     *   }
     * })
     * 
     */
    create<T extends ConferenceRoomCreateArgs>(args: SelectSubset<T, ConferenceRoomCreateArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConferenceRooms.
     * @param {ConferenceRoomCreateManyArgs} args - Arguments to create many ConferenceRooms.
     * @example
     * // Create many ConferenceRooms
     * const conferenceRoom = await prisma.conferenceRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConferenceRoomCreateManyArgs>(args?: SelectSubset<T, ConferenceRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConferenceRooms and returns the data saved in the database.
     * @param {ConferenceRoomCreateManyAndReturnArgs} args - Arguments to create many ConferenceRooms.
     * @example
     * // Create many ConferenceRooms
     * const conferenceRoom = await prisma.conferenceRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConferenceRooms and only return the `id`
     * const conferenceRoomWithIdOnly = await prisma.conferenceRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConferenceRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ConferenceRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConferenceRoom.
     * @param {ConferenceRoomDeleteArgs} args - Arguments to delete one ConferenceRoom.
     * @example
     * // Delete one ConferenceRoom
     * const ConferenceRoom = await prisma.conferenceRoom.delete({
     *   where: {
     *     // ... filter to delete one ConferenceRoom
     *   }
     * })
     * 
     */
    delete<T extends ConferenceRoomDeleteArgs>(args: SelectSubset<T, ConferenceRoomDeleteArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConferenceRoom.
     * @param {ConferenceRoomUpdateArgs} args - Arguments to update one ConferenceRoom.
     * @example
     * // Update one ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConferenceRoomUpdateArgs>(args: SelectSubset<T, ConferenceRoomUpdateArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConferenceRooms.
     * @param {ConferenceRoomDeleteManyArgs} args - Arguments to filter ConferenceRooms to delete.
     * @example
     * // Delete a few ConferenceRooms
     * const { count } = await prisma.conferenceRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConferenceRoomDeleteManyArgs>(args?: SelectSubset<T, ConferenceRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConferenceRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConferenceRooms
     * const conferenceRoom = await prisma.conferenceRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConferenceRoomUpdateManyArgs>(args: SelectSubset<T, ConferenceRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConferenceRooms and returns the data updated in the database.
     * @param {ConferenceRoomUpdateManyAndReturnArgs} args - Arguments to update many ConferenceRooms.
     * @example
     * // Update many ConferenceRooms
     * const conferenceRoom = await prisma.conferenceRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConferenceRooms and only return the `id`
     * const conferenceRoomWithIdOnly = await prisma.conferenceRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConferenceRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ConferenceRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConferenceRoom.
     * @param {ConferenceRoomUpsertArgs} args - Arguments to update or create a ConferenceRoom.
     * @example
     * // Update or create a ConferenceRoom
     * const conferenceRoom = await prisma.conferenceRoom.upsert({
     *   create: {
     *     // ... data to create a ConferenceRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConferenceRoom we want to update
     *   }
     * })
     */
    upsert<T extends ConferenceRoomUpsertArgs>(args: SelectSubset<T, ConferenceRoomUpsertArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConferenceRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomCountArgs} args - Arguments to filter ConferenceRooms to count.
     * @example
     * // Count the number of ConferenceRooms
     * const count = await prisma.conferenceRoom.count({
     *   where: {
     *     // ... the filter for the ConferenceRooms we want to count
     *   }
     * })
    **/
    count<T extends ConferenceRoomCountArgs>(
      args?: Subset<T, ConferenceRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConferenceRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConferenceRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConferenceRoomAggregateArgs>(args: Subset<T, ConferenceRoomAggregateArgs>): Prisma.PrismaPromise<GetConferenceRoomAggregateType<T>>

    /**
     * Group by ConferenceRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConferenceRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConferenceRoomGroupByArgs['orderBy'] }
        : { orderBy?: ConferenceRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConferenceRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConferenceRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConferenceRoom model
   */
  readonly fields: ConferenceRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConferenceRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConferenceRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLog<T extends ConferenceRoom$auditLogArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceRoom$auditLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends ConferenceRoom$filesArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceRoom$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConferenceRoom model
   */
  interface ConferenceRoomFieldRefs {
    readonly id: FieldRef<"ConferenceRoom", 'String'>
    readonly createdAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly companyName: FieldRef<"ConferenceRoom", 'String'>
    readonly companyEmail: FieldRef<"ConferenceRoom", 'String'>
    readonly cfoName: FieldRef<"ConferenceRoom", 'String'>
    readonly cfoEmail: FieldRef<"ConferenceRoom", 'String'>
    readonly industry: FieldRef<"ConferenceRoom", 'String'>
    readonly annualRevenue: FieldRef<"ConferenceRoom", 'Float'>
    readonly annualBudget: FieldRef<"ConferenceRoom", 'Float'>
    readonly accessCode: FieldRef<"ConferenceRoom", 'String'>
    readonly accessCodeHash: FieldRef<"ConferenceRoom", 'String'>
    readonly codeGeneratedAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly codeUsed: FieldRef<"ConferenceRoom", 'Boolean'>
    readonly firstAccessedAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly lastAccessedAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly accessCount: FieldRef<"ConferenceRoom", 'Int'>
    readonly status: FieldRef<"ConferenceRoom", 'ConferenceRoomStatus'>
    readonly expiresAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly closedAt: FieldRef<"ConferenceRoom", 'DateTime'>
    readonly closureReason: FieldRef<"ConferenceRoom", 'String'>
    readonly encryptionKey: FieldRef<"ConferenceRoom", 'String'>
    readonly ipWhitelist: FieldRef<"ConferenceRoom", 'String[]'>
    readonly mfaEnabled: FieldRef<"ConferenceRoom", 'Boolean'>
    readonly mfaPhone: FieldRef<"ConferenceRoom", 'String'>
    readonly dealValue: FieldRef<"ConferenceRoom", 'Float'>
    readonly dealStage: FieldRef<"ConferenceRoom", 'String'>
    readonly salesRep: FieldRef<"ConferenceRoom", 'String'>
    readonly notes: FieldRef<"ConferenceRoom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConferenceRoom findUnique
   */
  export type ConferenceRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoom to fetch.
     */
    where: ConferenceRoomWhereUniqueInput
  }

  /**
   * ConferenceRoom findUniqueOrThrow
   */
  export type ConferenceRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoom to fetch.
     */
    where: ConferenceRoomWhereUniqueInput
  }

  /**
   * ConferenceRoom findFirst
   */
  export type ConferenceRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoom to fetch.
     */
    where?: ConferenceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRooms to fetch.
     */
    orderBy?: ConferenceRoomOrderByWithRelationInput | ConferenceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConferenceRooms.
     */
    cursor?: ConferenceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConferenceRooms.
     */
    distinct?: ConferenceRoomScalarFieldEnum | ConferenceRoomScalarFieldEnum[]
  }

  /**
   * ConferenceRoom findFirstOrThrow
   */
  export type ConferenceRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoom to fetch.
     */
    where?: ConferenceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRooms to fetch.
     */
    orderBy?: ConferenceRoomOrderByWithRelationInput | ConferenceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConferenceRooms.
     */
    cursor?: ConferenceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConferenceRooms.
     */
    distinct?: ConferenceRoomScalarFieldEnum | ConferenceRoomScalarFieldEnum[]
  }

  /**
   * ConferenceRoom findMany
   */
  export type ConferenceRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRooms to fetch.
     */
    where?: ConferenceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRooms to fetch.
     */
    orderBy?: ConferenceRoomOrderByWithRelationInput | ConferenceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConferenceRooms.
     */
    cursor?: ConferenceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRooms.
     */
    skip?: number
    distinct?: ConferenceRoomScalarFieldEnum | ConferenceRoomScalarFieldEnum[]
  }

  /**
   * ConferenceRoom create
   */
  export type ConferenceRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ConferenceRoom.
     */
    data: XOR<ConferenceRoomCreateInput, ConferenceRoomUncheckedCreateInput>
  }

  /**
   * ConferenceRoom createMany
   */
  export type ConferenceRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConferenceRooms.
     */
    data: ConferenceRoomCreateManyInput | ConferenceRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConferenceRoom createManyAndReturn
   */
  export type ConferenceRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ConferenceRooms.
     */
    data: ConferenceRoomCreateManyInput | ConferenceRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConferenceRoom update
   */
  export type ConferenceRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ConferenceRoom.
     */
    data: XOR<ConferenceRoomUpdateInput, ConferenceRoomUncheckedUpdateInput>
    /**
     * Choose, which ConferenceRoom to update.
     */
    where: ConferenceRoomWhereUniqueInput
  }

  /**
   * ConferenceRoom updateMany
   */
  export type ConferenceRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConferenceRooms.
     */
    data: XOR<ConferenceRoomUpdateManyMutationInput, ConferenceRoomUncheckedUpdateManyInput>
    /**
     * Filter which ConferenceRooms to update
     */
    where?: ConferenceRoomWhereInput
    /**
     * Limit how many ConferenceRooms to update.
     */
    limit?: number
  }

  /**
   * ConferenceRoom updateManyAndReturn
   */
  export type ConferenceRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * The data used to update ConferenceRooms.
     */
    data: XOR<ConferenceRoomUpdateManyMutationInput, ConferenceRoomUncheckedUpdateManyInput>
    /**
     * Filter which ConferenceRooms to update
     */
    where?: ConferenceRoomWhereInput
    /**
     * Limit how many ConferenceRooms to update.
     */
    limit?: number
  }

  /**
   * ConferenceRoom upsert
   */
  export type ConferenceRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ConferenceRoom to update in case it exists.
     */
    where: ConferenceRoomWhereUniqueInput
    /**
     * In case the ConferenceRoom found by the `where` argument doesn't exist, create a new ConferenceRoom with this data.
     */
    create: XOR<ConferenceRoomCreateInput, ConferenceRoomUncheckedCreateInput>
    /**
     * In case the ConferenceRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConferenceRoomUpdateInput, ConferenceRoomUncheckedUpdateInput>
  }

  /**
   * ConferenceRoom delete
   */
  export type ConferenceRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
    /**
     * Filter which ConferenceRoom to delete.
     */
    where: ConferenceRoomWhereUniqueInput
  }

  /**
   * ConferenceRoom deleteMany
   */
  export type ConferenceRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConferenceRooms to delete
     */
    where?: ConferenceRoomWhereInput
    /**
     * Limit how many ConferenceRooms to delete.
     */
    limit?: number
  }

  /**
   * ConferenceRoom.auditLog
   */
  export type ConferenceRoom$auditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * ConferenceRoom.files
   */
  export type ConferenceRoom$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    where?: ConferenceRoomFileWhereInput
    orderBy?: ConferenceRoomFileOrderByWithRelationInput | ConferenceRoomFileOrderByWithRelationInput[]
    cursor?: ConferenceRoomFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConferenceRoomFileScalarFieldEnum | ConferenceRoomFileScalarFieldEnum[]
  }

  /**
   * ConferenceRoom without action
   */
  export type ConferenceRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoom
     */
    select?: ConferenceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoom
     */
    omit?: ConferenceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomInclude<ExtArgs> | null
  }


  /**
   * Model ConferenceRoomFile
   */

  export type AggregateConferenceRoomFile = {
    _count: ConferenceRoomFileCountAggregateOutputType | null
    _avg: ConferenceRoomFileAvgAggregateOutputType | null
    _sum: ConferenceRoomFileSumAggregateOutputType | null
    _min: ConferenceRoomFileMinAggregateOutputType | null
    _max: ConferenceRoomFileMaxAggregateOutputType | null
  }

  export type ConferenceRoomFileAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type ConferenceRoomFileSumAggregateOutputType = {
    fileSize: number | null
  }

  export type ConferenceRoomFileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fileName: string | null
    fileSize: number | null
    fileType: string | null
    originalName: string | null
    encryptedPath: string | null
    encryptionIV: string | null
    checksum: string | null
    fileCategory: $Enums.FileCategory | null
    sensitive: boolean | null
    uploadedBy: string | null
    uploadedFrom: string | null
    userAgent: string | null
    processed: boolean | null
    processedAt: Date | null
    auditIncluded: boolean | null
    conferenceRoomId: string | null
  }

  export type ConferenceRoomFileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fileName: string | null
    fileSize: number | null
    fileType: string | null
    originalName: string | null
    encryptedPath: string | null
    encryptionIV: string | null
    checksum: string | null
    fileCategory: $Enums.FileCategory | null
    sensitive: boolean | null
    uploadedBy: string | null
    uploadedFrom: string | null
    userAgent: string | null
    processed: boolean | null
    processedAt: Date | null
    auditIncluded: boolean | null
    conferenceRoomId: string | null
  }

  export type ConferenceRoomFileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    fileName: number
    fileSize: number
    fileType: number
    originalName: number
    encryptedPath: number
    encryptionIV: number
    checksum: number
    fileCategory: number
    sensitive: number
    uploadedBy: number
    uploadedFrom: number
    userAgent: number
    processed: number
    processedAt: number
    auditIncluded: number
    conferenceRoomId: number
    _all: number
  }


  export type ConferenceRoomFileAvgAggregateInputType = {
    fileSize?: true
  }

  export type ConferenceRoomFileSumAggregateInputType = {
    fileSize?: true
  }

  export type ConferenceRoomFileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    originalName?: true
    encryptedPath?: true
    encryptionIV?: true
    checksum?: true
    fileCategory?: true
    sensitive?: true
    uploadedBy?: true
    uploadedFrom?: true
    userAgent?: true
    processed?: true
    processedAt?: true
    auditIncluded?: true
    conferenceRoomId?: true
  }

  export type ConferenceRoomFileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    originalName?: true
    encryptedPath?: true
    encryptionIV?: true
    checksum?: true
    fileCategory?: true
    sensitive?: true
    uploadedBy?: true
    uploadedFrom?: true
    userAgent?: true
    processed?: true
    processedAt?: true
    auditIncluded?: true
    conferenceRoomId?: true
  }

  export type ConferenceRoomFileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    originalName?: true
    encryptedPath?: true
    encryptionIV?: true
    checksum?: true
    fileCategory?: true
    sensitive?: true
    uploadedBy?: true
    uploadedFrom?: true
    userAgent?: true
    processed?: true
    processedAt?: true
    auditIncluded?: true
    conferenceRoomId?: true
    _all?: true
  }

  export type ConferenceRoomFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConferenceRoomFile to aggregate.
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRoomFiles to fetch.
     */
    orderBy?: ConferenceRoomFileOrderByWithRelationInput | ConferenceRoomFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConferenceRoomFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRoomFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRoomFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConferenceRoomFiles
    **/
    _count?: true | ConferenceRoomFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConferenceRoomFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConferenceRoomFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConferenceRoomFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConferenceRoomFileMaxAggregateInputType
  }

  export type GetConferenceRoomFileAggregateType<T extends ConferenceRoomFileAggregateArgs> = {
        [P in keyof T & keyof AggregateConferenceRoomFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConferenceRoomFile[P]>
      : GetScalarType<T[P], AggregateConferenceRoomFile[P]>
  }




  export type ConferenceRoomFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceRoomFileWhereInput
    orderBy?: ConferenceRoomFileOrderByWithAggregationInput | ConferenceRoomFileOrderByWithAggregationInput[]
    by: ConferenceRoomFileScalarFieldEnum[] | ConferenceRoomFileScalarFieldEnum
    having?: ConferenceRoomFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConferenceRoomFileCountAggregateInputType | true
    _avg?: ConferenceRoomFileAvgAggregateInputType
    _sum?: ConferenceRoomFileSumAggregateInputType
    _min?: ConferenceRoomFileMinAggregateInputType
    _max?: ConferenceRoomFileMaxAggregateInputType
  }

  export type ConferenceRoomFileGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent: string | null
    processed: boolean
    processedAt: Date | null
    auditIncluded: boolean
    conferenceRoomId: string
    _count: ConferenceRoomFileCountAggregateOutputType | null
    _avg: ConferenceRoomFileAvgAggregateOutputType | null
    _sum: ConferenceRoomFileSumAggregateOutputType | null
    _min: ConferenceRoomFileMinAggregateOutputType | null
    _max: ConferenceRoomFileMaxAggregateOutputType | null
  }

  type GetConferenceRoomFileGroupByPayload<T extends ConferenceRoomFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConferenceRoomFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConferenceRoomFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConferenceRoomFileGroupByOutputType[P]>
            : GetScalarType<T[P], ConferenceRoomFileGroupByOutputType[P]>
        }
      >
    >


  export type ConferenceRoomFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    originalName?: boolean
    encryptedPath?: boolean
    encryptionIV?: boolean
    checksum?: boolean
    fileCategory?: boolean
    sensitive?: boolean
    uploadedBy?: boolean
    uploadedFrom?: boolean
    userAgent?: boolean
    processed?: boolean
    processedAt?: boolean
    auditIncluded?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conferenceRoomFile"]>

  export type ConferenceRoomFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    originalName?: boolean
    encryptedPath?: boolean
    encryptionIV?: boolean
    checksum?: boolean
    fileCategory?: boolean
    sensitive?: boolean
    uploadedBy?: boolean
    uploadedFrom?: boolean
    userAgent?: boolean
    processed?: boolean
    processedAt?: boolean
    auditIncluded?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conferenceRoomFile"]>

  export type ConferenceRoomFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    originalName?: boolean
    encryptedPath?: boolean
    encryptionIV?: boolean
    checksum?: boolean
    fileCategory?: boolean
    sensitive?: boolean
    uploadedBy?: boolean
    uploadedFrom?: boolean
    userAgent?: boolean
    processed?: boolean
    processedAt?: boolean
    auditIncluded?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conferenceRoomFile"]>

  export type ConferenceRoomFileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    originalName?: boolean
    encryptedPath?: boolean
    encryptionIV?: boolean
    checksum?: boolean
    fileCategory?: boolean
    sensitive?: boolean
    uploadedBy?: boolean
    uploadedFrom?: boolean
    userAgent?: boolean
    processed?: boolean
    processedAt?: boolean
    auditIncluded?: boolean
    conferenceRoomId?: boolean
  }

  export type ConferenceRoomFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "fileName" | "fileSize" | "fileType" | "originalName" | "encryptedPath" | "encryptionIV" | "checksum" | "fileCategory" | "sensitive" | "uploadedBy" | "uploadedFrom" | "userAgent" | "processed" | "processedAt" | "auditIncluded" | "conferenceRoomId", ExtArgs["result"]["conferenceRoomFile"]>
  export type ConferenceRoomFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }
  export type ConferenceRoomFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }
  export type ConferenceRoomFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }

  export type $ConferenceRoomFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConferenceRoomFile"
    objects: {
      conferenceRoom: Prisma.$ConferenceRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      fileName: string
      fileSize: number
      fileType: string
      originalName: string
      encryptedPath: string
      encryptionIV: string
      checksum: string
      fileCategory: $Enums.FileCategory
      sensitive: boolean
      uploadedBy: string
      uploadedFrom: string
      userAgent: string | null
      processed: boolean
      processedAt: Date | null
      auditIncluded: boolean
      conferenceRoomId: string
    }, ExtArgs["result"]["conferenceRoomFile"]>
    composites: {}
  }

  type ConferenceRoomFileGetPayload<S extends boolean | null | undefined | ConferenceRoomFileDefaultArgs> = $Result.GetResult<Prisma.$ConferenceRoomFilePayload, S>

  type ConferenceRoomFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConferenceRoomFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConferenceRoomFileCountAggregateInputType | true
    }

  export interface ConferenceRoomFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConferenceRoomFile'], meta: { name: 'ConferenceRoomFile' } }
    /**
     * Find zero or one ConferenceRoomFile that matches the filter.
     * @param {ConferenceRoomFileFindUniqueArgs} args - Arguments to find a ConferenceRoomFile
     * @example
     * // Get one ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConferenceRoomFileFindUniqueArgs>(args: SelectSubset<T, ConferenceRoomFileFindUniqueArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConferenceRoomFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConferenceRoomFileFindUniqueOrThrowArgs} args - Arguments to find a ConferenceRoomFile
     * @example
     * // Get one ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConferenceRoomFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ConferenceRoomFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConferenceRoomFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileFindFirstArgs} args - Arguments to find a ConferenceRoomFile
     * @example
     * // Get one ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConferenceRoomFileFindFirstArgs>(args?: SelectSubset<T, ConferenceRoomFileFindFirstArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConferenceRoomFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileFindFirstOrThrowArgs} args - Arguments to find a ConferenceRoomFile
     * @example
     * // Get one ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConferenceRoomFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ConferenceRoomFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConferenceRoomFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConferenceRoomFiles
     * const conferenceRoomFiles = await prisma.conferenceRoomFile.findMany()
     * 
     * // Get first 10 ConferenceRoomFiles
     * const conferenceRoomFiles = await prisma.conferenceRoomFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conferenceRoomFileWithIdOnly = await prisma.conferenceRoomFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConferenceRoomFileFindManyArgs>(args?: SelectSubset<T, ConferenceRoomFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConferenceRoomFile.
     * @param {ConferenceRoomFileCreateArgs} args - Arguments to create a ConferenceRoomFile.
     * @example
     * // Create one ConferenceRoomFile
     * const ConferenceRoomFile = await prisma.conferenceRoomFile.create({
     *   data: {
     *     // ... data to create a ConferenceRoomFile
     *   }
     * })
     * 
     */
    create<T extends ConferenceRoomFileCreateArgs>(args: SelectSubset<T, ConferenceRoomFileCreateArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConferenceRoomFiles.
     * @param {ConferenceRoomFileCreateManyArgs} args - Arguments to create many ConferenceRoomFiles.
     * @example
     * // Create many ConferenceRoomFiles
     * const conferenceRoomFile = await prisma.conferenceRoomFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConferenceRoomFileCreateManyArgs>(args?: SelectSubset<T, ConferenceRoomFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConferenceRoomFiles and returns the data saved in the database.
     * @param {ConferenceRoomFileCreateManyAndReturnArgs} args - Arguments to create many ConferenceRoomFiles.
     * @example
     * // Create many ConferenceRoomFiles
     * const conferenceRoomFile = await prisma.conferenceRoomFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConferenceRoomFiles and only return the `id`
     * const conferenceRoomFileWithIdOnly = await prisma.conferenceRoomFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConferenceRoomFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ConferenceRoomFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConferenceRoomFile.
     * @param {ConferenceRoomFileDeleteArgs} args - Arguments to delete one ConferenceRoomFile.
     * @example
     * // Delete one ConferenceRoomFile
     * const ConferenceRoomFile = await prisma.conferenceRoomFile.delete({
     *   where: {
     *     // ... filter to delete one ConferenceRoomFile
     *   }
     * })
     * 
     */
    delete<T extends ConferenceRoomFileDeleteArgs>(args: SelectSubset<T, ConferenceRoomFileDeleteArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConferenceRoomFile.
     * @param {ConferenceRoomFileUpdateArgs} args - Arguments to update one ConferenceRoomFile.
     * @example
     * // Update one ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConferenceRoomFileUpdateArgs>(args: SelectSubset<T, ConferenceRoomFileUpdateArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConferenceRoomFiles.
     * @param {ConferenceRoomFileDeleteManyArgs} args - Arguments to filter ConferenceRoomFiles to delete.
     * @example
     * // Delete a few ConferenceRoomFiles
     * const { count } = await prisma.conferenceRoomFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConferenceRoomFileDeleteManyArgs>(args?: SelectSubset<T, ConferenceRoomFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConferenceRoomFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConferenceRoomFiles
     * const conferenceRoomFile = await prisma.conferenceRoomFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConferenceRoomFileUpdateManyArgs>(args: SelectSubset<T, ConferenceRoomFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConferenceRoomFiles and returns the data updated in the database.
     * @param {ConferenceRoomFileUpdateManyAndReturnArgs} args - Arguments to update many ConferenceRoomFiles.
     * @example
     * // Update many ConferenceRoomFiles
     * const conferenceRoomFile = await prisma.conferenceRoomFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConferenceRoomFiles and only return the `id`
     * const conferenceRoomFileWithIdOnly = await prisma.conferenceRoomFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConferenceRoomFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ConferenceRoomFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConferenceRoomFile.
     * @param {ConferenceRoomFileUpsertArgs} args - Arguments to update or create a ConferenceRoomFile.
     * @example
     * // Update or create a ConferenceRoomFile
     * const conferenceRoomFile = await prisma.conferenceRoomFile.upsert({
     *   create: {
     *     // ... data to create a ConferenceRoomFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConferenceRoomFile we want to update
     *   }
     * })
     */
    upsert<T extends ConferenceRoomFileUpsertArgs>(args: SelectSubset<T, ConferenceRoomFileUpsertArgs<ExtArgs>>): Prisma__ConferenceRoomFileClient<$Result.GetResult<Prisma.$ConferenceRoomFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConferenceRoomFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileCountArgs} args - Arguments to filter ConferenceRoomFiles to count.
     * @example
     * // Count the number of ConferenceRoomFiles
     * const count = await prisma.conferenceRoomFile.count({
     *   where: {
     *     // ... the filter for the ConferenceRoomFiles we want to count
     *   }
     * })
    **/
    count<T extends ConferenceRoomFileCountArgs>(
      args?: Subset<T, ConferenceRoomFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConferenceRoomFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConferenceRoomFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConferenceRoomFileAggregateArgs>(args: Subset<T, ConferenceRoomFileAggregateArgs>): Prisma.PrismaPromise<GetConferenceRoomFileAggregateType<T>>

    /**
     * Group by ConferenceRoomFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceRoomFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConferenceRoomFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConferenceRoomFileGroupByArgs['orderBy'] }
        : { orderBy?: ConferenceRoomFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConferenceRoomFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConferenceRoomFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConferenceRoomFile model
   */
  readonly fields: ConferenceRoomFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConferenceRoomFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConferenceRoomFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conferenceRoom<T extends ConferenceRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceRoomDefaultArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConferenceRoomFile model
   */
  interface ConferenceRoomFileFieldRefs {
    readonly id: FieldRef<"ConferenceRoomFile", 'String'>
    readonly createdAt: FieldRef<"ConferenceRoomFile", 'DateTime'>
    readonly updatedAt: FieldRef<"ConferenceRoomFile", 'DateTime'>
    readonly fileName: FieldRef<"ConferenceRoomFile", 'String'>
    readonly fileSize: FieldRef<"ConferenceRoomFile", 'Int'>
    readonly fileType: FieldRef<"ConferenceRoomFile", 'String'>
    readonly originalName: FieldRef<"ConferenceRoomFile", 'String'>
    readonly encryptedPath: FieldRef<"ConferenceRoomFile", 'String'>
    readonly encryptionIV: FieldRef<"ConferenceRoomFile", 'String'>
    readonly checksum: FieldRef<"ConferenceRoomFile", 'String'>
    readonly fileCategory: FieldRef<"ConferenceRoomFile", 'FileCategory'>
    readonly sensitive: FieldRef<"ConferenceRoomFile", 'Boolean'>
    readonly uploadedBy: FieldRef<"ConferenceRoomFile", 'String'>
    readonly uploadedFrom: FieldRef<"ConferenceRoomFile", 'String'>
    readonly userAgent: FieldRef<"ConferenceRoomFile", 'String'>
    readonly processed: FieldRef<"ConferenceRoomFile", 'Boolean'>
    readonly processedAt: FieldRef<"ConferenceRoomFile", 'DateTime'>
    readonly auditIncluded: FieldRef<"ConferenceRoomFile", 'Boolean'>
    readonly conferenceRoomId: FieldRef<"ConferenceRoomFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConferenceRoomFile findUnique
   */
  export type ConferenceRoomFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoomFile to fetch.
     */
    where: ConferenceRoomFileWhereUniqueInput
  }

  /**
   * ConferenceRoomFile findUniqueOrThrow
   */
  export type ConferenceRoomFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoomFile to fetch.
     */
    where: ConferenceRoomFileWhereUniqueInput
  }

  /**
   * ConferenceRoomFile findFirst
   */
  export type ConferenceRoomFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoomFile to fetch.
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRoomFiles to fetch.
     */
    orderBy?: ConferenceRoomFileOrderByWithRelationInput | ConferenceRoomFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConferenceRoomFiles.
     */
    cursor?: ConferenceRoomFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRoomFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRoomFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConferenceRoomFiles.
     */
    distinct?: ConferenceRoomFileScalarFieldEnum | ConferenceRoomFileScalarFieldEnum[]
  }

  /**
   * ConferenceRoomFile findFirstOrThrow
   */
  export type ConferenceRoomFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoomFile to fetch.
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRoomFiles to fetch.
     */
    orderBy?: ConferenceRoomFileOrderByWithRelationInput | ConferenceRoomFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConferenceRoomFiles.
     */
    cursor?: ConferenceRoomFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRoomFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRoomFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConferenceRoomFiles.
     */
    distinct?: ConferenceRoomFileScalarFieldEnum | ConferenceRoomFileScalarFieldEnum[]
  }

  /**
   * ConferenceRoomFile findMany
   */
  export type ConferenceRoomFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter, which ConferenceRoomFiles to fetch.
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConferenceRoomFiles to fetch.
     */
    orderBy?: ConferenceRoomFileOrderByWithRelationInput | ConferenceRoomFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConferenceRoomFiles.
     */
    cursor?: ConferenceRoomFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConferenceRoomFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConferenceRoomFiles.
     */
    skip?: number
    distinct?: ConferenceRoomFileScalarFieldEnum | ConferenceRoomFileScalarFieldEnum[]
  }

  /**
   * ConferenceRoomFile create
   */
  export type ConferenceRoomFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ConferenceRoomFile.
     */
    data: XOR<ConferenceRoomFileCreateInput, ConferenceRoomFileUncheckedCreateInput>
  }

  /**
   * ConferenceRoomFile createMany
   */
  export type ConferenceRoomFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConferenceRoomFiles.
     */
    data: ConferenceRoomFileCreateManyInput | ConferenceRoomFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConferenceRoomFile createManyAndReturn
   */
  export type ConferenceRoomFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * The data used to create many ConferenceRoomFiles.
     */
    data: ConferenceRoomFileCreateManyInput | ConferenceRoomFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConferenceRoomFile update
   */
  export type ConferenceRoomFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ConferenceRoomFile.
     */
    data: XOR<ConferenceRoomFileUpdateInput, ConferenceRoomFileUncheckedUpdateInput>
    /**
     * Choose, which ConferenceRoomFile to update.
     */
    where: ConferenceRoomFileWhereUniqueInput
  }

  /**
   * ConferenceRoomFile updateMany
   */
  export type ConferenceRoomFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConferenceRoomFiles.
     */
    data: XOR<ConferenceRoomFileUpdateManyMutationInput, ConferenceRoomFileUncheckedUpdateManyInput>
    /**
     * Filter which ConferenceRoomFiles to update
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * Limit how many ConferenceRoomFiles to update.
     */
    limit?: number
  }

  /**
   * ConferenceRoomFile updateManyAndReturn
   */
  export type ConferenceRoomFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * The data used to update ConferenceRoomFiles.
     */
    data: XOR<ConferenceRoomFileUpdateManyMutationInput, ConferenceRoomFileUncheckedUpdateManyInput>
    /**
     * Filter which ConferenceRoomFiles to update
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * Limit how many ConferenceRoomFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConferenceRoomFile upsert
   */
  export type ConferenceRoomFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ConferenceRoomFile to update in case it exists.
     */
    where: ConferenceRoomFileWhereUniqueInput
    /**
     * In case the ConferenceRoomFile found by the `where` argument doesn't exist, create a new ConferenceRoomFile with this data.
     */
    create: XOR<ConferenceRoomFileCreateInput, ConferenceRoomFileUncheckedCreateInput>
    /**
     * In case the ConferenceRoomFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConferenceRoomFileUpdateInput, ConferenceRoomFileUncheckedUpdateInput>
  }

  /**
   * ConferenceRoomFile delete
   */
  export type ConferenceRoomFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
    /**
     * Filter which ConferenceRoomFile to delete.
     */
    where: ConferenceRoomFileWhereUniqueInput
  }

  /**
   * ConferenceRoomFile deleteMany
   */
  export type ConferenceRoomFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConferenceRoomFiles to delete
     */
    where?: ConferenceRoomFileWhereInput
    /**
     * Limit how many ConferenceRoomFiles to delete.
     */
    limit?: number
  }

  /**
   * ConferenceRoomFile without action
   */
  export type ConferenceRoomFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceRoomFile
     */
    select?: ConferenceRoomFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConferenceRoomFile
     */
    omit?: ConferenceRoomFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceRoomFileInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    eventType: $Enums.AuditEventType | null
    actorEmail: string | null
    actorIP: string | null
    userAgent: string | null
    success: boolean | null
    errorMsg: string | null
    conferenceRoomId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    eventType: $Enums.AuditEventType | null
    actorEmail: string | null
    actorIP: string | null
    userAgent: string | null
    success: boolean | null
    errorMsg: string | null
    conferenceRoomId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    createdAt: number
    eventType: number
    eventData: number
    actorEmail: number
    actorIP: number
    userAgent: number
    success: number
    errorMsg: number
    conferenceRoomId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    actorEmail?: true
    actorIP?: true
    userAgent?: true
    success?: true
    errorMsg?: true
    conferenceRoomId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    actorEmail?: true
    actorIP?: true
    userAgent?: true
    success?: true
    errorMsg?: true
    conferenceRoomId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    eventData?: true
    actorEmail?: true
    actorIP?: true
    userAgent?: true
    success?: true
    errorMsg?: true
    conferenceRoomId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    createdAt: Date
    eventType: $Enums.AuditEventType
    eventData: JsonValue
    actorEmail: string
    actorIP: string
    userAgent: string | null
    success: boolean
    errorMsg: string | null
    conferenceRoomId: string
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    eventData?: boolean
    actorEmail?: boolean
    actorIP?: boolean
    userAgent?: boolean
    success?: boolean
    errorMsg?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    eventData?: boolean
    actorEmail?: boolean
    actorIP?: boolean
    userAgent?: boolean
    success?: boolean
    errorMsg?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    eventData?: boolean
    actorEmail?: boolean
    actorIP?: boolean
    userAgent?: boolean
    success?: boolean
    errorMsg?: boolean
    conferenceRoomId?: boolean
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    eventData?: boolean
    actorEmail?: boolean
    actorIP?: boolean
    userAgent?: boolean
    success?: boolean
    errorMsg?: boolean
    conferenceRoomId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "eventType" | "eventData" | "actorEmail" | "actorIP" | "userAgent" | "success" | "errorMsg" | "conferenceRoomId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferenceRoom?: boolean | ConferenceRoomDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      conferenceRoom: Prisma.$ConferenceRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      eventType: $Enums.AuditEventType
      eventData: Prisma.JsonValue
      actorEmail: string
      actorIP: string
      userAgent: string | null
      success: boolean
      errorMsg: string | null
      conferenceRoomId: string
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conferenceRoom<T extends ConferenceRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceRoomDefaultArgs<ExtArgs>>): Prisma__ConferenceRoomClient<$Result.GetResult<Prisma.$ConferenceRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly eventType: FieldRef<"AuditLog", 'AuditEventType'>
    readonly eventData: FieldRef<"AuditLog", 'Json'>
    readonly actorEmail: FieldRef<"AuditLog", 'String'>
    readonly actorIP: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly success: FieldRef<"AuditLog", 'Boolean'>
    readonly errorMsg: FieldRef<"AuditLog", 'String'>
    readonly conferenceRoomId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    requestsPerDay: number | null
    requestsToday: number | null
    totalRequests: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    requestsPerDay: number | null
    requestsToday: number | null
    totalRequests: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    keyHash: string | null
    encryptedKey: string | null
    customerId: string | null
    customerEmail: string | null
    companyName: string | null
    status: $Enums.ApiKeyStatus | null
    revokedAt: Date | null
    revokedReason: string | null
    requestsPerDay: number | null
    requestsToday: number | null
    lastResetAt: Date | null
    totalRequests: number | null
    lastUsedAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    billingStatus: $Enums.BillingStatus | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    keyHash: string | null
    encryptedKey: string | null
    customerId: string | null
    customerEmail: string | null
    companyName: string | null
    status: $Enums.ApiKeyStatus | null
    revokedAt: Date | null
    revokedReason: string | null
    requestsPerDay: number | null
    requestsToday: number | null
    lastResetAt: Date | null
    totalRequests: number | null
    lastUsedAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    billingStatus: $Enums.BillingStatus | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    key: number
    keyHash: number
    encryptedKey: number
    customerId: number
    customerEmail: number
    companyName: number
    status: number
    revokedAt: number
    revokedReason: number
    requestsPerDay: number
    requestsToday: number
    lastResetAt: number
    totalRequests: number
    lastUsedAt: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    billingStatus: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    requestsPerDay?: true
    requestsToday?: true
    totalRequests?: true
  }

  export type ApiKeySumAggregateInputType = {
    requestsPerDay?: true
    requestsToday?: true
    totalRequests?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    keyHash?: true
    encryptedKey?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    revokedAt?: true
    revokedReason?: true
    requestsPerDay?: true
    requestsToday?: true
    lastResetAt?: true
    totalRequests?: true
    lastUsedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    billingStatus?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    keyHash?: true
    encryptedKey?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    revokedAt?: true
    revokedReason?: true
    requestsPerDay?: true
    requestsToday?: true
    lastResetAt?: true
    totalRequests?: true
    lastUsedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    billingStatus?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    keyHash?: true
    encryptedKey?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    revokedAt?: true
    revokedReason?: true
    requestsPerDay?: true
    requestsToday?: true
    lastResetAt?: true
    totalRequests?: true
    lastUsedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    billingStatus?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status: $Enums.ApiKeyStatus
    revokedAt: Date | null
    revokedReason: string | null
    requestsPerDay: number
    requestsToday: number
    lastResetAt: Date
    totalRequests: number
    lastUsedAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    billingStatus: $Enums.BillingStatus
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    keyHash?: boolean
    encryptedKey?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    requestsPerDay?: boolean
    requestsToday?: boolean
    lastResetAt?: boolean
    totalRequests?: boolean
    lastUsedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    billingStatus?: boolean
    corrections?: boolean | ApiKey$correctionsArgs<ExtArgs>
    automationLogs?: boolean | ApiKey$automationLogsArgs<ExtArgs>
    fileUploads?: boolean | ApiKey$fileUploadsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    keyHash?: boolean
    encryptedKey?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    requestsPerDay?: boolean
    requestsToday?: boolean
    lastResetAt?: boolean
    totalRequests?: boolean
    lastUsedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    billingStatus?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    keyHash?: boolean
    encryptedKey?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    requestsPerDay?: boolean
    requestsToday?: boolean
    lastResetAt?: boolean
    totalRequests?: boolean
    lastUsedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    billingStatus?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    keyHash?: boolean
    encryptedKey?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    requestsPerDay?: boolean
    requestsToday?: boolean
    lastResetAt?: boolean
    totalRequests?: boolean
    lastUsedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    billingStatus?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "key" | "keyHash" | "encryptedKey" | "customerId" | "customerEmail" | "companyName" | "status" | "revokedAt" | "revokedReason" | "requestsPerDay" | "requestsToday" | "lastResetAt" | "totalRequests" | "lastUsedAt" | "stripeCustomerId" | "stripeSubscriptionId" | "billingStatus", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corrections?: boolean | ApiKey$correctionsArgs<ExtArgs>
    automationLogs?: boolean | ApiKey$automationLogsArgs<ExtArgs>
    fileUploads?: boolean | ApiKey$fileUploadsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      corrections: Prisma.$PayrollCorrectionPayload<ExtArgs>[]
      automationLogs: Prisma.$AutomationLogPayload<ExtArgs>[]
      fileUploads: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      key: string
      keyHash: string
      encryptedKey: string
      customerId: string
      customerEmail: string
      companyName: string
      status: $Enums.ApiKeyStatus
      revokedAt: Date | null
      revokedReason: string | null
      requestsPerDay: number
      requestsToday: number
      lastResetAt: Date
      totalRequests: number
      lastUsedAt: Date | null
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      billingStatus: $Enums.BillingStatus
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corrections<T extends ApiKey$correctionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$correctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    automationLogs<T extends ApiKey$automationLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$automationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fileUploads<T extends ApiKey$fileUploadsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$fileUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly encryptedKey: FieldRef<"ApiKey", 'String'>
    readonly customerId: FieldRef<"ApiKey", 'String'>
    readonly customerEmail: FieldRef<"ApiKey", 'String'>
    readonly companyName: FieldRef<"ApiKey", 'String'>
    readonly status: FieldRef<"ApiKey", 'ApiKeyStatus'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly revokedReason: FieldRef<"ApiKey", 'String'>
    readonly requestsPerDay: FieldRef<"ApiKey", 'Int'>
    readonly requestsToday: FieldRef<"ApiKey", 'Int'>
    readonly lastResetAt: FieldRef<"ApiKey", 'DateTime'>
    readonly totalRequests: FieldRef<"ApiKey", 'Int'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"ApiKey", 'String'>
    readonly stripeSubscriptionId: FieldRef<"ApiKey", 'String'>
    readonly billingStatus: FieldRef<"ApiKey", 'BillingStatus'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.corrections
   */
  export type ApiKey$correctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    where?: PayrollCorrectionWhereInput
    orderBy?: PayrollCorrectionOrderByWithRelationInput | PayrollCorrectionOrderByWithRelationInput[]
    cursor?: PayrollCorrectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollCorrectionScalarFieldEnum | PayrollCorrectionScalarFieldEnum[]
  }

  /**
   * ApiKey.automationLogs
   */
  export type ApiKey$automationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    where?: AutomationLogWhereInput
    orderBy?: AutomationLogOrderByWithRelationInput | AutomationLogOrderByWithRelationInput[]
    cursor?: AutomationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationLogScalarFieldEnum | AutomationLogScalarFieldEnum[]
  }

  /**
   * ApiKey.fileUploads
   */
  export type ApiKey$fileUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model PayrollCorrection
   */

  export type AggregatePayrollCorrection = {
    _count: PayrollCorrectionCountAggregateOutputType | null
    _avg: PayrollCorrectionAvgAggregateOutputType | null
    _sum: PayrollCorrectionSumAggregateOutputType | null
    _min: PayrollCorrectionMinAggregateOutputType | null
    _max: PayrollCorrectionMaxAggregateOutputType | null
  }

  export type PayrollCorrectionAvgAggregateOutputType = {
    aiTokensUsed: number | null
    processingTime: number | null
    correctionCount: number | null
  }

  export type PayrollCorrectionSumAggregateOutputType = {
    aiTokensUsed: number | null
    processingTime: number | null
    correctionCount: number | null
  }

  export type PayrollCorrectionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiKeyId: string | null
    employeeId: string | null
    aiModel: string | null
    aiRequestId: string | null
    aiTokensUsed: number | null
    processingTime: number | null
    correctionsFound: boolean | null
    correctionCount: number | null
    status: $Enums.CorrectionStatus | null
    errorMsg: string | null
  }

  export type PayrollCorrectionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiKeyId: string | null
    employeeId: string | null
    aiModel: string | null
    aiRequestId: string | null
    aiTokensUsed: number | null
    processingTime: number | null
    correctionsFound: boolean | null
    correctionCount: number | null
    status: $Enums.CorrectionStatus | null
    errorMsg: string | null
  }

  export type PayrollCorrectionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    apiKeyId: number
    inputData: number
    employeeId: number
    aiModel: number
    aiRequestId: number
    aiTokensUsed: number
    processingTime: number
    correctionsFound: number
    correctionCount: number
    outputData: number
    issuesFound: number
    status: number
    errorMsg: number
    _all: number
  }


  export type PayrollCorrectionAvgAggregateInputType = {
    aiTokensUsed?: true
    processingTime?: true
    correctionCount?: true
  }

  export type PayrollCorrectionSumAggregateInputType = {
    aiTokensUsed?: true
    processingTime?: true
    correctionCount?: true
  }

  export type PayrollCorrectionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    apiKeyId?: true
    employeeId?: true
    aiModel?: true
    aiRequestId?: true
    aiTokensUsed?: true
    processingTime?: true
    correctionsFound?: true
    correctionCount?: true
    status?: true
    errorMsg?: true
  }

  export type PayrollCorrectionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    apiKeyId?: true
    employeeId?: true
    aiModel?: true
    aiRequestId?: true
    aiTokensUsed?: true
    processingTime?: true
    correctionsFound?: true
    correctionCount?: true
    status?: true
    errorMsg?: true
  }

  export type PayrollCorrectionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    apiKeyId?: true
    inputData?: true
    employeeId?: true
    aiModel?: true
    aiRequestId?: true
    aiTokensUsed?: true
    processingTime?: true
    correctionsFound?: true
    correctionCount?: true
    outputData?: true
    issuesFound?: true
    status?: true
    errorMsg?: true
    _all?: true
  }

  export type PayrollCorrectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollCorrection to aggregate.
     */
    where?: PayrollCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollCorrections to fetch.
     */
    orderBy?: PayrollCorrectionOrderByWithRelationInput | PayrollCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollCorrections
    **/
    _count?: true | PayrollCorrectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollCorrectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollCorrectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollCorrectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollCorrectionMaxAggregateInputType
  }

  export type GetPayrollCorrectionAggregateType<T extends PayrollCorrectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollCorrection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollCorrection[P]>
      : GetScalarType<T[P], AggregatePayrollCorrection[P]>
  }




  export type PayrollCorrectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollCorrectionWhereInput
    orderBy?: PayrollCorrectionOrderByWithAggregationInput | PayrollCorrectionOrderByWithAggregationInput[]
    by: PayrollCorrectionScalarFieldEnum[] | PayrollCorrectionScalarFieldEnum
    having?: PayrollCorrectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCorrectionCountAggregateInputType | true
    _avg?: PayrollCorrectionAvgAggregateInputType
    _sum?: PayrollCorrectionSumAggregateInputType
    _min?: PayrollCorrectionMinAggregateInputType
    _max?: PayrollCorrectionMaxAggregateInputType
  }

  export type PayrollCorrectionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    apiKeyId: string
    inputData: JsonValue
    employeeId: string | null
    aiModel: string
    aiRequestId: string | null
    aiTokensUsed: number | null
    processingTime: number | null
    correctionsFound: boolean
    correctionCount: number
    outputData: JsonValue | null
    issuesFound: JsonValue | null
    status: $Enums.CorrectionStatus
    errorMsg: string | null
    _count: PayrollCorrectionCountAggregateOutputType | null
    _avg: PayrollCorrectionAvgAggregateOutputType | null
    _sum: PayrollCorrectionSumAggregateOutputType | null
    _min: PayrollCorrectionMinAggregateOutputType | null
    _max: PayrollCorrectionMaxAggregateOutputType | null
  }

  type GetPayrollCorrectionGroupByPayload<T extends PayrollCorrectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollCorrectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollCorrectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollCorrectionGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollCorrectionGroupByOutputType[P]>
        }
      >
    >


  export type PayrollCorrectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKeyId?: boolean
    inputData?: boolean
    employeeId?: boolean
    aiModel?: boolean
    aiRequestId?: boolean
    aiTokensUsed?: boolean
    processingTime?: boolean
    correctionsFound?: boolean
    correctionCount?: boolean
    outputData?: boolean
    issuesFound?: boolean
    status?: boolean
    errorMsg?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollCorrection"]>

  export type PayrollCorrectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKeyId?: boolean
    inputData?: boolean
    employeeId?: boolean
    aiModel?: boolean
    aiRequestId?: boolean
    aiTokensUsed?: boolean
    processingTime?: boolean
    correctionsFound?: boolean
    correctionCount?: boolean
    outputData?: boolean
    issuesFound?: boolean
    status?: boolean
    errorMsg?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollCorrection"]>

  export type PayrollCorrectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKeyId?: boolean
    inputData?: boolean
    employeeId?: boolean
    aiModel?: boolean
    aiRequestId?: boolean
    aiTokensUsed?: boolean
    processingTime?: boolean
    correctionsFound?: boolean
    correctionCount?: boolean
    outputData?: boolean
    issuesFound?: boolean
    status?: boolean
    errorMsg?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollCorrection"]>

  export type PayrollCorrectionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKeyId?: boolean
    inputData?: boolean
    employeeId?: boolean
    aiModel?: boolean
    aiRequestId?: boolean
    aiTokensUsed?: boolean
    processingTime?: boolean
    correctionsFound?: boolean
    correctionCount?: boolean
    outputData?: boolean
    issuesFound?: boolean
    status?: boolean
    errorMsg?: boolean
  }

  export type PayrollCorrectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "apiKeyId" | "inputData" | "employeeId" | "aiModel" | "aiRequestId" | "aiTokensUsed" | "processingTime" | "correctionsFound" | "correctionCount" | "outputData" | "issuesFound" | "status" | "errorMsg", ExtArgs["result"]["payrollCorrection"]>
  export type PayrollCorrectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type PayrollCorrectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type PayrollCorrectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $PayrollCorrectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollCorrection"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      apiKeyId: string
      inputData: Prisma.JsonValue
      employeeId: string | null
      aiModel: string
      aiRequestId: string | null
      aiTokensUsed: number | null
      processingTime: number | null
      correctionsFound: boolean
      correctionCount: number
      outputData: Prisma.JsonValue | null
      issuesFound: Prisma.JsonValue | null
      status: $Enums.CorrectionStatus
      errorMsg: string | null
    }, ExtArgs["result"]["payrollCorrection"]>
    composites: {}
  }

  type PayrollCorrectionGetPayload<S extends boolean | null | undefined | PayrollCorrectionDefaultArgs> = $Result.GetResult<Prisma.$PayrollCorrectionPayload, S>

  type PayrollCorrectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollCorrectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCorrectionCountAggregateInputType | true
    }

  export interface PayrollCorrectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollCorrection'], meta: { name: 'PayrollCorrection' } }
    /**
     * Find zero or one PayrollCorrection that matches the filter.
     * @param {PayrollCorrectionFindUniqueArgs} args - Arguments to find a PayrollCorrection
     * @example
     * // Get one PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollCorrectionFindUniqueArgs>(args: SelectSubset<T, PayrollCorrectionFindUniqueArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollCorrection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollCorrectionFindUniqueOrThrowArgs} args - Arguments to find a PayrollCorrection
     * @example
     * // Get one PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollCorrectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollCorrectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCorrection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionFindFirstArgs} args - Arguments to find a PayrollCorrection
     * @example
     * // Get one PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollCorrectionFindFirstArgs>(args?: SelectSubset<T, PayrollCorrectionFindFirstArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCorrection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionFindFirstOrThrowArgs} args - Arguments to find a PayrollCorrection
     * @example
     * // Get one PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollCorrectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollCorrectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollCorrections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollCorrections
     * const payrollCorrections = await prisma.payrollCorrection.findMany()
     * 
     * // Get first 10 PayrollCorrections
     * const payrollCorrections = await prisma.payrollCorrection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollCorrectionWithIdOnly = await prisma.payrollCorrection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollCorrectionFindManyArgs>(args?: SelectSubset<T, PayrollCorrectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollCorrection.
     * @param {PayrollCorrectionCreateArgs} args - Arguments to create a PayrollCorrection.
     * @example
     * // Create one PayrollCorrection
     * const PayrollCorrection = await prisma.payrollCorrection.create({
     *   data: {
     *     // ... data to create a PayrollCorrection
     *   }
     * })
     * 
     */
    create<T extends PayrollCorrectionCreateArgs>(args: SelectSubset<T, PayrollCorrectionCreateArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollCorrections.
     * @param {PayrollCorrectionCreateManyArgs} args - Arguments to create many PayrollCorrections.
     * @example
     * // Create many PayrollCorrections
     * const payrollCorrection = await prisma.payrollCorrection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCorrectionCreateManyArgs>(args?: SelectSubset<T, PayrollCorrectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollCorrections and returns the data saved in the database.
     * @param {PayrollCorrectionCreateManyAndReturnArgs} args - Arguments to create many PayrollCorrections.
     * @example
     * // Create many PayrollCorrections
     * const payrollCorrection = await prisma.payrollCorrection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollCorrections and only return the `id`
     * const payrollCorrectionWithIdOnly = await prisma.payrollCorrection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCorrectionCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCorrectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollCorrection.
     * @param {PayrollCorrectionDeleteArgs} args - Arguments to delete one PayrollCorrection.
     * @example
     * // Delete one PayrollCorrection
     * const PayrollCorrection = await prisma.payrollCorrection.delete({
     *   where: {
     *     // ... filter to delete one PayrollCorrection
     *   }
     * })
     * 
     */
    delete<T extends PayrollCorrectionDeleteArgs>(args: SelectSubset<T, PayrollCorrectionDeleteArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollCorrection.
     * @param {PayrollCorrectionUpdateArgs} args - Arguments to update one PayrollCorrection.
     * @example
     * // Update one PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollCorrectionUpdateArgs>(args: SelectSubset<T, PayrollCorrectionUpdateArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollCorrections.
     * @param {PayrollCorrectionDeleteManyArgs} args - Arguments to filter PayrollCorrections to delete.
     * @example
     * // Delete a few PayrollCorrections
     * const { count } = await prisma.payrollCorrection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollCorrectionDeleteManyArgs>(args?: SelectSubset<T, PayrollCorrectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollCorrections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollCorrections
     * const payrollCorrection = await prisma.payrollCorrection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollCorrectionUpdateManyArgs>(args: SelectSubset<T, PayrollCorrectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollCorrections and returns the data updated in the database.
     * @param {PayrollCorrectionUpdateManyAndReturnArgs} args - Arguments to update many PayrollCorrections.
     * @example
     * // Update many PayrollCorrections
     * const payrollCorrection = await prisma.payrollCorrection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollCorrections and only return the `id`
     * const payrollCorrectionWithIdOnly = await prisma.payrollCorrection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayrollCorrectionUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollCorrectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollCorrection.
     * @param {PayrollCorrectionUpsertArgs} args - Arguments to update or create a PayrollCorrection.
     * @example
     * // Update or create a PayrollCorrection
     * const payrollCorrection = await prisma.payrollCorrection.upsert({
     *   create: {
     *     // ... data to create a PayrollCorrection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollCorrection we want to update
     *   }
     * })
     */
    upsert<T extends PayrollCorrectionUpsertArgs>(args: SelectSubset<T, PayrollCorrectionUpsertArgs<ExtArgs>>): Prisma__PayrollCorrectionClient<$Result.GetResult<Prisma.$PayrollCorrectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollCorrections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionCountArgs} args - Arguments to filter PayrollCorrections to count.
     * @example
     * // Count the number of PayrollCorrections
     * const count = await prisma.payrollCorrection.count({
     *   where: {
     *     // ... the filter for the PayrollCorrections we want to count
     *   }
     * })
    **/
    count<T extends PayrollCorrectionCountArgs>(
      args?: Subset<T, PayrollCorrectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCorrectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollCorrection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollCorrectionAggregateArgs>(args: Subset<T, PayrollCorrectionAggregateArgs>): Prisma.PrismaPromise<GetPayrollCorrectionAggregateType<T>>

    /**
     * Group by PayrollCorrection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCorrectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayrollCorrectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollCorrectionGroupByArgs['orderBy'] }
        : { orderBy?: PayrollCorrectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayrollCorrectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollCorrectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollCorrection model
   */
  readonly fields: PayrollCorrectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollCorrection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollCorrectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayrollCorrection model
   */
  interface PayrollCorrectionFieldRefs {
    readonly id: FieldRef<"PayrollCorrection", 'String'>
    readonly createdAt: FieldRef<"PayrollCorrection", 'DateTime'>
    readonly updatedAt: FieldRef<"PayrollCorrection", 'DateTime'>
    readonly apiKeyId: FieldRef<"PayrollCorrection", 'String'>
    readonly inputData: FieldRef<"PayrollCorrection", 'Json'>
    readonly employeeId: FieldRef<"PayrollCorrection", 'String'>
    readonly aiModel: FieldRef<"PayrollCorrection", 'String'>
    readonly aiRequestId: FieldRef<"PayrollCorrection", 'String'>
    readonly aiTokensUsed: FieldRef<"PayrollCorrection", 'Int'>
    readonly processingTime: FieldRef<"PayrollCorrection", 'Int'>
    readonly correctionsFound: FieldRef<"PayrollCorrection", 'Boolean'>
    readonly correctionCount: FieldRef<"PayrollCorrection", 'Int'>
    readonly outputData: FieldRef<"PayrollCorrection", 'Json'>
    readonly issuesFound: FieldRef<"PayrollCorrection", 'Json'>
    readonly status: FieldRef<"PayrollCorrection", 'CorrectionStatus'>
    readonly errorMsg: FieldRef<"PayrollCorrection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PayrollCorrection findUnique
   */
  export type PayrollCorrectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which PayrollCorrection to fetch.
     */
    where: PayrollCorrectionWhereUniqueInput
  }

  /**
   * PayrollCorrection findUniqueOrThrow
   */
  export type PayrollCorrectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which PayrollCorrection to fetch.
     */
    where: PayrollCorrectionWhereUniqueInput
  }

  /**
   * PayrollCorrection findFirst
   */
  export type PayrollCorrectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which PayrollCorrection to fetch.
     */
    where?: PayrollCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollCorrections to fetch.
     */
    orderBy?: PayrollCorrectionOrderByWithRelationInput | PayrollCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollCorrections.
     */
    cursor?: PayrollCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollCorrections.
     */
    distinct?: PayrollCorrectionScalarFieldEnum | PayrollCorrectionScalarFieldEnum[]
  }

  /**
   * PayrollCorrection findFirstOrThrow
   */
  export type PayrollCorrectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which PayrollCorrection to fetch.
     */
    where?: PayrollCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollCorrections to fetch.
     */
    orderBy?: PayrollCorrectionOrderByWithRelationInput | PayrollCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollCorrections.
     */
    cursor?: PayrollCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollCorrections.
     */
    distinct?: PayrollCorrectionScalarFieldEnum | PayrollCorrectionScalarFieldEnum[]
  }

  /**
   * PayrollCorrection findMany
   */
  export type PayrollCorrectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which PayrollCorrections to fetch.
     */
    where?: PayrollCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollCorrections to fetch.
     */
    orderBy?: PayrollCorrectionOrderByWithRelationInput | PayrollCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollCorrections.
     */
    cursor?: PayrollCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollCorrections.
     */
    skip?: number
    distinct?: PayrollCorrectionScalarFieldEnum | PayrollCorrectionScalarFieldEnum[]
  }

  /**
   * PayrollCorrection create
   */
  export type PayrollCorrectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollCorrection.
     */
    data: XOR<PayrollCorrectionCreateInput, PayrollCorrectionUncheckedCreateInput>
  }

  /**
   * PayrollCorrection createMany
   */
  export type PayrollCorrectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollCorrections.
     */
    data: PayrollCorrectionCreateManyInput | PayrollCorrectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollCorrection createManyAndReturn
   */
  export type PayrollCorrectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollCorrections.
     */
    data: PayrollCorrectionCreateManyInput | PayrollCorrectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollCorrection update
   */
  export type PayrollCorrectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollCorrection.
     */
    data: XOR<PayrollCorrectionUpdateInput, PayrollCorrectionUncheckedUpdateInput>
    /**
     * Choose, which PayrollCorrection to update.
     */
    where: PayrollCorrectionWhereUniqueInput
  }

  /**
   * PayrollCorrection updateMany
   */
  export type PayrollCorrectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollCorrections.
     */
    data: XOR<PayrollCorrectionUpdateManyMutationInput, PayrollCorrectionUncheckedUpdateManyInput>
    /**
     * Filter which PayrollCorrections to update
     */
    where?: PayrollCorrectionWhereInput
    /**
     * Limit how many PayrollCorrections to update.
     */
    limit?: number
  }

  /**
   * PayrollCorrection updateManyAndReturn
   */
  export type PayrollCorrectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * The data used to update PayrollCorrections.
     */
    data: XOR<PayrollCorrectionUpdateManyMutationInput, PayrollCorrectionUncheckedUpdateManyInput>
    /**
     * Filter which PayrollCorrections to update
     */
    where?: PayrollCorrectionWhereInput
    /**
     * Limit how many PayrollCorrections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollCorrection upsert
   */
  export type PayrollCorrectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollCorrection to update in case it exists.
     */
    where: PayrollCorrectionWhereUniqueInput
    /**
     * In case the PayrollCorrection found by the `where` argument doesn't exist, create a new PayrollCorrection with this data.
     */
    create: XOR<PayrollCorrectionCreateInput, PayrollCorrectionUncheckedCreateInput>
    /**
     * In case the PayrollCorrection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollCorrectionUpdateInput, PayrollCorrectionUncheckedUpdateInput>
  }

  /**
   * PayrollCorrection delete
   */
  export type PayrollCorrectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
    /**
     * Filter which PayrollCorrection to delete.
     */
    where: PayrollCorrectionWhereUniqueInput
  }

  /**
   * PayrollCorrection deleteMany
   */
  export type PayrollCorrectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollCorrections to delete
     */
    where?: PayrollCorrectionWhereInput
    /**
     * Limit how many PayrollCorrections to delete.
     */
    limit?: number
  }

  /**
   * PayrollCorrection without action
   */
  export type PayrollCorrectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCorrection
     */
    select?: PayrollCorrectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollCorrection
     */
    omit?: PayrollCorrectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollCorrectionInclude<ExtArgs> | null
  }


  /**
   * Model AutomationLog
   */

  export type AggregateAutomationLog = {
    _count: AutomationLogCountAggregateOutputType | null
    _avg: AutomationLogAvgAggregateOutputType | null
    _sum: AutomationLogSumAggregateOutputType | null
    _min: AutomationLogMinAggregateOutputType | null
    _max: AutomationLogMaxAggregateOutputType | null
  }

  export type AutomationLogAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type AutomationLogSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type AutomationLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    apiKeyId: string | null
    eventType: $Enums.AutomationEventType | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    responseTime: number | null
    success: boolean | null
    errorMsg: string | null
  }

  export type AutomationLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    apiKeyId: string | null
    eventType: $Enums.AutomationEventType | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    responseTime: number | null
    success: boolean | null
    errorMsg: string | null
  }

  export type AutomationLogCountAggregateOutputType = {
    id: number
    createdAt: number
    apiKeyId: number
    eventType: number
    eventData: number
    endpoint: number
    method: number
    ipAddress: number
    userAgent: number
    statusCode: number
    responseTime: number
    success: number
    errorMsg: number
    _all: number
  }


  export type AutomationLogAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type AutomationLogSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type AutomationLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    apiKeyId?: true
    eventType?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    success?: true
    errorMsg?: true
  }

  export type AutomationLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    apiKeyId?: true
    eventType?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    success?: true
    errorMsg?: true
  }

  export type AutomationLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    apiKeyId?: true
    eventType?: true
    eventData?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    responseTime?: true
    success?: true
    errorMsg?: true
    _all?: true
  }

  export type AutomationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationLog to aggregate.
     */
    where?: AutomationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationLogs to fetch.
     */
    orderBy?: AutomationLogOrderByWithRelationInput | AutomationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationLogs
    **/
    _count?: true | AutomationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomationLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomationLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationLogMaxAggregateInputType
  }

  export type GetAutomationLogAggregateType<T extends AutomationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationLog[P]>
      : GetScalarType<T[P], AggregateAutomationLog[P]>
  }




  export type AutomationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationLogWhereInput
    orderBy?: AutomationLogOrderByWithAggregationInput | AutomationLogOrderByWithAggregationInput[]
    by: AutomationLogScalarFieldEnum[] | AutomationLogScalarFieldEnum
    having?: AutomationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationLogCountAggregateInputType | true
    _avg?: AutomationLogAvgAggregateInputType
    _sum?: AutomationLogSumAggregateInputType
    _min?: AutomationLogMinAggregateInputType
    _max?: AutomationLogMaxAggregateInputType
  }

  export type AutomationLogGroupByOutputType = {
    id: string
    createdAt: Date
    apiKeyId: string | null
    eventType: $Enums.AutomationEventType
    eventData: JsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent: string | null
    statusCode: number
    responseTime: number | null
    success: boolean
    errorMsg: string | null
    _count: AutomationLogCountAggregateOutputType | null
    _avg: AutomationLogAvgAggregateOutputType | null
    _sum: AutomationLogSumAggregateOutputType | null
    _min: AutomationLogMinAggregateOutputType | null
    _max: AutomationLogMaxAggregateOutputType | null
  }

  type GetAutomationLogGroupByPayload<T extends AutomationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationLogGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationLogGroupByOutputType[P]>
        }
      >
    >


  export type AutomationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    apiKeyId?: boolean
    eventType?: boolean
    eventData?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    success?: boolean
    errorMsg?: boolean
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["automationLog"]>

  export type AutomationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    apiKeyId?: boolean
    eventType?: boolean
    eventData?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    success?: boolean
    errorMsg?: boolean
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["automationLog"]>

  export type AutomationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    apiKeyId?: boolean
    eventType?: boolean
    eventData?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    success?: boolean
    errorMsg?: boolean
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["automationLog"]>

  export type AutomationLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    apiKeyId?: boolean
    eventType?: boolean
    eventData?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    responseTime?: boolean
    success?: boolean
    errorMsg?: boolean
  }

  export type AutomationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "apiKeyId" | "eventType" | "eventData" | "endpoint" | "method" | "ipAddress" | "userAgent" | "statusCode" | "responseTime" | "success" | "errorMsg", ExtArgs["result"]["automationLog"]>
  export type AutomationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }
  export type AutomationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }
  export type AutomationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AutomationLog$apiKeyArgs<ExtArgs>
  }

  export type $AutomationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationLog"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      apiKeyId: string | null
      eventType: $Enums.AutomationEventType
      eventData: Prisma.JsonValue
      endpoint: string
      method: string
      ipAddress: string
      userAgent: string | null
      statusCode: number
      responseTime: number | null
      success: boolean
      errorMsg: string | null
    }, ExtArgs["result"]["automationLog"]>
    composites: {}
  }

  type AutomationLogGetPayload<S extends boolean | null | undefined | AutomationLogDefaultArgs> = $Result.GetResult<Prisma.$AutomationLogPayload, S>

  type AutomationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationLogCountAggregateInputType | true
    }

  export interface AutomationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationLog'], meta: { name: 'AutomationLog' } }
    /**
     * Find zero or one AutomationLog that matches the filter.
     * @param {AutomationLogFindUniqueArgs} args - Arguments to find a AutomationLog
     * @example
     * // Get one AutomationLog
     * const automationLog = await prisma.automationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationLogFindUniqueArgs>(args: SelectSubset<T, AutomationLogFindUniqueArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutomationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationLogFindUniqueOrThrowArgs} args - Arguments to find a AutomationLog
     * @example
     * // Get one AutomationLog
     * const automationLog = await prisma.automationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogFindFirstArgs} args - Arguments to find a AutomationLog
     * @example
     * // Get one AutomationLog
     * const automationLog = await prisma.automationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationLogFindFirstArgs>(args?: SelectSubset<T, AutomationLogFindFirstArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogFindFirstOrThrowArgs} args - Arguments to find a AutomationLog
     * @example
     * // Get one AutomationLog
     * const automationLog = await prisma.automationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutomationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationLogs
     * const automationLogs = await prisma.automationLog.findMany()
     * 
     * // Get first 10 AutomationLogs
     * const automationLogs = await prisma.automationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationLogWithIdOnly = await prisma.automationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationLogFindManyArgs>(args?: SelectSubset<T, AutomationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutomationLog.
     * @param {AutomationLogCreateArgs} args - Arguments to create a AutomationLog.
     * @example
     * // Create one AutomationLog
     * const AutomationLog = await prisma.automationLog.create({
     *   data: {
     *     // ... data to create a AutomationLog
     *   }
     * })
     * 
     */
    create<T extends AutomationLogCreateArgs>(args: SelectSubset<T, AutomationLogCreateArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutomationLogs.
     * @param {AutomationLogCreateManyArgs} args - Arguments to create many AutomationLogs.
     * @example
     * // Create many AutomationLogs
     * const automationLog = await prisma.automationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationLogCreateManyArgs>(args?: SelectSubset<T, AutomationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationLogs and returns the data saved in the database.
     * @param {AutomationLogCreateManyAndReturnArgs} args - Arguments to create many AutomationLogs.
     * @example
     * // Create many AutomationLogs
     * const automationLog = await prisma.automationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationLogs and only return the `id`
     * const automationLogWithIdOnly = await prisma.automationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutomationLog.
     * @param {AutomationLogDeleteArgs} args - Arguments to delete one AutomationLog.
     * @example
     * // Delete one AutomationLog
     * const AutomationLog = await prisma.automationLog.delete({
     *   where: {
     *     // ... filter to delete one AutomationLog
     *   }
     * })
     * 
     */
    delete<T extends AutomationLogDeleteArgs>(args: SelectSubset<T, AutomationLogDeleteArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutomationLog.
     * @param {AutomationLogUpdateArgs} args - Arguments to update one AutomationLog.
     * @example
     * // Update one AutomationLog
     * const automationLog = await prisma.automationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationLogUpdateArgs>(args: SelectSubset<T, AutomationLogUpdateArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutomationLogs.
     * @param {AutomationLogDeleteManyArgs} args - Arguments to filter AutomationLogs to delete.
     * @example
     * // Delete a few AutomationLogs
     * const { count } = await prisma.automationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationLogDeleteManyArgs>(args?: SelectSubset<T, AutomationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationLogs
     * const automationLog = await prisma.automationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationLogUpdateManyArgs>(args: SelectSubset<T, AutomationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationLogs and returns the data updated in the database.
     * @param {AutomationLogUpdateManyAndReturnArgs} args - Arguments to update many AutomationLogs.
     * @example
     * // Update many AutomationLogs
     * const automationLog = await prisma.automationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationLogs and only return the `id`
     * const automationLogWithIdOnly = await prisma.automationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutomationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutomationLog.
     * @param {AutomationLogUpsertArgs} args - Arguments to update or create a AutomationLog.
     * @example
     * // Update or create a AutomationLog
     * const automationLog = await prisma.automationLog.upsert({
     *   create: {
     *     // ... data to create a AutomationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationLog we want to update
     *   }
     * })
     */
    upsert<T extends AutomationLogUpsertArgs>(args: SelectSubset<T, AutomationLogUpsertArgs<ExtArgs>>): Prisma__AutomationLogClient<$Result.GetResult<Prisma.$AutomationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutomationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogCountArgs} args - Arguments to filter AutomationLogs to count.
     * @example
     * // Count the number of AutomationLogs
     * const count = await prisma.automationLog.count({
     *   where: {
     *     // ... the filter for the AutomationLogs we want to count
     *   }
     * })
    **/
    count<T extends AutomationLogCountArgs>(
      args?: Subset<T, AutomationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutomationLogAggregateArgs>(args: Subset<T, AutomationLogAggregateArgs>): Prisma.PrismaPromise<GetAutomationLogAggregateType<T>>

    /**
     * Group by AutomationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutomationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationLogGroupByArgs['orderBy'] }
        : { orderBy?: AutomationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutomationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationLog model
   */
  readonly fields: AutomationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends AutomationLog$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, AutomationLog$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutomationLog model
   */
  interface AutomationLogFieldRefs {
    readonly id: FieldRef<"AutomationLog", 'String'>
    readonly createdAt: FieldRef<"AutomationLog", 'DateTime'>
    readonly apiKeyId: FieldRef<"AutomationLog", 'String'>
    readonly eventType: FieldRef<"AutomationLog", 'AutomationEventType'>
    readonly eventData: FieldRef<"AutomationLog", 'Json'>
    readonly endpoint: FieldRef<"AutomationLog", 'String'>
    readonly method: FieldRef<"AutomationLog", 'String'>
    readonly ipAddress: FieldRef<"AutomationLog", 'String'>
    readonly userAgent: FieldRef<"AutomationLog", 'String'>
    readonly statusCode: FieldRef<"AutomationLog", 'Int'>
    readonly responseTime: FieldRef<"AutomationLog", 'Int'>
    readonly success: FieldRef<"AutomationLog", 'Boolean'>
    readonly errorMsg: FieldRef<"AutomationLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AutomationLog findUnique
   */
  export type AutomationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter, which AutomationLog to fetch.
     */
    where: AutomationLogWhereUniqueInput
  }

  /**
   * AutomationLog findUniqueOrThrow
   */
  export type AutomationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter, which AutomationLog to fetch.
     */
    where: AutomationLogWhereUniqueInput
  }

  /**
   * AutomationLog findFirst
   */
  export type AutomationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter, which AutomationLog to fetch.
     */
    where?: AutomationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationLogs to fetch.
     */
    orderBy?: AutomationLogOrderByWithRelationInput | AutomationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationLogs.
     */
    cursor?: AutomationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationLogs.
     */
    distinct?: AutomationLogScalarFieldEnum | AutomationLogScalarFieldEnum[]
  }

  /**
   * AutomationLog findFirstOrThrow
   */
  export type AutomationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter, which AutomationLog to fetch.
     */
    where?: AutomationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationLogs to fetch.
     */
    orderBy?: AutomationLogOrderByWithRelationInput | AutomationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationLogs.
     */
    cursor?: AutomationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationLogs.
     */
    distinct?: AutomationLogScalarFieldEnum | AutomationLogScalarFieldEnum[]
  }

  /**
   * AutomationLog findMany
   */
  export type AutomationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter, which AutomationLogs to fetch.
     */
    where?: AutomationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationLogs to fetch.
     */
    orderBy?: AutomationLogOrderByWithRelationInput | AutomationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationLogs.
     */
    cursor?: AutomationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationLogs.
     */
    skip?: number
    distinct?: AutomationLogScalarFieldEnum | AutomationLogScalarFieldEnum[]
  }

  /**
   * AutomationLog create
   */
  export type AutomationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationLog.
     */
    data: XOR<AutomationLogCreateInput, AutomationLogUncheckedCreateInput>
  }

  /**
   * AutomationLog createMany
   */
  export type AutomationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationLogs.
     */
    data: AutomationLogCreateManyInput | AutomationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationLog createManyAndReturn
   */
  export type AutomationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationLogs.
     */
    data: AutomationLogCreateManyInput | AutomationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationLog update
   */
  export type AutomationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationLog.
     */
    data: XOR<AutomationLogUpdateInput, AutomationLogUncheckedUpdateInput>
    /**
     * Choose, which AutomationLog to update.
     */
    where: AutomationLogWhereUniqueInput
  }

  /**
   * AutomationLog updateMany
   */
  export type AutomationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationLogs.
     */
    data: XOR<AutomationLogUpdateManyMutationInput, AutomationLogUncheckedUpdateManyInput>
    /**
     * Filter which AutomationLogs to update
     */
    where?: AutomationLogWhereInput
    /**
     * Limit how many AutomationLogs to update.
     */
    limit?: number
  }

  /**
   * AutomationLog updateManyAndReturn
   */
  export type AutomationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * The data used to update AutomationLogs.
     */
    data: XOR<AutomationLogUpdateManyMutationInput, AutomationLogUncheckedUpdateManyInput>
    /**
     * Filter which AutomationLogs to update
     */
    where?: AutomationLogWhereInput
    /**
     * Limit how many AutomationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationLog upsert
   */
  export type AutomationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationLog to update in case it exists.
     */
    where: AutomationLogWhereUniqueInput
    /**
     * In case the AutomationLog found by the `where` argument doesn't exist, create a new AutomationLog with this data.
     */
    create: XOR<AutomationLogCreateInput, AutomationLogUncheckedCreateInput>
    /**
     * In case the AutomationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationLogUpdateInput, AutomationLogUncheckedUpdateInput>
  }

  /**
   * AutomationLog delete
   */
  export type AutomationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
    /**
     * Filter which AutomationLog to delete.
     */
    where: AutomationLogWhereUniqueInput
  }

  /**
   * AutomationLog deleteMany
   */
  export type AutomationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationLogs to delete
     */
    where?: AutomationLogWhereInput
    /**
     * Limit how many AutomationLogs to delete.
     */
    limit?: number
  }

  /**
   * AutomationLog.apiKey
   */
  export type AutomationLog$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * AutomationLog without action
   */
  export type AutomationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationLog
     */
    select?: AutomationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationLog
     */
    omit?: AutomationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationLogInclude<ExtArgs> | null
  }


  /**
   * Model StripeCustomer
   */

  export type AggregateStripeCustomer = {
    _count: StripeCustomerCountAggregateOutputType | null
    _avg: StripeCustomerAvgAggregateOutputType | null
    _sum: StripeCustomerSumAggregateOutputType | null
    _min: StripeCustomerMinAggregateOutputType | null
    _max: StripeCustomerMaxAggregateOutputType | null
  }

  export type StripeCustomerAvgAggregateOutputType = {
    amount: number | null
  }

  export type StripeCustomerSumAggregateOutputType = {
    amount: number | null
  }

  export type StripeCustomerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    email: string | null
    companyName: string | null
    planId: string | null
    planName: string | null
    priceId: string | null
    amount: number | null
    currency: string | null
    interval: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAt: Date | null
    canceledAt: Date | null
    apiKeyId: string | null
  }

  export type StripeCustomerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    email: string | null
    companyName: string | null
    planId: string | null
    planName: string | null
    priceId: string | null
    amount: number | null
    currency: string | null
    interval: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAt: Date | null
    canceledAt: Date | null
    apiKeyId: string | null
  }

  export type StripeCustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    email: number
    companyName: number
    planId: number
    planName: number
    priceId: number
    amount: number
    currency: number
    interval: number
    subscriptionStatus: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAt: number
    canceledAt: number
    apiKeyId: number
    _all: number
  }


  export type StripeCustomerAvgAggregateInputType = {
    amount?: true
  }

  export type StripeCustomerSumAggregateInputType = {
    amount?: true
  }

  export type StripeCustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    email?: true
    companyName?: true
    planId?: true
    planName?: true
    priceId?: true
    amount?: true
    currency?: true
    interval?: true
    subscriptionStatus?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAt?: true
    canceledAt?: true
    apiKeyId?: true
  }

  export type StripeCustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    email?: true
    companyName?: true
    planId?: true
    planName?: true
    priceId?: true
    amount?: true
    currency?: true
    interval?: true
    subscriptionStatus?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAt?: true
    canceledAt?: true
    apiKeyId?: true
  }

  export type StripeCustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    email?: true
    companyName?: true
    planId?: true
    planName?: true
    priceId?: true
    amount?: true
    currency?: true
    interval?: true
    subscriptionStatus?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAt?: true
    canceledAt?: true
    apiKeyId?: true
    _all?: true
  }

  export type StripeCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeCustomer to aggregate.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeCustomers
    **/
    _count?: true | StripeCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StripeCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StripeCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeCustomerMaxAggregateInputType
  }

  export type GetStripeCustomerAggregateType<T extends StripeCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeCustomer[P]>
      : GetScalarType<T[P], AggregateStripeCustomer[P]>
  }




  export type StripeCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeCustomerWhereInput
    orderBy?: StripeCustomerOrderByWithAggregationInput | StripeCustomerOrderByWithAggregationInput[]
    by: StripeCustomerScalarFieldEnum[] | StripeCustomerScalarFieldEnum
    having?: StripeCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeCustomerCountAggregateInputType | true
    _avg?: StripeCustomerAvgAggregateInputType
    _sum?: StripeCustomerSumAggregateInputType
    _min?: StripeCustomerMinAggregateInputType
    _max?: StripeCustomerMaxAggregateInputType
  }

  export type StripeCustomerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    stripeCustomerId: string
    stripeSubscriptionId: string | null
    email: string
    companyName: string
    planId: string | null
    planName: string | null
    priceId: string | null
    amount: number | null
    currency: string
    interval: string | null
    subscriptionStatus: $Enums.SubscriptionStatus
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAt: Date | null
    canceledAt: Date | null
    apiKeyId: string | null
    _count: StripeCustomerCountAggregateOutputType | null
    _avg: StripeCustomerAvgAggregateOutputType | null
    _sum: StripeCustomerSumAggregateOutputType | null
    _min: StripeCustomerMinAggregateOutputType | null
    _max: StripeCustomerMaxAggregateOutputType | null
  }

  type GetStripeCustomerGroupByPayload<T extends StripeCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], StripeCustomerGroupByOutputType[P]>
        }
      >
    >


  export type StripeCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    email?: boolean
    companyName?: boolean
    planId?: boolean
    planName?: boolean
    priceId?: boolean
    amount?: boolean
    currency?: boolean
    interval?: boolean
    subscriptionStatus?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAt?: boolean
    canceledAt?: boolean
    apiKeyId?: boolean
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    email?: boolean
    companyName?: boolean
    planId?: boolean
    planName?: boolean
    priceId?: boolean
    amount?: boolean
    currency?: boolean
    interval?: boolean
    subscriptionStatus?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAt?: boolean
    canceledAt?: boolean
    apiKeyId?: boolean
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    email?: boolean
    companyName?: boolean
    planId?: boolean
    planName?: boolean
    priceId?: boolean
    amount?: boolean
    currency?: boolean
    interval?: boolean
    subscriptionStatus?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAt?: boolean
    canceledAt?: boolean
    apiKeyId?: boolean
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    email?: boolean
    companyName?: boolean
    planId?: boolean
    planName?: boolean
    priceId?: boolean
    amount?: boolean
    currency?: boolean
    interval?: boolean
    subscriptionStatus?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAt?: boolean
    canceledAt?: boolean
    apiKeyId?: boolean
  }

  export type StripeCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "stripeCustomerId" | "stripeSubscriptionId" | "email" | "companyName" | "planId" | "planName" | "priceId" | "amount" | "currency" | "interval" | "subscriptionStatus" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAt" | "canceledAt" | "apiKeyId", ExtArgs["result"]["stripeCustomer"]>

  export type $StripeCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeCustomer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      stripeCustomerId: string
      stripeSubscriptionId: string | null
      email: string
      companyName: string
      planId: string | null
      planName: string | null
      priceId: string | null
      amount: number | null
      currency: string
      interval: string | null
      subscriptionStatus: $Enums.SubscriptionStatus
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      cancelAt: Date | null
      canceledAt: Date | null
      apiKeyId: string | null
    }, ExtArgs["result"]["stripeCustomer"]>
    composites: {}
  }

  type StripeCustomerGetPayload<S extends boolean | null | undefined | StripeCustomerDefaultArgs> = $Result.GetResult<Prisma.$StripeCustomerPayload, S>

  type StripeCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeCustomerCountAggregateInputType | true
    }

  export interface StripeCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeCustomer'], meta: { name: 'StripeCustomer' } }
    /**
     * Find zero or one StripeCustomer that matches the filter.
     * @param {StripeCustomerFindUniqueArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeCustomerFindUniqueArgs>(args: SelectSubset<T, StripeCustomerFindUniqueArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeCustomerFindUniqueOrThrowArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindFirstArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeCustomerFindFirstArgs>(args?: SelectSubset<T, StripeCustomerFindFirstArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindFirstOrThrowArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeCustomers
     * const stripeCustomers = await prisma.stripeCustomer.findMany()
     * 
     * // Get first 10 StripeCustomers
     * const stripeCustomers = await prisma.stripeCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeCustomerFindManyArgs>(args?: SelectSubset<T, StripeCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeCustomer.
     * @param {StripeCustomerCreateArgs} args - Arguments to create a StripeCustomer.
     * @example
     * // Create one StripeCustomer
     * const StripeCustomer = await prisma.stripeCustomer.create({
     *   data: {
     *     // ... data to create a StripeCustomer
     *   }
     * })
     * 
     */
    create<T extends StripeCustomerCreateArgs>(args: SelectSubset<T, StripeCustomerCreateArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeCustomers.
     * @param {StripeCustomerCreateManyArgs} args - Arguments to create many StripeCustomers.
     * @example
     * // Create many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeCustomerCreateManyArgs>(args?: SelectSubset<T, StripeCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripeCustomers and returns the data saved in the database.
     * @param {StripeCustomerCreateManyAndReturnArgs} args - Arguments to create many StripeCustomers.
     * @example
     * // Create many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripeCustomers and only return the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripeCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, StripeCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripeCustomer.
     * @param {StripeCustomerDeleteArgs} args - Arguments to delete one StripeCustomer.
     * @example
     * // Delete one StripeCustomer
     * const StripeCustomer = await prisma.stripeCustomer.delete({
     *   where: {
     *     // ... filter to delete one StripeCustomer
     *   }
     * })
     * 
     */
    delete<T extends StripeCustomerDeleteArgs>(args: SelectSubset<T, StripeCustomerDeleteArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeCustomer.
     * @param {StripeCustomerUpdateArgs} args - Arguments to update one StripeCustomer.
     * @example
     * // Update one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeCustomerUpdateArgs>(args: SelectSubset<T, StripeCustomerUpdateArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeCustomers.
     * @param {StripeCustomerDeleteManyArgs} args - Arguments to filter StripeCustomers to delete.
     * @example
     * // Delete a few StripeCustomers
     * const { count } = await prisma.stripeCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeCustomerDeleteManyArgs>(args?: SelectSubset<T, StripeCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeCustomerUpdateManyArgs>(args: SelectSubset<T, StripeCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeCustomers and returns the data updated in the database.
     * @param {StripeCustomerUpdateManyAndReturnArgs} args - Arguments to update many StripeCustomers.
     * @example
     * // Update many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripeCustomers and only return the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StripeCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, StripeCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripeCustomer.
     * @param {StripeCustomerUpsertArgs} args - Arguments to update or create a StripeCustomer.
     * @example
     * // Update or create a StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.upsert({
     *   create: {
     *     // ... data to create a StripeCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeCustomer we want to update
     *   }
     * })
     */
    upsert<T extends StripeCustomerUpsertArgs>(args: SelectSubset<T, StripeCustomerUpsertArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerCountArgs} args - Arguments to filter StripeCustomers to count.
     * @example
     * // Count the number of StripeCustomers
     * const count = await prisma.stripeCustomer.count({
     *   where: {
     *     // ... the filter for the StripeCustomers we want to count
     *   }
     * })
    **/
    count<T extends StripeCustomerCountArgs>(
      args?: Subset<T, StripeCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StripeCustomerAggregateArgs>(args: Subset<T, StripeCustomerAggregateArgs>): Prisma.PrismaPromise<GetStripeCustomerAggregateType<T>>

    /**
     * Group by StripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StripeCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeCustomerGroupByArgs['orderBy'] }
        : { orderBy?: StripeCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StripeCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeCustomer model
   */
  readonly fields: StripeCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StripeCustomer model
   */
  interface StripeCustomerFieldRefs {
    readonly id: FieldRef<"StripeCustomer", 'String'>
    readonly createdAt: FieldRef<"StripeCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"StripeCustomer", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"StripeCustomer", 'String'>
    readonly stripeSubscriptionId: FieldRef<"StripeCustomer", 'String'>
    readonly email: FieldRef<"StripeCustomer", 'String'>
    readonly companyName: FieldRef<"StripeCustomer", 'String'>
    readonly planId: FieldRef<"StripeCustomer", 'String'>
    readonly planName: FieldRef<"StripeCustomer", 'String'>
    readonly priceId: FieldRef<"StripeCustomer", 'String'>
    readonly amount: FieldRef<"StripeCustomer", 'Int'>
    readonly currency: FieldRef<"StripeCustomer", 'String'>
    readonly interval: FieldRef<"StripeCustomer", 'String'>
    readonly subscriptionStatus: FieldRef<"StripeCustomer", 'SubscriptionStatus'>
    readonly currentPeriodStart: FieldRef<"StripeCustomer", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"StripeCustomer", 'DateTime'>
    readonly cancelAt: FieldRef<"StripeCustomer", 'DateTime'>
    readonly canceledAt: FieldRef<"StripeCustomer", 'DateTime'>
    readonly apiKeyId: FieldRef<"StripeCustomer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StripeCustomer findUnique
   */
  export type StripeCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer findUniqueOrThrow
   */
  export type StripeCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer findFirst
   */
  export type StripeCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeCustomers.
     */
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer findFirstOrThrow
   */
  export type StripeCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeCustomers.
     */
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer findMany
   */
  export type StripeCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter, which StripeCustomers to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer create
   */
  export type StripeCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a StripeCustomer.
     */
    data: XOR<StripeCustomerCreateInput, StripeCustomerUncheckedCreateInput>
  }

  /**
   * StripeCustomer createMany
   */
  export type StripeCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeCustomers.
     */
    data: StripeCustomerCreateManyInput | StripeCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeCustomer createManyAndReturn
   */
  export type StripeCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many StripeCustomers.
     */
    data: StripeCustomerCreateManyInput | StripeCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeCustomer update
   */
  export type StripeCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a StripeCustomer.
     */
    data: XOR<StripeCustomerUpdateInput, StripeCustomerUncheckedUpdateInput>
    /**
     * Choose, which StripeCustomer to update.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer updateMany
   */
  export type StripeCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeCustomers.
     */
    data: XOR<StripeCustomerUpdateManyMutationInput, StripeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which StripeCustomers to update
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to update.
     */
    limit?: number
  }

  /**
   * StripeCustomer updateManyAndReturn
   */
  export type StripeCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data used to update StripeCustomers.
     */
    data: XOR<StripeCustomerUpdateManyMutationInput, StripeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which StripeCustomers to update
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to update.
     */
    limit?: number
  }

  /**
   * StripeCustomer upsert
   */
  export type StripeCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the StripeCustomer to update in case it exists.
     */
    where: StripeCustomerWhereUniqueInput
    /**
     * In case the StripeCustomer found by the `where` argument doesn't exist, create a new StripeCustomer with this data.
     */
    create: XOR<StripeCustomerCreateInput, StripeCustomerUncheckedCreateInput>
    /**
     * In case the StripeCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeCustomerUpdateInput, StripeCustomerUncheckedUpdateInput>
  }

  /**
   * StripeCustomer delete
   */
  export type StripeCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Filter which StripeCustomer to delete.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer deleteMany
   */
  export type StripeCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeCustomers to delete
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to delete.
     */
    limit?: number
  }

  /**
   * StripeCustomer without action
   */
  export type StripeCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadAvgAggregateOutputType = {
    fileSize: number | null
    issuesFound: number | null
    correctionsMade: number | null
    recordsProcessed: number | null
    processingTime: number | null
  }

  export type FileUploadSumAggregateOutputType = {
    fileSize: number | null
    issuesFound: number | null
    correctionsMade: number | null
    recordsProcessed: number | null
    processingTime: number | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fileId: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    customerId: string | null
    customerEmail: string | null
    companyName: string | null
    status: $Enums.FileUploadStatus | null
    issuesFound: number | null
    correctionsMade: number | null
    recordsProcessed: number | null
    processingTime: number | null
    errorMsg: string | null
    apiKeyId: string | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fileId: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    customerId: string | null
    customerEmail: string | null
    companyName: string | null
    status: $Enums.FileUploadStatus | null
    issuesFound: number | null
    correctionsMade: number | null
    recordsProcessed: number | null
    processingTime: number | null
    errorMsg: string | null
    apiKeyId: string | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    fileId: number
    fileName: number
    fileUrl: number
    fileSize: number
    customerId: number
    customerEmail: number
    companyName: number
    status: number
    issuesFound: number
    correctionsMade: number
    recordsProcessed: number
    processingTime: number
    errorMsg: number
    corrections: number
    issues: number
    apiKeyId: number
    _all: number
  }


  export type FileUploadAvgAggregateInputType = {
    fileSize?: true
    issuesFound?: true
    correctionsMade?: true
    recordsProcessed?: true
    processingTime?: true
  }

  export type FileUploadSumAggregateInputType = {
    fileSize?: true
    issuesFound?: true
    correctionsMade?: true
    recordsProcessed?: true
    processingTime?: true
  }

  export type FileUploadMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    issuesFound?: true
    correctionsMade?: true
    recordsProcessed?: true
    processingTime?: true
    errorMsg?: true
    apiKeyId?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    issuesFound?: true
    correctionsMade?: true
    recordsProcessed?: true
    processingTime?: true
    errorMsg?: true
    apiKeyId?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fileId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    customerId?: true
    customerEmail?: true
    companyName?: true
    status?: true
    issuesFound?: true
    correctionsMade?: true
    recordsProcessed?: true
    processingTime?: true
    errorMsg?: true
    corrections?: true
    issues?: true
    apiKeyId?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _avg?: FileUploadAvgAggregateInputType
    _sum?: FileUploadSumAggregateInputType
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    fileId: string
    fileName: string
    fileUrl: string
    fileSize: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status: $Enums.FileUploadStatus
    issuesFound: number
    correctionsMade: number
    recordsProcessed: number | null
    processingTime: number | null
    errorMsg: string | null
    corrections: JsonValue | null
    issues: JsonValue | null
    apiKeyId: string | null
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    issuesFound?: boolean
    correctionsMade?: boolean
    recordsProcessed?: boolean
    processingTime?: boolean
    errorMsg?: boolean
    corrections?: boolean
    issues?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    issuesFound?: boolean
    correctionsMade?: boolean
    recordsProcessed?: boolean
    processingTime?: boolean
    errorMsg?: boolean
    corrections?: boolean
    issues?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    issuesFound?: boolean
    correctionsMade?: boolean
    recordsProcessed?: boolean
    processingTime?: boolean
    errorMsg?: boolean
    corrections?: boolean
    issues?: boolean
    apiKeyId?: boolean
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    customerId?: boolean
    customerEmail?: boolean
    companyName?: boolean
    status?: boolean
    issuesFound?: boolean
    correctionsMade?: boolean
    recordsProcessed?: boolean
    processingTime?: boolean
    errorMsg?: boolean
    corrections?: boolean
    issues?: boolean
    apiKeyId?: boolean
  }

  export type FileUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "fileId" | "fileName" | "fileUrl" | "fileSize" | "customerId" | "customerEmail" | "companyName" | "status" | "issuesFound" | "correctionsMade" | "recordsProcessed" | "processingTime" | "errorMsg" | "corrections" | "issues" | "apiKeyId", ExtArgs["result"]["fileUpload"]>
  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }
  export type FileUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | FileUpload$apiKeyArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      fileId: string
      fileName: string
      fileUrl: string
      fileSize: number | null
      customerId: string
      customerEmail: string
      companyName: string
      status: $Enums.FileUploadStatus
      issuesFound: number
      correctionsMade: number
      recordsProcessed: number | null
      processingTime: number | null
      errorMsg: string | null
      corrections: Prisma.JsonValue | null
      issues: Prisma.JsonValue | null
      apiKeyId: string | null
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads and returns the data updated in the database.
     * @param {FileUploadUpdateManyAndReturnArgs} args - Arguments to update many FileUploads.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends FileUpload$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileUpload model
   */
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'String'>
    readonly createdAt: FieldRef<"FileUpload", 'DateTime'>
    readonly updatedAt: FieldRef<"FileUpload", 'DateTime'>
    readonly fileId: FieldRef<"FileUpload", 'String'>
    readonly fileName: FieldRef<"FileUpload", 'String'>
    readonly fileUrl: FieldRef<"FileUpload", 'String'>
    readonly fileSize: FieldRef<"FileUpload", 'Int'>
    readonly customerId: FieldRef<"FileUpload", 'String'>
    readonly customerEmail: FieldRef<"FileUpload", 'String'>
    readonly companyName: FieldRef<"FileUpload", 'String'>
    readonly status: FieldRef<"FileUpload", 'FileUploadStatus'>
    readonly issuesFound: FieldRef<"FileUpload", 'Int'>
    readonly correctionsMade: FieldRef<"FileUpload", 'Int'>
    readonly recordsProcessed: FieldRef<"FileUpload", 'Int'>
    readonly processingTime: FieldRef<"FileUpload", 'Int'>
    readonly errorMsg: FieldRef<"FileUpload", 'String'>
    readonly corrections: FieldRef<"FileUpload", 'Json'>
    readonly issues: FieldRef<"FileUpload", 'Json'>
    readonly apiKeyId: FieldRef<"FileUpload", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
  }

  /**
   * FileUpload updateManyAndReturn
   */
  export type FileUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to delete.
     */
    limit?: number
  }

  /**
   * FileUpload.apiKey
   */
  export type FileUpload$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
  }


  /**
   * Model AITableSync
   */

  export type AggregateAITableSync = {
    _count: AITableSyncCountAggregateOutputType | null
    _avg: AITableSyncAvgAggregateOutputType | null
    _sum: AITableSyncSumAggregateOutputType | null
    _min: AITableSyncMinAggregateOutputType | null
    _max: AITableSyncMaxAggregateOutputType | null
  }

  export type AITableSyncAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type AITableSyncSumAggregateOutputType = {
    retryCount: number | null
  }

  export type AITableSyncMinAggregateOutputType = {
    id: string | null
    recordId: string | null
    datasheetId: string | null
    entityType: string | null
    entityId: string | null
    lastSyncedAt: Date | null
    syncDirection: string | null
    syncStatus: string | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AITableSyncMaxAggregateOutputType = {
    id: string | null
    recordId: string | null
    datasheetId: string | null
    entityType: string | null
    entityId: string | null
    lastSyncedAt: Date | null
    syncDirection: string | null
    syncStatus: string | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AITableSyncCountAggregateOutputType = {
    id: number
    recordId: number
    datasheetId: number
    entityType: number
    entityId: number
    lastSyncedAt: number
    syncDirection: number
    syncStatus: number
    errorMessage: number
    retryCount: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AITableSyncAvgAggregateInputType = {
    retryCount?: true
  }

  export type AITableSyncSumAggregateInputType = {
    retryCount?: true
  }

  export type AITableSyncMinAggregateInputType = {
    id?: true
    recordId?: true
    datasheetId?: true
    entityType?: true
    entityId?: true
    lastSyncedAt?: true
    syncDirection?: true
    syncStatus?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AITableSyncMaxAggregateInputType = {
    id?: true
    recordId?: true
    datasheetId?: true
    entityType?: true
    entityId?: true
    lastSyncedAt?: true
    syncDirection?: true
    syncStatus?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AITableSyncCountAggregateInputType = {
    id?: true
    recordId?: true
    datasheetId?: true
    entityType?: true
    entityId?: true
    lastSyncedAt?: true
    syncDirection?: true
    syncStatus?: true
    errorMessage?: true
    retryCount?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AITableSyncAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AITableSync to aggregate.
     */
    where?: AITableSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITableSyncs to fetch.
     */
    orderBy?: AITableSyncOrderByWithRelationInput | AITableSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AITableSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITableSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITableSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AITableSyncs
    **/
    _count?: true | AITableSyncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AITableSyncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AITableSyncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AITableSyncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AITableSyncMaxAggregateInputType
  }

  export type GetAITableSyncAggregateType<T extends AITableSyncAggregateArgs> = {
        [P in keyof T & keyof AggregateAITableSync]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAITableSync[P]>
      : GetScalarType<T[P], AggregateAITableSync[P]>
  }




  export type AITableSyncGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AITableSyncWhereInput
    orderBy?: AITableSyncOrderByWithAggregationInput | AITableSyncOrderByWithAggregationInput[]
    by: AITableSyncScalarFieldEnum[] | AITableSyncScalarFieldEnum
    having?: AITableSyncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AITableSyncCountAggregateInputType | true
    _avg?: AITableSyncAvgAggregateInputType
    _sum?: AITableSyncSumAggregateInputType
    _min?: AITableSyncMinAggregateInputType
    _max?: AITableSyncMaxAggregateInputType
  }

  export type AITableSyncGroupByOutputType = {
    id: string
    recordId: string
    datasheetId: string
    entityType: string
    entityId: string
    lastSyncedAt: Date
    syncDirection: string
    syncStatus: string
    errorMessage: string | null
    retryCount: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AITableSyncCountAggregateOutputType | null
    _avg: AITableSyncAvgAggregateOutputType | null
    _sum: AITableSyncSumAggregateOutputType | null
    _min: AITableSyncMinAggregateOutputType | null
    _max: AITableSyncMaxAggregateOutputType | null
  }

  type GetAITableSyncGroupByPayload<T extends AITableSyncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AITableSyncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AITableSyncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AITableSyncGroupByOutputType[P]>
            : GetScalarType<T[P], AITableSyncGroupByOutputType[P]>
        }
      >
    >


  export type AITableSyncSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordId?: boolean
    datasheetId?: boolean
    entityType?: boolean
    entityId?: boolean
    lastSyncedAt?: boolean
    syncDirection?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aITableSync"]>

  export type AITableSyncSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordId?: boolean
    datasheetId?: boolean
    entityType?: boolean
    entityId?: boolean
    lastSyncedAt?: boolean
    syncDirection?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aITableSync"]>

  export type AITableSyncSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordId?: boolean
    datasheetId?: boolean
    entityType?: boolean
    entityId?: boolean
    lastSyncedAt?: boolean
    syncDirection?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aITableSync"]>

  export type AITableSyncSelectScalar = {
    id?: boolean
    recordId?: boolean
    datasheetId?: boolean
    entityType?: boolean
    entityId?: boolean
    lastSyncedAt?: boolean
    syncDirection?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AITableSyncOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recordId" | "datasheetId" | "entityType" | "entityId" | "lastSyncedAt" | "syncDirection" | "syncStatus" | "errorMessage" | "retryCount" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["aITableSync"]>

  export type $AITableSyncPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AITableSync"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recordId: string
      datasheetId: string
      entityType: string
      entityId: string
      lastSyncedAt: Date
      syncDirection: string
      syncStatus: string
      errorMessage: string | null
      retryCount: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aITableSync"]>
    composites: {}
  }

  type AITableSyncGetPayload<S extends boolean | null | undefined | AITableSyncDefaultArgs> = $Result.GetResult<Prisma.$AITableSyncPayload, S>

  type AITableSyncCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AITableSyncFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AITableSyncCountAggregateInputType | true
    }

  export interface AITableSyncDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AITableSync'], meta: { name: 'AITableSync' } }
    /**
     * Find zero or one AITableSync that matches the filter.
     * @param {AITableSyncFindUniqueArgs} args - Arguments to find a AITableSync
     * @example
     * // Get one AITableSync
     * const aITableSync = await prisma.aITableSync.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AITableSyncFindUniqueArgs>(args: SelectSubset<T, AITableSyncFindUniqueArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AITableSync that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AITableSyncFindUniqueOrThrowArgs} args - Arguments to find a AITableSync
     * @example
     * // Get one AITableSync
     * const aITableSync = await prisma.aITableSync.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AITableSyncFindUniqueOrThrowArgs>(args: SelectSubset<T, AITableSyncFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AITableSync that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncFindFirstArgs} args - Arguments to find a AITableSync
     * @example
     * // Get one AITableSync
     * const aITableSync = await prisma.aITableSync.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AITableSyncFindFirstArgs>(args?: SelectSubset<T, AITableSyncFindFirstArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AITableSync that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncFindFirstOrThrowArgs} args - Arguments to find a AITableSync
     * @example
     * // Get one AITableSync
     * const aITableSync = await prisma.aITableSync.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AITableSyncFindFirstOrThrowArgs>(args?: SelectSubset<T, AITableSyncFindFirstOrThrowArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AITableSyncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AITableSyncs
     * const aITableSyncs = await prisma.aITableSync.findMany()
     * 
     * // Get first 10 AITableSyncs
     * const aITableSyncs = await prisma.aITableSync.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aITableSyncWithIdOnly = await prisma.aITableSync.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AITableSyncFindManyArgs>(args?: SelectSubset<T, AITableSyncFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AITableSync.
     * @param {AITableSyncCreateArgs} args - Arguments to create a AITableSync.
     * @example
     * // Create one AITableSync
     * const AITableSync = await prisma.aITableSync.create({
     *   data: {
     *     // ... data to create a AITableSync
     *   }
     * })
     * 
     */
    create<T extends AITableSyncCreateArgs>(args: SelectSubset<T, AITableSyncCreateArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AITableSyncs.
     * @param {AITableSyncCreateManyArgs} args - Arguments to create many AITableSyncs.
     * @example
     * // Create many AITableSyncs
     * const aITableSync = await prisma.aITableSync.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AITableSyncCreateManyArgs>(args?: SelectSubset<T, AITableSyncCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AITableSyncs and returns the data saved in the database.
     * @param {AITableSyncCreateManyAndReturnArgs} args - Arguments to create many AITableSyncs.
     * @example
     * // Create many AITableSyncs
     * const aITableSync = await prisma.aITableSync.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AITableSyncs and only return the `id`
     * const aITableSyncWithIdOnly = await prisma.aITableSync.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AITableSyncCreateManyAndReturnArgs>(args?: SelectSubset<T, AITableSyncCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AITableSync.
     * @param {AITableSyncDeleteArgs} args - Arguments to delete one AITableSync.
     * @example
     * // Delete one AITableSync
     * const AITableSync = await prisma.aITableSync.delete({
     *   where: {
     *     // ... filter to delete one AITableSync
     *   }
     * })
     * 
     */
    delete<T extends AITableSyncDeleteArgs>(args: SelectSubset<T, AITableSyncDeleteArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AITableSync.
     * @param {AITableSyncUpdateArgs} args - Arguments to update one AITableSync.
     * @example
     * // Update one AITableSync
     * const aITableSync = await prisma.aITableSync.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AITableSyncUpdateArgs>(args: SelectSubset<T, AITableSyncUpdateArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AITableSyncs.
     * @param {AITableSyncDeleteManyArgs} args - Arguments to filter AITableSyncs to delete.
     * @example
     * // Delete a few AITableSyncs
     * const { count } = await prisma.aITableSync.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AITableSyncDeleteManyArgs>(args?: SelectSubset<T, AITableSyncDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AITableSyncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AITableSyncs
     * const aITableSync = await prisma.aITableSync.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AITableSyncUpdateManyArgs>(args: SelectSubset<T, AITableSyncUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AITableSyncs and returns the data updated in the database.
     * @param {AITableSyncUpdateManyAndReturnArgs} args - Arguments to update many AITableSyncs.
     * @example
     * // Update many AITableSyncs
     * const aITableSync = await prisma.aITableSync.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AITableSyncs and only return the `id`
     * const aITableSyncWithIdOnly = await prisma.aITableSync.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AITableSyncUpdateManyAndReturnArgs>(args: SelectSubset<T, AITableSyncUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AITableSync.
     * @param {AITableSyncUpsertArgs} args - Arguments to update or create a AITableSync.
     * @example
     * // Update or create a AITableSync
     * const aITableSync = await prisma.aITableSync.upsert({
     *   create: {
     *     // ... data to create a AITableSync
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AITableSync we want to update
     *   }
     * })
     */
    upsert<T extends AITableSyncUpsertArgs>(args: SelectSubset<T, AITableSyncUpsertArgs<ExtArgs>>): Prisma__AITableSyncClient<$Result.GetResult<Prisma.$AITableSyncPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AITableSyncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncCountArgs} args - Arguments to filter AITableSyncs to count.
     * @example
     * // Count the number of AITableSyncs
     * const count = await prisma.aITableSync.count({
     *   where: {
     *     // ... the filter for the AITableSyncs we want to count
     *   }
     * })
    **/
    count<T extends AITableSyncCountArgs>(
      args?: Subset<T, AITableSyncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AITableSyncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AITableSync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AITableSyncAggregateArgs>(args: Subset<T, AITableSyncAggregateArgs>): Prisma.PrismaPromise<GetAITableSyncAggregateType<T>>

    /**
     * Group by AITableSync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITableSyncGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AITableSyncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AITableSyncGroupByArgs['orderBy'] }
        : { orderBy?: AITableSyncGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AITableSyncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAITableSyncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AITableSync model
   */
  readonly fields: AITableSyncFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AITableSync.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AITableSyncClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AITableSync model
   */
  interface AITableSyncFieldRefs {
    readonly id: FieldRef<"AITableSync", 'String'>
    readonly recordId: FieldRef<"AITableSync", 'String'>
    readonly datasheetId: FieldRef<"AITableSync", 'String'>
    readonly entityType: FieldRef<"AITableSync", 'String'>
    readonly entityId: FieldRef<"AITableSync", 'String'>
    readonly lastSyncedAt: FieldRef<"AITableSync", 'DateTime'>
    readonly syncDirection: FieldRef<"AITableSync", 'String'>
    readonly syncStatus: FieldRef<"AITableSync", 'String'>
    readonly errorMessage: FieldRef<"AITableSync", 'String'>
    readonly retryCount: FieldRef<"AITableSync", 'Int'>
    readonly metadata: FieldRef<"AITableSync", 'Json'>
    readonly createdAt: FieldRef<"AITableSync", 'DateTime'>
    readonly updatedAt: FieldRef<"AITableSync", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AITableSync findUnique
   */
  export type AITableSyncFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter, which AITableSync to fetch.
     */
    where: AITableSyncWhereUniqueInput
  }

  /**
   * AITableSync findUniqueOrThrow
   */
  export type AITableSyncFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter, which AITableSync to fetch.
     */
    where: AITableSyncWhereUniqueInput
  }

  /**
   * AITableSync findFirst
   */
  export type AITableSyncFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter, which AITableSync to fetch.
     */
    where?: AITableSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITableSyncs to fetch.
     */
    orderBy?: AITableSyncOrderByWithRelationInput | AITableSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AITableSyncs.
     */
    cursor?: AITableSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITableSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITableSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AITableSyncs.
     */
    distinct?: AITableSyncScalarFieldEnum | AITableSyncScalarFieldEnum[]
  }

  /**
   * AITableSync findFirstOrThrow
   */
  export type AITableSyncFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter, which AITableSync to fetch.
     */
    where?: AITableSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITableSyncs to fetch.
     */
    orderBy?: AITableSyncOrderByWithRelationInput | AITableSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AITableSyncs.
     */
    cursor?: AITableSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITableSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITableSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AITableSyncs.
     */
    distinct?: AITableSyncScalarFieldEnum | AITableSyncScalarFieldEnum[]
  }

  /**
   * AITableSync findMany
   */
  export type AITableSyncFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter, which AITableSyncs to fetch.
     */
    where?: AITableSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITableSyncs to fetch.
     */
    orderBy?: AITableSyncOrderByWithRelationInput | AITableSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AITableSyncs.
     */
    cursor?: AITableSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITableSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITableSyncs.
     */
    skip?: number
    distinct?: AITableSyncScalarFieldEnum | AITableSyncScalarFieldEnum[]
  }

  /**
   * AITableSync create
   */
  export type AITableSyncCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * The data needed to create a AITableSync.
     */
    data: XOR<AITableSyncCreateInput, AITableSyncUncheckedCreateInput>
  }

  /**
   * AITableSync createMany
   */
  export type AITableSyncCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AITableSyncs.
     */
    data: AITableSyncCreateManyInput | AITableSyncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AITableSync createManyAndReturn
   */
  export type AITableSyncCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * The data used to create many AITableSyncs.
     */
    data: AITableSyncCreateManyInput | AITableSyncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AITableSync update
   */
  export type AITableSyncUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * The data needed to update a AITableSync.
     */
    data: XOR<AITableSyncUpdateInput, AITableSyncUncheckedUpdateInput>
    /**
     * Choose, which AITableSync to update.
     */
    where: AITableSyncWhereUniqueInput
  }

  /**
   * AITableSync updateMany
   */
  export type AITableSyncUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AITableSyncs.
     */
    data: XOR<AITableSyncUpdateManyMutationInput, AITableSyncUncheckedUpdateManyInput>
    /**
     * Filter which AITableSyncs to update
     */
    where?: AITableSyncWhereInput
    /**
     * Limit how many AITableSyncs to update.
     */
    limit?: number
  }

  /**
   * AITableSync updateManyAndReturn
   */
  export type AITableSyncUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * The data used to update AITableSyncs.
     */
    data: XOR<AITableSyncUpdateManyMutationInput, AITableSyncUncheckedUpdateManyInput>
    /**
     * Filter which AITableSyncs to update
     */
    where?: AITableSyncWhereInput
    /**
     * Limit how many AITableSyncs to update.
     */
    limit?: number
  }

  /**
   * AITableSync upsert
   */
  export type AITableSyncUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * The filter to search for the AITableSync to update in case it exists.
     */
    where: AITableSyncWhereUniqueInput
    /**
     * In case the AITableSync found by the `where` argument doesn't exist, create a new AITableSync with this data.
     */
    create: XOR<AITableSyncCreateInput, AITableSyncUncheckedCreateInput>
    /**
     * In case the AITableSync was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AITableSyncUpdateInput, AITableSyncUncheckedUpdateInput>
  }

  /**
   * AITableSync delete
   */
  export type AITableSyncDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
    /**
     * Filter which AITableSync to delete.
     */
    where: AITableSyncWhereUniqueInput
  }

  /**
   * AITableSync deleteMany
   */
  export type AITableSyncDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AITableSyncs to delete
     */
    where?: AITableSyncWhereInput
    /**
     * Limit how many AITableSyncs to delete.
     */
    limit?: number
  }

  /**
   * AITableSync without action
   */
  export type AITableSyncDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITableSync
     */
    select?: AITableSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITableSync
     */
    omit?: AITableSyncOmit<ExtArgs> | null
  }


  /**
   * Model AuditRequest
   */

  export type AggregateAuditRequest = {
    _count: AuditRequestCountAggregateOutputType | null
    _min: AuditRequestMinAggregateOutputType | null
    _max: AuditRequestMaxAggregateOutputType | null
  }

  export type AuditRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    contactName: string | null
    email: string | null
    status: string | null
  }

  export type AuditRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    contactName: string | null
    email: string | null
    status: string | null
  }

  export type AuditRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    companyName: number
    contactName: number
    email: number
    status: number
    _all: number
  }


  export type AuditRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    contactName?: true
    email?: true
    status?: true
  }

  export type AuditRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    contactName?: true
    email?: true
    status?: true
  }

  export type AuditRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    contactName?: true
    email?: true
    status?: true
    _all?: true
  }

  export type AuditRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRequest to aggregate.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditRequests
    **/
    _count?: true | AuditRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditRequestMaxAggregateInputType
  }

  export type GetAuditRequestAggregateType<T extends AuditRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditRequest[P]>
      : GetScalarType<T[P], AggregateAuditRequest[P]>
  }




  export type AuditRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditRequestWhereInput
    orderBy?: AuditRequestOrderByWithAggregationInput | AuditRequestOrderByWithAggregationInput[]
    by: AuditRequestScalarFieldEnum[] | AuditRequestScalarFieldEnum
    having?: AuditRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditRequestCountAggregateInputType | true
    _min?: AuditRequestMinAggregateInputType
    _max?: AuditRequestMaxAggregateInputType
  }

  export type AuditRequestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    companyName: string
    contactName: string
    email: string
    status: string
    _count: AuditRequestCountAggregateOutputType | null
    _min: AuditRequestMinAggregateOutputType | null
    _max: AuditRequestMaxAggregateOutputType | null
  }

  type GetAuditRequestGroupByPayload<T extends AuditRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AuditRequestGroupByOutputType[P]>
        }
      >
    >


  export type AuditRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["auditRequest"]>

  export type AuditRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["auditRequest"]>

  export type AuditRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["auditRequest"]>

  export type AuditRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    contactName?: boolean
    email?: boolean
    status?: boolean
  }

  export type AuditRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "companyName" | "contactName" | "email" | "status", ExtArgs["result"]["auditRequest"]>

  export type $AuditRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      companyName: string
      contactName: string
      email: string
      status: string
    }, ExtArgs["result"]["auditRequest"]>
    composites: {}
  }

  type AuditRequestGetPayload<S extends boolean | null | undefined | AuditRequestDefaultArgs> = $Result.GetResult<Prisma.$AuditRequestPayload, S>

  type AuditRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditRequestCountAggregateInputType | true
    }

  export interface AuditRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditRequest'], meta: { name: 'AuditRequest' } }
    /**
     * Find zero or one AuditRequest that matches the filter.
     * @param {AuditRequestFindUniqueArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditRequestFindUniqueArgs>(args: SelectSubset<T, AuditRequestFindUniqueArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditRequestFindUniqueOrThrowArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindFirstArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditRequestFindFirstArgs>(args?: SelectSubset<T, AuditRequestFindFirstArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindFirstOrThrowArgs} args - Arguments to find a AuditRequest
     * @example
     * // Get one AuditRequest
     * const auditRequest = await prisma.auditRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditRequests
     * const auditRequests = await prisma.auditRequest.findMany()
     * 
     * // Get first 10 AuditRequests
     * const auditRequests = await prisma.auditRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditRequestWithIdOnly = await prisma.auditRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditRequestFindManyArgs>(args?: SelectSubset<T, AuditRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditRequest.
     * @param {AuditRequestCreateArgs} args - Arguments to create a AuditRequest.
     * @example
     * // Create one AuditRequest
     * const AuditRequest = await prisma.auditRequest.create({
     *   data: {
     *     // ... data to create a AuditRequest
     *   }
     * })
     * 
     */
    create<T extends AuditRequestCreateArgs>(args: SelectSubset<T, AuditRequestCreateArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditRequests.
     * @param {AuditRequestCreateManyArgs} args - Arguments to create many AuditRequests.
     * @example
     * // Create many AuditRequests
     * const auditRequest = await prisma.auditRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditRequestCreateManyArgs>(args?: SelectSubset<T, AuditRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditRequests and returns the data saved in the database.
     * @param {AuditRequestCreateManyAndReturnArgs} args - Arguments to create many AuditRequests.
     * @example
     * // Create many AuditRequests
     * const auditRequest = await prisma.auditRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditRequests and only return the `id`
     * const auditRequestWithIdOnly = await prisma.auditRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditRequest.
     * @param {AuditRequestDeleteArgs} args - Arguments to delete one AuditRequest.
     * @example
     * // Delete one AuditRequest
     * const AuditRequest = await prisma.auditRequest.delete({
     *   where: {
     *     // ... filter to delete one AuditRequest
     *   }
     * })
     * 
     */
    delete<T extends AuditRequestDeleteArgs>(args: SelectSubset<T, AuditRequestDeleteArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditRequest.
     * @param {AuditRequestUpdateArgs} args - Arguments to update one AuditRequest.
     * @example
     * // Update one AuditRequest
     * const auditRequest = await prisma.auditRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditRequestUpdateArgs>(args: SelectSubset<T, AuditRequestUpdateArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditRequests.
     * @param {AuditRequestDeleteManyArgs} args - Arguments to filter AuditRequests to delete.
     * @example
     * // Delete a few AuditRequests
     * const { count } = await prisma.auditRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditRequestDeleteManyArgs>(args?: SelectSubset<T, AuditRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditRequests
     * const auditRequest = await prisma.auditRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditRequestUpdateManyArgs>(args: SelectSubset<T, AuditRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditRequests and returns the data updated in the database.
     * @param {AuditRequestUpdateManyAndReturnArgs} args - Arguments to update many AuditRequests.
     * @example
     * // Update many AuditRequests
     * const auditRequest = await prisma.auditRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditRequests and only return the `id`
     * const auditRequestWithIdOnly = await prisma.auditRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditRequest.
     * @param {AuditRequestUpsertArgs} args - Arguments to update or create a AuditRequest.
     * @example
     * // Update or create a AuditRequest
     * const auditRequest = await prisma.auditRequest.upsert({
     *   create: {
     *     // ... data to create a AuditRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditRequest we want to update
     *   }
     * })
     */
    upsert<T extends AuditRequestUpsertArgs>(args: SelectSubset<T, AuditRequestUpsertArgs<ExtArgs>>): Prisma__AuditRequestClient<$Result.GetResult<Prisma.$AuditRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestCountArgs} args - Arguments to filter AuditRequests to count.
     * @example
     * // Count the number of AuditRequests
     * const count = await prisma.auditRequest.count({
     *   where: {
     *     // ... the filter for the AuditRequests we want to count
     *   }
     * })
    **/
    count<T extends AuditRequestCountArgs>(
      args?: Subset<T, AuditRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditRequestAggregateArgs>(args: Subset<T, AuditRequestAggregateArgs>): Prisma.PrismaPromise<GetAuditRequestAggregateType<T>>

    /**
     * Group by AuditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditRequestGroupByArgs['orderBy'] }
        : { orderBy?: AuditRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditRequest model
   */
  readonly fields: AuditRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditRequest model
   */
  interface AuditRequestFieldRefs {
    readonly id: FieldRef<"AuditRequest", 'String'>
    readonly createdAt: FieldRef<"AuditRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AuditRequest", 'DateTime'>
    readonly companyName: FieldRef<"AuditRequest", 'String'>
    readonly contactName: FieldRef<"AuditRequest", 'String'>
    readonly email: FieldRef<"AuditRequest", 'String'>
    readonly status: FieldRef<"AuditRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditRequest findUnique
   */
  export type AuditRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest findUniqueOrThrow
   */
  export type AuditRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest findFirst
   */
  export type AuditRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRequests.
     */
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest findFirstOrThrow
   */
  export type AuditRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter, which AuditRequest to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRequests.
     */
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest findMany
   */
  export type AuditRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter, which AuditRequests to fetch.
     */
    where?: AuditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRequests to fetch.
     */
    orderBy?: AuditRequestOrderByWithRelationInput | AuditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditRequests.
     */
    cursor?: AuditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRequests.
     */
    skip?: number
    distinct?: AuditRequestScalarFieldEnum | AuditRequestScalarFieldEnum[]
  }

  /**
   * AuditRequest create
   */
  export type AuditRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditRequest.
     */
    data: XOR<AuditRequestCreateInput, AuditRequestUncheckedCreateInput>
  }

  /**
   * AuditRequest createMany
   */
  export type AuditRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditRequests.
     */
    data: AuditRequestCreateManyInput | AuditRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditRequest createManyAndReturn
   */
  export type AuditRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AuditRequests.
     */
    data: AuditRequestCreateManyInput | AuditRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditRequest update
   */
  export type AuditRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditRequest.
     */
    data: XOR<AuditRequestUpdateInput, AuditRequestUncheckedUpdateInput>
    /**
     * Choose, which AuditRequest to update.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest updateMany
   */
  export type AuditRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditRequests.
     */
    data: XOR<AuditRequestUpdateManyMutationInput, AuditRequestUncheckedUpdateManyInput>
    /**
     * Filter which AuditRequests to update
     */
    where?: AuditRequestWhereInput
    /**
     * Limit how many AuditRequests to update.
     */
    limit?: number
  }

  /**
   * AuditRequest updateManyAndReturn
   */
  export type AuditRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * The data used to update AuditRequests.
     */
    data: XOR<AuditRequestUpdateManyMutationInput, AuditRequestUncheckedUpdateManyInput>
    /**
     * Filter which AuditRequests to update
     */
    where?: AuditRequestWhereInput
    /**
     * Limit how many AuditRequests to update.
     */
    limit?: number
  }

  /**
   * AuditRequest upsert
   */
  export type AuditRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditRequest to update in case it exists.
     */
    where: AuditRequestWhereUniqueInput
    /**
     * In case the AuditRequest found by the `where` argument doesn't exist, create a new AuditRequest with this data.
     */
    create: XOR<AuditRequestCreateInput, AuditRequestUncheckedCreateInput>
    /**
     * In case the AuditRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditRequestUpdateInput, AuditRequestUncheckedUpdateInput>
  }

  /**
   * AuditRequest delete
   */
  export type AuditRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
    /**
     * Filter which AuditRequest to delete.
     */
    where: AuditRequestWhereUniqueInput
  }

  /**
   * AuditRequest deleteMany
   */
  export type AuditRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRequests to delete
     */
    where?: AuditRequestWhereInput
    /**
     * Limit how many AuditRequests to delete.
     */
    limit?: number
  }

  /**
   * AuditRequest without action
   */
  export type AuditRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRequest
     */
    select?: AuditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRequest
     */
    omit?: AuditRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConferenceRoomScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyName: 'companyName',
    companyEmail: 'companyEmail',
    cfoName: 'cfoName',
    cfoEmail: 'cfoEmail',
    industry: 'industry',
    annualRevenue: 'annualRevenue',
    annualBudget: 'annualBudget',
    accessCode: 'accessCode',
    accessCodeHash: 'accessCodeHash',
    codeGeneratedAt: 'codeGeneratedAt',
    codeUsed: 'codeUsed',
    firstAccessedAt: 'firstAccessedAt',
    lastAccessedAt: 'lastAccessedAt',
    accessCount: 'accessCount',
    status: 'status',
    expiresAt: 'expiresAt',
    closedAt: 'closedAt',
    closureReason: 'closureReason',
    encryptionKey: 'encryptionKey',
    ipWhitelist: 'ipWhitelist',
    mfaEnabled: 'mfaEnabled',
    mfaPhone: 'mfaPhone',
    dealValue: 'dealValue',
    dealStage: 'dealStage',
    salesRep: 'salesRep',
    notes: 'notes'
  };

  export type ConferenceRoomScalarFieldEnum = (typeof ConferenceRoomScalarFieldEnum)[keyof typeof ConferenceRoomScalarFieldEnum]


  export const ConferenceRoomFileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fileName: 'fileName',
    fileSize: 'fileSize',
    fileType: 'fileType',
    originalName: 'originalName',
    encryptedPath: 'encryptedPath',
    encryptionIV: 'encryptionIV',
    checksum: 'checksum',
    fileCategory: 'fileCategory',
    sensitive: 'sensitive',
    uploadedBy: 'uploadedBy',
    uploadedFrom: 'uploadedFrom',
    userAgent: 'userAgent',
    processed: 'processed',
    processedAt: 'processedAt',
    auditIncluded: 'auditIncluded',
    conferenceRoomId: 'conferenceRoomId'
  };

  export type ConferenceRoomFileScalarFieldEnum = (typeof ConferenceRoomFileScalarFieldEnum)[keyof typeof ConferenceRoomFileScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    eventType: 'eventType',
    eventData: 'eventData',
    actorEmail: 'actorEmail',
    actorIP: 'actorIP',
    userAgent: 'userAgent',
    success: 'success',
    errorMsg: 'errorMsg',
    conferenceRoomId: 'conferenceRoomId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    key: 'key',
    keyHash: 'keyHash',
    encryptedKey: 'encryptedKey',
    customerId: 'customerId',
    customerEmail: 'customerEmail',
    companyName: 'companyName',
    status: 'status',
    revokedAt: 'revokedAt',
    revokedReason: 'revokedReason',
    requestsPerDay: 'requestsPerDay',
    requestsToday: 'requestsToday',
    lastResetAt: 'lastResetAt',
    totalRequests: 'totalRequests',
    lastUsedAt: 'lastUsedAt',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    billingStatus: 'billingStatus'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const PayrollCorrectionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    apiKeyId: 'apiKeyId',
    inputData: 'inputData',
    employeeId: 'employeeId',
    aiModel: 'aiModel',
    aiRequestId: 'aiRequestId',
    aiTokensUsed: 'aiTokensUsed',
    processingTime: 'processingTime',
    correctionsFound: 'correctionsFound',
    correctionCount: 'correctionCount',
    outputData: 'outputData',
    issuesFound: 'issuesFound',
    status: 'status',
    errorMsg: 'errorMsg'
  };

  export type PayrollCorrectionScalarFieldEnum = (typeof PayrollCorrectionScalarFieldEnum)[keyof typeof PayrollCorrectionScalarFieldEnum]


  export const AutomationLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    apiKeyId: 'apiKeyId',
    eventType: 'eventType',
    eventData: 'eventData',
    endpoint: 'endpoint',
    method: 'method',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    statusCode: 'statusCode',
    responseTime: 'responseTime',
    success: 'success',
    errorMsg: 'errorMsg'
  };

  export type AutomationLogScalarFieldEnum = (typeof AutomationLogScalarFieldEnum)[keyof typeof AutomationLogScalarFieldEnum]


  export const StripeCustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    email: 'email',
    companyName: 'companyName',
    planId: 'planId',
    planName: 'planName',
    priceId: 'priceId',
    amount: 'amount',
    currency: 'currency',
    interval: 'interval',
    subscriptionStatus: 'subscriptionStatus',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAt: 'cancelAt',
    canceledAt: 'canceledAt',
    apiKeyId: 'apiKeyId'
  };

  export type StripeCustomerScalarFieldEnum = (typeof StripeCustomerScalarFieldEnum)[keyof typeof StripeCustomerScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fileId: 'fileId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    customerId: 'customerId',
    customerEmail: 'customerEmail',
    companyName: 'companyName',
    status: 'status',
    issuesFound: 'issuesFound',
    correctionsMade: 'correctionsMade',
    recordsProcessed: 'recordsProcessed',
    processingTime: 'processingTime',
    errorMsg: 'errorMsg',
    corrections: 'corrections',
    issues: 'issues',
    apiKeyId: 'apiKeyId'
  };

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const AITableSyncScalarFieldEnum: {
    id: 'id',
    recordId: 'recordId',
    datasheetId: 'datasheetId',
    entityType: 'entityType',
    entityId: 'entityId',
    lastSyncedAt: 'lastSyncedAt',
    syncDirection: 'syncDirection',
    syncStatus: 'syncStatus',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AITableSyncScalarFieldEnum = (typeof AITableSyncScalarFieldEnum)[keyof typeof AITableSyncScalarFieldEnum]


  export const AuditRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyName: 'companyName',
    contactName: 'contactName',
    email: 'email',
    status: 'status'
  };

  export type AuditRequestScalarFieldEnum = (typeof AuditRequestScalarFieldEnum)[keyof typeof AuditRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ConferenceRoomStatus'
   */
  export type EnumConferenceRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConferenceRoomStatus'>
    


  /**
   * Reference to a field of type 'ConferenceRoomStatus[]'
   */
  export type ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConferenceRoomStatus[]'>
    


  /**
   * Reference to a field of type 'FileCategory'
   */
  export type EnumFileCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileCategory'>
    


  /**
   * Reference to a field of type 'FileCategory[]'
   */
  export type ListEnumFileCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileCategory[]'>
    


  /**
   * Reference to a field of type 'AuditEventType'
   */
  export type EnumAuditEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEventType'>
    


  /**
   * Reference to a field of type 'AuditEventType[]'
   */
  export type ListEnumAuditEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus'
   */
  export type EnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus[]'
   */
  export type ListEnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus[]'>
    


  /**
   * Reference to a field of type 'BillingStatus'
   */
  export type EnumBillingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingStatus'>
    


  /**
   * Reference to a field of type 'BillingStatus[]'
   */
  export type ListEnumBillingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingStatus[]'>
    


  /**
   * Reference to a field of type 'CorrectionStatus'
   */
  export type EnumCorrectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CorrectionStatus'>
    


  /**
   * Reference to a field of type 'CorrectionStatus[]'
   */
  export type ListEnumCorrectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CorrectionStatus[]'>
    


  /**
   * Reference to a field of type 'AutomationEventType'
   */
  export type EnumAutomationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationEventType'>
    


  /**
   * Reference to a field of type 'AutomationEventType[]'
   */
  export type ListEnumAutomationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationEventType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'FileUploadStatus'
   */
  export type EnumFileUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileUploadStatus'>
    


  /**
   * Reference to a field of type 'FileUploadStatus[]'
   */
  export type ListEnumFileUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileUploadStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ConferenceRoomWhereInput = {
    AND?: ConferenceRoomWhereInput | ConferenceRoomWhereInput[]
    OR?: ConferenceRoomWhereInput[]
    NOT?: ConferenceRoomWhereInput | ConferenceRoomWhereInput[]
    id?: StringFilter<"ConferenceRoom"> | string
    createdAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    companyName?: StringFilter<"ConferenceRoom"> | string
    companyEmail?: StringFilter<"ConferenceRoom"> | string
    cfoName?: StringNullableFilter<"ConferenceRoom"> | string | null
    cfoEmail?: StringFilter<"ConferenceRoom"> | string
    industry?: StringNullableFilter<"ConferenceRoom"> | string | null
    annualRevenue?: FloatNullableFilter<"ConferenceRoom"> | number | null
    annualBudget?: FloatNullableFilter<"ConferenceRoom"> | number | null
    accessCode?: StringFilter<"ConferenceRoom"> | string
    accessCodeHash?: StringFilter<"ConferenceRoom"> | string
    codeGeneratedAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    codeUsed?: BoolFilter<"ConferenceRoom"> | boolean
    firstAccessedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    lastAccessedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    accessCount?: IntFilter<"ConferenceRoom"> | number
    status?: EnumConferenceRoomStatusFilter<"ConferenceRoom"> | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    closedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    closureReason?: StringNullableFilter<"ConferenceRoom"> | string | null
    encryptionKey?: StringFilter<"ConferenceRoom"> | string
    ipWhitelist?: StringNullableListFilter<"ConferenceRoom">
    mfaEnabled?: BoolFilter<"ConferenceRoom"> | boolean
    mfaPhone?: StringNullableFilter<"ConferenceRoom"> | string | null
    dealValue?: FloatNullableFilter<"ConferenceRoom"> | number | null
    dealStage?: StringNullableFilter<"ConferenceRoom"> | string | null
    salesRep?: StringNullableFilter<"ConferenceRoom"> | string | null
    notes?: StringNullableFilter<"ConferenceRoom"> | string | null
    auditLog?: AuditLogListRelationFilter
    files?: ConferenceRoomFileListRelationFilter
  }

  export type ConferenceRoomOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    cfoName?: SortOrderInput | SortOrder
    cfoEmail?: SortOrder
    industry?: SortOrderInput | SortOrder
    annualRevenue?: SortOrderInput | SortOrder
    annualBudget?: SortOrderInput | SortOrder
    accessCode?: SortOrder
    accessCodeHash?: SortOrder
    codeGeneratedAt?: SortOrder
    codeUsed?: SortOrder
    firstAccessedAt?: SortOrderInput | SortOrder
    lastAccessedAt?: SortOrderInput | SortOrder
    accessCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closureReason?: SortOrderInput | SortOrder
    encryptionKey?: SortOrder
    ipWhitelist?: SortOrder
    mfaEnabled?: SortOrder
    mfaPhone?: SortOrderInput | SortOrder
    dealValue?: SortOrderInput | SortOrder
    dealStage?: SortOrderInput | SortOrder
    salesRep?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    auditLog?: AuditLogOrderByRelationAggregateInput
    files?: ConferenceRoomFileOrderByRelationAggregateInput
  }

  export type ConferenceRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessCode?: string
    AND?: ConferenceRoomWhereInput | ConferenceRoomWhereInput[]
    OR?: ConferenceRoomWhereInput[]
    NOT?: ConferenceRoomWhereInput | ConferenceRoomWhereInput[]
    createdAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    companyName?: StringFilter<"ConferenceRoom"> | string
    companyEmail?: StringFilter<"ConferenceRoom"> | string
    cfoName?: StringNullableFilter<"ConferenceRoom"> | string | null
    cfoEmail?: StringFilter<"ConferenceRoom"> | string
    industry?: StringNullableFilter<"ConferenceRoom"> | string | null
    annualRevenue?: FloatNullableFilter<"ConferenceRoom"> | number | null
    annualBudget?: FloatNullableFilter<"ConferenceRoom"> | number | null
    accessCodeHash?: StringFilter<"ConferenceRoom"> | string
    codeGeneratedAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    codeUsed?: BoolFilter<"ConferenceRoom"> | boolean
    firstAccessedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    lastAccessedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    accessCount?: IntFilter<"ConferenceRoom"> | number
    status?: EnumConferenceRoomStatusFilter<"ConferenceRoom"> | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFilter<"ConferenceRoom"> | Date | string
    closedAt?: DateTimeNullableFilter<"ConferenceRoom"> | Date | string | null
    closureReason?: StringNullableFilter<"ConferenceRoom"> | string | null
    encryptionKey?: StringFilter<"ConferenceRoom"> | string
    ipWhitelist?: StringNullableListFilter<"ConferenceRoom">
    mfaEnabled?: BoolFilter<"ConferenceRoom"> | boolean
    mfaPhone?: StringNullableFilter<"ConferenceRoom"> | string | null
    dealValue?: FloatNullableFilter<"ConferenceRoom"> | number | null
    dealStage?: StringNullableFilter<"ConferenceRoom"> | string | null
    salesRep?: StringNullableFilter<"ConferenceRoom"> | string | null
    notes?: StringNullableFilter<"ConferenceRoom"> | string | null
    auditLog?: AuditLogListRelationFilter
    files?: ConferenceRoomFileListRelationFilter
  }, "id" | "accessCode">

  export type ConferenceRoomOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    cfoName?: SortOrderInput | SortOrder
    cfoEmail?: SortOrder
    industry?: SortOrderInput | SortOrder
    annualRevenue?: SortOrderInput | SortOrder
    annualBudget?: SortOrderInput | SortOrder
    accessCode?: SortOrder
    accessCodeHash?: SortOrder
    codeGeneratedAt?: SortOrder
    codeUsed?: SortOrder
    firstAccessedAt?: SortOrderInput | SortOrder
    lastAccessedAt?: SortOrderInput | SortOrder
    accessCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closureReason?: SortOrderInput | SortOrder
    encryptionKey?: SortOrder
    ipWhitelist?: SortOrder
    mfaEnabled?: SortOrder
    mfaPhone?: SortOrderInput | SortOrder
    dealValue?: SortOrderInput | SortOrder
    dealStage?: SortOrderInput | SortOrder
    salesRep?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ConferenceRoomCountOrderByAggregateInput
    _avg?: ConferenceRoomAvgOrderByAggregateInput
    _max?: ConferenceRoomMaxOrderByAggregateInput
    _min?: ConferenceRoomMinOrderByAggregateInput
    _sum?: ConferenceRoomSumOrderByAggregateInput
  }

  export type ConferenceRoomScalarWhereWithAggregatesInput = {
    AND?: ConferenceRoomScalarWhereWithAggregatesInput | ConferenceRoomScalarWhereWithAggregatesInput[]
    OR?: ConferenceRoomScalarWhereWithAggregatesInput[]
    NOT?: ConferenceRoomScalarWhereWithAggregatesInput | ConferenceRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConferenceRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConferenceRoom"> | Date | string
    companyName?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    companyEmail?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    cfoName?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    cfoEmail?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    industry?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    annualRevenue?: FloatNullableWithAggregatesFilter<"ConferenceRoom"> | number | null
    annualBudget?: FloatNullableWithAggregatesFilter<"ConferenceRoom"> | number | null
    accessCode?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    accessCodeHash?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    codeGeneratedAt?: DateTimeWithAggregatesFilter<"ConferenceRoom"> | Date | string
    codeUsed?: BoolWithAggregatesFilter<"ConferenceRoom"> | boolean
    firstAccessedAt?: DateTimeNullableWithAggregatesFilter<"ConferenceRoom"> | Date | string | null
    lastAccessedAt?: DateTimeNullableWithAggregatesFilter<"ConferenceRoom"> | Date | string | null
    accessCount?: IntWithAggregatesFilter<"ConferenceRoom"> | number
    status?: EnumConferenceRoomStatusWithAggregatesFilter<"ConferenceRoom"> | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeWithAggregatesFilter<"ConferenceRoom"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"ConferenceRoom"> | Date | string | null
    closureReason?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    encryptionKey?: StringWithAggregatesFilter<"ConferenceRoom"> | string
    ipWhitelist?: StringNullableListFilter<"ConferenceRoom">
    mfaEnabled?: BoolWithAggregatesFilter<"ConferenceRoom"> | boolean
    mfaPhone?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    dealValue?: FloatNullableWithAggregatesFilter<"ConferenceRoom"> | number | null
    dealStage?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    salesRep?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ConferenceRoom"> | string | null
  }

  export type ConferenceRoomFileWhereInput = {
    AND?: ConferenceRoomFileWhereInput | ConferenceRoomFileWhereInput[]
    OR?: ConferenceRoomFileWhereInput[]
    NOT?: ConferenceRoomFileWhereInput | ConferenceRoomFileWhereInput[]
    id?: StringFilter<"ConferenceRoomFile"> | string
    createdAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    updatedAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    fileName?: StringFilter<"ConferenceRoomFile"> | string
    fileSize?: IntFilter<"ConferenceRoomFile"> | number
    fileType?: StringFilter<"ConferenceRoomFile"> | string
    originalName?: StringFilter<"ConferenceRoomFile"> | string
    encryptedPath?: StringFilter<"ConferenceRoomFile"> | string
    encryptionIV?: StringFilter<"ConferenceRoomFile"> | string
    checksum?: StringFilter<"ConferenceRoomFile"> | string
    fileCategory?: EnumFileCategoryFilter<"ConferenceRoomFile"> | $Enums.FileCategory
    sensitive?: BoolFilter<"ConferenceRoomFile"> | boolean
    uploadedBy?: StringFilter<"ConferenceRoomFile"> | string
    uploadedFrom?: StringFilter<"ConferenceRoomFile"> | string
    userAgent?: StringNullableFilter<"ConferenceRoomFile"> | string | null
    processed?: BoolFilter<"ConferenceRoomFile"> | boolean
    processedAt?: DateTimeNullableFilter<"ConferenceRoomFile"> | Date | string | null
    auditIncluded?: BoolFilter<"ConferenceRoomFile"> | boolean
    conferenceRoomId?: StringFilter<"ConferenceRoomFile"> | string
    conferenceRoom?: XOR<ConferenceRoomScalarRelationFilter, ConferenceRoomWhereInput>
  }

  export type ConferenceRoomFileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    originalName?: SortOrder
    encryptedPath?: SortOrder
    encryptionIV?: SortOrder
    checksum?: SortOrder
    fileCategory?: SortOrder
    sensitive?: SortOrder
    uploadedBy?: SortOrder
    uploadedFrom?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    auditIncluded?: SortOrder
    conferenceRoomId?: SortOrder
    conferenceRoom?: ConferenceRoomOrderByWithRelationInput
  }

  export type ConferenceRoomFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConferenceRoomFileWhereInput | ConferenceRoomFileWhereInput[]
    OR?: ConferenceRoomFileWhereInput[]
    NOT?: ConferenceRoomFileWhereInput | ConferenceRoomFileWhereInput[]
    createdAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    updatedAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    fileName?: StringFilter<"ConferenceRoomFile"> | string
    fileSize?: IntFilter<"ConferenceRoomFile"> | number
    fileType?: StringFilter<"ConferenceRoomFile"> | string
    originalName?: StringFilter<"ConferenceRoomFile"> | string
    encryptedPath?: StringFilter<"ConferenceRoomFile"> | string
    encryptionIV?: StringFilter<"ConferenceRoomFile"> | string
    checksum?: StringFilter<"ConferenceRoomFile"> | string
    fileCategory?: EnumFileCategoryFilter<"ConferenceRoomFile"> | $Enums.FileCategory
    sensitive?: BoolFilter<"ConferenceRoomFile"> | boolean
    uploadedBy?: StringFilter<"ConferenceRoomFile"> | string
    uploadedFrom?: StringFilter<"ConferenceRoomFile"> | string
    userAgent?: StringNullableFilter<"ConferenceRoomFile"> | string | null
    processed?: BoolFilter<"ConferenceRoomFile"> | boolean
    processedAt?: DateTimeNullableFilter<"ConferenceRoomFile"> | Date | string | null
    auditIncluded?: BoolFilter<"ConferenceRoomFile"> | boolean
    conferenceRoomId?: StringFilter<"ConferenceRoomFile"> | string
    conferenceRoom?: XOR<ConferenceRoomScalarRelationFilter, ConferenceRoomWhereInput>
  }, "id">

  export type ConferenceRoomFileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    originalName?: SortOrder
    encryptedPath?: SortOrder
    encryptionIV?: SortOrder
    checksum?: SortOrder
    fileCategory?: SortOrder
    sensitive?: SortOrder
    uploadedBy?: SortOrder
    uploadedFrom?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    auditIncluded?: SortOrder
    conferenceRoomId?: SortOrder
    _count?: ConferenceRoomFileCountOrderByAggregateInput
    _avg?: ConferenceRoomFileAvgOrderByAggregateInput
    _max?: ConferenceRoomFileMaxOrderByAggregateInput
    _min?: ConferenceRoomFileMinOrderByAggregateInput
    _sum?: ConferenceRoomFileSumOrderByAggregateInput
  }

  export type ConferenceRoomFileScalarWhereWithAggregatesInput = {
    AND?: ConferenceRoomFileScalarWhereWithAggregatesInput | ConferenceRoomFileScalarWhereWithAggregatesInput[]
    OR?: ConferenceRoomFileScalarWhereWithAggregatesInput[]
    NOT?: ConferenceRoomFileScalarWhereWithAggregatesInput | ConferenceRoomFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConferenceRoomFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConferenceRoomFile"> | Date | string
    fileName?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    fileSize?: IntWithAggregatesFilter<"ConferenceRoomFile"> | number
    fileType?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    originalName?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    encryptedPath?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    encryptionIV?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    checksum?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    fileCategory?: EnumFileCategoryWithAggregatesFilter<"ConferenceRoomFile"> | $Enums.FileCategory
    sensitive?: BoolWithAggregatesFilter<"ConferenceRoomFile"> | boolean
    uploadedBy?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    uploadedFrom?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
    userAgent?: StringNullableWithAggregatesFilter<"ConferenceRoomFile"> | string | null
    processed?: BoolWithAggregatesFilter<"ConferenceRoomFile"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"ConferenceRoomFile"> | Date | string | null
    auditIncluded?: BoolWithAggregatesFilter<"ConferenceRoomFile"> | boolean
    conferenceRoomId?: StringWithAggregatesFilter<"ConferenceRoomFile"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    eventType?: EnumAuditEventTypeFilter<"AuditLog"> | $Enums.AuditEventType
    eventData?: JsonFilter<"AuditLog">
    actorEmail?: StringFilter<"AuditLog"> | string
    actorIP?: StringFilter<"AuditLog"> | string
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    success?: BoolFilter<"AuditLog"> | boolean
    errorMsg?: StringNullableFilter<"AuditLog"> | string | null
    conferenceRoomId?: StringFilter<"AuditLog"> | string
    conferenceRoom?: XOR<ConferenceRoomScalarRelationFilter, ConferenceRoomWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    actorEmail?: SortOrder
    actorIP?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    conferenceRoomId?: SortOrder
    conferenceRoom?: ConferenceRoomOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    eventType?: EnumAuditEventTypeFilter<"AuditLog"> | $Enums.AuditEventType
    eventData?: JsonFilter<"AuditLog">
    actorEmail?: StringFilter<"AuditLog"> | string
    actorIP?: StringFilter<"AuditLog"> | string
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    success?: BoolFilter<"AuditLog"> | boolean
    errorMsg?: StringNullableFilter<"AuditLog"> | string | null
    conferenceRoomId?: StringFilter<"AuditLog"> | string
    conferenceRoom?: XOR<ConferenceRoomScalarRelationFilter, ConferenceRoomWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    actorEmail?: SortOrder
    actorIP?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    conferenceRoomId?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    eventType?: EnumAuditEventTypeWithAggregatesFilter<"AuditLog"> | $Enums.AuditEventType
    eventData?: JsonWithAggregatesFilter<"AuditLog">
    actorEmail?: StringWithAggregatesFilter<"AuditLog"> | string
    actorIP?: StringWithAggregatesFilter<"AuditLog"> | string
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    success?: BoolWithAggregatesFilter<"AuditLog"> | boolean
    errorMsg?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    conferenceRoomId?: StringWithAggregatesFilter<"AuditLog"> | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    key?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    encryptedKey?: StringFilter<"ApiKey"> | string
    customerId?: StringFilter<"ApiKey"> | string
    customerEmail?: StringFilter<"ApiKey"> | string
    companyName?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedReason?: StringNullableFilter<"ApiKey"> | string | null
    requestsPerDay?: IntFilter<"ApiKey"> | number
    requestsToday?: IntFilter<"ApiKey"> | number
    lastResetAt?: DateTimeFilter<"ApiKey"> | Date | string
    totalRequests?: IntFilter<"ApiKey"> | number
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"ApiKey"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"ApiKey"> | string | null
    billingStatus?: EnumBillingStatusFilter<"ApiKey"> | $Enums.BillingStatus
    corrections?: PayrollCorrectionListRelationFilter
    automationLogs?: AutomationLogListRelationFilter
    fileUploads?: FileUploadListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    keyHash?: SortOrder
    encryptedKey?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedReason?: SortOrderInput | SortOrder
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    lastResetAt?: SortOrder
    totalRequests?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    billingStatus?: SortOrder
    corrections?: PayrollCorrectionOrderByRelationAggregateInput
    automationLogs?: AutomationLogOrderByRelationAggregateInput
    fileUploads?: FileUploadOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    encryptedKey?: StringFilter<"ApiKey"> | string
    customerId?: StringFilter<"ApiKey"> | string
    customerEmail?: StringFilter<"ApiKey"> | string
    companyName?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedReason?: StringNullableFilter<"ApiKey"> | string | null
    requestsPerDay?: IntFilter<"ApiKey"> | number
    requestsToday?: IntFilter<"ApiKey"> | number
    lastResetAt?: DateTimeFilter<"ApiKey"> | Date | string
    totalRequests?: IntFilter<"ApiKey"> | number
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"ApiKey"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"ApiKey"> | string | null
    billingStatus?: EnumBillingStatusFilter<"ApiKey"> | $Enums.BillingStatus
    corrections?: PayrollCorrectionListRelationFilter
    automationLogs?: AutomationLogListRelationFilter
    fileUploads?: FileUploadListRelationFilter
  }, "id" | "key" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    keyHash?: SortOrder
    encryptedKey?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedReason?: SortOrderInput | SortOrder
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    lastResetAt?: SortOrder
    totalRequests?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    billingStatus?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    encryptedKey?: StringWithAggregatesFilter<"ApiKey"> | string
    customerId?: StringWithAggregatesFilter<"ApiKey"> | string
    customerEmail?: StringWithAggregatesFilter<"ApiKey"> | string
    companyName?: StringWithAggregatesFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusWithAggregatesFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    revokedReason?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    requestsPerDay?: IntWithAggregatesFilter<"ApiKey"> | number
    requestsToday?: IntWithAggregatesFilter<"ApiKey"> | number
    lastResetAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    totalRequests?: IntWithAggregatesFilter<"ApiKey"> | number
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    billingStatus?: EnumBillingStatusWithAggregatesFilter<"ApiKey"> | $Enums.BillingStatus
  }

  export type PayrollCorrectionWhereInput = {
    AND?: PayrollCorrectionWhereInput | PayrollCorrectionWhereInput[]
    OR?: PayrollCorrectionWhereInput[]
    NOT?: PayrollCorrectionWhereInput | PayrollCorrectionWhereInput[]
    id?: StringFilter<"PayrollCorrection"> | string
    createdAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    apiKeyId?: StringFilter<"PayrollCorrection"> | string
    inputData?: JsonFilter<"PayrollCorrection">
    employeeId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiModel?: StringFilter<"PayrollCorrection"> | string
    aiRequestId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiTokensUsed?: IntNullableFilter<"PayrollCorrection"> | number | null
    processingTime?: IntNullableFilter<"PayrollCorrection"> | number | null
    correctionsFound?: BoolFilter<"PayrollCorrection"> | boolean
    correctionCount?: IntFilter<"PayrollCorrection"> | number
    outputData?: JsonNullableFilter<"PayrollCorrection">
    issuesFound?: JsonNullableFilter<"PayrollCorrection">
    status?: EnumCorrectionStatusFilter<"PayrollCorrection"> | $Enums.CorrectionStatus
    errorMsg?: StringNullableFilter<"PayrollCorrection"> | string | null
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type PayrollCorrectionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeyId?: SortOrder
    inputData?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    aiRequestId?: SortOrderInput | SortOrder
    aiTokensUsed?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    correctionsFound?: SortOrder
    correctionCount?: SortOrder
    outputData?: SortOrderInput | SortOrder
    issuesFound?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type PayrollCorrectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollCorrectionWhereInput | PayrollCorrectionWhereInput[]
    OR?: PayrollCorrectionWhereInput[]
    NOT?: PayrollCorrectionWhereInput | PayrollCorrectionWhereInput[]
    createdAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    apiKeyId?: StringFilter<"PayrollCorrection"> | string
    inputData?: JsonFilter<"PayrollCorrection">
    employeeId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiModel?: StringFilter<"PayrollCorrection"> | string
    aiRequestId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiTokensUsed?: IntNullableFilter<"PayrollCorrection"> | number | null
    processingTime?: IntNullableFilter<"PayrollCorrection"> | number | null
    correctionsFound?: BoolFilter<"PayrollCorrection"> | boolean
    correctionCount?: IntFilter<"PayrollCorrection"> | number
    outputData?: JsonNullableFilter<"PayrollCorrection">
    issuesFound?: JsonNullableFilter<"PayrollCorrection">
    status?: EnumCorrectionStatusFilter<"PayrollCorrection"> | $Enums.CorrectionStatus
    errorMsg?: StringNullableFilter<"PayrollCorrection"> | string | null
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type PayrollCorrectionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeyId?: SortOrder
    inputData?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    aiRequestId?: SortOrderInput | SortOrder
    aiTokensUsed?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    correctionsFound?: SortOrder
    correctionCount?: SortOrder
    outputData?: SortOrderInput | SortOrder
    issuesFound?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    _count?: PayrollCorrectionCountOrderByAggregateInput
    _avg?: PayrollCorrectionAvgOrderByAggregateInput
    _max?: PayrollCorrectionMaxOrderByAggregateInput
    _min?: PayrollCorrectionMinOrderByAggregateInput
    _sum?: PayrollCorrectionSumOrderByAggregateInput
  }

  export type PayrollCorrectionScalarWhereWithAggregatesInput = {
    AND?: PayrollCorrectionScalarWhereWithAggregatesInput | PayrollCorrectionScalarWhereWithAggregatesInput[]
    OR?: PayrollCorrectionScalarWhereWithAggregatesInput[]
    NOT?: PayrollCorrectionScalarWhereWithAggregatesInput | PayrollCorrectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollCorrection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PayrollCorrection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayrollCorrection"> | Date | string
    apiKeyId?: StringWithAggregatesFilter<"PayrollCorrection"> | string
    inputData?: JsonWithAggregatesFilter<"PayrollCorrection">
    employeeId?: StringNullableWithAggregatesFilter<"PayrollCorrection"> | string | null
    aiModel?: StringWithAggregatesFilter<"PayrollCorrection"> | string
    aiRequestId?: StringNullableWithAggregatesFilter<"PayrollCorrection"> | string | null
    aiTokensUsed?: IntNullableWithAggregatesFilter<"PayrollCorrection"> | number | null
    processingTime?: IntNullableWithAggregatesFilter<"PayrollCorrection"> | number | null
    correctionsFound?: BoolWithAggregatesFilter<"PayrollCorrection"> | boolean
    correctionCount?: IntWithAggregatesFilter<"PayrollCorrection"> | number
    outputData?: JsonNullableWithAggregatesFilter<"PayrollCorrection">
    issuesFound?: JsonNullableWithAggregatesFilter<"PayrollCorrection">
    status?: EnumCorrectionStatusWithAggregatesFilter<"PayrollCorrection"> | $Enums.CorrectionStatus
    errorMsg?: StringNullableWithAggregatesFilter<"PayrollCorrection"> | string | null
  }

  export type AutomationLogWhereInput = {
    AND?: AutomationLogWhereInput | AutomationLogWhereInput[]
    OR?: AutomationLogWhereInput[]
    NOT?: AutomationLogWhereInput | AutomationLogWhereInput[]
    id?: StringFilter<"AutomationLog"> | string
    createdAt?: DateTimeFilter<"AutomationLog"> | Date | string
    apiKeyId?: StringNullableFilter<"AutomationLog"> | string | null
    eventType?: EnumAutomationEventTypeFilter<"AutomationLog"> | $Enums.AutomationEventType
    eventData?: JsonFilter<"AutomationLog">
    endpoint?: StringFilter<"AutomationLog"> | string
    method?: StringFilter<"AutomationLog"> | string
    ipAddress?: StringFilter<"AutomationLog"> | string
    userAgent?: StringNullableFilter<"AutomationLog"> | string | null
    statusCode?: IntFilter<"AutomationLog"> | number
    responseTime?: IntNullableFilter<"AutomationLog"> | number | null
    success?: BoolFilter<"AutomationLog"> | boolean
    errorMsg?: StringNullableFilter<"AutomationLog"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }

  export type AutomationLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type AutomationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationLogWhereInput | AutomationLogWhereInput[]
    OR?: AutomationLogWhereInput[]
    NOT?: AutomationLogWhereInput | AutomationLogWhereInput[]
    createdAt?: DateTimeFilter<"AutomationLog"> | Date | string
    apiKeyId?: StringNullableFilter<"AutomationLog"> | string | null
    eventType?: EnumAutomationEventTypeFilter<"AutomationLog"> | $Enums.AutomationEventType
    eventData?: JsonFilter<"AutomationLog">
    endpoint?: StringFilter<"AutomationLog"> | string
    method?: StringFilter<"AutomationLog"> | string
    ipAddress?: StringFilter<"AutomationLog"> | string
    userAgent?: StringNullableFilter<"AutomationLog"> | string | null
    statusCode?: IntFilter<"AutomationLog"> | number
    responseTime?: IntNullableFilter<"AutomationLog"> | number | null
    success?: BoolFilter<"AutomationLog"> | boolean
    errorMsg?: StringNullableFilter<"AutomationLog"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }, "id">

  export type AutomationLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMsg?: SortOrderInput | SortOrder
    _count?: AutomationLogCountOrderByAggregateInput
    _avg?: AutomationLogAvgOrderByAggregateInput
    _max?: AutomationLogMaxOrderByAggregateInput
    _min?: AutomationLogMinOrderByAggregateInput
    _sum?: AutomationLogSumOrderByAggregateInput
  }

  export type AutomationLogScalarWhereWithAggregatesInput = {
    AND?: AutomationLogScalarWhereWithAggregatesInput | AutomationLogScalarWhereWithAggregatesInput[]
    OR?: AutomationLogScalarWhereWithAggregatesInput[]
    NOT?: AutomationLogScalarWhereWithAggregatesInput | AutomationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AutomationLog"> | Date | string
    apiKeyId?: StringNullableWithAggregatesFilter<"AutomationLog"> | string | null
    eventType?: EnumAutomationEventTypeWithAggregatesFilter<"AutomationLog"> | $Enums.AutomationEventType
    eventData?: JsonWithAggregatesFilter<"AutomationLog">
    endpoint?: StringWithAggregatesFilter<"AutomationLog"> | string
    method?: StringWithAggregatesFilter<"AutomationLog"> | string
    ipAddress?: StringWithAggregatesFilter<"AutomationLog"> | string
    userAgent?: StringNullableWithAggregatesFilter<"AutomationLog"> | string | null
    statusCode?: IntWithAggregatesFilter<"AutomationLog"> | number
    responseTime?: IntNullableWithAggregatesFilter<"AutomationLog"> | number | null
    success?: BoolWithAggregatesFilter<"AutomationLog"> | boolean
    errorMsg?: StringNullableWithAggregatesFilter<"AutomationLog"> | string | null
  }

  export type StripeCustomerWhereInput = {
    AND?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    OR?: StripeCustomerWhereInput[]
    NOT?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    id?: StringFilter<"StripeCustomer"> | string
    createdAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    stripeCustomerId?: StringFilter<"StripeCustomer"> | string
    stripeSubscriptionId?: StringNullableFilter<"StripeCustomer"> | string | null
    email?: StringFilter<"StripeCustomer"> | string
    companyName?: StringFilter<"StripeCustomer"> | string
    planId?: StringNullableFilter<"StripeCustomer"> | string | null
    planName?: StringNullableFilter<"StripeCustomer"> | string | null
    priceId?: StringNullableFilter<"StripeCustomer"> | string | null
    amount?: IntNullableFilter<"StripeCustomer"> | number | null
    currency?: StringFilter<"StripeCustomer"> | string
    interval?: StringNullableFilter<"StripeCustomer"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"StripeCustomer"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    apiKeyId?: StringNullableFilter<"StripeCustomer"> | string | null
  }

  export type StripeCustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    email?: SortOrder
    companyName?: SortOrder
    planId?: SortOrderInput | SortOrder
    planName?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrder
    interval?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
  }

  export type StripeCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    apiKeyId?: string
    AND?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    OR?: StripeCustomerWhereInput[]
    NOT?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    createdAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    email?: StringFilter<"StripeCustomer"> | string
    companyName?: StringFilter<"StripeCustomer"> | string
    planId?: StringNullableFilter<"StripeCustomer"> | string | null
    planName?: StringNullableFilter<"StripeCustomer"> | string | null
    priceId?: StringNullableFilter<"StripeCustomer"> | string | null
    amount?: IntNullableFilter<"StripeCustomer"> | number | null
    currency?: StringFilter<"StripeCustomer"> | string
    interval?: StringNullableFilter<"StripeCustomer"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"StripeCustomer"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"StripeCustomer"> | Date | string | null
  }, "id" | "stripeCustomerId" | "stripeSubscriptionId" | "apiKeyId">

  export type StripeCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    email?: SortOrder
    companyName?: SortOrder
    planId?: SortOrderInput | SortOrder
    planName?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrder
    interval?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    _count?: StripeCustomerCountOrderByAggregateInput
    _avg?: StripeCustomerAvgOrderByAggregateInput
    _max?: StripeCustomerMaxOrderByAggregateInput
    _min?: StripeCustomerMinOrderByAggregateInput
    _sum?: StripeCustomerSumOrderByAggregateInput
  }

  export type StripeCustomerScalarWhereWithAggregatesInput = {
    AND?: StripeCustomerScalarWhereWithAggregatesInput | StripeCustomerScalarWhereWithAggregatesInput[]
    OR?: StripeCustomerScalarWhereWithAggregatesInput[]
    NOT?: StripeCustomerScalarWhereWithAggregatesInput | StripeCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeCustomer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StripeCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StripeCustomer"> | Date | string
    stripeCustomerId?: StringWithAggregatesFilter<"StripeCustomer"> | string
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
    email?: StringWithAggregatesFilter<"StripeCustomer"> | string
    companyName?: StringWithAggregatesFilter<"StripeCustomer"> | string
    planId?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
    planName?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
    priceId?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
    amount?: IntNullableWithAggregatesFilter<"StripeCustomer"> | number | null
    currency?: StringWithAggregatesFilter<"StripeCustomer"> | string
    interval?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"StripeCustomer"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"StripeCustomer"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"StripeCustomer"> | Date | string | null
    cancelAt?: DateTimeNullableWithAggregatesFilter<"StripeCustomer"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"StripeCustomer"> | Date | string | null
    apiKeyId?: StringNullableWithAggregatesFilter<"StripeCustomer"> | string | null
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    fileId?: StringFilter<"FileUpload"> | string
    fileName?: StringFilter<"FileUpload"> | string
    fileUrl?: StringFilter<"FileUpload"> | string
    fileSize?: IntNullableFilter<"FileUpload"> | number | null
    customerId?: StringFilter<"FileUpload"> | string
    customerEmail?: StringFilter<"FileUpload"> | string
    companyName?: StringFilter<"FileUpload"> | string
    status?: EnumFileUploadStatusFilter<"FileUpload"> | $Enums.FileUploadStatus
    issuesFound?: IntFilter<"FileUpload"> | number
    correctionsMade?: IntFilter<"FileUpload"> | number
    recordsProcessed?: IntNullableFilter<"FileUpload"> | number | null
    processingTime?: IntNullableFilter<"FileUpload"> | number | null
    errorMsg?: StringNullableFilter<"FileUpload"> | string | null
    corrections?: JsonNullableFilter<"FileUpload">
    issues?: JsonNullableFilter<"FileUpload">
    apiKeyId?: StringNullableFilter<"FileUpload"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
    corrections?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId?: string
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    fileName?: StringFilter<"FileUpload"> | string
    fileUrl?: StringFilter<"FileUpload"> | string
    fileSize?: IntNullableFilter<"FileUpload"> | number | null
    customerId?: StringFilter<"FileUpload"> | string
    customerEmail?: StringFilter<"FileUpload"> | string
    companyName?: StringFilter<"FileUpload"> | string
    status?: EnumFileUploadStatusFilter<"FileUpload"> | $Enums.FileUploadStatus
    issuesFound?: IntFilter<"FileUpload"> | number
    correctionsMade?: IntFilter<"FileUpload"> | number
    recordsProcessed?: IntNullableFilter<"FileUpload"> | number | null
    processingTime?: IntNullableFilter<"FileUpload"> | number | null
    errorMsg?: StringNullableFilter<"FileUpload"> | string | null
    corrections?: JsonNullableFilter<"FileUpload">
    issues?: JsonNullableFilter<"FileUpload">
    apiKeyId?: StringNullableFilter<"FileUpload"> | string | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }, "id" | "fileId">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
    corrections?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _avg?: FileUploadAvgOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
    _sum?: FileUploadSumOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileUpload"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    fileId?: StringWithAggregatesFilter<"FileUpload"> | string
    fileName?: StringWithAggregatesFilter<"FileUpload"> | string
    fileUrl?: StringWithAggregatesFilter<"FileUpload"> | string
    fileSize?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    customerId?: StringWithAggregatesFilter<"FileUpload"> | string
    customerEmail?: StringWithAggregatesFilter<"FileUpload"> | string
    companyName?: StringWithAggregatesFilter<"FileUpload"> | string
    status?: EnumFileUploadStatusWithAggregatesFilter<"FileUpload"> | $Enums.FileUploadStatus
    issuesFound?: IntWithAggregatesFilter<"FileUpload"> | number
    correctionsMade?: IntWithAggregatesFilter<"FileUpload"> | number
    recordsProcessed?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    processingTime?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    errorMsg?: StringNullableWithAggregatesFilter<"FileUpload"> | string | null
    corrections?: JsonNullableWithAggregatesFilter<"FileUpload">
    issues?: JsonNullableWithAggregatesFilter<"FileUpload">
    apiKeyId?: StringNullableWithAggregatesFilter<"FileUpload"> | string | null
  }

  export type AITableSyncWhereInput = {
    AND?: AITableSyncWhereInput | AITableSyncWhereInput[]
    OR?: AITableSyncWhereInput[]
    NOT?: AITableSyncWhereInput | AITableSyncWhereInput[]
    id?: StringFilter<"AITableSync"> | string
    recordId?: StringFilter<"AITableSync"> | string
    datasheetId?: StringFilter<"AITableSync"> | string
    entityType?: StringFilter<"AITableSync"> | string
    entityId?: StringFilter<"AITableSync"> | string
    lastSyncedAt?: DateTimeFilter<"AITableSync"> | Date | string
    syncDirection?: StringFilter<"AITableSync"> | string
    syncStatus?: StringFilter<"AITableSync"> | string
    errorMessage?: StringNullableFilter<"AITableSync"> | string | null
    retryCount?: IntFilter<"AITableSync"> | number
    metadata?: JsonNullableFilter<"AITableSync">
    createdAt?: DateTimeFilter<"AITableSync"> | Date | string
    updatedAt?: DateTimeFilter<"AITableSync"> | Date | string
  }

  export type AITableSyncOrderByWithRelationInput = {
    id?: SortOrder
    recordId?: SortOrder
    datasheetId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    lastSyncedAt?: SortOrder
    syncDirection?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AITableSyncWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recordId_datasheetId?: AITableSyncRecordIdDatasheetIdCompoundUniqueInput
    AND?: AITableSyncWhereInput | AITableSyncWhereInput[]
    OR?: AITableSyncWhereInput[]
    NOT?: AITableSyncWhereInput | AITableSyncWhereInput[]
    recordId?: StringFilter<"AITableSync"> | string
    datasheetId?: StringFilter<"AITableSync"> | string
    entityType?: StringFilter<"AITableSync"> | string
    entityId?: StringFilter<"AITableSync"> | string
    lastSyncedAt?: DateTimeFilter<"AITableSync"> | Date | string
    syncDirection?: StringFilter<"AITableSync"> | string
    syncStatus?: StringFilter<"AITableSync"> | string
    errorMessage?: StringNullableFilter<"AITableSync"> | string | null
    retryCount?: IntFilter<"AITableSync"> | number
    metadata?: JsonNullableFilter<"AITableSync">
    createdAt?: DateTimeFilter<"AITableSync"> | Date | string
    updatedAt?: DateTimeFilter<"AITableSync"> | Date | string
  }, "id" | "recordId_datasheetId">

  export type AITableSyncOrderByWithAggregationInput = {
    id?: SortOrder
    recordId?: SortOrder
    datasheetId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    lastSyncedAt?: SortOrder
    syncDirection?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AITableSyncCountOrderByAggregateInput
    _avg?: AITableSyncAvgOrderByAggregateInput
    _max?: AITableSyncMaxOrderByAggregateInput
    _min?: AITableSyncMinOrderByAggregateInput
    _sum?: AITableSyncSumOrderByAggregateInput
  }

  export type AITableSyncScalarWhereWithAggregatesInput = {
    AND?: AITableSyncScalarWhereWithAggregatesInput | AITableSyncScalarWhereWithAggregatesInput[]
    OR?: AITableSyncScalarWhereWithAggregatesInput[]
    NOT?: AITableSyncScalarWhereWithAggregatesInput | AITableSyncScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AITableSync"> | string
    recordId?: StringWithAggregatesFilter<"AITableSync"> | string
    datasheetId?: StringWithAggregatesFilter<"AITableSync"> | string
    entityType?: StringWithAggregatesFilter<"AITableSync"> | string
    entityId?: StringWithAggregatesFilter<"AITableSync"> | string
    lastSyncedAt?: DateTimeWithAggregatesFilter<"AITableSync"> | Date | string
    syncDirection?: StringWithAggregatesFilter<"AITableSync"> | string
    syncStatus?: StringWithAggregatesFilter<"AITableSync"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"AITableSync"> | string | null
    retryCount?: IntWithAggregatesFilter<"AITableSync"> | number
    metadata?: JsonNullableWithAggregatesFilter<"AITableSync">
    createdAt?: DateTimeWithAggregatesFilter<"AITableSync"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AITableSync"> | Date | string
  }

  export type AuditRequestWhereInput = {
    AND?: AuditRequestWhereInput | AuditRequestWhereInput[]
    OR?: AuditRequestWhereInput[]
    NOT?: AuditRequestWhereInput | AuditRequestWhereInput[]
    id?: StringFilter<"AuditRequest"> | string
    createdAt?: DateTimeFilter<"AuditRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AuditRequest"> | Date | string
    companyName?: StringFilter<"AuditRequest"> | string
    contactName?: StringFilter<"AuditRequest"> | string
    email?: StringFilter<"AuditRequest"> | string
    status?: StringFilter<"AuditRequest"> | string
  }

  export type AuditRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type AuditRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditRequestWhereInput | AuditRequestWhereInput[]
    OR?: AuditRequestWhereInput[]
    NOT?: AuditRequestWhereInput | AuditRequestWhereInput[]
    createdAt?: DateTimeFilter<"AuditRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AuditRequest"> | Date | string
    companyName?: StringFilter<"AuditRequest"> | string
    contactName?: StringFilter<"AuditRequest"> | string
    email?: StringFilter<"AuditRequest"> | string
    status?: StringFilter<"AuditRequest"> | string
  }, "id">

  export type AuditRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    _count?: AuditRequestCountOrderByAggregateInput
    _max?: AuditRequestMaxOrderByAggregateInput
    _min?: AuditRequestMinOrderByAggregateInput
  }

  export type AuditRequestScalarWhereWithAggregatesInput = {
    AND?: AuditRequestScalarWhereWithAggregatesInput | AuditRequestScalarWhereWithAggregatesInput[]
    OR?: AuditRequestScalarWhereWithAggregatesInput[]
    NOT?: AuditRequestScalarWhereWithAggregatesInput | AuditRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuditRequest"> | Date | string
    companyName?: StringWithAggregatesFilter<"AuditRequest"> | string
    contactName?: StringWithAggregatesFilter<"AuditRequest"> | string
    email?: StringWithAggregatesFilter<"AuditRequest"> | string
    status?: StringWithAggregatesFilter<"AuditRequest"> | string
  }

  export type ConferenceRoomCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    auditLog?: AuditLogCreateNestedManyWithoutConferenceRoomInput
    files?: ConferenceRoomFileCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    auditLog?: AuditLogUncheckedCreateNestedManyWithoutConferenceRoomInput
    files?: ConferenceRoomFileUncheckedCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auditLog?: AuditLogUpdateManyWithoutConferenceRoomNestedInput
    files?: ConferenceRoomFileUpdateManyWithoutConferenceRoomNestedInput
  }

  export type ConferenceRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auditLog?: AuditLogUncheckedUpdateManyWithoutConferenceRoomNestedInput
    files?: ConferenceRoomFileUncheckedUpdateManyWithoutConferenceRoomNestedInput
  }

  export type ConferenceRoomCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
  }

  export type ConferenceRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConferenceRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConferenceRoomFileCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
    conferenceRoom: ConferenceRoomCreateNestedOneWithoutFilesInput
  }

  export type ConferenceRoomFileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
    conferenceRoomId: string
  }

  export type ConferenceRoomFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
    conferenceRoom?: ConferenceRoomUpdateOneRequiredWithoutFilesNestedInput
  }

  export type ConferenceRoomFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
    conferenceRoomId?: StringFieldUpdateOperationsInput | string
  }

  export type ConferenceRoomFileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
    conferenceRoomId: string
  }

  export type ConferenceRoomFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConferenceRoomFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
    conferenceRoomId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
    conferenceRoom: ConferenceRoomCreateNestedOneWithoutAuditLogInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
    conferenceRoomId: string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    conferenceRoom?: ConferenceRoomUpdateOneRequiredWithoutAuditLogNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    conferenceRoomId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
    conferenceRoomId: string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    conferenceRoomId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionCreateNestedManyWithoutApiKeyInput
    automationLogs?: AutomationLogCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedCreateNestedManyWithoutApiKeyInput
    automationLogs?: AutomationLogUncheckedCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUpdateManyWithoutApiKeyNestedInput
    automationLogs?: AutomationLogUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedUpdateManyWithoutApiKeyNestedInput
    automationLogs?: AutomationLogUncheckedUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
  }

  export type PayrollCorrectionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
    apiKey: ApiKeyCreateNestedOneWithoutCorrectionsInput
  }

  export type PayrollCorrectionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyId: string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
  }

  export type PayrollCorrectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: ApiKeyUpdateOneRequiredWithoutCorrectionsNestedInput
  }

  export type PayrollCorrectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayrollCorrectionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyId: string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
  }

  export type PayrollCorrectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayrollCorrectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogCreateInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
    apiKey?: ApiKeyCreateNestedOneWithoutAutomationLogsInput
  }

  export type AutomationLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    apiKeyId?: string | null
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AutomationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: ApiKeyUpdateOneWithoutAutomationLogsNestedInput
  }

  export type AutomationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    apiKeyId?: string | null
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AutomationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StripeCustomerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    email: string
    companyName: string
    planId?: string | null
    planName?: string | null
    priceId?: string | null
    amount?: number | null
    currency?: string
    interval?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAt?: Date | string | null
    canceledAt?: Date | string | null
    apiKeyId?: string | null
  }

  export type StripeCustomerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    email: string
    companyName: string
    planId?: string | null
    planName?: string | null
    priceId?: string | null
    amount?: number | null
    currency?: string
    interval?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAt?: Date | string | null
    canceledAt?: Date | string | null
    apiKeyId?: string | null
  }

  export type StripeCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StripeCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StripeCustomerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    email: string
    companyName: string
    planId?: string | null
    planName?: string | null
    priceId?: string | null
    amount?: number | null
    currency?: string
    interval?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAt?: Date | string | null
    canceledAt?: Date | string | null
    apiKeyId?: string | null
  }

  export type StripeCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StripeCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUploadCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKey?: ApiKeyCreateNestedOneWithoutFileUploadsInput
  }

  export type FileUploadUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKeyId?: string | null
  }

  export type FileUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKey?: ApiKeyUpdateOneWithoutFileUploadsNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUploadCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKeyId?: string | null
  }

  export type FileUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AITableSyncCreateInput = {
    id?: string
    recordId: string
    datasheetId: string
    entityType: string
    entityId: string
    lastSyncedAt: Date | string
    syncDirection: string
    syncStatus: string
    errorMessage?: string | null
    retryCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AITableSyncUncheckedCreateInput = {
    id?: string
    recordId: string
    datasheetId: string
    entityType: string
    entityId: string
    lastSyncedAt: Date | string
    syncDirection: string
    syncStatus: string
    errorMessage?: string | null
    retryCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AITableSyncUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    datasheetId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncDirection?: StringFieldUpdateOperationsInput | string
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITableSyncUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    datasheetId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncDirection?: StringFieldUpdateOperationsInput | string
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITableSyncCreateManyInput = {
    id?: string
    recordId: string
    datasheetId: string
    entityType: string
    entityId: string
    lastSyncedAt: Date | string
    syncDirection: string
    syncStatus: string
    errorMessage?: string | null
    retryCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AITableSyncUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    datasheetId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncDirection?: StringFieldUpdateOperationsInput | string
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITableSyncUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    datasheetId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncDirection?: StringFieldUpdateOperationsInput | string
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    contactName: string
    email: string
    status?: string
  }

  export type AuditRequestUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    contactName: string
    email: string
    status?: string
  }

  export type AuditRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AuditRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AuditRequestCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    contactName: string
    email: string
    status?: string
  }

  export type AuditRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AuditRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumConferenceRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConferenceRoomStatus | EnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConferenceRoomStatusFilter<$PrismaModel> | $Enums.ConferenceRoomStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type ConferenceRoomFileListRelationFilter = {
    every?: ConferenceRoomFileWhereInput
    some?: ConferenceRoomFileWhereInput
    none?: ConferenceRoomFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConferenceRoomFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConferenceRoomCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    cfoName?: SortOrder
    cfoEmail?: SortOrder
    industry?: SortOrder
    annualRevenue?: SortOrder
    annualBudget?: SortOrder
    accessCode?: SortOrder
    accessCodeHash?: SortOrder
    codeGeneratedAt?: SortOrder
    codeUsed?: SortOrder
    firstAccessedAt?: SortOrder
    lastAccessedAt?: SortOrder
    accessCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    closedAt?: SortOrder
    closureReason?: SortOrder
    encryptionKey?: SortOrder
    ipWhitelist?: SortOrder
    mfaEnabled?: SortOrder
    mfaPhone?: SortOrder
    dealValue?: SortOrder
    dealStage?: SortOrder
    salesRep?: SortOrder
    notes?: SortOrder
  }

  export type ConferenceRoomAvgOrderByAggregateInput = {
    annualRevenue?: SortOrder
    annualBudget?: SortOrder
    accessCount?: SortOrder
    dealValue?: SortOrder
  }

  export type ConferenceRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    cfoName?: SortOrder
    cfoEmail?: SortOrder
    industry?: SortOrder
    annualRevenue?: SortOrder
    annualBudget?: SortOrder
    accessCode?: SortOrder
    accessCodeHash?: SortOrder
    codeGeneratedAt?: SortOrder
    codeUsed?: SortOrder
    firstAccessedAt?: SortOrder
    lastAccessedAt?: SortOrder
    accessCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    closedAt?: SortOrder
    closureReason?: SortOrder
    encryptionKey?: SortOrder
    mfaEnabled?: SortOrder
    mfaPhone?: SortOrder
    dealValue?: SortOrder
    dealStage?: SortOrder
    salesRep?: SortOrder
    notes?: SortOrder
  }

  export type ConferenceRoomMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    cfoName?: SortOrder
    cfoEmail?: SortOrder
    industry?: SortOrder
    annualRevenue?: SortOrder
    annualBudget?: SortOrder
    accessCode?: SortOrder
    accessCodeHash?: SortOrder
    codeGeneratedAt?: SortOrder
    codeUsed?: SortOrder
    firstAccessedAt?: SortOrder
    lastAccessedAt?: SortOrder
    accessCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    closedAt?: SortOrder
    closureReason?: SortOrder
    encryptionKey?: SortOrder
    mfaEnabled?: SortOrder
    mfaPhone?: SortOrder
    dealValue?: SortOrder
    dealStage?: SortOrder
    salesRep?: SortOrder
    notes?: SortOrder
  }

  export type ConferenceRoomSumOrderByAggregateInput = {
    annualRevenue?: SortOrder
    annualBudget?: SortOrder
    accessCount?: SortOrder
    dealValue?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumConferenceRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConferenceRoomStatus | EnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConferenceRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConferenceRoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConferenceRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumConferenceRoomStatusFilter<$PrismaModel>
  }

  export type EnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory
  }

  export type ConferenceRoomScalarRelationFilter = {
    is?: ConferenceRoomWhereInput
    isNot?: ConferenceRoomWhereInput
  }

  export type ConferenceRoomFileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    originalName?: SortOrder
    encryptedPath?: SortOrder
    encryptionIV?: SortOrder
    checksum?: SortOrder
    fileCategory?: SortOrder
    sensitive?: SortOrder
    uploadedBy?: SortOrder
    uploadedFrom?: SortOrder
    userAgent?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    auditIncluded?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type ConferenceRoomFileAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ConferenceRoomFileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    originalName?: SortOrder
    encryptedPath?: SortOrder
    encryptionIV?: SortOrder
    checksum?: SortOrder
    fileCategory?: SortOrder
    sensitive?: SortOrder
    uploadedBy?: SortOrder
    uploadedFrom?: SortOrder
    userAgent?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    auditIncluded?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type ConferenceRoomFileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    originalName?: SortOrder
    encryptedPath?: SortOrder
    encryptionIV?: SortOrder
    checksum?: SortOrder
    fileCategory?: SortOrder
    sensitive?: SortOrder
    uploadedBy?: SortOrder
    uploadedFrom?: SortOrder
    userAgent?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    auditIncluded?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type ConferenceRoomFileSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileCategoryFilter<$PrismaModel>
    _max?: NestedEnumFileCategoryFilter<$PrismaModel>
  }

  export type EnumAuditEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeFilter<$PrismaModel> | $Enums.AuditEventType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    actorEmail?: SortOrder
    actorIP?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    actorEmail?: SortOrder
    actorIP?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    actorEmail?: SortOrder
    actorIP?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
    conferenceRoomId?: SortOrder
  }

  export type EnumAuditEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEventTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type EnumBillingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingStatusFilter<$PrismaModel> | $Enums.BillingStatus
  }

  export type PayrollCorrectionListRelationFilter = {
    every?: PayrollCorrectionWhereInput
    some?: PayrollCorrectionWhereInput
    none?: PayrollCorrectionWhereInput
  }

  export type AutomationLogListRelationFilter = {
    every?: AutomationLogWhereInput
    some?: AutomationLogWhereInput
    none?: AutomationLogWhereInput
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type PayrollCorrectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    keyHash?: SortOrder
    encryptedKey?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    lastResetAt?: SortOrder
    totalRequests?: SortOrder
    lastUsedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    billingStatus?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    totalRequests?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    keyHash?: SortOrder
    encryptedKey?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    lastResetAt?: SortOrder
    totalRequests?: SortOrder
    lastUsedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    billingStatus?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    keyHash?: SortOrder
    encryptedKey?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    lastResetAt?: SortOrder
    totalRequests?: SortOrder
    lastUsedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    billingStatus?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    requestsPerDay?: SortOrder
    requestsToday?: SortOrder
    totalRequests?: SortOrder
  }

  export type EnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type EnumBillingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumCorrectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CorrectionStatus | EnumCorrectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCorrectionStatusFilter<$PrismaModel> | $Enums.CorrectionStatus
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type PayrollCorrectionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeyId?: SortOrder
    inputData?: SortOrder
    employeeId?: SortOrder
    aiModel?: SortOrder
    aiRequestId?: SortOrder
    aiTokensUsed?: SortOrder
    processingTime?: SortOrder
    correctionsFound?: SortOrder
    correctionCount?: SortOrder
    outputData?: SortOrder
    issuesFound?: SortOrder
    status?: SortOrder
    errorMsg?: SortOrder
  }

  export type PayrollCorrectionAvgOrderByAggregateInput = {
    aiTokensUsed?: SortOrder
    processingTime?: SortOrder
    correctionCount?: SortOrder
  }

  export type PayrollCorrectionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeyId?: SortOrder
    employeeId?: SortOrder
    aiModel?: SortOrder
    aiRequestId?: SortOrder
    aiTokensUsed?: SortOrder
    processingTime?: SortOrder
    correctionsFound?: SortOrder
    correctionCount?: SortOrder
    status?: SortOrder
    errorMsg?: SortOrder
  }

  export type PayrollCorrectionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKeyId?: SortOrder
    employeeId?: SortOrder
    aiModel?: SortOrder
    aiRequestId?: SortOrder
    aiTokensUsed?: SortOrder
    processingTime?: SortOrder
    correctionsFound?: SortOrder
    correctionCount?: SortOrder
    status?: SortOrder
    errorMsg?: SortOrder
  }

  export type PayrollCorrectionSumOrderByAggregateInput = {
    aiTokensUsed?: SortOrder
    processingTime?: SortOrder
    correctionCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumCorrectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CorrectionStatus | EnumCorrectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCorrectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CorrectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCorrectionStatusFilter<$PrismaModel>
    _max?: NestedEnumCorrectionStatusFilter<$PrismaModel>
  }

  export type EnumAutomationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationEventType | EnumAutomationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationEventTypeFilter<$PrismaModel> | $Enums.AutomationEventType
  }

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
  }

  export type AutomationLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    apiKeyId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
  }

  export type AutomationLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type AutomationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    apiKeyId?: SortOrder
    eventType?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
  }

  export type AutomationLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    apiKeyId?: SortOrder
    eventType?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    success?: SortOrder
    errorMsg?: SortOrder
  }

  export type AutomationLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type EnumAutomationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationEventType | EnumAutomationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationEventTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type StripeCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    planId?: SortOrder
    planName?: SortOrder
    priceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    subscriptionStatus?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAt?: SortOrder
    canceledAt?: SortOrder
    apiKeyId?: SortOrder
  }

  export type StripeCustomerAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StripeCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    planId?: SortOrder
    planName?: SortOrder
    priceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    subscriptionStatus?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAt?: SortOrder
    canceledAt?: SortOrder
    apiKeyId?: SortOrder
  }

  export type StripeCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    planId?: SortOrder
    planName?: SortOrder
    priceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    subscriptionStatus?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAt?: SortOrder
    canceledAt?: SortOrder
    apiKeyId?: SortOrder
  }

  export type StripeCustomerSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumFileUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileUploadStatus | EnumFileUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileUploadStatusFilter<$PrismaModel> | $Enums.FileUploadStatus
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrder
    processingTime?: SortOrder
    errorMsg?: SortOrder
    corrections?: SortOrder
    issues?: SortOrder
    apiKeyId?: SortOrder
  }

  export type FileUploadAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrder
    processingTime?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrder
    processingTime?: SortOrder
    errorMsg?: SortOrder
    apiKeyId?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    customerId?: SortOrder
    customerEmail?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrder
    processingTime?: SortOrder
    errorMsg?: SortOrder
    apiKeyId?: SortOrder
  }

  export type FileUploadSumOrderByAggregateInput = {
    fileSize?: SortOrder
    issuesFound?: SortOrder
    correctionsMade?: SortOrder
    recordsProcessed?: SortOrder
    processingTime?: SortOrder
  }

  export type EnumFileUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileUploadStatus | EnumFileUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileUploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumFileUploadStatusFilter<$PrismaModel>
  }

  export type AITableSyncRecordIdDatasheetIdCompoundUniqueInput = {
    recordId: string
    datasheetId: string
  }

  export type AITableSyncCountOrderByAggregateInput = {
    id?: SortOrder
    recordId?: SortOrder
    datasheetId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    lastSyncedAt?: SortOrder
    syncDirection?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AITableSyncAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type AITableSyncMaxOrderByAggregateInput = {
    id?: SortOrder
    recordId?: SortOrder
    datasheetId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    lastSyncedAt?: SortOrder
    syncDirection?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AITableSyncMinOrderByAggregateInput = {
    id?: SortOrder
    recordId?: SortOrder
    datasheetId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    lastSyncedAt?: SortOrder
    syncDirection?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AITableSyncSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type AuditRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type AuditRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type AuditRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type ConferenceRoomCreateipWhitelistInput = {
    set: string[]
  }

  export type AuditLogCreateNestedManyWithoutConferenceRoomInput = {
    create?: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput> | AuditLogCreateWithoutConferenceRoomInput[] | AuditLogUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutConferenceRoomInput | AuditLogCreateOrConnectWithoutConferenceRoomInput[]
    createMany?: AuditLogCreateManyConferenceRoomInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ConferenceRoomFileCreateNestedManyWithoutConferenceRoomInput = {
    create?: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput> | ConferenceRoomFileCreateWithoutConferenceRoomInput[] | ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput | ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput[]
    createMany?: ConferenceRoomFileCreateManyConferenceRoomInputEnvelope
    connect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutConferenceRoomInput = {
    create?: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput> | AuditLogCreateWithoutConferenceRoomInput[] | AuditLogUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutConferenceRoomInput | AuditLogCreateOrConnectWithoutConferenceRoomInput[]
    createMany?: AuditLogCreateManyConferenceRoomInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ConferenceRoomFileUncheckedCreateNestedManyWithoutConferenceRoomInput = {
    create?: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput> | ConferenceRoomFileCreateWithoutConferenceRoomInput[] | ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput | ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput[]
    createMany?: ConferenceRoomFileCreateManyConferenceRoomInputEnvelope
    connect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumConferenceRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConferenceRoomStatus
  }

  export type ConferenceRoomUpdateipWhitelistInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AuditLogUpdateManyWithoutConferenceRoomNestedInput = {
    create?: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput> | AuditLogCreateWithoutConferenceRoomInput[] | AuditLogUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutConferenceRoomInput | AuditLogCreateOrConnectWithoutConferenceRoomInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutConferenceRoomInput | AuditLogUpsertWithWhereUniqueWithoutConferenceRoomInput[]
    createMany?: AuditLogCreateManyConferenceRoomInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutConferenceRoomInput | AuditLogUpdateWithWhereUniqueWithoutConferenceRoomInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutConferenceRoomInput | AuditLogUpdateManyWithWhereWithoutConferenceRoomInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ConferenceRoomFileUpdateManyWithoutConferenceRoomNestedInput = {
    create?: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput> | ConferenceRoomFileCreateWithoutConferenceRoomInput[] | ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput | ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput[]
    upsert?: ConferenceRoomFileUpsertWithWhereUniqueWithoutConferenceRoomInput | ConferenceRoomFileUpsertWithWhereUniqueWithoutConferenceRoomInput[]
    createMany?: ConferenceRoomFileCreateManyConferenceRoomInputEnvelope
    set?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    disconnect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    delete?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    connect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    update?: ConferenceRoomFileUpdateWithWhereUniqueWithoutConferenceRoomInput | ConferenceRoomFileUpdateWithWhereUniqueWithoutConferenceRoomInput[]
    updateMany?: ConferenceRoomFileUpdateManyWithWhereWithoutConferenceRoomInput | ConferenceRoomFileUpdateManyWithWhereWithoutConferenceRoomInput[]
    deleteMany?: ConferenceRoomFileScalarWhereInput | ConferenceRoomFileScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutConferenceRoomNestedInput = {
    create?: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput> | AuditLogCreateWithoutConferenceRoomInput[] | AuditLogUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutConferenceRoomInput | AuditLogCreateOrConnectWithoutConferenceRoomInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutConferenceRoomInput | AuditLogUpsertWithWhereUniqueWithoutConferenceRoomInput[]
    createMany?: AuditLogCreateManyConferenceRoomInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutConferenceRoomInput | AuditLogUpdateWithWhereUniqueWithoutConferenceRoomInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutConferenceRoomInput | AuditLogUpdateManyWithWhereWithoutConferenceRoomInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ConferenceRoomFileUncheckedUpdateManyWithoutConferenceRoomNestedInput = {
    create?: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput> | ConferenceRoomFileCreateWithoutConferenceRoomInput[] | ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput[]
    connectOrCreate?: ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput | ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput[]
    upsert?: ConferenceRoomFileUpsertWithWhereUniqueWithoutConferenceRoomInput | ConferenceRoomFileUpsertWithWhereUniqueWithoutConferenceRoomInput[]
    createMany?: ConferenceRoomFileCreateManyConferenceRoomInputEnvelope
    set?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    disconnect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    delete?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    connect?: ConferenceRoomFileWhereUniqueInput | ConferenceRoomFileWhereUniqueInput[]
    update?: ConferenceRoomFileUpdateWithWhereUniqueWithoutConferenceRoomInput | ConferenceRoomFileUpdateWithWhereUniqueWithoutConferenceRoomInput[]
    updateMany?: ConferenceRoomFileUpdateManyWithWhereWithoutConferenceRoomInput | ConferenceRoomFileUpdateManyWithWhereWithoutConferenceRoomInput[]
    deleteMany?: ConferenceRoomFileScalarWhereInput | ConferenceRoomFileScalarWhereInput[]
  }

  export type ConferenceRoomCreateNestedOneWithoutFilesInput = {
    create?: XOR<ConferenceRoomCreateWithoutFilesInput, ConferenceRoomUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ConferenceRoomCreateOrConnectWithoutFilesInput
    connect?: ConferenceRoomWhereUniqueInput
  }

  export type EnumFileCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FileCategory
  }

  export type ConferenceRoomUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ConferenceRoomCreateWithoutFilesInput, ConferenceRoomUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ConferenceRoomCreateOrConnectWithoutFilesInput
    upsert?: ConferenceRoomUpsertWithoutFilesInput
    connect?: ConferenceRoomWhereUniqueInput
    update?: XOR<XOR<ConferenceRoomUpdateToOneWithWhereWithoutFilesInput, ConferenceRoomUpdateWithoutFilesInput>, ConferenceRoomUncheckedUpdateWithoutFilesInput>
  }

  export type ConferenceRoomCreateNestedOneWithoutAuditLogInput = {
    create?: XOR<ConferenceRoomCreateWithoutAuditLogInput, ConferenceRoomUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: ConferenceRoomCreateOrConnectWithoutAuditLogInput
    connect?: ConferenceRoomWhereUniqueInput
  }

  export type EnumAuditEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditEventType
  }

  export type ConferenceRoomUpdateOneRequiredWithoutAuditLogNestedInput = {
    create?: XOR<ConferenceRoomCreateWithoutAuditLogInput, ConferenceRoomUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: ConferenceRoomCreateOrConnectWithoutAuditLogInput
    upsert?: ConferenceRoomUpsertWithoutAuditLogInput
    connect?: ConferenceRoomWhereUniqueInput
    update?: XOR<XOR<ConferenceRoomUpdateToOneWithWhereWithoutAuditLogInput, ConferenceRoomUpdateWithoutAuditLogInput>, ConferenceRoomUncheckedUpdateWithoutAuditLogInput>
  }

  export type PayrollCorrectionCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput> | PayrollCorrectionCreateWithoutApiKeyInput[] | PayrollCorrectionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: PayrollCorrectionCreateOrConnectWithoutApiKeyInput | PayrollCorrectionCreateOrConnectWithoutApiKeyInput[]
    createMany?: PayrollCorrectionCreateManyApiKeyInputEnvelope
    connect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
  }

  export type AutomationLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput> | AutomationLogCreateWithoutApiKeyInput[] | AutomationLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AutomationLogCreateOrConnectWithoutApiKeyInput | AutomationLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: AutomationLogCreateManyApiKeyInputEnvelope
    connect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput> | FileUploadCreateWithoutApiKeyInput[] | FileUploadUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutApiKeyInput | FileUploadCreateOrConnectWithoutApiKeyInput[]
    createMany?: FileUploadCreateManyApiKeyInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type PayrollCorrectionUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput> | PayrollCorrectionCreateWithoutApiKeyInput[] | PayrollCorrectionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: PayrollCorrectionCreateOrConnectWithoutApiKeyInput | PayrollCorrectionCreateOrConnectWithoutApiKeyInput[]
    createMany?: PayrollCorrectionCreateManyApiKeyInputEnvelope
    connect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
  }

  export type AutomationLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput> | AutomationLogCreateWithoutApiKeyInput[] | AutomationLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AutomationLogCreateOrConnectWithoutApiKeyInput | AutomationLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: AutomationLogCreateManyApiKeyInputEnvelope
    connect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput> | FileUploadCreateWithoutApiKeyInput[] | FileUploadUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutApiKeyInput | FileUploadCreateOrConnectWithoutApiKeyInput[]
    createMany?: FileUploadCreateManyApiKeyInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type EnumApiKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApiKeyStatus
  }

  export type EnumBillingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillingStatus
  }

  export type PayrollCorrectionUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput> | PayrollCorrectionCreateWithoutApiKeyInput[] | PayrollCorrectionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: PayrollCorrectionCreateOrConnectWithoutApiKeyInput | PayrollCorrectionCreateOrConnectWithoutApiKeyInput[]
    upsert?: PayrollCorrectionUpsertWithWhereUniqueWithoutApiKeyInput | PayrollCorrectionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: PayrollCorrectionCreateManyApiKeyInputEnvelope
    set?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    disconnect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    delete?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    connect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    update?: PayrollCorrectionUpdateWithWhereUniqueWithoutApiKeyInput | PayrollCorrectionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: PayrollCorrectionUpdateManyWithWhereWithoutApiKeyInput | PayrollCorrectionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: PayrollCorrectionScalarWhereInput | PayrollCorrectionScalarWhereInput[]
  }

  export type AutomationLogUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput> | AutomationLogCreateWithoutApiKeyInput[] | AutomationLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AutomationLogCreateOrConnectWithoutApiKeyInput | AutomationLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: AutomationLogUpsertWithWhereUniqueWithoutApiKeyInput | AutomationLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: AutomationLogCreateManyApiKeyInputEnvelope
    set?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    disconnect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    delete?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    connect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    update?: AutomationLogUpdateWithWhereUniqueWithoutApiKeyInput | AutomationLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: AutomationLogUpdateManyWithWhereWithoutApiKeyInput | AutomationLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: AutomationLogScalarWhereInput | AutomationLogScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput> | FileUploadCreateWithoutApiKeyInput[] | FileUploadUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutApiKeyInput | FileUploadCreateOrConnectWithoutApiKeyInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutApiKeyInput | FileUploadUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: FileUploadCreateManyApiKeyInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutApiKeyInput | FileUploadUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutApiKeyInput | FileUploadUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type PayrollCorrectionUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput> | PayrollCorrectionCreateWithoutApiKeyInput[] | PayrollCorrectionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: PayrollCorrectionCreateOrConnectWithoutApiKeyInput | PayrollCorrectionCreateOrConnectWithoutApiKeyInput[]
    upsert?: PayrollCorrectionUpsertWithWhereUniqueWithoutApiKeyInput | PayrollCorrectionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: PayrollCorrectionCreateManyApiKeyInputEnvelope
    set?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    disconnect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    delete?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    connect?: PayrollCorrectionWhereUniqueInput | PayrollCorrectionWhereUniqueInput[]
    update?: PayrollCorrectionUpdateWithWhereUniqueWithoutApiKeyInput | PayrollCorrectionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: PayrollCorrectionUpdateManyWithWhereWithoutApiKeyInput | PayrollCorrectionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: PayrollCorrectionScalarWhereInput | PayrollCorrectionScalarWhereInput[]
  }

  export type AutomationLogUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput> | AutomationLogCreateWithoutApiKeyInput[] | AutomationLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AutomationLogCreateOrConnectWithoutApiKeyInput | AutomationLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: AutomationLogUpsertWithWhereUniqueWithoutApiKeyInput | AutomationLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: AutomationLogCreateManyApiKeyInputEnvelope
    set?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    disconnect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    delete?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    connect?: AutomationLogWhereUniqueInput | AutomationLogWhereUniqueInput[]
    update?: AutomationLogUpdateWithWhereUniqueWithoutApiKeyInput | AutomationLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: AutomationLogUpdateManyWithWhereWithoutApiKeyInput | AutomationLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: AutomationLogScalarWhereInput | AutomationLogScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput> | FileUploadCreateWithoutApiKeyInput[] | FileUploadUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutApiKeyInput | FileUploadCreateOrConnectWithoutApiKeyInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutApiKeyInput | FileUploadUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: FileUploadCreateManyApiKeyInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutApiKeyInput | FileUploadUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutApiKeyInput | FileUploadUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutCorrectionsInput = {
    create?: XOR<ApiKeyCreateWithoutCorrectionsInput, ApiKeyUncheckedCreateWithoutCorrectionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCorrectionsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCorrectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CorrectionStatus
  }

  export type ApiKeyUpdateOneRequiredWithoutCorrectionsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutCorrectionsInput, ApiKeyUncheckedCreateWithoutCorrectionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCorrectionsInput
    upsert?: ApiKeyUpsertWithoutCorrectionsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutCorrectionsInput, ApiKeyUpdateWithoutCorrectionsInput>, ApiKeyUncheckedUpdateWithoutCorrectionsInput>
  }

  export type ApiKeyCreateNestedOneWithoutAutomationLogsInput = {
    create?: XOR<ApiKeyCreateWithoutAutomationLogsInput, ApiKeyUncheckedCreateWithoutAutomationLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAutomationLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type EnumAutomationEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.AutomationEventType
  }

  export type ApiKeyUpdateOneWithoutAutomationLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutAutomationLogsInput, ApiKeyUncheckedCreateWithoutAutomationLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAutomationLogsInput
    upsert?: ApiKeyUpsertWithoutAutomationLogsInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutAutomationLogsInput, ApiKeyUpdateWithoutAutomationLogsInput>, ApiKeyUncheckedUpdateWithoutAutomationLogsInput>
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type ApiKeyCreateNestedOneWithoutFileUploadsInput = {
    create?: XOR<ApiKeyCreateWithoutFileUploadsInput, ApiKeyUncheckedCreateWithoutFileUploadsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutFileUploadsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type EnumFileUploadStatusFieldUpdateOperationsInput = {
    set?: $Enums.FileUploadStatus
  }

  export type ApiKeyUpdateOneWithoutFileUploadsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutFileUploadsInput, ApiKeyUncheckedCreateWithoutFileUploadsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutFileUploadsInput
    upsert?: ApiKeyUpsertWithoutFileUploadsInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutFileUploadsInput, ApiKeyUpdateWithoutFileUploadsInput>, ApiKeyUncheckedUpdateWithoutFileUploadsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumConferenceRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConferenceRoomStatus | EnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConferenceRoomStatusFilter<$PrismaModel> | $Enums.ConferenceRoomStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumConferenceRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConferenceRoomStatus | EnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConferenceRoomStatus[] | ListEnumConferenceRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConferenceRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConferenceRoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConferenceRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumConferenceRoomStatusFilter<$PrismaModel>
  }

  export type NestedEnumFileCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryFilter<$PrismaModel> | $Enums.FileCategory
  }

  export type NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileCategory | EnumFileCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileCategory[] | ListEnumFileCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFileCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FileCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileCategoryFilter<$PrismaModel>
    _max?: NestedEnumFileCategoryFilter<$PrismaModel>
  }

  export type NestedEnumAuditEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeFilter<$PrismaModel> | $Enums.AuditEventType
  }

  export type NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type NestedEnumBillingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingStatusFilter<$PrismaModel> | $Enums.BillingStatus
  }

  export type NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingStatus | EnumBillingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingStatus[] | ListEnumBillingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingStatusFilter<$PrismaModel>
  }

  export type NestedEnumCorrectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CorrectionStatus | EnumCorrectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCorrectionStatusFilter<$PrismaModel> | $Enums.CorrectionStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCorrectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CorrectionStatus | EnumCorrectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CorrectionStatus[] | ListEnumCorrectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCorrectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CorrectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCorrectionStatusFilter<$PrismaModel>
    _max?: NestedEnumCorrectionStatusFilter<$PrismaModel>
  }

  export type NestedEnumAutomationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationEventType | EnumAutomationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationEventTypeFilter<$PrismaModel> | $Enums.AutomationEventType
  }

  export type NestedEnumAutomationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationEventType | EnumAutomationEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationEventType[] | ListEnumAutomationEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumFileUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileUploadStatus | EnumFileUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileUploadStatusFilter<$PrismaModel> | $Enums.FileUploadStatus
  }

  export type NestedEnumFileUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileUploadStatus | EnumFileUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileUploadStatus[] | ListEnumFileUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileUploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumFileUploadStatusFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AuditLogUncheckedCreateWithoutConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AuditLogCreateOrConnectWithoutConferenceRoomInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput>
  }

  export type AuditLogCreateManyConferenceRoomInputEnvelope = {
    data: AuditLogCreateManyConferenceRoomInput | AuditLogCreateManyConferenceRoomInput[]
    skipDuplicates?: boolean
  }

  export type ConferenceRoomFileCreateWithoutConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
  }

  export type ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
  }

  export type ConferenceRoomFileCreateOrConnectWithoutConferenceRoomInput = {
    where: ConferenceRoomFileWhereUniqueInput
    create: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput>
  }

  export type ConferenceRoomFileCreateManyConferenceRoomInputEnvelope = {
    data: ConferenceRoomFileCreateManyConferenceRoomInput | ConferenceRoomFileCreateManyConferenceRoomInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutConferenceRoomInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutConferenceRoomInput, AuditLogUncheckedUpdateWithoutConferenceRoomInput>
    create: XOR<AuditLogCreateWithoutConferenceRoomInput, AuditLogUncheckedCreateWithoutConferenceRoomInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutConferenceRoomInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutConferenceRoomInput, AuditLogUncheckedUpdateWithoutConferenceRoomInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutConferenceRoomInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutConferenceRoomInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    eventType?: EnumAuditEventTypeFilter<"AuditLog"> | $Enums.AuditEventType
    eventData?: JsonFilter<"AuditLog">
    actorEmail?: StringFilter<"AuditLog"> | string
    actorIP?: StringFilter<"AuditLog"> | string
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    success?: BoolFilter<"AuditLog"> | boolean
    errorMsg?: StringNullableFilter<"AuditLog"> | string | null
    conferenceRoomId?: StringFilter<"AuditLog"> | string
  }

  export type ConferenceRoomFileUpsertWithWhereUniqueWithoutConferenceRoomInput = {
    where: ConferenceRoomFileWhereUniqueInput
    update: XOR<ConferenceRoomFileUpdateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedUpdateWithoutConferenceRoomInput>
    create: XOR<ConferenceRoomFileCreateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedCreateWithoutConferenceRoomInput>
  }

  export type ConferenceRoomFileUpdateWithWhereUniqueWithoutConferenceRoomInput = {
    where: ConferenceRoomFileWhereUniqueInput
    data: XOR<ConferenceRoomFileUpdateWithoutConferenceRoomInput, ConferenceRoomFileUncheckedUpdateWithoutConferenceRoomInput>
  }

  export type ConferenceRoomFileUpdateManyWithWhereWithoutConferenceRoomInput = {
    where: ConferenceRoomFileScalarWhereInput
    data: XOR<ConferenceRoomFileUpdateManyMutationInput, ConferenceRoomFileUncheckedUpdateManyWithoutConferenceRoomInput>
  }

  export type ConferenceRoomFileScalarWhereInput = {
    AND?: ConferenceRoomFileScalarWhereInput | ConferenceRoomFileScalarWhereInput[]
    OR?: ConferenceRoomFileScalarWhereInput[]
    NOT?: ConferenceRoomFileScalarWhereInput | ConferenceRoomFileScalarWhereInput[]
    id?: StringFilter<"ConferenceRoomFile"> | string
    createdAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    updatedAt?: DateTimeFilter<"ConferenceRoomFile"> | Date | string
    fileName?: StringFilter<"ConferenceRoomFile"> | string
    fileSize?: IntFilter<"ConferenceRoomFile"> | number
    fileType?: StringFilter<"ConferenceRoomFile"> | string
    originalName?: StringFilter<"ConferenceRoomFile"> | string
    encryptedPath?: StringFilter<"ConferenceRoomFile"> | string
    encryptionIV?: StringFilter<"ConferenceRoomFile"> | string
    checksum?: StringFilter<"ConferenceRoomFile"> | string
    fileCategory?: EnumFileCategoryFilter<"ConferenceRoomFile"> | $Enums.FileCategory
    sensitive?: BoolFilter<"ConferenceRoomFile"> | boolean
    uploadedBy?: StringFilter<"ConferenceRoomFile"> | string
    uploadedFrom?: StringFilter<"ConferenceRoomFile"> | string
    userAgent?: StringNullableFilter<"ConferenceRoomFile"> | string | null
    processed?: BoolFilter<"ConferenceRoomFile"> | boolean
    processedAt?: DateTimeNullableFilter<"ConferenceRoomFile"> | Date | string | null
    auditIncluded?: BoolFilter<"ConferenceRoomFile"> | boolean
    conferenceRoomId?: StringFilter<"ConferenceRoomFile"> | string
  }

  export type ConferenceRoomCreateWithoutFilesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    auditLog?: AuditLogCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomUncheckedCreateWithoutFilesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    auditLog?: AuditLogUncheckedCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomCreateOrConnectWithoutFilesInput = {
    where: ConferenceRoomWhereUniqueInput
    create: XOR<ConferenceRoomCreateWithoutFilesInput, ConferenceRoomUncheckedCreateWithoutFilesInput>
  }

  export type ConferenceRoomUpsertWithoutFilesInput = {
    update: XOR<ConferenceRoomUpdateWithoutFilesInput, ConferenceRoomUncheckedUpdateWithoutFilesInput>
    create: XOR<ConferenceRoomCreateWithoutFilesInput, ConferenceRoomUncheckedCreateWithoutFilesInput>
    where?: ConferenceRoomWhereInput
  }

  export type ConferenceRoomUpdateToOneWithWhereWithoutFilesInput = {
    where?: ConferenceRoomWhereInput
    data: XOR<ConferenceRoomUpdateWithoutFilesInput, ConferenceRoomUncheckedUpdateWithoutFilesInput>
  }

  export type ConferenceRoomUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auditLog?: AuditLogUpdateManyWithoutConferenceRoomNestedInput
  }

  export type ConferenceRoomUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auditLog?: AuditLogUncheckedUpdateManyWithoutConferenceRoomNestedInput
  }

  export type ConferenceRoomCreateWithoutAuditLogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    files?: ConferenceRoomFileCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomUncheckedCreateWithoutAuditLogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName: string
    companyEmail: string
    cfoName?: string | null
    cfoEmail: string
    industry?: string | null
    annualRevenue?: number | null
    annualBudget?: number | null
    accessCode: string
    accessCodeHash: string
    codeGeneratedAt?: Date | string
    codeUsed?: boolean
    firstAccessedAt?: Date | string | null
    lastAccessedAt?: Date | string | null
    accessCount?: number
    status?: $Enums.ConferenceRoomStatus
    expiresAt: Date | string
    closedAt?: Date | string | null
    closureReason?: string | null
    encryptionKey: string
    ipWhitelist?: ConferenceRoomCreateipWhitelistInput | string[]
    mfaEnabled?: boolean
    mfaPhone?: string | null
    dealValue?: number | null
    dealStage?: string | null
    salesRep?: string | null
    notes?: string | null
    files?: ConferenceRoomFileUncheckedCreateNestedManyWithoutConferenceRoomInput
  }

  export type ConferenceRoomCreateOrConnectWithoutAuditLogInput = {
    where: ConferenceRoomWhereUniqueInput
    create: XOR<ConferenceRoomCreateWithoutAuditLogInput, ConferenceRoomUncheckedCreateWithoutAuditLogInput>
  }

  export type ConferenceRoomUpsertWithoutAuditLogInput = {
    update: XOR<ConferenceRoomUpdateWithoutAuditLogInput, ConferenceRoomUncheckedUpdateWithoutAuditLogInput>
    create: XOR<ConferenceRoomCreateWithoutAuditLogInput, ConferenceRoomUncheckedCreateWithoutAuditLogInput>
    where?: ConferenceRoomWhereInput
  }

  export type ConferenceRoomUpdateToOneWithWhereWithoutAuditLogInput = {
    where?: ConferenceRoomWhereInput
    data: XOR<ConferenceRoomUpdateWithoutAuditLogInput, ConferenceRoomUncheckedUpdateWithoutAuditLogInput>
  }

  export type ConferenceRoomUpdateWithoutAuditLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: ConferenceRoomFileUpdateManyWithoutConferenceRoomNestedInput
  }

  export type ConferenceRoomUncheckedUpdateWithoutAuditLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    cfoName?: NullableStringFieldUpdateOperationsInput | string | null
    cfoEmail?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableFloatFieldUpdateOperationsInput | number | null
    annualBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    accessCode?: StringFieldUpdateOperationsInput | string
    accessCodeHash?: StringFieldUpdateOperationsInput | string
    codeGeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeUsed?: BoolFieldUpdateOperationsInput | boolean
    firstAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessCount?: IntFieldUpdateOperationsInput | number
    status?: EnumConferenceRoomStatusFieldUpdateOperationsInput | $Enums.ConferenceRoomStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closureReason?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionKey?: StringFieldUpdateOperationsInput | string
    ipWhitelist?: ConferenceRoomUpdateipWhitelistInput | string[]
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaPhone?: NullableStringFieldUpdateOperationsInput | string | null
    dealValue?: NullableFloatFieldUpdateOperationsInput | number | null
    dealStage?: NullableStringFieldUpdateOperationsInput | string | null
    salesRep?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: ConferenceRoomFileUncheckedUpdateManyWithoutConferenceRoomNestedInput
  }

  export type PayrollCorrectionCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
  }

  export type PayrollCorrectionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
  }

  export type PayrollCorrectionCreateOrConnectWithoutApiKeyInput = {
    where: PayrollCorrectionWhereUniqueInput
    create: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput>
  }

  export type PayrollCorrectionCreateManyApiKeyInputEnvelope = {
    data: PayrollCorrectionCreateManyApiKeyInput | PayrollCorrectionCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type AutomationLogCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AutomationLogUncheckedCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
  }

  export type AutomationLogCreateOrConnectWithoutApiKeyInput = {
    where: AutomationLogWhereUniqueInput
    create: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput>
  }

  export type AutomationLogCreateManyApiKeyInputEnvelope = {
    data: AutomationLogCreateManyApiKeyInput | AutomationLogCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadCreateOrConnectWithoutApiKeyInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput>
  }

  export type FileUploadCreateManyApiKeyInputEnvelope = {
    data: FileUploadCreateManyApiKeyInput | FileUploadCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type PayrollCorrectionUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: PayrollCorrectionWhereUniqueInput
    update: XOR<PayrollCorrectionUpdateWithoutApiKeyInput, PayrollCorrectionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<PayrollCorrectionCreateWithoutApiKeyInput, PayrollCorrectionUncheckedCreateWithoutApiKeyInput>
  }

  export type PayrollCorrectionUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: PayrollCorrectionWhereUniqueInput
    data: XOR<PayrollCorrectionUpdateWithoutApiKeyInput, PayrollCorrectionUncheckedUpdateWithoutApiKeyInput>
  }

  export type PayrollCorrectionUpdateManyWithWhereWithoutApiKeyInput = {
    where: PayrollCorrectionScalarWhereInput
    data: XOR<PayrollCorrectionUpdateManyMutationInput, PayrollCorrectionUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type PayrollCorrectionScalarWhereInput = {
    AND?: PayrollCorrectionScalarWhereInput | PayrollCorrectionScalarWhereInput[]
    OR?: PayrollCorrectionScalarWhereInput[]
    NOT?: PayrollCorrectionScalarWhereInput | PayrollCorrectionScalarWhereInput[]
    id?: StringFilter<"PayrollCorrection"> | string
    createdAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollCorrection"> | Date | string
    apiKeyId?: StringFilter<"PayrollCorrection"> | string
    inputData?: JsonFilter<"PayrollCorrection">
    employeeId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiModel?: StringFilter<"PayrollCorrection"> | string
    aiRequestId?: StringNullableFilter<"PayrollCorrection"> | string | null
    aiTokensUsed?: IntNullableFilter<"PayrollCorrection"> | number | null
    processingTime?: IntNullableFilter<"PayrollCorrection"> | number | null
    correctionsFound?: BoolFilter<"PayrollCorrection"> | boolean
    correctionCount?: IntFilter<"PayrollCorrection"> | number
    outputData?: JsonNullableFilter<"PayrollCorrection">
    issuesFound?: JsonNullableFilter<"PayrollCorrection">
    status?: EnumCorrectionStatusFilter<"PayrollCorrection"> | $Enums.CorrectionStatus
    errorMsg?: StringNullableFilter<"PayrollCorrection"> | string | null
  }

  export type AutomationLogUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: AutomationLogWhereUniqueInput
    update: XOR<AutomationLogUpdateWithoutApiKeyInput, AutomationLogUncheckedUpdateWithoutApiKeyInput>
    create: XOR<AutomationLogCreateWithoutApiKeyInput, AutomationLogUncheckedCreateWithoutApiKeyInput>
  }

  export type AutomationLogUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: AutomationLogWhereUniqueInput
    data: XOR<AutomationLogUpdateWithoutApiKeyInput, AutomationLogUncheckedUpdateWithoutApiKeyInput>
  }

  export type AutomationLogUpdateManyWithWhereWithoutApiKeyInput = {
    where: AutomationLogScalarWhereInput
    data: XOR<AutomationLogUpdateManyMutationInput, AutomationLogUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type AutomationLogScalarWhereInput = {
    AND?: AutomationLogScalarWhereInput | AutomationLogScalarWhereInput[]
    OR?: AutomationLogScalarWhereInput[]
    NOT?: AutomationLogScalarWhereInput | AutomationLogScalarWhereInput[]
    id?: StringFilter<"AutomationLog"> | string
    createdAt?: DateTimeFilter<"AutomationLog"> | Date | string
    apiKeyId?: StringNullableFilter<"AutomationLog"> | string | null
    eventType?: EnumAutomationEventTypeFilter<"AutomationLog"> | $Enums.AutomationEventType
    eventData?: JsonFilter<"AutomationLog">
    endpoint?: StringFilter<"AutomationLog"> | string
    method?: StringFilter<"AutomationLog"> | string
    ipAddress?: StringFilter<"AutomationLog"> | string
    userAgent?: StringNullableFilter<"AutomationLog"> | string | null
    statusCode?: IntFilter<"AutomationLog"> | number
    responseTime?: IntNullableFilter<"AutomationLog"> | number | null
    success?: BoolFilter<"AutomationLog"> | boolean
    errorMsg?: StringNullableFilter<"AutomationLog"> | string | null
  }

  export type FileUploadUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutApiKeyInput, FileUploadUncheckedUpdateWithoutApiKeyInput>
    create: XOR<FileUploadCreateWithoutApiKeyInput, FileUploadUncheckedCreateWithoutApiKeyInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutApiKeyInput, FileUploadUncheckedUpdateWithoutApiKeyInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutApiKeyInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    fileId?: StringFilter<"FileUpload"> | string
    fileName?: StringFilter<"FileUpload"> | string
    fileUrl?: StringFilter<"FileUpload"> | string
    fileSize?: IntNullableFilter<"FileUpload"> | number | null
    customerId?: StringFilter<"FileUpload"> | string
    customerEmail?: StringFilter<"FileUpload"> | string
    companyName?: StringFilter<"FileUpload"> | string
    status?: EnumFileUploadStatusFilter<"FileUpload"> | $Enums.FileUploadStatus
    issuesFound?: IntFilter<"FileUpload"> | number
    correctionsMade?: IntFilter<"FileUpload"> | number
    recordsProcessed?: IntNullableFilter<"FileUpload"> | number | null
    processingTime?: IntNullableFilter<"FileUpload"> | number | null
    errorMsg?: StringNullableFilter<"FileUpload"> | string | null
    corrections?: JsonNullableFilter<"FileUpload">
    issues?: JsonNullableFilter<"FileUpload">
    apiKeyId?: StringNullableFilter<"FileUpload"> | string | null
  }

  export type ApiKeyCreateWithoutCorrectionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    automationLogs?: AutomationLogCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutCorrectionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    automationLogs?: AutomationLogUncheckedCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutCorrectionsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutCorrectionsInput, ApiKeyUncheckedCreateWithoutCorrectionsInput>
  }

  export type ApiKeyUpsertWithoutCorrectionsInput = {
    update: XOR<ApiKeyUpdateWithoutCorrectionsInput, ApiKeyUncheckedUpdateWithoutCorrectionsInput>
    create: XOR<ApiKeyCreateWithoutCorrectionsInput, ApiKeyUncheckedCreateWithoutCorrectionsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutCorrectionsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutCorrectionsInput, ApiKeyUncheckedUpdateWithoutCorrectionsInput>
  }

  export type ApiKeyUpdateWithoutCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    automationLogs?: AutomationLogUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    automationLogs?: AutomationLogUncheckedUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateWithoutAutomationLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutAutomationLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedCreateNestedManyWithoutApiKeyInput
    fileUploads?: FileUploadUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutAutomationLogsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutAutomationLogsInput, ApiKeyUncheckedCreateWithoutAutomationLogsInput>
  }

  export type ApiKeyUpsertWithoutAutomationLogsInput = {
    update: XOR<ApiKeyUpdateWithoutAutomationLogsInput, ApiKeyUncheckedUpdateWithoutAutomationLogsInput>
    create: XOR<ApiKeyCreateWithoutAutomationLogsInput, ApiKeyUncheckedCreateWithoutAutomationLogsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutAutomationLogsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutAutomationLogsInput, ApiKeyUncheckedUpdateWithoutAutomationLogsInput>
  }

  export type ApiKeyUpdateWithoutAutomationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutAutomationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedUpdateManyWithoutApiKeyNestedInput
    fileUploads?: FileUploadUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateWithoutFileUploadsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionCreateNestedManyWithoutApiKeyInput
    automationLogs?: AutomationLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutFileUploadsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    keyHash: string
    encryptedKey: string
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    revokedReason?: string | null
    requestsPerDay?: number
    requestsToday?: number
    lastResetAt?: Date | string
    totalRequests?: number
    lastUsedAt?: Date | string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    billingStatus?: $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedCreateNestedManyWithoutApiKeyInput
    automationLogs?: AutomationLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutFileUploadsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutFileUploadsInput, ApiKeyUncheckedCreateWithoutFileUploadsInput>
  }

  export type ApiKeyUpsertWithoutFileUploadsInput = {
    update: XOR<ApiKeyUpdateWithoutFileUploadsInput, ApiKeyUncheckedUpdateWithoutFileUploadsInput>
    create: XOR<ApiKeyCreateWithoutFileUploadsInput, ApiKeyUncheckedCreateWithoutFileUploadsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutFileUploadsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutFileUploadsInput, ApiKeyUncheckedUpdateWithoutFileUploadsInput>
  }

  export type ApiKeyUpdateWithoutFileUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUpdateManyWithoutApiKeyNestedInput
    automationLogs?: AutomationLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutFileUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    requestsToday?: IntFieldUpdateOperationsInput | number
    lastResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    billingStatus?: EnumBillingStatusFieldUpdateOperationsInput | $Enums.BillingStatus
    corrections?: PayrollCorrectionUncheckedUpdateManyWithoutApiKeyNestedInput
    automationLogs?: AutomationLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type AuditLogCreateManyConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AuditEventType
    eventData: JsonNullValueInput | InputJsonValue
    actorEmail: string
    actorIP: string
    userAgent?: string | null
    success?: boolean
    errorMsg?: string | null
  }

  export type ConferenceRoomFileCreateManyConferenceRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileName: string
    fileSize: number
    fileType: string
    originalName: string
    encryptedPath: string
    encryptionIV: string
    checksum: string
    fileCategory: $Enums.FileCategory
    sensitive?: boolean
    uploadedBy: string
    uploadedFrom: string
    userAgent?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    auditIncluded?: boolean
  }

  export type AuditLogUpdateWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    eventData?: JsonNullValueInput | InputJsonValue
    actorEmail?: StringFieldUpdateOperationsInput | string
    actorIP?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConferenceRoomFileUpdateWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConferenceRoomFileUncheckedUpdateWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConferenceRoomFileUncheckedUpdateManyWithoutConferenceRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    encryptedPath?: StringFieldUpdateOperationsInput | string
    encryptionIV?: StringFieldUpdateOperationsInput | string
    checksum?: StringFieldUpdateOperationsInput | string
    fileCategory?: EnumFileCategoryFieldUpdateOperationsInput | $Enums.FileCategory
    sensitive?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedFrom?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PayrollCorrectionCreateManyApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputData: JsonNullValueInput | InputJsonValue
    employeeId?: string | null
    aiModel?: string
    aiRequestId?: string | null
    aiTokensUsed?: number | null
    processingTime?: number | null
    correctionsFound?: boolean
    correctionCount?: number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.CorrectionStatus
    errorMsg?: string | null
  }

  export type AutomationLogCreateManyApiKeyInput = {
    id?: string
    createdAt?: Date | string
    eventType: $Enums.AutomationEventType
    eventData: JsonNullValueInput | InputJsonValue
    endpoint: string
    method: string
    ipAddress: string
    userAgent?: string | null
    statusCode: number
    responseTime?: number | null
    success?: boolean
    errorMsg?: string | null
  }

  export type FileUploadCreateManyApiKeyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fileId: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    customerId: string
    customerEmail: string
    companyName: string
    status?: $Enums.FileUploadStatus
    issuesFound?: number
    correctionsMade?: number
    recordsProcessed?: number | null
    processingTime?: number | null
    errorMsg?: string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PayrollCorrectionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayrollCorrectionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayrollCorrectionUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputData?: JsonNullValueInput | InputJsonValue
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    aiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    aiTokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    correctionsFound?: BoolFieldUpdateOperationsInput | boolean
    correctionCount?: IntFieldUpdateOperationsInput | number
    outputData?: NullableJsonNullValueInput | InputJsonValue
    issuesFound?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumCorrectionStatusFieldUpdateOperationsInput | $Enums.CorrectionStatus
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationLogUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAutomationEventTypeFieldUpdateOperationsInput | $Enums.AutomationEventType
    eventData?: JsonNullValueInput | InputJsonValue
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUploadUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileUploadUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumFileUploadStatusFieldUpdateOperationsInput | $Enums.FileUploadStatus
    issuesFound?: IntFieldUpdateOperationsInput | number
    correctionsMade?: IntFieldUpdateOperationsInput | number
    recordsProcessed?: NullableIntFieldUpdateOperationsInput | number | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    corrections?: NullableJsonNullValueInput | InputJsonValue
    issues?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}