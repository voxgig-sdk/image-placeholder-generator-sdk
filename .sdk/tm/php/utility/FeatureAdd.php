<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: feature_add

class ImagePlaceholderGeneratorFeatureAdd
{
    public static function call(ImagePlaceholderGeneratorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
