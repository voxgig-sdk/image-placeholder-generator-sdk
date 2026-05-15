<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: prepare_method

class ImagePlaceholderGeneratorPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(ImagePlaceholderGeneratorContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
