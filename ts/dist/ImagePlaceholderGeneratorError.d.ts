import { Context } from './Context';
declare class ImagePlaceholderGeneratorError extends Error {
    isImagePlaceholderGeneratorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ImagePlaceholderGeneratorError };
