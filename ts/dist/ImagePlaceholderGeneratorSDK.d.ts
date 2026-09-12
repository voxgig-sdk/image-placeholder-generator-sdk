import { GenerateCustomPlaceholderEntity } from './entity/GenerateCustomPlaceholderEntity';
import { GenerateRectangularPlaceholderEntity } from './entity/GenerateRectangularPlaceholderEntity';
import { GenerateSquarePlaceholderEntity } from './entity/GenerateSquarePlaceholderEntity';
export type * from './ImagePlaceholderGeneratorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ImagePlaceholderGeneratorEntityBase } from './ImagePlaceholderGeneratorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ImagePlaceholderGeneratorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GenerateCustomPlaceholder(entopts?: Record<string, any>): GenerateCustomPlaceholderEntity;
    GenerateRectangularPlaceholder(entopts?: Record<string, any>): GenerateRectangularPlaceholderEntity;
    GenerateSquarePlaceholder(entopts?: Record<string, any>): GenerateSquarePlaceholderEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ImagePlaceholderGeneratorSDK;
    tester(testopts?: any, sdkopts?: any): ImagePlaceholderGeneratorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ImagePlaceholderGeneratorSDK;
export { stdutil, config, BaseFeature, ImagePlaceholderGeneratorEntityBase, ImagePlaceholderGeneratorSDK, SDK, };
