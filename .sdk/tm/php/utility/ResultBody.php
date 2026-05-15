<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: result_body

class ImagePlaceholderGeneratorResultBody
{
    public static function call(ImagePlaceholderGeneratorContext $ctx): ?ImagePlaceholderGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
