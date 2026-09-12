import { ImagePlaceholderGeneratorEntityBase } from '../ImagePlaceholderGeneratorEntityBase';
import type { ImagePlaceholderGeneratorSDK } from '../ImagePlaceholderGeneratorSDK';
import type { Control } from '../types';
import type { GenerateCustomPlaceholder, GenerateCustomPlaceholderLoadMatch } from '../ImagePlaceholderGeneratorTypes';
declare class GenerateCustomPlaceholderEntity extends ImagePlaceholderGeneratorEntityBase<GenerateCustomPlaceholder> {
    constructor(client: ImagePlaceholderGeneratorSDK, entopts: any);
    make(this: GenerateCustomPlaceholderEntity): GenerateCustomPlaceholderEntity;
    load(this: any, reqmatch?: GenerateCustomPlaceholderLoadMatch, ctrl?: Control): Promise<GenerateCustomPlaceholderEntity>;
}
export { GenerateCustomPlaceholderEntity };
