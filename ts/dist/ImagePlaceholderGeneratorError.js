"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePlaceholderGeneratorError = void 0;
class ImagePlaceholderGeneratorError extends Error {
    isImagePlaceholderGeneratorError = true;
    sdk = 'ImagePlaceholderGenerator';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ImagePlaceholderGeneratorError = ImagePlaceholderGeneratorError;
//# sourceMappingURL=ImagePlaceholderGeneratorError.js.map