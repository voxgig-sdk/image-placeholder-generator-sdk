<?php
declare(strict_types=1);

// GenerateCustomPlaceholder entity test

require_once __DIR__ . '/../imageplaceholdergenerator_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GenerateCustomPlaceholderEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ImagePlaceholderGeneratorSDK::test(null, null);
        $ent = $testsdk->GenerateCustomPlaceholder(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = generate_custom_placeholder_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "generate_custom_placeholder." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set IMAGEPLACEHOLDERGENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $generate_custom_placeholder_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.generate_custom_placeholder")));
        $generate_custom_placeholder_ref01_data = null;
        if (count($generate_custom_placeholder_ref01_data_raw) > 0) {
            $generate_custom_placeholder_ref01_data = Helpers::to_map($generate_custom_placeholder_ref01_data_raw[0][1]);
        }

        // LOAD
        $generate_custom_placeholder_ref01_ent = $client->GenerateCustomPlaceholder(null);
        $generate_custom_placeholder_ref01_match_dt0 = [];
        [$generate_custom_placeholder_ref01_data_dt0_loaded, $err] = $generate_custom_placeholder_ref01_ent->load($generate_custom_placeholder_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($generate_custom_placeholder_ref01_data_dt0_loaded);

    }
}

function generate_custom_placeholder_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/generate_custom_placeholder/GenerateCustomPlaceholderTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ImagePlaceholderGeneratorSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["generate_custom_placeholder01", "generate_custom_placeholder02", "generate_custom_placeholder03", "background01", "height01", "width01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("IMAGEPLACEHOLDERGENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "IMAGEPLACEHOLDERGENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID" => $idmap,
        "IMAGEPLACEHOLDERGENERATOR_TEST_LIVE" => "FALSE",
        "IMAGEPLACEHOLDERGENERATOR_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["IMAGEPLACEHOLDERGENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["IMAGEPLACEHOLDERGENERATOR_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new ImagePlaceholderGeneratorSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["IMAGEPLACEHOLDERGENERATOR_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["IMAGEPLACEHOLDERGENERATOR_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
