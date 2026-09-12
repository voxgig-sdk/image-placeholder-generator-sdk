import { ImagePlaceholderGeneratorEntityBase } from '../ImagePlaceholderGeneratorEntityBase';
import type { ImagePlaceholderGeneratorSDK } from '../ImagePlaceholderGeneratorSDK';
import type { Control } from '../types';
import type { GenerateSquarePlaceholder, GenerateSquarePlaceholderLoadMatch } from '../ImagePlaceholderGeneratorTypes';
declare class GenerateSquarePlaceholderEntity extends ImagePlaceholderGeneratorEntityBase<GenerateSquarePlaceholder> {
    constructor(client: ImagePlaceholderGeneratorSDK, entopts: any);
    make(this: GenerateSquarePlaceholderEntity): GenerateSquarePlaceholderEntity;
    load(this: any, reqmatch?: GenerateSquarePlaceholderLoadMatch, ctrl?: Control): Promise<GenerateSquarePlaceholderEntity>;
}
export { GenerateSquarePlaceholderEntity };
