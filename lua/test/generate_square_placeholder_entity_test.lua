-- GenerateSquarePlaceholder entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("image-placeholder-generator_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


describe("GenerateSquarePlaceholderEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:GenerateSquarePlaceholder(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:GenerateSquarePlaceholder(nil):load({ ["id"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = generate_square_placeholder_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "generate_square_placeholder." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _live_key, _live_ex in pairs({["generate_square_placeholder01"] = 400}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          setup.idmap[_live_key] = _live_ex
        end
      end
    end
    local client = setup.client
    if setup.live then
      runner.live_existing(pending, setup, LIVE_STRICT, "generate_square_placeholder", function()
        return { { id = setup.idmap["generate_square_placeholder01"] } }
      end)
    end

    -- Bootstrap entity data from existing test data.
    local generate_square_placeholder_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.generate_square_placeholder")))
    local generate_square_placeholder_ref01_data = nil
    if #generate_square_placeholder_ref01_data_raw > 0 then
      generate_square_placeholder_ref01_data = helpers.to_map(generate_square_placeholder_ref01_data_raw[1][2])
    end

    -- LOAD
    local generate_square_placeholder_ref01_ent = client:GenerateSquarePlaceholder(nil)
    local generate_square_placeholder_ref01_match_dt0 = {
      id = generate_square_placeholder_ref01_data["id"],
    }
    local generate_square_placeholder_ref01_data_dt0_loaded, err = generate_square_placeholder_ref01_ent:load(generate_square_placeholder_ref01_match_dt0, nil)
    assert.is_nil(err)
    local generate_square_placeholder_ref01_data_dt0_load_result = helpers.to_map(type(generate_square_placeholder_ref01_data_dt0_loaded) == 'table' and generate_square_placeholder_ref01_data_dt0_loaded.data_get and generate_square_placeholder_ref01_data_dt0_loaded:data_get() or generate_square_placeholder_ref01_data_dt0_loaded)
    assert.is_not_nil(generate_square_placeholder_ref01_data_dt0_load_result)
    assert.are.equal(generate_square_placeholder_ref01_data_dt0_load_result["id"], generate_square_placeholder_ref01_data["id"])

  end)
end)

function generate_square_placeholder_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/generate_square_placeholder/GenerateSquarePlaceholderTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read generate_square_placeholder test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "generate_square_placeholder01", "generate_square_placeholder02", "generate_square_placeholder03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID"] = idmap,
    ["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] = "FALSE",
    ["IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
