/// <reference types="node" />
import { Queries } from "./uri";
export declare class QueryParser<T extends object> {
    private readonly functions;
    constructor(descriptors: Array<QueryDescriptor<any>>);
    parse(query: Queries, init: T): T;
    private static assertParsers;
    private static assertTargets;
    private static intoPairs;
}
export interface QueryDescriptor<T> {
    readonly parser?: Parser<T>;
    readonly source: string;
    readonly target?: string;
}
export type Parser<T> = (raw: string | Array<string>) => T;
export declare const createBooleanQueryDescriptor: (source: string, target?: string) => QueryDescriptor<boolean>;
export declare const createIntegerQueryDescriptor: (source: string, target?: string) => QueryDescriptor<number>;
export declare const createPathArrayQueryDescriptor: (source: string, target?: string) => QueryDescriptor<Array<Buffer>>;
export declare const createPathQueryDescriptor: (source: string, target?: string) => QueryDescriptor<Buffer>;
export declare const asScalar: <T>(scalarOrArray: T | Array<T>) => T;
export declare const asArray: <T>(scalarOrArray: T | Array<T>) => Array<T>;