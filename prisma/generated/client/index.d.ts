
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationRequest
 * 
 */
export type VerificationRequest = $Result.DefaultSelection<Prisma.$VerificationRequestPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model CategoryProduct
 * 
 */
export type CategoryProduct = $Result.DefaultSelection<Prisma.$CategoryProductPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model IngredientsOnMeals
 * 
 */
export type IngredientsOnMeals = $Result.DefaultSelection<Prisma.$IngredientsOnMealsPayload>
/**
 * Model StockOfIngredients
 * 
 */
export type StockOfIngredients = $Result.DefaultSelection<Prisma.$StockOfIngredientsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ProductsOrdered
 * 
 */
export type ProductsOrdered = $Result.DefaultSelection<Prisma.$ProductsOrderedPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationRequest`: Exposes CRUD operations for the **VerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationRequests
    * const verificationRequests = await prisma.verificationRequest.findMany()
    * ```
    */
  get verificationRequest(): Prisma.VerificationRequestDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs>;

  /**
   * `prisma.categoryProduct`: Exposes CRUD operations for the **CategoryProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryProducts
    * const categoryProducts = await prisma.categoryProduct.findMany()
    * ```
    */
  get categoryProduct(): Prisma.CategoryProductDelegate<ExtArgs>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs>;

  /**
   * `prisma.ingredientsOnMeals`: Exposes CRUD operations for the **IngredientsOnMeals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientsOnMeals
    * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findMany()
    * ```
    */
  get ingredientsOnMeals(): Prisma.IngredientsOnMealsDelegate<ExtArgs>;

  /**
   * `prisma.stockOfIngredients`: Exposes CRUD operations for the **StockOfIngredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockOfIngredients
    * const stockOfIngredients = await prisma.stockOfIngredients.findMany()
    * ```
    */
  get stockOfIngredients(): Prisma.StockOfIngredientsDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.productsOrdered`: Exposes CRUD operations for the **ProductsOrdered** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOrdereds
    * const productsOrdereds = await prisma.productsOrdered.findMany()
    * ```
    */
  get productsOrdered(): Prisma.ProductsOrderedDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationRequest: 'VerificationRequest',
    UserRole: 'UserRole',
    Meal: 'Meal',
    CategoryProduct: 'CategoryProduct',
    Ingredient: 'Ingredient',
    IngredientsOnMeals: 'IngredientsOnMeals',
    StockOfIngredients: 'StockOfIngredients',
    Order: 'Order',
    ProductsOrdered: 'ProductsOrdered'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'verificationRequest' | 'userRole' | 'meal' | 'categoryProduct' | 'ingredient' | 'ingredientsOnMeals' | 'stockOfIngredients' | 'order' | 'productsOrdered'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationRequest: {
        payload: Prisma.$VerificationRequestPayload<ExtArgs>
        fields: Prisma.VerificationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findFirst: {
            args: Prisma.VerificationRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findMany: {
            args: Prisma.VerificationRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>[]
          }
          create: {
            args: Prisma.VerificationRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          createMany: {
            args: Prisma.VerificationRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          update: {
            args: Prisma.VerificationRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          deleteMany: {
            args: Prisma.VerificationRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          aggregate: {
            args: Prisma.VerificationRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationRequest>
          }
          groupBy: {
            args: Prisma.VerificationRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationRequestCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>,
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      CategoryProduct: {
        payload: Prisma.$CategoryProductPayload<ExtArgs>
        fields: Prisma.CategoryProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          findFirst: {
            args: Prisma.CategoryProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          findMany: {
            args: Prisma.CategoryProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>[]
          }
          create: {
            args: Prisma.CategoryProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          createMany: {
            args: Prisma.CategoryProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          update: {
            args: Prisma.CategoryProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          deleteMany: {
            args: Prisma.CategoryProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryProductPayload>
          }
          aggregate: {
            args: Prisma.CategoryProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoryProduct>
          }
          groupBy: {
            args: Prisma.CategoryProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryProductCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryProductCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      IngredientsOnMeals: {
        payload: Prisma.$IngredientsOnMealsPayload<ExtArgs>
        fields: Prisma.IngredientsOnMealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsOnMealsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsOnMealsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsOnMealsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsOnMealsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          findMany: {
            args: Prisma.IngredientsOnMealsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>[]
          }
          create: {
            args: Prisma.IngredientsOnMealsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          createMany: {
            args: Prisma.IngredientsOnMealsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientsOnMealsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          update: {
            args: Prisma.IngredientsOnMealsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsOnMealsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsOnMealsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientsOnMealsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsOnMealsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsOnMealsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredientsOnMeals>
          }
          groupBy: {
            args: Prisma.IngredientsOnMealsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientsOnMealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsOnMealsCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientsOnMealsCountAggregateOutputType> | number
          }
        }
      }
      StockOfIngredients: {
        payload: Prisma.$StockOfIngredientsPayload<ExtArgs>
        fields: Prisma.StockOfIngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockOfIngredientsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockOfIngredientsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          findFirst: {
            args: Prisma.StockOfIngredientsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockOfIngredientsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          findMany: {
            args: Prisma.StockOfIngredientsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>[]
          }
          create: {
            args: Prisma.StockOfIngredientsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          createMany: {
            args: Prisma.StockOfIngredientsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StockOfIngredientsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          update: {
            args: Prisma.StockOfIngredientsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          deleteMany: {
            args: Prisma.StockOfIngredientsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StockOfIngredientsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StockOfIngredientsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOfIngredientsPayload>
          }
          aggregate: {
            args: Prisma.StockOfIngredientsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStockOfIngredients>
          }
          groupBy: {
            args: Prisma.StockOfIngredientsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StockOfIngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockOfIngredientsCountArgs<ExtArgs>,
            result: $Utils.Optional<StockOfIngredientsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ProductsOrdered: {
        payload: Prisma.$ProductsOrderedPayload<ExtArgs>
        fields: Prisma.ProductsOrderedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsOrderedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsOrderedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          findFirst: {
            args: Prisma.ProductsOrderedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsOrderedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          findMany: {
            args: Prisma.ProductsOrderedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>[]
          }
          create: {
            args: Prisma.ProductsOrderedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          createMany: {
            args: Prisma.ProductsOrderedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductsOrderedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          update: {
            args: Prisma.ProductsOrderedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          deleteMany: {
            args: Prisma.ProductsOrderedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsOrderedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductsOrderedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsOrderedPayload>
          }
          aggregate: {
            args: Prisma.ProductsOrderedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductsOrdered>
          }
          groupBy: {
            args: Prisma.ProductsOrderedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsOrderedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsOrderedCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsOrderedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    ProductsOrdered: number
    IngredientsOnMeals: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductsOrdered?: boolean | MealCountOutputTypeCountProductsOrderedArgs
    IngredientsOnMeals?: boolean | MealCountOutputTypeCountIngredientsOnMealsArgs
  }

  // Custom InputTypes

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountProductsOrderedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOrderedWhereInput
  }


  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountIngredientsOnMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsOnMealsWhereInput
  }



  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    meals: number
    stockOfIngredients: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | IngredientCountOutputTypeCountMealsArgs
    stockOfIngredients?: boolean | IngredientCountOutputTypeCountStockOfIngredientsArgs
  }

  // Custom InputTypes

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsOnMealsWhereInput
  }


  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountStockOfIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockOfIngredientsWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    products: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOrderedWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    compoundId: string | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    compoundId: string | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    compoundId: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compoundId?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    compoundId?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      compoundId: string
      userId: number
      providerType: string
      providerId: string
      providerAccountId: string
      refreshToken: string | null
      accessToken: string | null
      accessTokenExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly compoundId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly providerType: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpires: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    userId: number
    expires: Date
    sessionToken: string
    accessToken: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      expires: Date
      sessionToken: string
      accessToken: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    userRoleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userRoleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userRoleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    userRoleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    userRoleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userRoleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userRoleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userRoleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    userRoleId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRoleId?: boolean
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRoleId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserRole: Prisma.$UserRolePayload<ExtArgs> | null
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      userRoleId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly userRoleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
  }


  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationRequest
   */

  export type AggregateVerificationRequest = {
    _count: VerificationRequestCountAggregateOutputType | null
    _avg: VerificationRequestAvgAggregateOutputType | null
    _sum: VerificationRequestSumAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  export type VerificationRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type VerificationRequestSumAggregateOutputType = {
    id: number | null
  }

  export type VerificationRequestMinAggregateOutputType = {
    id: number | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestMaxAggregateOutputType = {
    id: number | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationRequestAvgAggregateInputType = {
    id?: true
  }

  export type VerificationRequestSumAggregateInputType = {
    id?: true
  }

  export type VerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequest to aggregate.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationRequests
    **/
    _count?: true | VerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type GetVerificationRequestAggregateType<T extends VerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRequest[P]>
      : GetScalarType<T[P], AggregateVerificationRequest[P]>
  }




  export type VerificationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationRequestWhereInput
    orderBy?: VerificationRequestOrderByWithAggregationInput | VerificationRequestOrderByWithAggregationInput[]
    by: VerificationRequestScalarFieldEnum[] | VerificationRequestScalarFieldEnum
    having?: VerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRequestCountAggregateInputType | true
    _avg?: VerificationRequestAvgAggregateInputType
    _sum?: VerificationRequestSumAggregateInputType
    _min?: VerificationRequestMinAggregateInputType
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type VerificationRequestGroupByOutputType = {
    id: number
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationRequestCountAggregateOutputType | null
    _avg: VerificationRequestAvgAggregateOutputType | null
    _sum: VerificationRequestSumAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  type GetVerificationRequestGroupByPayload<T extends VerificationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
        }
      >
    >


  export type VerificationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationRequest"]>

  export type VerificationRequestSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VerificationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      identifier: string
      token: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationRequest"]>
    composites: {}
  }


  type VerificationRequestGetPayload<S extends boolean | null | undefined | VerificationRequestDefaultArgs> = $Result.GetResult<Prisma.$VerificationRequestPayload, S>

  type VerificationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationRequestCountAggregateInputType | true
    }

  export interface VerificationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationRequest'], meta: { name: 'VerificationRequest' } }
    /**
     * Find zero or one VerificationRequest that matches the filter.
     * @param {VerificationRequestFindUniqueArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationRequestFindUniqueOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany()
     * 
     * // Get first 10 VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VerificationRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationRequest.
     * @param {VerificationRequestCreateArgs} args - Arguments to create a VerificationRequest.
     * @example
     * // Create one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.create({
     *   data: {
     *     // ... data to create a VerificationRequest
     *   }
     * })
     * 
    **/
    create<T extends VerificationRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestCreateArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationRequests.
     *     @param {VerificationRequestCreateManyArgs} args - Arguments to create many VerificationRequests.
     *     @example
     *     // Create many VerificationRequests
     *     const verificationRequest = await prisma.verificationRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationRequest.
     * @param {VerificationRequestDeleteArgs} args - Arguments to delete one VerificationRequest.
     * @example
     * // Delete one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.delete({
     *   where: {
     *     // ... filter to delete one VerificationRequest
     *   }
     * })
     * 
    **/
    delete<T extends VerificationRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestDeleteArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationRequest.
     * @param {VerificationRequestUpdateArgs} args - Arguments to update one VerificationRequest.
     * @example
     * // Update one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpdateArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationRequests.
     * @param {VerificationRequestDeleteManyArgs} args - Arguments to filter VerificationRequests to delete.
     * @example
     * // Delete a few VerificationRequests
     * const { count } = await prisma.verificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationRequest.
     * @param {VerificationRequestUpsertArgs} args - Arguments to update or create a VerificationRequest.
     * @example
     * // Update or create a VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.upsert({
     *   create: {
     *     // ... data to create a VerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRequest we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpsertArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestCountArgs} args - Arguments to filter VerificationRequests to count.
     * @example
     * // Count the number of VerificationRequests
     * const count = await prisma.verificationRequest.count({
     *   where: {
     *     // ... the filter for the VerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends VerificationRequestCountArgs>(
      args?: Subset<T, VerificationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationRequestAggregateArgs>(args: Subset<T, VerificationRequestAggregateArgs>): Prisma.PrismaPromise<GetVerificationRequestAggregateType<T>>

    /**
     * Group by VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestGroupByArgs} args - Group by arguments.
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
      T extends VerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationRequest model
   */
  readonly fields: VerificationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationRequest model
   */ 
  interface VerificationRequestFieldRefs {
    readonly id: FieldRef<"VerificationRequest", 'Int'>
    readonly identifier: FieldRef<"VerificationRequest", 'String'>
    readonly token: FieldRef<"VerificationRequest", 'String'>
    readonly expires: FieldRef<"VerificationRequest", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationRequest findUnique
   */
  export type VerificationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest findUniqueOrThrow
   */
  export type VerificationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest findFirst
   */
  export type VerificationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest findFirstOrThrow
   */
  export type VerificationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest findMany
   */
  export type VerificationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequests to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest create
   */
  export type VerificationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationRequest.
     */
    data: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
  }


  /**
   * VerificationRequest createMany
   */
  export type VerificationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationRequests.
     */
    data: VerificationRequestCreateManyInput | VerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationRequest update
   */
  export type VerificationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationRequest.
     */
    data: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which VerificationRequest to update.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest updateMany
   */
  export type VerificationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationRequests.
     */
    data: XOR<VerificationRequestUpdateManyMutationInput, VerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which VerificationRequests to update
     */
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest upsert
   */
  export type VerificationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationRequest to update in case it exists.
     */
    where: VerificationRequestWhereUniqueInput
    /**
     * In case the VerificationRequest found by the `where` argument doesn't exist, create a new VerificationRequest with this data.
     */
    create: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
    /**
     * In case the VerificationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
  }


  /**
   * VerificationRequest delete
   */
  export type VerificationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter which VerificationRequest to delete.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest deleteMany
   */
  export type VerificationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequests to delete
     */
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest without action
   */
  export type VerificationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
  }



  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    label: string
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }


  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
    **/
    create<T extends UserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserRoles.
     *     @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     *     @example
     *     // Create many UserRoles
     *     const userRole = await prisma.userRole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
    **/
    delete<T extends UserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
    **/
    upsert<T extends UserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly label: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }


  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }


  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
  }



  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    price: number | null
    amountAvailable: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    price: number | null
    amountAvailable: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    label: string | null
    price: number | null
    amountAvailable: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    label: string | null
    price: number | null
    amountAvailable: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    label: number
    price: number
    amountAvailable: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    price?: true
    amountAvailable?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    price?: true
    amountAvailable?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    label?: true
    price?: true
    amountAvailable?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    label?: true
    price?: true
    amountAvailable?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    label?: true
    price?: true
    amountAvailable?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    label: string
    price: number
    amountAvailable: number | null
    description: string | null
    created_at: Date
    updated_at: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    price?: boolean
    amountAvailable?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    ProductsOrdered?: boolean | Meal$ProductsOrderedArgs<ExtArgs>
    IngredientsOnMeals?: boolean | Meal$IngredientsOnMealsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    label?: boolean
    price?: boolean
    amountAvailable?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductsOrdered?: boolean | Meal$ProductsOrderedArgs<ExtArgs>
    IngredientsOnMeals?: boolean | Meal$IngredientsOnMealsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      ProductsOrdered: Prisma.$ProductsOrderedPayload<ExtArgs>[]
      IngredientsOnMeals: Prisma.$IngredientsOnMealsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      price: number
      amountAvailable: number | null
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }


  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MealFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Meal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MealFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MealFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
    **/
    create<T extends MealCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MealCreateArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Meals.
     *     @param {MealCreateManyArgs} args - Arguments to create many Meals.
     *     @example
     *     // Create many Meals
     *     const meal = await prisma.meal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MealCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
    **/
    delete<T extends MealDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MealDeleteArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MealUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpdateArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MealDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MealUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
    **/
    upsert<T extends MealUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpsertArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ProductsOrdered<T extends Meal$ProductsOrderedArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ProductsOrderedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findMany'> | Null>;

    IngredientsOnMeals<T extends Meal$IngredientsOnMealsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$IngredientsOnMealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Meal model
   */ 
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly label: FieldRef<"Meal", 'String'>
    readonly price: FieldRef<"Meal", 'Float'>
    readonly amountAvailable: FieldRef<"Meal", 'Int'>
    readonly description: FieldRef<"Meal", 'String'>
    readonly created_at: FieldRef<"Meal", 'DateTime'>
    readonly updated_at: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }


  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
  }


  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }


  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
  }


  /**
   * Meal.ProductsOrdered
   */
  export type Meal$ProductsOrderedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    where?: ProductsOrderedWhereInput
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    cursor?: ProductsOrderedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOrderedScalarFieldEnum | ProductsOrderedScalarFieldEnum[]
  }


  /**
   * Meal.IngredientsOnMeals
   */
  export type Meal$IngredientsOnMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    where?: IngredientsOnMealsWhereInput
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    cursor?: IngredientsOnMealsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsOnMealsScalarFieldEnum | IngredientsOnMealsScalarFieldEnum[]
  }


  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
  }



  /**
   * Model CategoryProduct
   */

  export type AggregateCategoryProduct = {
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  export type CategoryProductAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoryProductSumAggregateOutputType = {
    id: number | null
  }

  export type CategoryProductMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type CategoryProductMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type CategoryProductCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type CategoryProductAvgAggregateInputType = {
    id?: true
  }

  export type CategoryProductSumAggregateInputType = {
    id?: true
  }

  export type CategoryProductMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type CategoryProductMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type CategoryProductCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type CategoryProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryProduct to aggregate.
     */
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductOrderByWithRelationInput | CategoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryProducts
    **/
    _count?: true | CategoryProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryProductMaxAggregateInputType
  }

  export type GetCategoryProductAggregateType<T extends CategoryProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryProduct[P]>
      : GetScalarType<T[P], AggregateCategoryProduct[P]>
  }




  export type CategoryProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryProductWhereInput
    orderBy?: CategoryProductOrderByWithAggregationInput | CategoryProductOrderByWithAggregationInput[]
    by: CategoryProductScalarFieldEnum[] | CategoryProductScalarFieldEnum
    having?: CategoryProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryProductCountAggregateInputType | true
    _avg?: CategoryProductAvgAggregateInputType
    _sum?: CategoryProductSumAggregateInputType
    _min?: CategoryProductMinAggregateInputType
    _max?: CategoryProductMaxAggregateInputType
  }

  export type CategoryProductGroupByOutputType = {
    id: number
    label: string
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  type GetCategoryProductGroupByPayload<T extends CategoryProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
        }
      >
    >


  export type CategoryProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["categoryProduct"]>

  export type CategoryProductSelectScalar = {
    id?: boolean
    label?: boolean
  }


  export type $CategoryProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["categoryProduct"]>
    composites: {}
  }


  type CategoryProductGetPayload<S extends boolean | null | undefined | CategoryProductDefaultArgs> = $Result.GetResult<Prisma.$CategoryProductPayload, S>

  type CategoryProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryProductCountAggregateInputType | true
    }

  export interface CategoryProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryProduct'], meta: { name: 'CategoryProduct' } }
    /**
     * Find zero or one CategoryProduct that matches the filter.
     * @param {CategoryProductFindUniqueArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CategoryProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryProductFindUniqueOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CategoryProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindFirstArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CategoryProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindFirstOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CategoryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany()
     * 
     * // Get first 10 CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryProductWithIdOnly = await prisma.categoryProduct.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CategoryProduct.
     * @param {CategoryProductCreateArgs} args - Arguments to create a CategoryProduct.
     * @example
     * // Create one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.create({
     *   data: {
     *     // ... data to create a CategoryProduct
     *   }
     * })
     * 
    **/
    create<T extends CategoryProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductCreateArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CategoryProducts.
     *     @param {CategoryProductCreateManyArgs} args - Arguments to create many CategoryProducts.
     *     @example
     *     // Create many CategoryProducts
     *     const categoryProduct = await prisma.categoryProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryProduct.
     * @param {CategoryProductDeleteArgs} args - Arguments to delete one CategoryProduct.
     * @example
     * // Delete one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.delete({
     *   where: {
     *     // ... filter to delete one CategoryProduct
     *   }
     * })
     * 
    **/
    delete<T extends CategoryProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductDeleteArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CategoryProduct.
     * @param {CategoryProductUpdateArgs} args - Arguments to update one CategoryProduct.
     * @example
     * // Update one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductUpdateArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CategoryProducts.
     * @param {CategoryProductDeleteManyArgs} args - Arguments to filter CategoryProducts to delete.
     * @example
     * // Delete a few CategoryProducts
     * const { count } = await prisma.categoryProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryProducts
     * const categoryProduct = await prisma.categoryProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryProduct.
     * @param {CategoryProductUpsertArgs} args - Arguments to update or create a CategoryProduct.
     * @example
     * // Update or create a CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.upsert({
     *   create: {
     *     // ... data to create a CategoryProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryProduct we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryProductUpsertArgs<ExtArgs>>
    ): Prisma__CategoryProductClient<$Result.GetResult<Prisma.$CategoryProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductCountArgs} args - Arguments to filter CategoryProducts to count.
     * @example
     * // Count the number of CategoryProducts
     * const count = await prisma.categoryProduct.count({
     *   where: {
     *     // ... the filter for the CategoryProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoryProductCountArgs>(
      args?: Subset<T, CategoryProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryProductAggregateArgs>(args: Subset<T, CategoryProductAggregateArgs>): Prisma.PrismaPromise<GetCategoryProductAggregateType<T>>

    /**
     * Group by CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductGroupByArgs} args - Group by arguments.
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
      T extends CategoryProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryProductGroupByArgs['orderBy'] }
        : { orderBy?: CategoryProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryProduct model
   */
  readonly fields: CategoryProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CategoryProduct model
   */ 
  interface CategoryProductFieldRefs {
    readonly id: FieldRef<"CategoryProduct", 'Int'>
    readonly label: FieldRef<"CategoryProduct", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CategoryProduct findUnique
   */
  export type CategoryProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter, which CategoryProduct to fetch.
     */
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct findUniqueOrThrow
   */
  export type CategoryProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter, which CategoryProduct to fetch.
     */
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct findFirst
   */
  export type CategoryProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter, which CategoryProduct to fetch.
     */
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductOrderByWithRelationInput | CategoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryProducts.
     */
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     */
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }


  /**
   * CategoryProduct findFirstOrThrow
   */
  export type CategoryProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter, which CategoryProduct to fetch.
     */
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductOrderByWithRelationInput | CategoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryProducts.
     */
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     */
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }


  /**
   * CategoryProduct findMany
   */
  export type CategoryProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductOrderByWithRelationInput | CategoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryProducts.
     */
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }


  /**
   * CategoryProduct create
   */
  export type CategoryProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * The data needed to create a CategoryProduct.
     */
    data: XOR<CategoryProductCreateInput, CategoryProductUncheckedCreateInput>
  }


  /**
   * CategoryProduct createMany
   */
  export type CategoryProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryProducts.
     */
    data: CategoryProductCreateManyInput | CategoryProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CategoryProduct update
   */
  export type CategoryProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * The data needed to update a CategoryProduct.
     */
    data: XOR<CategoryProductUpdateInput, CategoryProductUncheckedUpdateInput>
    /**
     * Choose, which CategoryProduct to update.
     */
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct updateMany
   */
  export type CategoryProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryProducts.
     */
    data: XOR<CategoryProductUpdateManyMutationInput, CategoryProductUncheckedUpdateManyInput>
    /**
     * Filter which CategoryProducts to update
     */
    where?: CategoryProductWhereInput
  }


  /**
   * CategoryProduct upsert
   */
  export type CategoryProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * The filter to search for the CategoryProduct to update in case it exists.
     */
    where: CategoryProductWhereUniqueInput
    /**
     * In case the CategoryProduct found by the `where` argument doesn't exist, create a new CategoryProduct with this data.
     */
    create: XOR<CategoryProductCreateInput, CategoryProductUncheckedCreateInput>
    /**
     * In case the CategoryProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryProductUpdateInput, CategoryProductUncheckedUpdateInput>
  }


  /**
   * CategoryProduct delete
   */
  export type CategoryProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
    /**
     * Filter which CategoryProduct to delete.
     */
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct deleteMany
   */
  export type CategoryProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryProducts to delete
     */
    where?: CategoryProductWhereInput
  }


  /**
   * CategoryProduct without action
   */
  export type CategoryProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     */
    select?: CategoryProductSelect<ExtArgs> | null
  }



  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    label: string | null
    weight: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    label: string | null
    weight: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    label: number
    weight: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
    weight?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
    weight?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    label?: true
    weight?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    label?: true
    weight?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    label?: true
    weight?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    label: string
    weight: number | null
    created_at: Date
    updated_at: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
    meals?: boolean | Ingredient$mealsArgs<ExtArgs>
    stockOfIngredients?: boolean | Ingredient$stockOfIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    label?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | Ingredient$mealsArgs<ExtArgs>
    stockOfIngredients?: boolean | Ingredient$stockOfIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      meals: Prisma.$IngredientsOnMealsPayload<ExtArgs>[]
      stockOfIngredients: Prisma.$StockOfIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      weight: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }


  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ingredient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IngredientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
    **/
    create<T extends IngredientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ingredients.
     *     @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     *     @example
     *     // Create many Ingredients
     *     const ingredient = await prisma.ingredient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
    **/
    delete<T extends IngredientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    meals<T extends Ingredient$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findMany'> | Null>;

    stockOfIngredients<T extends Ingredient$stockOfIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$stockOfIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ingredient model
   */ 
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly label: FieldRef<"Ingredient", 'String'>
    readonly weight: FieldRef<"Ingredient", 'Float'>
    readonly created_at: FieldRef<"Ingredient", 'DateTime'>
    readonly updated_at: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }


  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
  }


  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }


  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
  }


  /**
   * Ingredient.meals
   */
  export type Ingredient$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    where?: IngredientsOnMealsWhereInput
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    cursor?: IngredientsOnMealsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsOnMealsScalarFieldEnum | IngredientsOnMealsScalarFieldEnum[]
  }


  /**
   * Ingredient.stockOfIngredients
   */
  export type Ingredient$stockOfIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    where?: StockOfIngredientsWhereInput
    orderBy?: StockOfIngredientsOrderByWithRelationInput | StockOfIngredientsOrderByWithRelationInput[]
    cursor?: StockOfIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockOfIngredientsScalarFieldEnum | StockOfIngredientsScalarFieldEnum[]
  }


  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
  }



  /**
   * Model IngredientsOnMeals
   */

  export type AggregateIngredientsOnMeals = {
    _count: IngredientsOnMealsCountAggregateOutputType | null
    _avg: IngredientsOnMealsAvgAggregateOutputType | null
    _sum: IngredientsOnMealsSumAggregateOutputType | null
    _min: IngredientsOnMealsMinAggregateOutputType | null
    _max: IngredientsOnMealsMaxAggregateOutputType | null
  }

  export type IngredientsOnMealsAvgAggregateOutputType = {
    ingredient_id: number | null
    meal_id: number | null
  }

  export type IngredientsOnMealsSumAggregateOutputType = {
    ingredient_id: number | null
    meal_id: number | null
  }

  export type IngredientsOnMealsMinAggregateOutputType = {
    ingredient_id: number | null
    meal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientsOnMealsMaxAggregateOutputType = {
    ingredient_id: number | null
    meal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientsOnMealsCountAggregateOutputType = {
    ingredient_id: number
    meal_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IngredientsOnMealsAvgAggregateInputType = {
    ingredient_id?: true
    meal_id?: true
  }

  export type IngredientsOnMealsSumAggregateInputType = {
    ingredient_id?: true
    meal_id?: true
  }

  export type IngredientsOnMealsMinAggregateInputType = {
    ingredient_id?: true
    meal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientsOnMealsMaxAggregateInputType = {
    ingredient_id?: true
    meal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientsOnMealsCountAggregateInputType = {
    ingredient_id?: true
    meal_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IngredientsOnMealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientsOnMeals to aggregate.
     */
    where?: IngredientsOnMealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsOnMeals to fetch.
     */
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsOnMealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsOnMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsOnMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientsOnMeals
    **/
    _count?: true | IngredientsOnMealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsOnMealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsOnMealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsOnMealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsOnMealsMaxAggregateInputType
  }

  export type GetIngredientsOnMealsAggregateType<T extends IngredientsOnMealsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientsOnMeals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientsOnMeals[P]>
      : GetScalarType<T[P], AggregateIngredientsOnMeals[P]>
  }




  export type IngredientsOnMealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsOnMealsWhereInput
    orderBy?: IngredientsOnMealsOrderByWithAggregationInput | IngredientsOnMealsOrderByWithAggregationInput[]
    by: IngredientsOnMealsScalarFieldEnum[] | IngredientsOnMealsScalarFieldEnum
    having?: IngredientsOnMealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsOnMealsCountAggregateInputType | true
    _avg?: IngredientsOnMealsAvgAggregateInputType
    _sum?: IngredientsOnMealsSumAggregateInputType
    _min?: IngredientsOnMealsMinAggregateInputType
    _max?: IngredientsOnMealsMaxAggregateInputType
  }

  export type IngredientsOnMealsGroupByOutputType = {
    ingredient_id: number
    meal_id: number
    created_at: Date
    updated_at: Date
    _count: IngredientsOnMealsCountAggregateOutputType | null
    _avg: IngredientsOnMealsAvgAggregateOutputType | null
    _sum: IngredientsOnMealsSumAggregateOutputType | null
    _min: IngredientsOnMealsMinAggregateOutputType | null
    _max: IngredientsOnMealsMaxAggregateOutputType | null
  }

  type GetIngredientsOnMealsGroupByPayload<T extends IngredientsOnMealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsOnMealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsOnMealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsOnMealsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsOnMealsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsOnMealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredient_id?: boolean
    meal_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientsOnMeals"]>

  export type IngredientsOnMealsSelectScalar = {
    ingredient_id?: boolean
    meal_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IngredientsOnMealsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }


  export type $IngredientsOnMealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientsOnMeals"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ingredient_id: number
      meal_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ingredientsOnMeals"]>
    composites: {}
  }


  type IngredientsOnMealsGetPayload<S extends boolean | null | undefined | IngredientsOnMealsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsOnMealsPayload, S>

  type IngredientsOnMealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientsOnMealsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientsOnMealsCountAggregateInputType | true
    }

  export interface IngredientsOnMealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientsOnMeals'], meta: { name: 'IngredientsOnMeals' } }
    /**
     * Find zero or one IngredientsOnMeals that matches the filter.
     * @param {IngredientsOnMealsFindUniqueArgs} args - Arguments to find a IngredientsOnMeals
     * @example
     * // Get one IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientsOnMealsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IngredientsOnMeals that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientsOnMealsFindUniqueOrThrowArgs} args - Arguments to find a IngredientsOnMeals
     * @example
     * // Get one IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientsOnMealsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IngredientsOnMeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsFindFirstArgs} args - Arguments to find a IngredientsOnMeals
     * @example
     * // Get one IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientsOnMealsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IngredientsOnMeals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsFindFirstOrThrowArgs} args - Arguments to find a IngredientsOnMeals
     * @example
     * // Get one IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientsOnMealsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IngredientsOnMeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findMany()
     * 
     * // Get first 10 IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.findMany({ take: 10 })
     * 
     * // Only select the `ingredient_id`
     * const ingredientsOnMealsWithIngredient_idOnly = await prisma.ingredientsOnMeals.findMany({ select: { ingredient_id: true } })
     * 
    **/
    findMany<T extends IngredientsOnMealsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IngredientsOnMeals.
     * @param {IngredientsOnMealsCreateArgs} args - Arguments to create a IngredientsOnMeals.
     * @example
     * // Create one IngredientsOnMeals
     * const IngredientsOnMeals = await prisma.ingredientsOnMeals.create({
     *   data: {
     *     // ... data to create a IngredientsOnMeals
     *   }
     * })
     * 
    **/
    create<T extends IngredientsOnMealsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsCreateArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IngredientsOnMeals.
     *     @param {IngredientsOnMealsCreateManyArgs} args - Arguments to create many IngredientsOnMeals.
     *     @example
     *     // Create many IngredientsOnMeals
     *     const ingredientsOnMeals = await prisma.ingredientsOnMeals.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientsOnMealsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IngredientsOnMeals.
     * @param {IngredientsOnMealsDeleteArgs} args - Arguments to delete one IngredientsOnMeals.
     * @example
     * // Delete one IngredientsOnMeals
     * const IngredientsOnMeals = await prisma.ingredientsOnMeals.delete({
     *   where: {
     *     // ... filter to delete one IngredientsOnMeals
     *   }
     * })
     * 
    **/
    delete<T extends IngredientsOnMealsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsDeleteArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IngredientsOnMeals.
     * @param {IngredientsOnMealsUpdateArgs} args - Arguments to update one IngredientsOnMeals.
     * @example
     * // Update one IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientsOnMealsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsUpdateArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IngredientsOnMeals.
     * @param {IngredientsOnMealsDeleteManyArgs} args - Arguments to filter IngredientsOnMeals to delete.
     * @example
     * // Delete a few IngredientsOnMeals
     * const { count } = await prisma.ingredientsOnMeals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientsOnMealsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsOnMealsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientsOnMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientsOnMealsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngredientsOnMeals.
     * @param {IngredientsOnMealsUpsertArgs} args - Arguments to update or create a IngredientsOnMeals.
     * @example
     * // Update or create a IngredientsOnMeals
     * const ingredientsOnMeals = await prisma.ingredientsOnMeals.upsert({
     *   create: {
     *     // ... data to create a IngredientsOnMeals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientsOnMeals we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientsOnMealsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsOnMealsUpsertArgs<ExtArgs>>
    ): Prisma__IngredientsOnMealsClient<$Result.GetResult<Prisma.$IngredientsOnMealsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IngredientsOnMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsCountArgs} args - Arguments to filter IngredientsOnMeals to count.
     * @example
     * // Count the number of IngredientsOnMeals
     * const count = await prisma.ingredientsOnMeals.count({
     *   where: {
     *     // ... the filter for the IngredientsOnMeals we want to count
     *   }
     * })
    **/
    count<T extends IngredientsOnMealsCountArgs>(
      args?: Subset<T, IngredientsOnMealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsOnMealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientsOnMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientsOnMealsAggregateArgs>(args: Subset<T, IngredientsOnMealsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsOnMealsAggregateType<T>>

    /**
     * Group by IngredientsOnMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsOnMealsGroupByArgs} args - Group by arguments.
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
      T extends IngredientsOnMealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsOnMealsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsOnMealsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientsOnMealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsOnMealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientsOnMeals model
   */
  readonly fields: IngredientsOnMealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientsOnMeals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsOnMealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IngredientsOnMeals model
   */ 
  interface IngredientsOnMealsFieldRefs {
    readonly ingredient_id: FieldRef<"IngredientsOnMeals", 'Int'>
    readonly meal_id: FieldRef<"IngredientsOnMeals", 'Int'>
    readonly created_at: FieldRef<"IngredientsOnMeals", 'DateTime'>
    readonly updated_at: FieldRef<"IngredientsOnMeals", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * IngredientsOnMeals findUnique
   */
  export type IngredientsOnMealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsOnMeals to fetch.
     */
    where: IngredientsOnMealsWhereUniqueInput
  }


  /**
   * IngredientsOnMeals findUniqueOrThrow
   */
  export type IngredientsOnMealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsOnMeals to fetch.
     */
    where: IngredientsOnMealsWhereUniqueInput
  }


  /**
   * IngredientsOnMeals findFirst
   */
  export type IngredientsOnMealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsOnMeals to fetch.
     */
    where?: IngredientsOnMealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsOnMeals to fetch.
     */
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientsOnMeals.
     */
    cursor?: IngredientsOnMealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsOnMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsOnMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientsOnMeals.
     */
    distinct?: IngredientsOnMealsScalarFieldEnum | IngredientsOnMealsScalarFieldEnum[]
  }


  /**
   * IngredientsOnMeals findFirstOrThrow
   */
  export type IngredientsOnMealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsOnMeals to fetch.
     */
    where?: IngredientsOnMealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsOnMeals to fetch.
     */
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientsOnMeals.
     */
    cursor?: IngredientsOnMealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsOnMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsOnMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientsOnMeals.
     */
    distinct?: IngredientsOnMealsScalarFieldEnum | IngredientsOnMealsScalarFieldEnum[]
  }


  /**
   * IngredientsOnMeals findMany
   */
  export type IngredientsOnMealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsOnMeals to fetch.
     */
    where?: IngredientsOnMealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsOnMeals to fetch.
     */
    orderBy?: IngredientsOnMealsOrderByWithRelationInput | IngredientsOnMealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientsOnMeals.
     */
    cursor?: IngredientsOnMealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsOnMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsOnMeals.
     */
    skip?: number
    distinct?: IngredientsOnMealsScalarFieldEnum | IngredientsOnMealsScalarFieldEnum[]
  }


  /**
   * IngredientsOnMeals create
   */
  export type IngredientsOnMealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientsOnMeals.
     */
    data: XOR<IngredientsOnMealsCreateInput, IngredientsOnMealsUncheckedCreateInput>
  }


  /**
   * IngredientsOnMeals createMany
   */
  export type IngredientsOnMealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientsOnMeals.
     */
    data: IngredientsOnMealsCreateManyInput | IngredientsOnMealsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IngredientsOnMeals update
   */
  export type IngredientsOnMealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientsOnMeals.
     */
    data: XOR<IngredientsOnMealsUpdateInput, IngredientsOnMealsUncheckedUpdateInput>
    /**
     * Choose, which IngredientsOnMeals to update.
     */
    where: IngredientsOnMealsWhereUniqueInput
  }


  /**
   * IngredientsOnMeals updateMany
   */
  export type IngredientsOnMealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientsOnMeals.
     */
    data: XOR<IngredientsOnMealsUpdateManyMutationInput, IngredientsOnMealsUncheckedUpdateManyInput>
    /**
     * Filter which IngredientsOnMeals to update
     */
    where?: IngredientsOnMealsWhereInput
  }


  /**
   * IngredientsOnMeals upsert
   */
  export type IngredientsOnMealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientsOnMeals to update in case it exists.
     */
    where: IngredientsOnMealsWhereUniqueInput
    /**
     * In case the IngredientsOnMeals found by the `where` argument doesn't exist, create a new IngredientsOnMeals with this data.
     */
    create: XOR<IngredientsOnMealsCreateInput, IngredientsOnMealsUncheckedCreateInput>
    /**
     * In case the IngredientsOnMeals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsOnMealsUpdateInput, IngredientsOnMealsUncheckedUpdateInput>
  }


  /**
   * IngredientsOnMeals delete
   */
  export type IngredientsOnMealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
    /**
     * Filter which IngredientsOnMeals to delete.
     */
    where: IngredientsOnMealsWhereUniqueInput
  }


  /**
   * IngredientsOnMeals deleteMany
   */
  export type IngredientsOnMealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientsOnMeals to delete
     */
    where?: IngredientsOnMealsWhereInput
  }


  /**
   * IngredientsOnMeals without action
   */
  export type IngredientsOnMealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsOnMeals
     */
    select?: IngredientsOnMealsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsOnMealsInclude<ExtArgs> | null
  }



  /**
   * Model StockOfIngredients
   */

  export type AggregateStockOfIngredients = {
    _count: StockOfIngredientsCountAggregateOutputType | null
    _avg: StockOfIngredientsAvgAggregateOutputType | null
    _sum: StockOfIngredientsSumAggregateOutputType | null
    _min: StockOfIngredientsMinAggregateOutputType | null
    _max: StockOfIngredientsMaxAggregateOutputType | null
  }

  export type StockOfIngredientsAvgAggregateOutputType = {
    ingredient_id: number | null
    amount: number | null
  }

  export type StockOfIngredientsSumAggregateOutputType = {
    ingredient_id: number | null
    amount: number | null
  }

  export type StockOfIngredientsMinAggregateOutputType = {
    ingredient_id: number | null
    amount: number | null
  }

  export type StockOfIngredientsMaxAggregateOutputType = {
    ingredient_id: number | null
    amount: number | null
  }

  export type StockOfIngredientsCountAggregateOutputType = {
    ingredient_id: number
    amount: number
    _all: number
  }


  export type StockOfIngredientsAvgAggregateInputType = {
    ingredient_id?: true
    amount?: true
  }

  export type StockOfIngredientsSumAggregateInputType = {
    ingredient_id?: true
    amount?: true
  }

  export type StockOfIngredientsMinAggregateInputType = {
    ingredient_id?: true
    amount?: true
  }

  export type StockOfIngredientsMaxAggregateInputType = {
    ingredient_id?: true
    amount?: true
  }

  export type StockOfIngredientsCountAggregateInputType = {
    ingredient_id?: true
    amount?: true
    _all?: true
  }

  export type StockOfIngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockOfIngredients to aggregate.
     */
    where?: StockOfIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOfIngredients to fetch.
     */
    orderBy?: StockOfIngredientsOrderByWithRelationInput | StockOfIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockOfIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOfIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOfIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockOfIngredients
    **/
    _count?: true | StockOfIngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockOfIngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockOfIngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockOfIngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockOfIngredientsMaxAggregateInputType
  }

  export type GetStockOfIngredientsAggregateType<T extends StockOfIngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateStockOfIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockOfIngredients[P]>
      : GetScalarType<T[P], AggregateStockOfIngredients[P]>
  }




  export type StockOfIngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockOfIngredientsWhereInput
    orderBy?: StockOfIngredientsOrderByWithAggregationInput | StockOfIngredientsOrderByWithAggregationInput[]
    by: StockOfIngredientsScalarFieldEnum[] | StockOfIngredientsScalarFieldEnum
    having?: StockOfIngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockOfIngredientsCountAggregateInputType | true
    _avg?: StockOfIngredientsAvgAggregateInputType
    _sum?: StockOfIngredientsSumAggregateInputType
    _min?: StockOfIngredientsMinAggregateInputType
    _max?: StockOfIngredientsMaxAggregateInputType
  }

  export type StockOfIngredientsGroupByOutputType = {
    ingredient_id: number
    amount: number
    _count: StockOfIngredientsCountAggregateOutputType | null
    _avg: StockOfIngredientsAvgAggregateOutputType | null
    _sum: StockOfIngredientsSumAggregateOutputType | null
    _min: StockOfIngredientsMinAggregateOutputType | null
    _max: StockOfIngredientsMaxAggregateOutputType | null
  }

  type GetStockOfIngredientsGroupByPayload<T extends StockOfIngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockOfIngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockOfIngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockOfIngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], StockOfIngredientsGroupByOutputType[P]>
        }
      >
    >


  export type StockOfIngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredient_id?: boolean
    amount?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockOfIngredients"]>

  export type StockOfIngredientsSelectScalar = {
    ingredient_id?: boolean
    amount?: boolean
  }

  export type StockOfIngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }


  export type $StockOfIngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockOfIngredients"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ingredient_id: number
      amount: number
    }, ExtArgs["result"]["stockOfIngredients"]>
    composites: {}
  }


  type StockOfIngredientsGetPayload<S extends boolean | null | undefined | StockOfIngredientsDefaultArgs> = $Result.GetResult<Prisma.$StockOfIngredientsPayload, S>

  type StockOfIngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockOfIngredientsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockOfIngredientsCountAggregateInputType | true
    }

  export interface StockOfIngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockOfIngredients'], meta: { name: 'StockOfIngredients' } }
    /**
     * Find zero or one StockOfIngredients that matches the filter.
     * @param {StockOfIngredientsFindUniqueArgs} args - Arguments to find a StockOfIngredients
     * @example
     * // Get one StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StockOfIngredientsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsFindUniqueArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StockOfIngredients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StockOfIngredientsFindUniqueOrThrowArgs} args - Arguments to find a StockOfIngredients
     * @example
     * // Get one StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StockOfIngredientsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StockOfIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsFindFirstArgs} args - Arguments to find a StockOfIngredients
     * @example
     * // Get one StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StockOfIngredientsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsFindFirstArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StockOfIngredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsFindFirstOrThrowArgs} args - Arguments to find a StockOfIngredients
     * @example
     * // Get one StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StockOfIngredientsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StockOfIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findMany()
     * 
     * // Get first 10 StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.findMany({ take: 10 })
     * 
     * // Only select the `ingredient_id`
     * const stockOfIngredientsWithIngredient_idOnly = await prisma.stockOfIngredients.findMany({ select: { ingredient_id: true } })
     * 
    **/
    findMany<T extends StockOfIngredientsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StockOfIngredients.
     * @param {StockOfIngredientsCreateArgs} args - Arguments to create a StockOfIngredients.
     * @example
     * // Create one StockOfIngredients
     * const StockOfIngredients = await prisma.stockOfIngredients.create({
     *   data: {
     *     // ... data to create a StockOfIngredients
     *   }
     * })
     * 
    **/
    create<T extends StockOfIngredientsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsCreateArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StockOfIngredients.
     *     @param {StockOfIngredientsCreateManyArgs} args - Arguments to create many StockOfIngredients.
     *     @example
     *     // Create many StockOfIngredients
     *     const stockOfIngredients = await prisma.stockOfIngredients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StockOfIngredientsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockOfIngredients.
     * @param {StockOfIngredientsDeleteArgs} args - Arguments to delete one StockOfIngredients.
     * @example
     * // Delete one StockOfIngredients
     * const StockOfIngredients = await prisma.stockOfIngredients.delete({
     *   where: {
     *     // ... filter to delete one StockOfIngredients
     *   }
     * })
     * 
    **/
    delete<T extends StockOfIngredientsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsDeleteArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StockOfIngredients.
     * @param {StockOfIngredientsUpdateArgs} args - Arguments to update one StockOfIngredients.
     * @example
     * // Update one StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StockOfIngredientsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsUpdateArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StockOfIngredients.
     * @param {StockOfIngredientsDeleteManyArgs} args - Arguments to filter StockOfIngredients to delete.
     * @example
     * // Delete a few StockOfIngredients
     * const { count } = await prisma.stockOfIngredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StockOfIngredientsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOfIngredientsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockOfIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StockOfIngredientsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockOfIngredients.
     * @param {StockOfIngredientsUpsertArgs} args - Arguments to update or create a StockOfIngredients.
     * @example
     * // Update or create a StockOfIngredients
     * const stockOfIngredients = await prisma.stockOfIngredients.upsert({
     *   create: {
     *     // ... data to create a StockOfIngredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockOfIngredients we want to update
     *   }
     * })
    **/
    upsert<T extends StockOfIngredientsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StockOfIngredientsUpsertArgs<ExtArgs>>
    ): Prisma__StockOfIngredientsClient<$Result.GetResult<Prisma.$StockOfIngredientsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StockOfIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsCountArgs} args - Arguments to filter StockOfIngredients to count.
     * @example
     * // Count the number of StockOfIngredients
     * const count = await prisma.stockOfIngredients.count({
     *   where: {
     *     // ... the filter for the StockOfIngredients we want to count
     *   }
     * })
    **/
    count<T extends StockOfIngredientsCountArgs>(
      args?: Subset<T, StockOfIngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockOfIngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockOfIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockOfIngredientsAggregateArgs>(args: Subset<T, StockOfIngredientsAggregateArgs>): Prisma.PrismaPromise<GetStockOfIngredientsAggregateType<T>>

    /**
     * Group by StockOfIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOfIngredientsGroupByArgs} args - Group by arguments.
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
      T extends StockOfIngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockOfIngredientsGroupByArgs['orderBy'] }
        : { orderBy?: StockOfIngredientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockOfIngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockOfIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockOfIngredients model
   */
  readonly fields: StockOfIngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockOfIngredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockOfIngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StockOfIngredients model
   */ 
  interface StockOfIngredientsFieldRefs {
    readonly ingredient_id: FieldRef<"StockOfIngredients", 'Int'>
    readonly amount: FieldRef<"StockOfIngredients", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * StockOfIngredients findUnique
   */
  export type StockOfIngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which StockOfIngredients to fetch.
     */
    where: StockOfIngredientsWhereUniqueInput
  }


  /**
   * StockOfIngredients findUniqueOrThrow
   */
  export type StockOfIngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which StockOfIngredients to fetch.
     */
    where: StockOfIngredientsWhereUniqueInput
  }


  /**
   * StockOfIngredients findFirst
   */
  export type StockOfIngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which StockOfIngredients to fetch.
     */
    where?: StockOfIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOfIngredients to fetch.
     */
    orderBy?: StockOfIngredientsOrderByWithRelationInput | StockOfIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockOfIngredients.
     */
    cursor?: StockOfIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOfIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOfIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockOfIngredients.
     */
    distinct?: StockOfIngredientsScalarFieldEnum | StockOfIngredientsScalarFieldEnum[]
  }


  /**
   * StockOfIngredients findFirstOrThrow
   */
  export type StockOfIngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which StockOfIngredients to fetch.
     */
    where?: StockOfIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOfIngredients to fetch.
     */
    orderBy?: StockOfIngredientsOrderByWithRelationInput | StockOfIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockOfIngredients.
     */
    cursor?: StockOfIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOfIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOfIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockOfIngredients.
     */
    distinct?: StockOfIngredientsScalarFieldEnum | StockOfIngredientsScalarFieldEnum[]
  }


  /**
   * StockOfIngredients findMany
   */
  export type StockOfIngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which StockOfIngredients to fetch.
     */
    where?: StockOfIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOfIngredients to fetch.
     */
    orderBy?: StockOfIngredientsOrderByWithRelationInput | StockOfIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockOfIngredients.
     */
    cursor?: StockOfIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOfIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOfIngredients.
     */
    skip?: number
    distinct?: StockOfIngredientsScalarFieldEnum | StockOfIngredientsScalarFieldEnum[]
  }


  /**
   * StockOfIngredients create
   */
  export type StockOfIngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a StockOfIngredients.
     */
    data: XOR<StockOfIngredientsCreateInput, StockOfIngredientsUncheckedCreateInput>
  }


  /**
   * StockOfIngredients createMany
   */
  export type StockOfIngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockOfIngredients.
     */
    data: StockOfIngredientsCreateManyInput | StockOfIngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StockOfIngredients update
   */
  export type StockOfIngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a StockOfIngredients.
     */
    data: XOR<StockOfIngredientsUpdateInput, StockOfIngredientsUncheckedUpdateInput>
    /**
     * Choose, which StockOfIngredients to update.
     */
    where: StockOfIngredientsWhereUniqueInput
  }


  /**
   * StockOfIngredients updateMany
   */
  export type StockOfIngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockOfIngredients.
     */
    data: XOR<StockOfIngredientsUpdateManyMutationInput, StockOfIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which StockOfIngredients to update
     */
    where?: StockOfIngredientsWhereInput
  }


  /**
   * StockOfIngredients upsert
   */
  export type StockOfIngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the StockOfIngredients to update in case it exists.
     */
    where: StockOfIngredientsWhereUniqueInput
    /**
     * In case the StockOfIngredients found by the `where` argument doesn't exist, create a new StockOfIngredients with this data.
     */
    create: XOR<StockOfIngredientsCreateInput, StockOfIngredientsUncheckedCreateInput>
    /**
     * In case the StockOfIngredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockOfIngredientsUpdateInput, StockOfIngredientsUncheckedUpdateInput>
  }


  /**
   * StockOfIngredients delete
   */
  export type StockOfIngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
    /**
     * Filter which StockOfIngredients to delete.
     */
    where: StockOfIngredientsWhereUniqueInput
  }


  /**
   * StockOfIngredients deleteMany
   */
  export type StockOfIngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockOfIngredients to delete
     */
    where?: StockOfIngredientsWhereInput
  }


  /**
   * StockOfIngredients without action
   */
  export type StockOfIngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOfIngredients
     */
    select?: StockOfIngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOfIngredientsInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    status: number | null
    user_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    status: number | null
    user_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    status: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    status: number
    created_at: Date
    updated_at: Date
    user_id: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductsOrderedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: number
      created_at: Date
      updated_at: Date
      user_id: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Order$productsArgs<ExtArgs> = {}>(args?: Subset<T, Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'Int'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
    readonly user_id: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.products
   */
  export type Order$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    where?: ProductsOrderedWhereInput
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    cursor?: ProductsOrderedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOrderedScalarFieldEnum | ProductsOrderedScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model ProductsOrdered
   */

  export type AggregateProductsOrdered = {
    _count: ProductsOrderedCountAggregateOutputType | null
    _avg: ProductsOrderedAvgAggregateOutputType | null
    _sum: ProductsOrderedSumAggregateOutputType | null
    _min: ProductsOrderedMinAggregateOutputType | null
    _max: ProductsOrderedMaxAggregateOutputType | null
  }

  export type ProductsOrderedAvgAggregateOutputType = {
    order_id: number | null
    product_id: number | null
  }

  export type ProductsOrderedSumAggregateOutputType = {
    order_id: number | null
    product_id: number | null
  }

  export type ProductsOrderedMinAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsOrderedMaxAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsOrderedCountAggregateOutputType = {
    order_id: number
    product_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsOrderedAvgAggregateInputType = {
    order_id?: true
    product_id?: true
  }

  export type ProductsOrderedSumAggregateInputType = {
    order_id?: true
    product_id?: true
  }

  export type ProductsOrderedMinAggregateInputType = {
    order_id?: true
    product_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsOrderedMaxAggregateInputType = {
    order_id?: true
    product_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsOrderedCountAggregateInputType = {
    order_id?: true
    product_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsOrderedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOrdered to aggregate.
     */
    where?: ProductsOrderedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrdereds to fetch.
     */
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsOrderedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrdereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrdereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOrdereds
    **/
    _count?: true | ProductsOrderedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsOrderedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsOrderedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOrderedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOrderedMaxAggregateInputType
  }

  export type GetProductsOrderedAggregateType<T extends ProductsOrderedAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOrdered]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOrdered[P]>
      : GetScalarType<T[P], AggregateProductsOrdered[P]>
  }




  export type ProductsOrderedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOrderedWhereInput
    orderBy?: ProductsOrderedOrderByWithAggregationInput | ProductsOrderedOrderByWithAggregationInput[]
    by: ProductsOrderedScalarFieldEnum[] | ProductsOrderedScalarFieldEnum
    having?: ProductsOrderedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOrderedCountAggregateInputType | true
    _avg?: ProductsOrderedAvgAggregateInputType
    _sum?: ProductsOrderedSumAggregateInputType
    _min?: ProductsOrderedMinAggregateInputType
    _max?: ProductsOrderedMaxAggregateInputType
  }

  export type ProductsOrderedGroupByOutputType = {
    order_id: number
    product_id: number
    created_at: Date
    updated_at: Date
    _count: ProductsOrderedCountAggregateOutputType | null
    _avg: ProductsOrderedAvgAggregateOutputType | null
    _sum: ProductsOrderedSumAggregateOutputType | null
    _min: ProductsOrderedMinAggregateOutputType | null
    _max: ProductsOrderedMaxAggregateOutputType | null
  }

  type GetProductsOrderedGroupByPayload<T extends ProductsOrderedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsOrderedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOrderedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOrderedGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOrderedGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOrderedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOrdered"]>

  export type ProductsOrderedSelectScalar = {
    order_id?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOrderedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | MealDefaultArgs<ExtArgs>
  }


  export type $ProductsOrderedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsOrdered"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      product_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productsOrdered"]>
    composites: {}
  }


  type ProductsOrderedGetPayload<S extends boolean | null | undefined | ProductsOrderedDefaultArgs> = $Result.GetResult<Prisma.$ProductsOrderedPayload, S>

  type ProductsOrderedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsOrderedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsOrderedCountAggregateInputType | true
    }

  export interface ProductsOrderedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsOrdered'], meta: { name: 'ProductsOrdered' } }
    /**
     * Find zero or one ProductsOrdered that matches the filter.
     * @param {ProductsOrderedFindUniqueArgs} args - Arguments to find a ProductsOrdered
     * @example
     * // Get one ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsOrderedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductsOrdered that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsOrderedFindUniqueOrThrowArgs} args - Arguments to find a ProductsOrdered
     * @example
     * // Get one ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsOrderedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductsOrdered that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedFindFirstArgs} args - Arguments to find a ProductsOrdered
     * @example
     * // Get one ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsOrderedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedFindFirstArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductsOrdered that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedFindFirstOrThrowArgs} args - Arguments to find a ProductsOrdered
     * @example
     * // Get one ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsOrderedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductsOrdereds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOrdereds
     * const productsOrdereds = await prisma.productsOrdered.findMany()
     * 
     * // Get first 10 ProductsOrdereds
     * const productsOrdereds = await prisma.productsOrdered.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const productsOrderedWithOrder_idOnly = await prisma.productsOrdered.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends ProductsOrderedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductsOrdered.
     * @param {ProductsOrderedCreateArgs} args - Arguments to create a ProductsOrdered.
     * @example
     * // Create one ProductsOrdered
     * const ProductsOrdered = await prisma.productsOrdered.create({
     *   data: {
     *     // ... data to create a ProductsOrdered
     *   }
     * })
     * 
    **/
    create<T extends ProductsOrderedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedCreateArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductsOrdereds.
     *     @param {ProductsOrderedCreateManyArgs} args - Arguments to create many ProductsOrdereds.
     *     @example
     *     // Create many ProductsOrdereds
     *     const productsOrdered = await prisma.productsOrdered.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsOrderedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductsOrdered.
     * @param {ProductsOrderedDeleteArgs} args - Arguments to delete one ProductsOrdered.
     * @example
     * // Delete one ProductsOrdered
     * const ProductsOrdered = await prisma.productsOrdered.delete({
     *   where: {
     *     // ... filter to delete one ProductsOrdered
     *   }
     * })
     * 
    **/
    delete<T extends ProductsOrderedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedDeleteArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductsOrdered.
     * @param {ProductsOrderedUpdateArgs} args - Arguments to update one ProductsOrdered.
     * @example
     * // Update one ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsOrderedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedUpdateArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductsOrdereds.
     * @param {ProductsOrderedDeleteManyArgs} args - Arguments to filter ProductsOrdereds to delete.
     * @example
     * // Delete a few ProductsOrdereds
     * const { count } = await prisma.productsOrdered.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsOrderedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsOrderedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOrdereds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOrdereds
     * const productsOrdered = await prisma.productsOrdered.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsOrderedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductsOrdered.
     * @param {ProductsOrderedUpsertArgs} args - Arguments to update or create a ProductsOrdered.
     * @example
     * // Update or create a ProductsOrdered
     * const productsOrdered = await prisma.productsOrdered.upsert({
     *   create: {
     *     // ... data to create a ProductsOrdered
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOrdered we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsOrderedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsOrderedUpsertArgs<ExtArgs>>
    ): Prisma__ProductsOrderedClient<$Result.GetResult<Prisma.$ProductsOrderedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductsOrdereds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedCountArgs} args - Arguments to filter ProductsOrdereds to count.
     * @example
     * // Count the number of ProductsOrdereds
     * const count = await prisma.productsOrdered.count({
     *   where: {
     *     // ... the filter for the ProductsOrdereds we want to count
     *   }
     * })
    **/
    count<T extends ProductsOrderedCountArgs>(
      args?: Subset<T, ProductsOrderedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOrderedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOrdered.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsOrderedAggregateArgs>(args: Subset<T, ProductsOrderedAggregateArgs>): Prisma.PrismaPromise<GetProductsOrderedAggregateType<T>>

    /**
     * Group by ProductsOrdered.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrderedGroupByArgs} args - Group by arguments.
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
      T extends ProductsOrderedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOrderedGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOrderedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsOrderedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOrderedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsOrdered model
   */
  readonly fields: ProductsOrderedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOrdered.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsOrderedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductsOrdered model
   */ 
  interface ProductsOrderedFieldRefs {
    readonly order_id: FieldRef<"ProductsOrdered", 'Int'>
    readonly product_id: FieldRef<"ProductsOrdered", 'Int'>
    readonly created_at: FieldRef<"ProductsOrdered", 'DateTime'>
    readonly updated_at: FieldRef<"ProductsOrdered", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProductsOrdered findUnique
   */
  export type ProductsOrderedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrdered to fetch.
     */
    where: ProductsOrderedWhereUniqueInput
  }


  /**
   * ProductsOrdered findUniqueOrThrow
   */
  export type ProductsOrderedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrdered to fetch.
     */
    where: ProductsOrderedWhereUniqueInput
  }


  /**
   * ProductsOrdered findFirst
   */
  export type ProductsOrderedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrdered to fetch.
     */
    where?: ProductsOrderedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrdereds to fetch.
     */
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOrdereds.
     */
    cursor?: ProductsOrderedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrdereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrdereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOrdereds.
     */
    distinct?: ProductsOrderedScalarFieldEnum | ProductsOrderedScalarFieldEnum[]
  }


  /**
   * ProductsOrdered findFirstOrThrow
   */
  export type ProductsOrderedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrdered to fetch.
     */
    where?: ProductsOrderedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrdereds to fetch.
     */
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOrdereds.
     */
    cursor?: ProductsOrderedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrdereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrdereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOrdereds.
     */
    distinct?: ProductsOrderedScalarFieldEnum | ProductsOrderedScalarFieldEnum[]
  }


  /**
   * ProductsOrdered findMany
   */
  export type ProductsOrderedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrdereds to fetch.
     */
    where?: ProductsOrderedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrdereds to fetch.
     */
    orderBy?: ProductsOrderedOrderByWithRelationInput | ProductsOrderedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOrdereds.
     */
    cursor?: ProductsOrderedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrdereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrdereds.
     */
    skip?: number
    distinct?: ProductsOrderedScalarFieldEnum | ProductsOrderedScalarFieldEnum[]
  }


  /**
   * ProductsOrdered create
   */
  export type ProductsOrderedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsOrdered.
     */
    data: XOR<ProductsOrderedCreateInput, ProductsOrderedUncheckedCreateInput>
  }


  /**
   * ProductsOrdered createMany
   */
  export type ProductsOrderedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsOrdereds.
     */
    data: ProductsOrderedCreateManyInput | ProductsOrderedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductsOrdered update
   */
  export type ProductsOrderedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsOrdered.
     */
    data: XOR<ProductsOrderedUpdateInput, ProductsOrderedUncheckedUpdateInput>
    /**
     * Choose, which ProductsOrdered to update.
     */
    where: ProductsOrderedWhereUniqueInput
  }


  /**
   * ProductsOrdered updateMany
   */
  export type ProductsOrderedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsOrdereds.
     */
    data: XOR<ProductsOrderedUpdateManyMutationInput, ProductsOrderedUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOrdereds to update
     */
    where?: ProductsOrderedWhereInput
  }


  /**
   * ProductsOrdered upsert
   */
  export type ProductsOrderedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsOrdered to update in case it exists.
     */
    where: ProductsOrderedWhereUniqueInput
    /**
     * In case the ProductsOrdered found by the `where` argument doesn't exist, create a new ProductsOrdered with this data.
     */
    create: XOR<ProductsOrderedCreateInput, ProductsOrderedUncheckedCreateInput>
    /**
     * In case the ProductsOrdered was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsOrderedUpdateInput, ProductsOrderedUncheckedUpdateInput>
  }


  /**
   * ProductsOrdered delete
   */
  export type ProductsOrderedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
    /**
     * Filter which ProductsOrdered to delete.
     */
    where: ProductsOrderedWhereUniqueInput
  }


  /**
   * ProductsOrdered deleteMany
   */
  export type ProductsOrderedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOrdereds to delete
     */
    where?: ProductsOrderedWhereInput
  }


  /**
   * ProductsOrdered without action
   */
  export type ProductsOrderedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdered
     */
    select?: ProductsOrderedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsOrderedInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    compoundId: 'compoundId',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userRoleId: 'userRoleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationRequestScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationRequestScalarFieldEnum = (typeof VerificationRequestScalarFieldEnum)[keyof typeof VerificationRequestScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    label: 'label',
    price: 'price',
    amountAvailable: 'amountAvailable',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const CategoryProductScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type CategoryProductScalarFieldEnum = (typeof CategoryProductScalarFieldEnum)[keyof typeof CategoryProductScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    label: 'label',
    weight: 'weight',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const IngredientsOnMealsScalarFieldEnum: {
    ingredient_id: 'ingredient_id',
    meal_id: 'meal_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IngredientsOnMealsScalarFieldEnum = (typeof IngredientsOnMealsScalarFieldEnum)[keyof typeof IngredientsOnMealsScalarFieldEnum]


  export const StockOfIngredientsScalarFieldEnum: {
    ingredient_id: 'ingredient_id',
    amount: 'amount'
  };

  export type StockOfIngredientsScalarFieldEnum = (typeof StockOfIngredientsScalarFieldEnum)[keyof typeof StockOfIngredientsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductsOrderedScalarFieldEnum: {
    order_id: 'order_id',
    product_id: 'product_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsOrderedScalarFieldEnum = (typeof ProductsOrderedScalarFieldEnum)[keyof typeof ProductsOrderedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    compoundId?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    compoundId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }, "id" | "compoundId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    compoundId?: StringWithAggregatesFilter<"Account"> | string
    userId?: IntWithAggregatesFilter<"Account"> | number
    providerType?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionToken?: string
    accessToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sessionToken" | "accessToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    userId?: IntWithAggregatesFilter<"Session"> | number
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userRoleId?: IntNullableFilter<"User"> | number | null
    UserRole?: XOR<UserRoleNullableRelationFilter, UserRoleWhereInput> | null
    Order?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoleId?: SortOrderInput | SortOrder
    UserRole?: UserRoleOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userRoleId?: IntNullableFilter<"User"> | number | null
    UserRole?: XOR<UserRoleNullableRelationFilter, UserRoleWhereInput> | null
    Order?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoleId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userRoleId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type VerificationRequestWhereInput = {
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    id?: IntFilter<"VerificationRequest"> | number
    identifier?: StringFilter<"VerificationRequest"> | string
    token?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }

  export type VerificationRequestOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    identifier?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }, "id" | "token">

  export type VerificationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationRequestCountOrderByAggregateInput
    _avg?: VerificationRequestAvgOrderByAggregateInput
    _max?: VerificationRequestMaxOrderByAggregateInput
    _min?: VerificationRequestMinOrderByAggregateInput
    _sum?: VerificationRequestSumOrderByAggregateInput
  }

  export type VerificationRequestScalarWhereWithAggregatesInput = {
    AND?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    OR?: VerificationRequestScalarWhereWithAggregatesInput[]
    NOT?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationRequest"> | number
    identifier?: StringWithAggregatesFilter<"VerificationRequest"> | string
    token?: StringWithAggregatesFilter<"VerificationRequest"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    label?: StringFilter<"UserRole"> | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    label?: StringFilter<"UserRole"> | string
    users?: UserListRelationFilter
  }, "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    label?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    label?: StringFilter<"Meal"> | string
    price?: FloatFilter<"Meal"> | number
    amountAvailable?: IntNullableFilter<"Meal"> | number | null
    description?: StringNullableFilter<"Meal"> | string | null
    created_at?: DateTimeFilter<"Meal"> | Date | string
    updated_at?: DateTimeFilter<"Meal"> | Date | string
    ProductsOrdered?: ProductsOrderedListRelationFilter
    IngredientsOnMeals?: IngredientsOnMealsListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ProductsOrdered?: ProductsOrderedOrderByRelationAggregateInput
    IngredientsOnMeals?: IngredientsOnMealsOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    label?: StringFilter<"Meal"> | string
    price?: FloatFilter<"Meal"> | number
    amountAvailable?: IntNullableFilter<"Meal"> | number | null
    description?: StringNullableFilter<"Meal"> | string | null
    created_at?: DateTimeFilter<"Meal"> | Date | string
    updated_at?: DateTimeFilter<"Meal"> | Date | string
    ProductsOrdered?: ProductsOrderedListRelationFilter
    IngredientsOnMeals?: IngredientsOnMealsListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    label?: StringWithAggregatesFilter<"Meal"> | string
    price?: FloatWithAggregatesFilter<"Meal"> | number
    amountAvailable?: IntNullableWithAggregatesFilter<"Meal"> | number | null
    description?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type CategoryProductWhereInput = {
    AND?: CategoryProductWhereInput | CategoryProductWhereInput[]
    OR?: CategoryProductWhereInput[]
    NOT?: CategoryProductWhereInput | CategoryProductWhereInput[]
    id?: IntFilter<"CategoryProduct"> | number
    label?: StringFilter<"CategoryProduct"> | string
  }

  export type CategoryProductOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryProductWhereInput | CategoryProductWhereInput[]
    OR?: CategoryProductWhereInput[]
    NOT?: CategoryProductWhereInput | CategoryProductWhereInput[]
    label?: StringFilter<"CategoryProduct"> | string
  }, "id">

  export type CategoryProductOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: CategoryProductCountOrderByAggregateInput
    _avg?: CategoryProductAvgOrderByAggregateInput
    _max?: CategoryProductMaxOrderByAggregateInput
    _min?: CategoryProductMinOrderByAggregateInput
    _sum?: CategoryProductSumOrderByAggregateInput
  }

  export type CategoryProductScalarWhereWithAggregatesInput = {
    AND?: CategoryProductScalarWhereWithAggregatesInput | CategoryProductScalarWhereWithAggregatesInput[]
    OR?: CategoryProductScalarWhereWithAggregatesInput[]
    NOT?: CategoryProductScalarWhereWithAggregatesInput | CategoryProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryProduct"> | number
    label?: StringWithAggregatesFilter<"CategoryProduct"> | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    label?: StringFilter<"Ingredient"> | string
    weight?: FloatNullableFilter<"Ingredient"> | number | null
    created_at?: DateTimeFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeFilter<"Ingredient"> | Date | string
    meals?: IngredientsOnMealsListRelationFilter
    stockOfIngredients?: StockOfIngredientsListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    weight?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    meals?: IngredientsOnMealsOrderByRelationAggregateInput
    stockOfIngredients?: StockOfIngredientsOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    label?: StringFilter<"Ingredient"> | string
    weight?: FloatNullableFilter<"Ingredient"> | number | null
    created_at?: DateTimeFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeFilter<"Ingredient"> | Date | string
    meals?: IngredientsOnMealsListRelationFilter
    stockOfIngredients?: StockOfIngredientsListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    weight?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    label?: StringWithAggregatesFilter<"Ingredient"> | string
    weight?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type IngredientsOnMealsWhereInput = {
    AND?: IngredientsOnMealsWhereInput | IngredientsOnMealsWhereInput[]
    OR?: IngredientsOnMealsWhereInput[]
    NOT?: IngredientsOnMealsWhereInput | IngredientsOnMealsWhereInput[]
    ingredient_id?: IntFilter<"IngredientsOnMeals"> | number
    meal_id?: IntFilter<"IngredientsOnMeals"> | number
    created_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
    updated_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    meal?: XOR<MealRelationFilter, MealWhereInput>
  }

  export type IngredientsOnMealsOrderByWithRelationInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ingredient?: IngredientOrderByWithRelationInput
    meal?: MealOrderByWithRelationInput
  }

  export type IngredientsOnMealsWhereUniqueInput = Prisma.AtLeast<{
    ingredient_id_meal_id?: IngredientsOnMealsIngredient_idMeal_idCompoundUniqueInput
    AND?: IngredientsOnMealsWhereInput | IngredientsOnMealsWhereInput[]
    OR?: IngredientsOnMealsWhereInput[]
    NOT?: IngredientsOnMealsWhereInput | IngredientsOnMealsWhereInput[]
    ingredient_id?: IntFilter<"IngredientsOnMeals"> | number
    meal_id?: IntFilter<"IngredientsOnMeals"> | number
    created_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
    updated_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    meal?: XOR<MealRelationFilter, MealWhereInput>
  }, "ingredient_id_meal_id">

  export type IngredientsOnMealsOrderByWithAggregationInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IngredientsOnMealsCountOrderByAggregateInput
    _avg?: IngredientsOnMealsAvgOrderByAggregateInput
    _max?: IngredientsOnMealsMaxOrderByAggregateInput
    _min?: IngredientsOnMealsMinOrderByAggregateInput
    _sum?: IngredientsOnMealsSumOrderByAggregateInput
  }

  export type IngredientsOnMealsScalarWhereWithAggregatesInput = {
    AND?: IngredientsOnMealsScalarWhereWithAggregatesInput | IngredientsOnMealsScalarWhereWithAggregatesInput[]
    OR?: IngredientsOnMealsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsOnMealsScalarWhereWithAggregatesInput | IngredientsOnMealsScalarWhereWithAggregatesInput[]
    ingredient_id?: IntWithAggregatesFilter<"IngredientsOnMeals"> | number
    meal_id?: IntWithAggregatesFilter<"IngredientsOnMeals"> | number
    created_at?: DateTimeWithAggregatesFilter<"IngredientsOnMeals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"IngredientsOnMeals"> | Date | string
  }

  export type StockOfIngredientsWhereInput = {
    AND?: StockOfIngredientsWhereInput | StockOfIngredientsWhereInput[]
    OR?: StockOfIngredientsWhereInput[]
    NOT?: StockOfIngredientsWhereInput | StockOfIngredientsWhereInput[]
    ingredient_id?: IntFilter<"StockOfIngredients"> | number
    amount?: IntFilter<"StockOfIngredients"> | number
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
  }

  export type StockOfIngredientsOrderByWithRelationInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type StockOfIngredientsWhereUniqueInput = Prisma.AtLeast<{
    ingredient_id?: number
    AND?: StockOfIngredientsWhereInput | StockOfIngredientsWhereInput[]
    OR?: StockOfIngredientsWhereInput[]
    NOT?: StockOfIngredientsWhereInput | StockOfIngredientsWhereInput[]
    amount?: IntFilter<"StockOfIngredients"> | number
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
  }, "ingredient_id">

  export type StockOfIngredientsOrderByWithAggregationInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
    _count?: StockOfIngredientsCountOrderByAggregateInput
    _avg?: StockOfIngredientsAvgOrderByAggregateInput
    _max?: StockOfIngredientsMaxOrderByAggregateInput
    _min?: StockOfIngredientsMinOrderByAggregateInput
    _sum?: StockOfIngredientsSumOrderByAggregateInput
  }

  export type StockOfIngredientsScalarWhereWithAggregatesInput = {
    AND?: StockOfIngredientsScalarWhereWithAggregatesInput | StockOfIngredientsScalarWhereWithAggregatesInput[]
    OR?: StockOfIngredientsScalarWhereWithAggregatesInput[]
    NOT?: StockOfIngredientsScalarWhereWithAggregatesInput | StockOfIngredientsScalarWhereWithAggregatesInput[]
    ingredient_id?: IntWithAggregatesFilter<"StockOfIngredients"> | number
    amount?: IntWithAggregatesFilter<"StockOfIngredients"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    status?: IntFilter<"Order"> | number
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    user_id?: IntFilter<"Order"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    products?: ProductsOrderedListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductsOrderedOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: IntFilter<"Order"> | number
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    user_id?: IntFilter<"Order"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    products?: ProductsOrderedListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    status?: IntWithAggregatesFilter<"Order"> | number
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    user_id?: IntWithAggregatesFilter<"Order"> | number
  }

  export type ProductsOrderedWhereInput = {
    AND?: ProductsOrderedWhereInput | ProductsOrderedWhereInput[]
    OR?: ProductsOrderedWhereInput[]
    NOT?: ProductsOrderedWhereInput | ProductsOrderedWhereInput[]
    order_id?: IntFilter<"ProductsOrdered"> | number
    product_id?: IntFilter<"ProductsOrdered"> | number
    created_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
    updated_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<MealRelationFilter, MealWhereInput>
  }

  export type ProductsOrderedOrderByWithRelationInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: MealOrderByWithRelationInput
  }

  export type ProductsOrderedWhereUniqueInput = Prisma.AtLeast<{
    order_id_product_id?: ProductsOrderedOrder_idProduct_idCompoundUniqueInput
    AND?: ProductsOrderedWhereInput | ProductsOrderedWhereInput[]
    OR?: ProductsOrderedWhereInput[]
    NOT?: ProductsOrderedWhereInput | ProductsOrderedWhereInput[]
    order_id?: IntFilter<"ProductsOrdered"> | number
    product_id?: IntFilter<"ProductsOrdered"> | number
    created_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
    updated_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<MealRelationFilter, MealWhereInput>
  }, "order_id_product_id">

  export type ProductsOrderedOrderByWithAggregationInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsOrderedCountOrderByAggregateInput
    _avg?: ProductsOrderedAvgOrderByAggregateInput
    _max?: ProductsOrderedMaxOrderByAggregateInput
    _min?: ProductsOrderedMinOrderByAggregateInput
    _sum?: ProductsOrderedSumOrderByAggregateInput
  }

  export type ProductsOrderedScalarWhereWithAggregatesInput = {
    AND?: ProductsOrderedScalarWhereWithAggregatesInput | ProductsOrderedScalarWhereWithAggregatesInput[]
    OR?: ProductsOrderedScalarWhereWithAggregatesInput[]
    NOT?: ProductsOrderedScalarWhereWithAggregatesInput | ProductsOrderedScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"ProductsOrdered"> | number
    product_id?: IntWithAggregatesFilter<"ProductsOrdered"> | number
    created_at?: DateTimeWithAggregatesFilter<"ProductsOrdered"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductsOrdered"> | Date | string
  }

  export type AccountCreateInput = {
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoleId?: number | null
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoleId?: NullableIntFieldUpdateOperationsInput | number | null
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoleId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VerificationRequestCreateInput = {
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUncheckedCreateInput = {
    id?: number
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateManyInput = {
    id?: number
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    label: string
    users?: UserCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    label: string
    users?: UserUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: number
    label: string
  }

  export type UserRoleUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MealCreateInput = {
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    ProductsOrdered?: ProductsOrderedCreateNestedManyWithoutProductInput
    IngredientsOnMeals?: IngredientsOnMealsCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    ProductsOrdered?: ProductsOrderedUncheckedCreateNestedManyWithoutProductInput
    IngredientsOnMeals?: IngredientsOnMealsUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductsOrdered?: ProductsOrderedUpdateManyWithoutProductNestedInput
    IngredientsOnMeals?: IngredientsOnMealsUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductsOrdered?: ProductsOrderedUncheckedUpdateManyWithoutProductNestedInput
    IngredientsOnMeals?: IngredientsOnMealsUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryProductCreateInput = {
    label: string
  }

  export type CategoryProductUncheckedCreateInput = {
    id?: number
    label: string
  }

  export type CategoryProductUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryProductCreateManyInput = {
    id?: number
    label: string
  }

  export type CategoryProductUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateInput = {
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    meals?: IngredientsOnMealsCreateNestedManyWithoutIngredientInput
    stockOfIngredients?: StockOfIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    meals?: IngredientsOnMealsUncheckedCreateNestedManyWithoutIngredientInput
    stockOfIngredients?: StockOfIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: IngredientsOnMealsUpdateManyWithoutIngredientNestedInput
    stockOfIngredients?: StockOfIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: IngredientsOnMealsUncheckedUpdateManyWithoutIngredientNestedInput
    stockOfIngredients?: StockOfIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: number
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    ingredient: IngredientCreateNestedOneWithoutMealsInput
    meal: MealCreateNestedOneWithoutIngredientsOnMealsInput
  }

  export type IngredientsOnMealsUncheckedCreateInput = {
    ingredient_id: number
    meal_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientsOnMealsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredient?: IngredientUpdateOneRequiredWithoutMealsNestedInput
    meal?: MealUpdateOneRequiredWithoutIngredientsOnMealsNestedInput
  }

  export type IngredientsOnMealsUncheckedUpdateInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsCreateManyInput = {
    ingredient_id: number
    meal_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientsOnMealsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsUncheckedUpdateManyInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    meal_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOfIngredientsCreateInput = {
    amount: number
    ingredient: IngredientCreateNestedOneWithoutStockOfIngredientsInput
  }

  export type StockOfIngredientsUncheckedCreateInput = {
    ingredient_id: number
    amount: number
  }

  export type StockOfIngredientsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutStockOfIngredientsNestedInput
  }

  export type StockOfIngredientsUncheckedUpdateInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockOfIngredientsCreateManyInput = {
    ingredient_id: number
    amount: number
  }

  export type StockOfIngredientsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockOfIngredientsUncheckedUpdateManyInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    products?: ProductsOrderedCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    products?: ProductsOrderedUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    products?: ProductsOrderedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    products?: ProductsOrderedUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type OrderUpdateManyMutationInput = {
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsOrderedCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutProductsInput
    product: MealCreateNestedOneWithoutProductsOrderedInput
  }

  export type ProductsOrderedUncheckedCreateInput = {
    order_id: number
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
    product?: MealUpdateOneRequiredWithoutProductsOrderedNestedInput
  }

  export type ProductsOrderedUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOrderedCreateManyInput = {
    order_id: number
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOrderedUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type UserRoleNullableRelationFilter = {
    is?: UserRoleWhereInput | null
    isNot?: UserRoleWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRoleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    userRoleId?: SortOrder
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

  export type VerificationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerificationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductsOrderedListRelationFilter = {
    every?: ProductsOrderedWhereInput
    some?: ProductsOrderedWhereInput
    none?: ProductsOrderedWhereInput
  }

  export type IngredientsOnMealsListRelationFilter = {
    every?: IngredientsOnMealsWhereInput
    some?: IngredientsOnMealsWhereInput
    none?: IngredientsOnMealsWhereInput
  }

  export type ProductsOrderedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsOnMealsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    amountAvailable?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryProductCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryProductMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryProductMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryProductSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StockOfIngredientsListRelationFilter = {
    every?: StockOfIngredientsWhereInput
    some?: StockOfIngredientsWhereInput
    none?: StockOfIngredientsWhereInput
  }

  export type StockOfIngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
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

  export type IngredientRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type MealRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type IngredientsOnMealsIngredient_idMeal_idCompoundUniqueInput = {
    ingredient_id: number
    meal_id: number
  }

  export type IngredientsOnMealsCountOrderByAggregateInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientsOnMealsAvgOrderByAggregateInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
  }

  export type IngredientsOnMealsMaxOrderByAggregateInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientsOnMealsMinOrderByAggregateInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientsOnMealsSumOrderByAggregateInput = {
    ingredient_id?: SortOrder
    meal_id?: SortOrder
  }

  export type StockOfIngredientsCountOrderByAggregateInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
  }

  export type StockOfIngredientsAvgOrderByAggregateInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
  }

  export type StockOfIngredientsMaxOrderByAggregateInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
  }

  export type StockOfIngredientsMinOrderByAggregateInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
  }

  export type StockOfIngredientsSumOrderByAggregateInput = {
    ingredient_id?: SortOrder
    amount?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductsOrderedOrder_idProduct_idCompoundUniqueInput = {
    order_id: number
    product_id: number
  }

  export type ProductsOrderedCountOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsOrderedAvgOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type ProductsOrderedMaxOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsOrderedMinOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsOrderedSumOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserRoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    disconnect?: UserRoleWhereInput | boolean
    delete?: UserRoleWhereInput | boolean
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductsOrderedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput> | ProductsOrderedCreateWithoutProductInput[] | ProductsOrderedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutProductInput | ProductsOrderedCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOrderedCreateManyProductInputEnvelope
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
  }

  export type IngredientsOnMealsCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput> | IngredientsOnMealsCreateWithoutMealInput[] | IngredientsOnMealsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutMealInput | IngredientsOnMealsCreateOrConnectWithoutMealInput[]
    createMany?: IngredientsOnMealsCreateManyMealInputEnvelope
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
  }

  export type ProductsOrderedUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput> | ProductsOrderedCreateWithoutProductInput[] | ProductsOrderedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutProductInput | ProductsOrderedCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOrderedCreateManyProductInputEnvelope
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
  }

  export type IngredientsOnMealsUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput> | IngredientsOnMealsCreateWithoutMealInput[] | IngredientsOnMealsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutMealInput | IngredientsOnMealsCreateOrConnectWithoutMealInput[]
    createMany?: IngredientsOnMealsCreateManyMealInputEnvelope
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsOrderedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput> | ProductsOrderedCreateWithoutProductInput[] | ProductsOrderedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutProductInput | ProductsOrderedCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOrderedUpsertWithWhereUniqueWithoutProductInput | ProductsOrderedUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOrderedCreateManyProductInputEnvelope
    set?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    disconnect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    delete?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    update?: ProductsOrderedUpdateWithWhereUniqueWithoutProductInput | ProductsOrderedUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOrderedUpdateManyWithWhereWithoutProductInput | ProductsOrderedUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
  }

  export type IngredientsOnMealsUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput> | IngredientsOnMealsCreateWithoutMealInput[] | IngredientsOnMealsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutMealInput | IngredientsOnMealsCreateOrConnectWithoutMealInput[]
    upsert?: IngredientsOnMealsUpsertWithWhereUniqueWithoutMealInput | IngredientsOnMealsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientsOnMealsCreateManyMealInputEnvelope
    set?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    disconnect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    delete?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    update?: IngredientsOnMealsUpdateWithWhereUniqueWithoutMealInput | IngredientsOnMealsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientsOnMealsUpdateManyWithWhereWithoutMealInput | IngredientsOnMealsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
  }

  export type ProductsOrderedUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput> | ProductsOrderedCreateWithoutProductInput[] | ProductsOrderedUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutProductInput | ProductsOrderedCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOrderedUpsertWithWhereUniqueWithoutProductInput | ProductsOrderedUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOrderedCreateManyProductInputEnvelope
    set?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    disconnect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    delete?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    update?: ProductsOrderedUpdateWithWhereUniqueWithoutProductInput | ProductsOrderedUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOrderedUpdateManyWithWhereWithoutProductInput | ProductsOrderedUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
  }

  export type IngredientsOnMealsUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput> | IngredientsOnMealsCreateWithoutMealInput[] | IngredientsOnMealsUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutMealInput | IngredientsOnMealsCreateOrConnectWithoutMealInput[]
    upsert?: IngredientsOnMealsUpsertWithWhereUniqueWithoutMealInput | IngredientsOnMealsUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientsOnMealsCreateManyMealInputEnvelope
    set?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    disconnect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    delete?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    update?: IngredientsOnMealsUpdateWithWhereUniqueWithoutMealInput | IngredientsOnMealsUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientsOnMealsUpdateManyWithWhereWithoutMealInput | IngredientsOnMealsUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
  }

  export type IngredientsOnMealsCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput> | IngredientsOnMealsCreateWithoutIngredientInput[] | IngredientsOnMealsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutIngredientInput | IngredientsOnMealsCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientsOnMealsCreateManyIngredientInputEnvelope
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
  }

  export type StockOfIngredientsCreateNestedManyWithoutIngredientInput = {
    create?: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput> | StockOfIngredientsCreateWithoutIngredientInput[] | StockOfIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: StockOfIngredientsCreateOrConnectWithoutIngredientInput | StockOfIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: StockOfIngredientsCreateManyIngredientInputEnvelope
    connect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
  }

  export type IngredientsOnMealsUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput> | IngredientsOnMealsCreateWithoutIngredientInput[] | IngredientsOnMealsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutIngredientInput | IngredientsOnMealsCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientsOnMealsCreateManyIngredientInputEnvelope
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
  }

  export type StockOfIngredientsUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput> | StockOfIngredientsCreateWithoutIngredientInput[] | StockOfIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: StockOfIngredientsCreateOrConnectWithoutIngredientInput | StockOfIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: StockOfIngredientsCreateManyIngredientInputEnvelope
    connect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IngredientsOnMealsUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput> | IngredientsOnMealsCreateWithoutIngredientInput[] | IngredientsOnMealsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutIngredientInput | IngredientsOnMealsCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientsOnMealsUpsertWithWhereUniqueWithoutIngredientInput | IngredientsOnMealsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientsOnMealsCreateManyIngredientInputEnvelope
    set?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    disconnect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    delete?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    update?: IngredientsOnMealsUpdateWithWhereUniqueWithoutIngredientInput | IngredientsOnMealsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientsOnMealsUpdateManyWithWhereWithoutIngredientInput | IngredientsOnMealsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
  }

  export type StockOfIngredientsUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput> | StockOfIngredientsCreateWithoutIngredientInput[] | StockOfIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: StockOfIngredientsCreateOrConnectWithoutIngredientInput | StockOfIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: StockOfIngredientsUpsertWithWhereUniqueWithoutIngredientInput | StockOfIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: StockOfIngredientsCreateManyIngredientInputEnvelope
    set?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    disconnect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    delete?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    connect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    update?: StockOfIngredientsUpdateWithWhereUniqueWithoutIngredientInput | StockOfIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: StockOfIngredientsUpdateManyWithWhereWithoutIngredientInput | StockOfIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: StockOfIngredientsScalarWhereInput | StockOfIngredientsScalarWhereInput[]
  }

  export type IngredientsOnMealsUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput> | IngredientsOnMealsCreateWithoutIngredientInput[] | IngredientsOnMealsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientsOnMealsCreateOrConnectWithoutIngredientInput | IngredientsOnMealsCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientsOnMealsUpsertWithWhereUniqueWithoutIngredientInput | IngredientsOnMealsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientsOnMealsCreateManyIngredientInputEnvelope
    set?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    disconnect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    delete?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    connect?: IngredientsOnMealsWhereUniqueInput | IngredientsOnMealsWhereUniqueInput[]
    update?: IngredientsOnMealsUpdateWithWhereUniqueWithoutIngredientInput | IngredientsOnMealsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientsOnMealsUpdateManyWithWhereWithoutIngredientInput | IngredientsOnMealsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
  }

  export type StockOfIngredientsUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput> | StockOfIngredientsCreateWithoutIngredientInput[] | StockOfIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: StockOfIngredientsCreateOrConnectWithoutIngredientInput | StockOfIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: StockOfIngredientsUpsertWithWhereUniqueWithoutIngredientInput | StockOfIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: StockOfIngredientsCreateManyIngredientInputEnvelope
    set?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    disconnect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    delete?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    connect?: StockOfIngredientsWhereUniqueInput | StockOfIngredientsWhereUniqueInput[]
    update?: StockOfIngredientsUpdateWithWhereUniqueWithoutIngredientInput | StockOfIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: StockOfIngredientsUpdateManyWithWhereWithoutIngredientInput | StockOfIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: StockOfIngredientsScalarWhereInput | StockOfIngredientsScalarWhereInput[]
  }

  export type IngredientCreateNestedOneWithoutMealsInput = {
    create?: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealsInput
    connect?: IngredientWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutIngredientsOnMealsInput = {
    create?: XOR<MealCreateWithoutIngredientsOnMealsInput, MealUncheckedCreateWithoutIngredientsOnMealsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsOnMealsInput
    connect?: MealWhereUniqueInput
  }

  export type IngredientUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealsInput
    upsert?: IngredientUpsertWithoutMealsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutMealsInput, IngredientUpdateWithoutMealsInput>, IngredientUncheckedUpdateWithoutMealsInput>
  }

  export type MealUpdateOneRequiredWithoutIngredientsOnMealsNestedInput = {
    create?: XOR<MealCreateWithoutIngredientsOnMealsInput, MealUncheckedCreateWithoutIngredientsOnMealsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsOnMealsInput
    upsert?: MealUpsertWithoutIngredientsOnMealsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutIngredientsOnMealsInput, MealUpdateWithoutIngredientsOnMealsInput>, MealUncheckedUpdateWithoutIngredientsOnMealsInput>
  }

  export type IngredientCreateNestedOneWithoutStockOfIngredientsInput = {
    create?: XOR<IngredientCreateWithoutStockOfIngredientsInput, IngredientUncheckedCreateWithoutStockOfIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutStockOfIngredientsInput
    connect?: IngredientWhereUniqueInput
  }

  export type IngredientUpdateOneRequiredWithoutStockOfIngredientsNestedInput = {
    create?: XOR<IngredientCreateWithoutStockOfIngredientsInput, IngredientUncheckedCreateWithoutStockOfIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutStockOfIngredientsInput
    upsert?: IngredientUpsertWithoutStockOfIngredientsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutStockOfIngredientsInput, IngredientUpdateWithoutStockOfIngredientsInput>, IngredientUncheckedUpdateWithoutStockOfIngredientsInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsOrderedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput> | ProductsOrderedCreateWithoutOrderInput[] | ProductsOrderedUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutOrderInput | ProductsOrderedCreateOrConnectWithoutOrderInput[]
    createMany?: ProductsOrderedCreateManyOrderInputEnvelope
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
  }

  export type ProductsOrderedUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput> | ProductsOrderedCreateWithoutOrderInput[] | ProductsOrderedUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutOrderInput | ProductsOrderedCreateOrConnectWithoutOrderInput[]
    createMany?: ProductsOrderedCreateManyOrderInputEnvelope
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type ProductsOrderedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput> | ProductsOrderedCreateWithoutOrderInput[] | ProductsOrderedUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutOrderInput | ProductsOrderedCreateOrConnectWithoutOrderInput[]
    upsert?: ProductsOrderedUpsertWithWhereUniqueWithoutOrderInput | ProductsOrderedUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductsOrderedCreateManyOrderInputEnvelope
    set?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    disconnect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    delete?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    update?: ProductsOrderedUpdateWithWhereUniqueWithoutOrderInput | ProductsOrderedUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductsOrderedUpdateManyWithWhereWithoutOrderInput | ProductsOrderedUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
  }

  export type ProductsOrderedUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput> | ProductsOrderedCreateWithoutOrderInput[] | ProductsOrderedUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductsOrderedCreateOrConnectWithoutOrderInput | ProductsOrderedCreateOrConnectWithoutOrderInput[]
    upsert?: ProductsOrderedUpsertWithWhereUniqueWithoutOrderInput | ProductsOrderedUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductsOrderedCreateManyOrderInputEnvelope
    set?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    disconnect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    delete?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    connect?: ProductsOrderedWhereUniqueInput | ProductsOrderedWhereUniqueInput[]
    update?: ProductsOrderedUpdateWithWhereUniqueWithoutOrderInput | ProductsOrderedUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductsOrderedUpdateManyWithWhereWithoutOrderInput | ProductsOrderedUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutProductsOrderedInput = {
    create?: XOR<MealCreateWithoutProductsOrderedInput, MealUncheckedCreateWithoutProductsOrderedInput>
    connectOrCreate?: MealCreateOrConnectWithoutProductsOrderedInput
    connect?: MealWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    upsert?: OrderUpsertWithoutProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductsInput, OrderUpdateWithoutProductsInput>, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type MealUpdateOneRequiredWithoutProductsOrderedNestedInput = {
    create?: XOR<MealCreateWithoutProductsOrderedInput, MealUncheckedCreateWithoutProductsOrderedInput>
    connectOrCreate?: MealCreateOrConnectWithoutProductsOrderedInput
    upsert?: MealUpsertWithoutProductsOrderedInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutProductsOrderedInput, MealUpdateWithoutProductsOrderedInput>, MealUncheckedUpdateWithoutProductsOrderedInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type UserRoleCreateWithoutUsersInput = {
    label: string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: number
    label: string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type OrderCreateWithoutUserInput = {
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsOrderedCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsOrderedUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    status?: IntFilter<"Order"> | number
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    user_id?: IntFilter<"Order"> | number
  }

  export type UserCreateWithoutUserRoleInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserCreateManyUserRoleInputEnvelope = {
    data: UserCreateManyUserRoleInput | UserCreateManyUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutUserRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userRoleId?: IntNullableFilter<"User"> | number | null
  }

  export type ProductsOrderedCreateWithoutProductInput = {
    created_at?: Date | string
    updated_at?: Date | string
    order: OrderCreateNestedOneWithoutProductsInput
  }

  export type ProductsOrderedUncheckedCreateWithoutProductInput = {
    order_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedCreateOrConnectWithoutProductInput = {
    where: ProductsOrderedWhereUniqueInput
    create: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput>
  }

  export type ProductsOrderedCreateManyProductInputEnvelope = {
    data: ProductsOrderedCreateManyProductInput | ProductsOrderedCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type IngredientsOnMealsCreateWithoutMealInput = {
    created_at?: Date | string
    updated_at?: Date | string
    ingredient: IngredientCreateNestedOneWithoutMealsInput
  }

  export type IngredientsOnMealsUncheckedCreateWithoutMealInput = {
    ingredient_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientsOnMealsCreateOrConnectWithoutMealInput = {
    where: IngredientsOnMealsWhereUniqueInput
    create: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput>
  }

  export type IngredientsOnMealsCreateManyMealInputEnvelope = {
    data: IngredientsOnMealsCreateManyMealInput | IngredientsOnMealsCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type ProductsOrderedUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsOrderedWhereUniqueInput
    update: XOR<ProductsOrderedUpdateWithoutProductInput, ProductsOrderedUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsOrderedCreateWithoutProductInput, ProductsOrderedUncheckedCreateWithoutProductInput>
  }

  export type ProductsOrderedUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsOrderedWhereUniqueInput
    data: XOR<ProductsOrderedUpdateWithoutProductInput, ProductsOrderedUncheckedUpdateWithoutProductInput>
  }

  export type ProductsOrderedUpdateManyWithWhereWithoutProductInput = {
    where: ProductsOrderedScalarWhereInput
    data: XOR<ProductsOrderedUpdateManyMutationInput, ProductsOrderedUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsOrderedScalarWhereInput = {
    AND?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
    OR?: ProductsOrderedScalarWhereInput[]
    NOT?: ProductsOrderedScalarWhereInput | ProductsOrderedScalarWhereInput[]
    order_id?: IntFilter<"ProductsOrdered"> | number
    product_id?: IntFilter<"ProductsOrdered"> | number
    created_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
    updated_at?: DateTimeFilter<"ProductsOrdered"> | Date | string
  }

  export type IngredientsOnMealsUpsertWithWhereUniqueWithoutMealInput = {
    where: IngredientsOnMealsWhereUniqueInput
    update: XOR<IngredientsOnMealsUpdateWithoutMealInput, IngredientsOnMealsUncheckedUpdateWithoutMealInput>
    create: XOR<IngredientsOnMealsCreateWithoutMealInput, IngredientsOnMealsUncheckedCreateWithoutMealInput>
  }

  export type IngredientsOnMealsUpdateWithWhereUniqueWithoutMealInput = {
    where: IngredientsOnMealsWhereUniqueInput
    data: XOR<IngredientsOnMealsUpdateWithoutMealInput, IngredientsOnMealsUncheckedUpdateWithoutMealInput>
  }

  export type IngredientsOnMealsUpdateManyWithWhereWithoutMealInput = {
    where: IngredientsOnMealsScalarWhereInput
    data: XOR<IngredientsOnMealsUpdateManyMutationInput, IngredientsOnMealsUncheckedUpdateManyWithoutMealInput>
  }

  export type IngredientsOnMealsScalarWhereInput = {
    AND?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
    OR?: IngredientsOnMealsScalarWhereInput[]
    NOT?: IngredientsOnMealsScalarWhereInput | IngredientsOnMealsScalarWhereInput[]
    ingredient_id?: IntFilter<"IngredientsOnMeals"> | number
    meal_id?: IntFilter<"IngredientsOnMeals"> | number
    created_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
    updated_at?: DateTimeFilter<"IngredientsOnMeals"> | Date | string
  }

  export type IngredientsOnMealsCreateWithoutIngredientInput = {
    created_at?: Date | string
    updated_at?: Date | string
    meal: MealCreateNestedOneWithoutIngredientsOnMealsInput
  }

  export type IngredientsOnMealsUncheckedCreateWithoutIngredientInput = {
    meal_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientsOnMealsCreateOrConnectWithoutIngredientInput = {
    where: IngredientsOnMealsWhereUniqueInput
    create: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientsOnMealsCreateManyIngredientInputEnvelope = {
    data: IngredientsOnMealsCreateManyIngredientInput | IngredientsOnMealsCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type StockOfIngredientsCreateWithoutIngredientInput = {
    amount: number
  }

  export type StockOfIngredientsUncheckedCreateWithoutIngredientInput = {
    amount: number
  }

  export type StockOfIngredientsCreateOrConnectWithoutIngredientInput = {
    where: StockOfIngredientsWhereUniqueInput
    create: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type StockOfIngredientsCreateManyIngredientInputEnvelope = {
    data: StockOfIngredientsCreateManyIngredientInput | StockOfIngredientsCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type IngredientsOnMealsUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientsOnMealsWhereUniqueInput
    update: XOR<IngredientsOnMealsUpdateWithoutIngredientInput, IngredientsOnMealsUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientsOnMealsCreateWithoutIngredientInput, IngredientsOnMealsUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientsOnMealsUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientsOnMealsWhereUniqueInput
    data: XOR<IngredientsOnMealsUpdateWithoutIngredientInput, IngredientsOnMealsUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientsOnMealsUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientsOnMealsScalarWhereInput
    data: XOR<IngredientsOnMealsUpdateManyMutationInput, IngredientsOnMealsUncheckedUpdateManyWithoutIngredientInput>
  }

  export type StockOfIngredientsUpsertWithWhereUniqueWithoutIngredientInput = {
    where: StockOfIngredientsWhereUniqueInput
    update: XOR<StockOfIngredientsUpdateWithoutIngredientInput, StockOfIngredientsUncheckedUpdateWithoutIngredientInput>
    create: XOR<StockOfIngredientsCreateWithoutIngredientInput, StockOfIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type StockOfIngredientsUpdateWithWhereUniqueWithoutIngredientInput = {
    where: StockOfIngredientsWhereUniqueInput
    data: XOR<StockOfIngredientsUpdateWithoutIngredientInput, StockOfIngredientsUncheckedUpdateWithoutIngredientInput>
  }

  export type StockOfIngredientsUpdateManyWithWhereWithoutIngredientInput = {
    where: StockOfIngredientsScalarWhereInput
    data: XOR<StockOfIngredientsUpdateManyMutationInput, StockOfIngredientsUncheckedUpdateManyWithoutIngredientInput>
  }

  export type StockOfIngredientsScalarWhereInput = {
    AND?: StockOfIngredientsScalarWhereInput | StockOfIngredientsScalarWhereInput[]
    OR?: StockOfIngredientsScalarWhereInput[]
    NOT?: StockOfIngredientsScalarWhereInput | StockOfIngredientsScalarWhereInput[]
    ingredient_id?: IntFilter<"StockOfIngredients"> | number
    amount?: IntFilter<"StockOfIngredients"> | number
  }

  export type IngredientCreateWithoutMealsInput = {
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    stockOfIngredients?: StockOfIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutMealsInput = {
    id?: number
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    stockOfIngredients?: StockOfIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutMealsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
  }

  export type MealCreateWithoutIngredientsOnMealsInput = {
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    ProductsOrdered?: ProductsOrderedCreateNestedManyWithoutProductInput
  }

  export type MealUncheckedCreateWithoutIngredientsOnMealsInput = {
    id?: number
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    ProductsOrdered?: ProductsOrderedUncheckedCreateNestedManyWithoutProductInput
  }

  export type MealCreateOrConnectWithoutIngredientsOnMealsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutIngredientsOnMealsInput, MealUncheckedCreateWithoutIngredientsOnMealsInput>
  }

  export type IngredientUpsertWithoutMealsInput = {
    update: XOR<IngredientUpdateWithoutMealsInput, IngredientUncheckedUpdateWithoutMealsInput>
    create: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutMealsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutMealsInput, IngredientUncheckedUpdateWithoutMealsInput>
  }

  export type IngredientUpdateWithoutMealsInput = {
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stockOfIngredients?: StockOfIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stockOfIngredients?: StockOfIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type MealUpsertWithoutIngredientsOnMealsInput = {
    update: XOR<MealUpdateWithoutIngredientsOnMealsInput, MealUncheckedUpdateWithoutIngredientsOnMealsInput>
    create: XOR<MealCreateWithoutIngredientsOnMealsInput, MealUncheckedCreateWithoutIngredientsOnMealsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutIngredientsOnMealsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutIngredientsOnMealsInput, MealUncheckedUpdateWithoutIngredientsOnMealsInput>
  }

  export type MealUpdateWithoutIngredientsOnMealsInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductsOrdered?: ProductsOrderedUpdateManyWithoutProductNestedInput
  }

  export type MealUncheckedUpdateWithoutIngredientsOnMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductsOrdered?: ProductsOrderedUncheckedUpdateManyWithoutProductNestedInput
  }

  export type IngredientCreateWithoutStockOfIngredientsInput = {
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    meals?: IngredientsOnMealsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutStockOfIngredientsInput = {
    id?: number
    label: string
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    meals?: IngredientsOnMealsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutStockOfIngredientsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutStockOfIngredientsInput, IngredientUncheckedCreateWithoutStockOfIngredientsInput>
  }

  export type IngredientUpsertWithoutStockOfIngredientsInput = {
    update: XOR<IngredientUpdateWithoutStockOfIngredientsInput, IngredientUncheckedUpdateWithoutStockOfIngredientsInput>
    create: XOR<IngredientCreateWithoutStockOfIngredientsInput, IngredientUncheckedCreateWithoutStockOfIngredientsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutStockOfIngredientsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutStockOfIngredientsInput, IngredientUncheckedUpdateWithoutStockOfIngredientsInput>
  }

  export type IngredientUpdateWithoutStockOfIngredientsInput = {
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: IngredientsOnMealsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutStockOfIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: IngredientsOnMealsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoleId?: number | null
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type ProductsOrderedCreateWithoutOrderInput = {
    created_at?: Date | string
    updated_at?: Date | string
    product: MealCreateNestedOneWithoutProductsOrderedInput
  }

  export type ProductsOrderedUncheckedCreateWithoutOrderInput = {
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedCreateOrConnectWithoutOrderInput = {
    where: ProductsOrderedWhereUniqueInput
    create: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput>
  }

  export type ProductsOrderedCreateManyOrderInputEnvelope = {
    data: ProductsOrderedCreateManyOrderInput | ProductsOrderedCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsOrderedUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductsOrderedWhereUniqueInput
    update: XOR<ProductsOrderedUpdateWithoutOrderInput, ProductsOrderedUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductsOrderedCreateWithoutOrderInput, ProductsOrderedUncheckedCreateWithoutOrderInput>
  }

  export type ProductsOrderedUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductsOrderedWhereUniqueInput
    data: XOR<ProductsOrderedUpdateWithoutOrderInput, ProductsOrderedUncheckedUpdateWithoutOrderInput>
  }

  export type ProductsOrderedUpdateManyWithWhereWithoutOrderInput = {
    where: ProductsOrderedScalarWhereInput
    data: XOR<ProductsOrderedUpdateManyMutationInput, ProductsOrderedUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutProductsInput = {
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductsInput = {
    id?: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type OrderCreateOrConnectWithoutProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
  }

  export type MealCreateWithoutProductsOrderedInput = {
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    IngredientsOnMeals?: IngredientsOnMealsCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutProductsOrderedInput = {
    id?: number
    label: string
    price: number
    amountAvailable?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    IngredientsOnMeals?: IngredientsOnMealsUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutProductsOrderedInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutProductsOrderedInput, MealUncheckedCreateWithoutProductsOrderedInput>
  }

  export type OrderUpsertWithoutProductsInput = {
    update: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUpdateWithoutProductsInput = {
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type MealUpsertWithoutProductsOrderedInput = {
    update: XOR<MealUpdateWithoutProductsOrderedInput, MealUncheckedUpdateWithoutProductsOrderedInput>
    create: XOR<MealCreateWithoutProductsOrderedInput, MealUncheckedCreateWithoutProductsOrderedInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutProductsOrderedInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutProductsOrderedInput, MealUncheckedUpdateWithoutProductsOrderedInput>
  }

  export type MealUpdateWithoutProductsOrderedInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    IngredientsOnMeals?: IngredientsOnMealsUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutProductsOrderedInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    amountAvailable?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    IngredientsOnMeals?: IngredientsOnMealsUncheckedUpdateManyWithoutMealNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: number
    status: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOrderedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOrderedUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUserRoleInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutUserRoleInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOrderedCreateManyProductInput = {
    order_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientsOnMealsCreateManyMealInput = {
    ingredient_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedUpdateWithoutProductInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsOrderedUncheckedUpdateWithoutProductInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOrderedUncheckedUpdateManyWithoutProductInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsUpdateWithoutMealInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredient?: IngredientUpdateOneRequiredWithoutMealsNestedInput
  }

  export type IngredientsOnMealsUncheckedUpdateWithoutMealInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsUncheckedUpdateManyWithoutMealInput = {
    ingredient_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsCreateManyIngredientInput = {
    meal_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockOfIngredientsCreateManyIngredientInput = {
    amount: number
  }

  export type IngredientsOnMealsUpdateWithoutIngredientInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutIngredientsOnMealsNestedInput
  }

  export type IngredientsOnMealsUncheckedUpdateWithoutIngredientInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientsOnMealsUncheckedUpdateManyWithoutIngredientInput = {
    meal_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOfIngredientsUpdateWithoutIngredientInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockOfIngredientsUncheckedUpdateWithoutIngredientInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockOfIngredientsUncheckedUpdateManyWithoutIngredientInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsOrderedCreateManyOrderInput = {
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsOrderedUpdateWithoutOrderInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: MealUpdateOneRequiredWithoutProductsOrderedNestedInput
  }

  export type ProductsOrderedUncheckedUpdateWithoutOrderInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOrderedUncheckedUpdateManyWithoutOrderInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleCountOutputTypeDefaultArgs instead
     */
    export type UserRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealCountOutputTypeDefaultArgs instead
     */
    export type MealCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientCountOutputTypeDefaultArgs instead
     */
    export type IngredientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationRequestDefaultArgs instead
     */
    export type VerificationRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealDefaultArgs instead
     */
    export type MealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryProductDefaultArgs instead
     */
    export type CategoryProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientDefaultArgs instead
     */
    export type IngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientsOnMealsDefaultArgs instead
     */
    export type IngredientsOnMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientsOnMealsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockOfIngredientsDefaultArgs instead
     */
    export type StockOfIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockOfIngredientsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsOrderedDefaultArgs instead
     */
    export type ProductsOrderedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsOrderedDefaultArgs<ExtArgs>

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