<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ImagePlaceholderGeneratorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ImagePlaceholderGeneratorBaseFeature();
            case "test":
                return new ImagePlaceholderGeneratorTestFeature();
            default:
                return new ImagePlaceholderGeneratorBaseFeature();
        }
    }
}
