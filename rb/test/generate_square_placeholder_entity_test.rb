# GenerateSquarePlaceholder entity test

require "minitest/autorun"
require "json"
require_relative "../ImagePlaceholderGenerator_sdk"
require_relative "runner"

class GenerateSquarePlaceholderEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ImagePlaceholderGeneratorSDK.test(nil, nil)
    ent = testsdk.GenerateSquarePlaceholder(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = generate_square_placeholder_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "generate_square_placeholder." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    generate_square_placeholder_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.generate_square_placeholder")))
    generate_square_placeholder_ref01_data = nil
    if generate_square_placeholder_ref01_data_raw.length > 0
      generate_square_placeholder_ref01_data = Helpers.to_map(generate_square_placeholder_ref01_data_raw[0][1])
    end

    # LOAD
    generate_square_placeholder_ref01_ent = client.GenerateSquarePlaceholder(nil)
    generate_square_placeholder_ref01_match_dt0 = {
      "id" => generate_square_placeholder_ref01_data["id"],
    }
    generate_square_placeholder_ref01_data_dt0_loaded = generate_square_placeholder_ref01_ent.load(generate_square_placeholder_ref01_match_dt0, nil)
    generate_square_placeholder_ref01_data_dt0_load_result = Helpers.to_map(generate_square_placeholder_ref01_data_dt0_loaded.respond_to?(:data_get) ? generate_square_placeholder_ref01_data_dt0_loaded.data_get : generate_square_placeholder_ref01_data_dt0_loaded)
    assert !generate_square_placeholder_ref01_data_dt0_load_result.nil?
    assert_equal generate_square_placeholder_ref01_data_dt0_load_result["id"], generate_square_placeholder_ref01_data["id"]

  end
end

def generate_square_placeholder_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "generate_square_placeholder", "GenerateSquarePlaceholderTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ImagePlaceholderGeneratorSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["generate_square_placeholder01", "generate_square_placeholder02", "generate_square_placeholder03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID" => idmap,
    "IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE" => "FALSE",
    "IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
      },
      extra || {},
    ])
    client = ImagePlaceholderGeneratorSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
