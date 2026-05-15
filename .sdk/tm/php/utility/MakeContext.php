<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ImagePlaceholderGeneratorMakeContext
{
    public static function call(array $ctxmap, ?ImagePlaceholderGeneratorContext $basectx): ImagePlaceholderGeneratorContext
    {
        return new ImagePlaceholderGeneratorContext($ctxmap, $basectx);
    }
}
