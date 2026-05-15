<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK exists test

require_once __DIR__ . '/../imageplaceholdergenerator_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ImagePlaceholderGeneratorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
