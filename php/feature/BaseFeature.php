<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK base feature

class ImagePlaceholderGeneratorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ImagePlaceholderGeneratorContext $ctx, array $options): void {}
    public function PostConstruct(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PostConstructEntity(ImagePlaceholderGeneratorContext $ctx): void {}
    public function SetData(ImagePlaceholderGeneratorContext $ctx): void {}
    public function GetData(ImagePlaceholderGeneratorContext $ctx): void {}
    public function GetMatch(ImagePlaceholderGeneratorContext $ctx): void {}
    public function SetMatch(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PrePoint(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreSpec(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreRequest(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreResponse(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreResult(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreDone(ImagePlaceholderGeneratorContext $ctx): void {}
    public function PreUnexpected(ImagePlaceholderGeneratorContext $ctx): void {}
}
