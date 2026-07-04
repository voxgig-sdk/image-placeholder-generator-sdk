<?php
declare(strict_types=1);

// GenerateCustomPlaceholder direct test

require_once __DIR__ . '/../imageplaceholdergenerator_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class GenerateCustomPlaceholderDirectTest extends TestCase
{
    public function test_direct_load_generate_custom_placeholder(): void
    {
        $setup = generate_custom_placeholder_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-generate_custom_placeholder", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if ($setup["live"]) {
            $params["background"] = "2C3E50";
            $params["height"] = 300;
            $params["text_color"] = "ECF0F1";
            $params["width"] = 600;
        } else {
            $params["background"] = "direct01";
            $params["height"] = "direct02";
            $params["text_color"] = "direct03";
            $params["width"] = "direct04";
        }

        $result = $client->direct([
            "path" => "{width}/{height}/{background}/{text_color}",
            "method" => "GET",
            "params" => $params,
            "query" => $query,
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx. Skip
            // rather than fail when the load endpoint isn't reachable
            // with the IDs we can construct from setup.idmap.
            if (!empty($result["err"])) {
                $this->markTestSkipped("load call failed (likely synthetic IDs against live API): " . (string)$result["err"]);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("load call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertNotNull($result["data"]);
            if (is_array($result["data"]) && isset($result["data"]["id"])) {
                $this->assertEquals("direct01", $result["data"]["id"]);
            }
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function generate_custom_placeholder_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "IMAGEPLACEHOLDERGENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID" => [],
        "IMAGEPLACEHOLDERGENERATOR_TEST_LIVE" => "FALSE",
    ]);

    $live = $env["IMAGEPLACEHOLDERGENERATOR_TEST_LIVE"] === "TRUE";

    if ($live) {
        $merged_opts = [
        ];
        $client = new ImagePlaceholderGeneratorSDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new ImagePlaceholderGeneratorSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
