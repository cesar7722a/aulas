
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
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Aula
 * 
 */
export type Aula = $Result.DefaultSelection<Prisma.$AulaPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.aluno.findMany()
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
   * // Fetch zero or more Alunos
   * const alunos = await prisma.aluno.findMany()
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
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aula`: Exposes CRUD operations for the **Aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aula.findMany()
    * ```
    */
  get aula(): Prisma.AulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Aluno: 'Aluno',
    Professor: 'Professor',
    Aula: 'Aula',
    Curso: 'Curso'
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
      modelProps: "aluno" | "professor" | "aula" | "curso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Aula: {
        payload: Prisma.$AulaPayload<ExtArgs>
        fields: Prisma.AulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findFirst: {
            args: Prisma.AulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findMany: {
            args: Prisma.AulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          create: {
            args: Prisma.AulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          createMany: {
            args: Prisma.AulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          update: {
            args: Prisma.AulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          deleteMany: {
            args: Prisma.AulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          aggregate: {
            args: Prisma.AulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAula>
          }
          groupBy: {
            args: Prisma.AulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaCountArgs<ExtArgs>
            result: $Utils.Optional<AulaCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
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
    aluno?: AlunoOmit
    professor?: ProfessorOmit
    aula?: AulaOmit
    curso?: CursoOmit
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
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    curso: number
    aula: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | AlunoCountOutputTypeCountCursoArgs
    aula?: boolean | AlunoCountOutputTypeCountAulaArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountCursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountAulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    aula: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | ProfessorCountOutputTypeCountAulaArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountAulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    aluno: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AulaCountOutputTypeCountAlunoArgs
  }

  // Custom InputTypes
  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: AulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountAlunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    aula: number
    aluno: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | CursoCountOutputTypeCountAulaArgs
    aluno?: boolean | CursoCountOutputTypeCountAlunoArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountAulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountAlunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    _all: number
  }


  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: string
    nome: string
    email: string
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    curso?: boolean | Aluno$cursoArgs<ExtArgs>
    aula?: boolean | Aluno$aulaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>



  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | Aluno$cursoArgs<ExtArgs>
    aula?: boolean | Aluno$aulaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>[]
      aula: Prisma.$AulaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends Aluno$cursoArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aula<T extends Aluno$aulaArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$aulaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.curso
   */
  export type Aluno$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Aluno.aula
   */
  export type Aluno$aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    cursor?: AulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    _all: number
  }


  export type ProfessorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: string
    nome: string
    email: string
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    aula?: boolean | Professor$aulaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>



  export type ProfessorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | Professor$aulaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      aula: Prisma.$AulaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aula<T extends Professor$aulaArgs<ExtArgs> = {}>(args?: Subset<T, Professor$aulaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'String'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.aula
   */
  export type Professor$aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    cursor?: AulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Aula
   */

  export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  export type AulaAvgAggregateOutputType = {
    duracao: number | null
  }

  export type AulaSumAggregateOutputType = {
    duracao: number | null
  }

  export type AulaMinAggregateOutputType = {
    id: string | null
    tema: string | null
    duracao: number | null
    professorId: string | null
    cursoId: string | null
  }

  export type AulaMaxAggregateOutputType = {
    id: string | null
    tema: string | null
    duracao: number | null
    professorId: string | null
    cursoId: string | null
  }

  export type AulaCountAggregateOutputType = {
    id: number
    tema: number
    duracao: number
    professorId: number
    cursoId: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    duracao?: true
  }

  export type AulaSumAggregateInputType = {
    duracao?: true
  }

  export type AulaMinAggregateInputType = {
    id?: true
    tema?: true
    duracao?: true
    professorId?: true
    cursoId?: true
  }

  export type AulaMaxAggregateInputType = {
    id?: true
    tema?: true
    duracao?: true
    professorId?: true
    cursoId?: true
  }

  export type AulaCountAggregateInputType = {
    id?: true
    tema?: true
    duracao?: true
    professorId?: true
    cursoId?: true
    _all?: true
  }

  export type AulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aula to aggregate.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aulas
    **/
    _count?: true | AulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType
  }

  export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAula[P]>
      : GetScalarType<T[P], AggregateAula[P]>
  }




  export type AulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithAggregationInput | AulaOrderByWithAggregationInput[]
    by: AulaScalarFieldEnum[] | AulaScalarFieldEnum
    having?: AulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaCountAggregateInputType | true
    _avg?: AulaAvgAggregateInputType
    _sum?: AulaSumAggregateInputType
    _min?: AulaMinAggregateInputType
    _max?: AulaMaxAggregateInputType
  }

  export type AulaGroupByOutputType = {
    id: string
    tema: string
    duracao: number
    professorId: string
    cursoId: string
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  type GetAulaGroupByPayload<T extends AulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaGroupByOutputType[P]>
            : GetScalarType<T[P], AulaGroupByOutputType[P]>
        }
      >
    >


  export type AulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tema?: boolean
    duracao?: boolean
    professorId?: boolean
    cursoId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    aluno?: boolean | Aula$alunoArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>



  export type AulaSelectScalar = {
    id?: boolean
    tema?: boolean
    duracao?: boolean
    professorId?: boolean
    cursoId?: boolean
  }

  export type AulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tema" | "duracao" | "professorId" | "cursoId", ExtArgs["result"]["aula"]>
  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    aluno?: boolean | Aula$alunoArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
      aluno: Prisma.$AlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tema: string
      duracao: number
      professorId: string
      cursoId: string
    }, ExtArgs["result"]["aula"]>
    composites: {}
  }

  type AulaGetPayload<S extends boolean | null | undefined | AulaDefaultArgs> = $Result.GetResult<Prisma.$AulaPayload, S>

  type AulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulaCountAggregateInputType | true
    }

  export interface AulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aula'], meta: { name: 'Aula' } }
    /**
     * Find zero or one Aula that matches the filter.
     * @param {AulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaFindUniqueArgs>(args: SelectSubset<T, AulaFindUniqueArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaFindFirstArgs>(args?: SelectSubset<T, AulaFindFirstArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulaWithIdOnly = await prisma.aula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AulaFindManyArgs>(args?: SelectSubset<T, AulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aula.
     * @param {AulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     * 
     */
    create<T extends AulaCreateArgs>(args: SelectSubset<T, AulaCreateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aulas.
     * @param {AulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaCreateManyArgs>(args?: SelectSubset<T, AulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aula.
     * @param {AulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     * 
     */
    delete<T extends AulaDeleteArgs>(args: SelectSubset<T, AulaDeleteArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aula.
     * @param {AulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaUpdateArgs>(args: SelectSubset<T, AulaUpdateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aulas.
     * @param {AulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaDeleteManyArgs>(args?: SelectSubset<T, AulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaUpdateManyArgs>(args: SelectSubset<T, AulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aula.
     * @param {AulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends AulaUpsertArgs>(args: SelectSubset<T, AulaUpsertArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends AulaCountArgs>(
      args?: Subset<T, AulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>

    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaGroupByArgs} args - Group by arguments.
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
      T extends AulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaGroupByArgs['orderBy'] }
        : { orderBy?: AulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aula model
   */
  readonly fields: AulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluno<T extends Aula$alunoArgs<ExtArgs> = {}>(args?: Subset<T, Aula$alunoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aula model
   */
  interface AulaFieldRefs {
    readonly id: FieldRef<"Aula", 'String'>
    readonly tema: FieldRef<"Aula", 'String'>
    readonly duracao: FieldRef<"Aula", 'Int'>
    readonly professorId: FieldRef<"Aula", 'String'>
    readonly cursoId: FieldRef<"Aula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aula findUnique
   */
  export type AulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findUniqueOrThrow
   */
  export type AulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findFirst
   */
  export type AulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findFirstOrThrow
   */
  export type AulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findMany
   */
  export type AulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aulas to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula create
   */
  export type AulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aula.
     */
    data: XOR<AulaCreateInput, AulaUncheckedCreateInput>
  }

  /**
   * Aula createMany
   */
  export type AulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula update
   */
  export type AulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aula.
     */
    data: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
    /**
     * Choose, which Aula to update.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula updateMany
   */
  export type AulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula upsert
   */
  export type AulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aula to update in case it exists.
     */
    where: AulaWhereUniqueInput
    /**
     * In case the Aula found by the `where` argument doesn't exist, create a new Aula with this data.
     */
    create: XOR<AulaCreateInput, AulaUncheckedCreateInput>
    /**
     * In case the Aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
  }

  /**
   * Aula delete
   */
  export type AulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter which Aula to delete.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula deleteMany
   */
  export type AulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aulas to delete
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to delete.
     */
    limit?: number
  }

  /**
   * Aula.aluno
   */
  export type Aula$alunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aula without action
   */
  export type AulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type CursoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CursoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: string
    nome: string
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    aula?: boolean | Curso$aulaArgs<ExtArgs>
    aluno?: boolean | Curso$alunoArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>



  export type CursoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | Curso$aulaArgs<ExtArgs>
    aluno?: boolean | Curso$alunoArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      aula: Prisma.$AulaPayload<ExtArgs>[]
      aluno: Prisma.$AlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aula<T extends Curso$aulaArgs<ExtArgs> = {}>(args?: Subset<T, Curso$aulaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aluno<T extends Curso$alunoArgs<ExtArgs> = {}>(args?: Subset<T, Curso$alunoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'String'>
    readonly nome: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.aula
   */
  export type Curso$aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    cursor?: AulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Curso.aluno
   */
  export type Curso$alunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
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


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const AulaScalarFieldEnum: {
    id: 'id',
    tema: 'tema',
    duracao: 'duracao',
    professorId: 'professorId',
    cursoId: 'cursoId'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AlunoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type AlunoOrderByRelevanceFieldEnum = (typeof AlunoOrderByRelevanceFieldEnum)[keyof typeof AlunoOrderByRelevanceFieldEnum]


  export const ProfessorOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type ProfessorOrderByRelevanceFieldEnum = (typeof ProfessorOrderByRelevanceFieldEnum)[keyof typeof ProfessorOrderByRelevanceFieldEnum]


  export const AulaOrderByRelevanceFieldEnum: {
    id: 'id',
    tema: 'tema',
    professorId: 'professorId',
    cursoId: 'cursoId'
  };

  export type AulaOrderByRelevanceFieldEnum = (typeof AulaOrderByRelevanceFieldEnum)[keyof typeof AulaOrderByRelevanceFieldEnum]


  export const CursoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CursoOrderByRelevanceFieldEnum = (typeof CursoOrderByRelevanceFieldEnum)[keyof typeof CursoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    curso?: CursoListRelationFilter
    aula?: AulaListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    curso?: CursoOrderByRelationAggregateInput
    aula?: AulaOrderByRelationAggregateInput
    _relevance?: AlunoOrderByRelevanceInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    curso?: CursoListRelationFilter
    aula?: AulaListRelationFilter
  }, "id" | "email">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringWithAggregatesFilter<"Aluno"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: StringFilter<"Professor"> | string
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    aula?: AulaListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    aula?: AulaOrderByRelationAggregateInput
    _relevance?: ProfessorOrderByRelevanceInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    aula?: AulaListRelationFilter
  }, "id" | "email">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professor"> | string
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type AulaWhereInput = {
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    id?: StringFilter<"Aula"> | string
    tema?: StringFilter<"Aula"> | string
    duracao?: IntFilter<"Aula"> | number
    professorId?: StringFilter<"Aula"> | string
    cursoId?: StringFilter<"Aula"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    aluno?: AlunoListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id?: SortOrder
    tema?: SortOrder
    duracao?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
    aluno?: AlunoOrderByRelationAggregateInput
    _relevance?: AulaOrderByRelevanceInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    tema?: StringFilter<"Aula"> | string
    duracao?: IntFilter<"Aula"> | number
    professorId?: StringFilter<"Aula"> | string
    cursoId?: StringFilter<"Aula"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    aluno?: AlunoListRelationFilter
  }, "id">

  export type AulaOrderByWithAggregationInput = {
    id?: SortOrder
    tema?: SortOrder
    duracao?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    _count?: AulaCountOrderByAggregateInput
    _avg?: AulaAvgOrderByAggregateInput
    _max?: AulaMaxOrderByAggregateInput
    _min?: AulaMinOrderByAggregateInput
    _sum?: AulaSumOrderByAggregateInput
  }

  export type AulaScalarWhereWithAggregatesInput = {
    AND?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    OR?: AulaScalarWhereWithAggregatesInput[]
    NOT?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aula"> | string
    tema?: StringWithAggregatesFilter<"Aula"> | string
    duracao?: IntWithAggregatesFilter<"Aula"> | number
    professorId?: StringWithAggregatesFilter<"Aula"> | string
    cursoId?: StringWithAggregatesFilter<"Aula"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: StringFilter<"Curso"> | string
    nome?: StringFilter<"Curso"> | string
    aula?: AulaListRelationFilter
    aluno?: AlunoListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    aula?: AulaOrderByRelationAggregateInput
    aluno?: AlunoOrderByRelationAggregateInput
    _relevance?: CursoOrderByRelevanceInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    aula?: AulaListRelationFilter
    aluno?: AlunoListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Curso"> | string
    nome?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type AlunoCreateInput = {
    id?: string
    nome: string
    email: string
    curso?: CursoCreateNestedManyWithoutAlunoInput
    aula?: AulaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    curso?: CursoUncheckedCreateNestedManyWithoutAlunoInput
    aula?: AulaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateManyWithoutAlunoNestedInput
    aula?: AulaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    curso?: CursoUncheckedUpdateManyWithoutAlunoNestedInput
    aula?: AulaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: string
    nome: string
    email: string
  }

  export type AlunoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    id?: string
    nome: string
    email: string
    aula?: AulaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    aula?: AulaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    aula?: AulaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    aula?: AulaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: string
    nome: string
    email: string
  }

  export type ProfessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AulaCreateInput = {
    id?: string
    tema: string
    duracao: number
    professor: ProfessorCreateNestedOneWithoutAulaInput
    curso: CursoCreateNestedOneWithoutAulaInput
    aluno?: AlunoCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id?: string
    tema: string
    duracao: number
    professorId: string
    cursoId: string
    aluno?: AlunoUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutAulaNestedInput
    curso?: CursoUpdateOneRequiredWithoutAulaNestedInput
    aluno?: AlunoUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id?: string
    tema: string
    duracao: number
    professorId: string
    cursoId: string
  }

  export type AulaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type AulaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    id?: string
    nome: string
    aula?: AulaCreateNestedManyWithoutCursoInput
    aluno?: AlunoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: string
    nome: string
    aula?: AulaUncheckedCreateNestedManyWithoutCursoInput
    aluno?: AlunoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aula?: AulaUpdateManyWithoutCursoNestedInput
    aluno?: AlunoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aula?: AulaUncheckedUpdateManyWithoutCursoNestedInput
    aluno?: AlunoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: string
    nome: string
  }

  export type CursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type AulaListRelationFilter = {
    every?: AulaWhereInput
    some?: AulaWhereInput
    none?: AulaWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoOrderByRelevanceInput = {
    fields: AlunoOrderByRelevanceFieldEnum | AlunoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProfessorOrderByRelevanceInput = {
    fields: ProfessorOrderByRelevanceFieldEnum | ProfessorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AulaOrderByRelevanceInput = {
    fields: AulaOrderByRelevanceFieldEnum | AulaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AulaCountOrderByAggregateInput = {
    id?: SortOrder
    tema?: SortOrder
    duracao?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    duracao?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id?: SortOrder
    tema?: SortOrder
    duracao?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id?: SortOrder
    tema?: SortOrder
    duracao?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    duracao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type CursoOrderByRelevanceInput = {
    fields: CursoOrderByRelevanceFieldEnum | CursoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CursoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput> | CursoCreateWithoutAlunoInput[] | CursoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlunoInput | CursoCreateOrConnectWithoutAlunoInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type AulaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput> | AulaCreateWithoutAlunoInput[] | AulaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutAlunoInput | AulaCreateOrConnectWithoutAlunoInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput> | CursoCreateWithoutAlunoInput[] | CursoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlunoInput | CursoCreateOrConnectWithoutAlunoInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type AulaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput> | AulaCreateWithoutAlunoInput[] | AulaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutAlunoInput | AulaCreateOrConnectWithoutAlunoInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CursoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput> | CursoCreateWithoutAlunoInput[] | CursoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlunoInput | CursoCreateOrConnectWithoutAlunoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutAlunoInput | CursoUpsertWithWhereUniqueWithoutAlunoInput[]
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutAlunoInput | CursoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutAlunoInput | CursoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type AulaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput> | AulaCreateWithoutAlunoInput[] | AulaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutAlunoInput | AulaCreateOrConnectWithoutAlunoInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutAlunoInput | AulaUpsertWithWhereUniqueWithoutAlunoInput[]
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutAlunoInput | AulaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutAlunoInput | AulaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput> | CursoCreateWithoutAlunoInput[] | CursoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlunoInput | CursoCreateOrConnectWithoutAlunoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutAlunoInput | CursoUpsertWithWhereUniqueWithoutAlunoInput[]
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutAlunoInput | CursoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutAlunoInput | CursoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type AulaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput> | AulaCreateWithoutAlunoInput[] | AulaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutAlunoInput | AulaCreateOrConnectWithoutAlunoInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutAlunoInput | AulaUpsertWithWhereUniqueWithoutAlunoInput[]
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutAlunoInput | AulaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutAlunoInput | AulaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type AulaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput> | AulaCreateWithoutProfessorInput[] | AulaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutProfessorInput | AulaCreateOrConnectWithoutProfessorInput[]
    createMany?: AulaCreateManyProfessorInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type AulaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput> | AulaCreateWithoutProfessorInput[] | AulaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutProfessorInput | AulaCreateOrConnectWithoutProfessorInput[]
    createMany?: AulaCreateManyProfessorInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type AulaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput> | AulaCreateWithoutProfessorInput[] | AulaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutProfessorInput | AulaCreateOrConnectWithoutProfessorInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutProfessorInput | AulaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AulaCreateManyProfessorInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutProfessorInput | AulaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutProfessorInput | AulaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type AulaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput> | AulaCreateWithoutProfessorInput[] | AulaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutProfessorInput | AulaCreateOrConnectWithoutProfessorInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutProfessorInput | AulaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: AulaCreateManyProfessorInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutProfessorInput | AulaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutProfessorInput | AulaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutAulaInput = {
    create?: XOR<ProfessorCreateWithoutAulaInput, ProfessorUncheckedCreateWithoutAulaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAulaInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutAulaInput = {
    create?: XOR<CursoCreateWithoutAulaInput, CursoUncheckedCreateWithoutAulaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAulaInput
    connect?: CursoWhereUniqueInput
  }

  export type AlunoCreateNestedManyWithoutAulaInput = {
    create?: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput> | AlunoCreateWithoutAulaInput[] | AlunoUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutAulaInput | AlunoCreateOrConnectWithoutAulaInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput> | AlunoCreateWithoutAulaInput[] | AlunoUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutAulaInput | AlunoCreateOrConnectWithoutAulaInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorUpdateOneRequiredWithoutAulaNestedInput = {
    create?: XOR<ProfessorCreateWithoutAulaInput, ProfessorUncheckedCreateWithoutAulaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutAulaInput
    upsert?: ProfessorUpsertWithoutAulaInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutAulaInput, ProfessorUpdateWithoutAulaInput>, ProfessorUncheckedUpdateWithoutAulaInput>
  }

  export type CursoUpdateOneRequiredWithoutAulaNestedInput = {
    create?: XOR<CursoCreateWithoutAulaInput, CursoUncheckedCreateWithoutAulaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAulaInput
    upsert?: CursoUpsertWithoutAulaInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutAulaInput, CursoUpdateWithoutAulaInput>, CursoUncheckedUpdateWithoutAulaInput>
  }

  export type AlunoUpdateManyWithoutAulaNestedInput = {
    create?: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput> | AlunoCreateWithoutAulaInput[] | AlunoUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutAulaInput | AlunoCreateOrConnectWithoutAulaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutAulaInput | AlunoUpsertWithWhereUniqueWithoutAulaInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutAulaInput | AlunoUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutAulaInput | AlunoUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput> | AlunoCreateWithoutAulaInput[] | AlunoUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutAulaInput | AlunoCreateOrConnectWithoutAulaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutAulaInput | AlunoUpsertWithWhereUniqueWithoutAulaInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutAulaInput | AlunoUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutAulaInput | AlunoUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type AulaCreateNestedManyWithoutCursoInput = {
    create?: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput> | AulaCreateWithoutCursoInput[] | AulaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutCursoInput | AulaCreateOrConnectWithoutCursoInput[]
    createMany?: AulaCreateManyCursoInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type AlunoCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type AulaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput> | AulaCreateWithoutCursoInput[] | AulaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutCursoInput | AulaCreateOrConnectWithoutCursoInput[]
    createMany?: AulaCreateManyCursoInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type AulaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput> | AulaCreateWithoutCursoInput[] | AulaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutCursoInput | AulaCreateOrConnectWithoutCursoInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutCursoInput | AulaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AulaCreateManyCursoInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutCursoInput | AulaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutCursoInput | AulaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type AlunoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutCursoInput | AlunoUpsertWithWhereUniqueWithoutCursoInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutCursoInput | AlunoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutCursoInput | AlunoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type AulaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput> | AulaCreateWithoutCursoInput[] | AulaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutCursoInput | AulaCreateOrConnectWithoutCursoInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutCursoInput | AulaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AulaCreateManyCursoInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutCursoInput | AulaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutCursoInput | AulaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutCursoInput | AlunoUpsertWithWhereUniqueWithoutCursoInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutCursoInput | AlunoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutCursoInput | AlunoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CursoCreateWithoutAlunoInput = {
    id?: string
    nome: string
    aula?: AulaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutAlunoInput = {
    id?: string
    nome: string
    aula?: AulaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutAlunoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput>
  }

  export type AulaCreateWithoutAlunoInput = {
    id?: string
    tema: string
    duracao: number
    professor: ProfessorCreateNestedOneWithoutAulaInput
    curso: CursoCreateNestedOneWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutAlunoInput = {
    id?: string
    tema: string
    duracao: number
    professorId: string
    cursoId: string
  }

  export type AulaCreateOrConnectWithoutAlunoInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput>
  }

  export type CursoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutAlunoInput, CursoUncheckedUpdateWithoutAlunoInput>
    create: XOR<CursoCreateWithoutAlunoInput, CursoUncheckedCreateWithoutAlunoInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutAlunoInput, CursoUncheckedUpdateWithoutAlunoInput>
  }

  export type CursoUpdateManyWithWhereWithoutAlunoInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: StringFilter<"Curso"> | string
    nome?: StringFilter<"Curso"> | string
  }

  export type AulaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AulaWhereUniqueInput
    update: XOR<AulaUpdateWithoutAlunoInput, AulaUncheckedUpdateWithoutAlunoInput>
    create: XOR<AulaCreateWithoutAlunoInput, AulaUncheckedCreateWithoutAlunoInput>
  }

  export type AulaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AulaWhereUniqueInput
    data: XOR<AulaUpdateWithoutAlunoInput, AulaUncheckedUpdateWithoutAlunoInput>
  }

  export type AulaUpdateManyWithWhereWithoutAlunoInput = {
    where: AulaScalarWhereInput
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AulaScalarWhereInput = {
    AND?: AulaScalarWhereInput | AulaScalarWhereInput[]
    OR?: AulaScalarWhereInput[]
    NOT?: AulaScalarWhereInput | AulaScalarWhereInput[]
    id?: StringFilter<"Aula"> | string
    tema?: StringFilter<"Aula"> | string
    duracao?: IntFilter<"Aula"> | number
    professorId?: StringFilter<"Aula"> | string
    cursoId?: StringFilter<"Aula"> | string
  }

  export type AulaCreateWithoutProfessorInput = {
    id?: string
    tema: string
    duracao: number
    curso: CursoCreateNestedOneWithoutAulaInput
    aluno?: AlunoCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutProfessorInput = {
    id?: string
    tema: string
    duracao: number
    cursoId: string
    aluno?: AlunoUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutProfessorInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput>
  }

  export type AulaCreateManyProfessorInputEnvelope = {
    data: AulaCreateManyProfessorInput | AulaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type AulaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: AulaWhereUniqueInput
    update: XOR<AulaUpdateWithoutProfessorInput, AulaUncheckedUpdateWithoutProfessorInput>
    create: XOR<AulaCreateWithoutProfessorInput, AulaUncheckedCreateWithoutProfessorInput>
  }

  export type AulaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: AulaWhereUniqueInput
    data: XOR<AulaUpdateWithoutProfessorInput, AulaUncheckedUpdateWithoutProfessorInput>
  }

  export type AulaUpdateManyWithWhereWithoutProfessorInput = {
    where: AulaScalarWhereInput
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfessorCreateWithoutAulaInput = {
    id?: string
    nome: string
    email: string
  }

  export type ProfessorUncheckedCreateWithoutAulaInput = {
    id?: string
    nome: string
    email: string
  }

  export type ProfessorCreateOrConnectWithoutAulaInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutAulaInput, ProfessorUncheckedCreateWithoutAulaInput>
  }

  export type CursoCreateWithoutAulaInput = {
    id?: string
    nome: string
    aluno?: AlunoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutAulaInput = {
    id?: string
    nome: string
    aluno?: AlunoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutAulaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutAulaInput, CursoUncheckedCreateWithoutAulaInput>
  }

  export type AlunoCreateWithoutAulaInput = {
    id?: string
    nome: string
    email: string
    curso?: CursoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutAulaInput = {
    id?: string
    nome: string
    email: string
    curso?: CursoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutAulaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput>
  }

  export type ProfessorUpsertWithoutAulaInput = {
    update: XOR<ProfessorUpdateWithoutAulaInput, ProfessorUncheckedUpdateWithoutAulaInput>
    create: XOR<ProfessorCreateWithoutAulaInput, ProfessorUncheckedCreateWithoutAulaInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutAulaInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutAulaInput, ProfessorUncheckedUpdateWithoutAulaInput>
  }

  export type ProfessorUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUpsertWithoutAulaInput = {
    update: XOR<CursoUpdateWithoutAulaInput, CursoUncheckedUpdateWithoutAulaInput>
    create: XOR<CursoCreateWithoutAulaInput, CursoUncheckedCreateWithoutAulaInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutAulaInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutAulaInput, CursoUncheckedUpdateWithoutAulaInput>
  }

  export type CursoUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type AlunoUpsertWithWhereUniqueWithoutAulaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutAulaInput, AlunoUncheckedUpdateWithoutAulaInput>
    create: XOR<AlunoCreateWithoutAulaInput, AlunoUncheckedCreateWithoutAulaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutAulaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutAulaInput, AlunoUncheckedUpdateWithoutAulaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutAulaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutAulaInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    OR?: AlunoScalarWhereInput[]
    NOT?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
  }

  export type AulaCreateWithoutCursoInput = {
    id?: string
    tema: string
    duracao: number
    professor: ProfessorCreateNestedOneWithoutAulaInput
    aluno?: AlunoCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutCursoInput = {
    id?: string
    tema: string
    duracao: number
    professorId: string
    aluno?: AlunoUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutCursoInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput>
  }

  export type AulaCreateManyCursoInputEnvelope = {
    data: AulaCreateManyCursoInput | AulaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type AlunoCreateWithoutCursoInput = {
    id?: string
    nome: string
    email: string
    aula?: AulaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutCursoInput = {
    id?: string
    nome: string
    email: string
    aula?: AulaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput>
  }

  export type AulaUpsertWithWhereUniqueWithoutCursoInput = {
    where: AulaWhereUniqueInput
    update: XOR<AulaUpdateWithoutCursoInput, AulaUncheckedUpdateWithoutCursoInput>
    create: XOR<AulaCreateWithoutCursoInput, AulaUncheckedCreateWithoutCursoInput>
  }

  export type AulaUpdateWithWhereUniqueWithoutCursoInput = {
    where: AulaWhereUniqueInput
    data: XOR<AulaUpdateWithoutCursoInput, AulaUncheckedUpdateWithoutCursoInput>
  }

  export type AulaUpdateManyWithWhereWithoutCursoInput = {
    where: AulaScalarWhereInput
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyWithoutCursoInput>
  }

  export type AlunoUpsertWithWhereUniqueWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutCursoInput, AlunoUncheckedUpdateWithoutCursoInput>
    create: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutCursoInput, AlunoUncheckedUpdateWithoutCursoInput>
  }

  export type AlunoUpdateManyWithWhereWithoutCursoInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutCursoInput>
  }

  export type CursoUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aula?: AulaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    aula?: AulaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AulaUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutAulaNestedInput
    curso?: CursoUpdateOneRequiredWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
  }

  export type AulaUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
  }

  export type AulaCreateManyProfessorInput = {
    id?: string
    tema: string
    duracao: number
    cursoId: string
  }

  export type AulaUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutAulaNestedInput
    aluno?: AlunoUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    cursoId?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateManyWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    cursoId?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    curso?: CursoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AulaCreateManyCursoInput = {
    id?: string
    tema: string
    duracao: number
    professorId: string
  }

  export type AulaUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutAulaNestedInput
    aluno?: AlunoUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tema?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    professorId?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    aula?: AulaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    aula?: AulaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
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