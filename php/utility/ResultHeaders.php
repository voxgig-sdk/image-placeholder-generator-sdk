<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility: result_headers

class ImagePlaceholderGeneratorResultHeaders
{
    public static function call(ImagePlaceholderGeneratorContext $ctx): ?ImagePlaceholderGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
