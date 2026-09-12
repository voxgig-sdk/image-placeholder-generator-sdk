import { ImagePlaceholderGeneratorEntityBase } from '../ImagePlaceholderGeneratorEntityBase';
import type { ImagePlaceholderGeneratorSDK } from '../ImagePlaceholderGeneratorSDK';
import type { Control } from '../types';
import type { GenerateRectangularPlaceholder, GenerateRectangularPlaceholderLoadMatch } from '../ImagePlaceholderGeneratorTypes';
declare class GenerateRectangularPlaceholderEntity extends ImagePlaceholderGeneratorEntityBase<GenerateRectangularPlaceholder> {
    constructor(client: ImagePlaceholderGeneratorSDK, entopts: any);
    make(this: GenerateRectangularPlaceholderEntity): GenerateRectangularPlaceholderEntity;
    load(this: any, reqmatch?: GenerateRectangularPlaceholderLoadMatch, ctrl?: Control): Promise<GenerateRectangularPlaceholderEntity>;
}
export { GenerateRectangularPlaceholderEntity };
