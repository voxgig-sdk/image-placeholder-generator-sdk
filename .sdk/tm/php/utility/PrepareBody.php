<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: prepare_body

class ImagePlaceholderGeneratorPrepareBody
{
    public static function call(ImagePlaceholderGeneratorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
