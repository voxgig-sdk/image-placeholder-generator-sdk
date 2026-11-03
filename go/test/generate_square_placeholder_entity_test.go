package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/image-placeholder-generator-sdk/go"
	"github.com/voxgig-sdk/image-placeholder-generator-sdk/go/core"

	vs "github.com/voxgig-sdk/image-placeholder-generator-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const generate_square_placeholderEntityLiveStrict = true


func TestGenerateSquarePlaceholderEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GenerateSquarePlaceholder(nil)
		if ent == nil {
			t.Fatal("expected non-nil GenerateSquarePlaceholderEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.GenerateSquarePlaceholder(nil).Load(map[string]any{"id": "x"}, nil)
		if sdkerr, ok := err.(*core.ImagePlaceholderGeneratorError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := generate_square_placeholderBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "generate_square_placeholder." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _liveKey, _liveEx := range map[string]any{"generate_square_placeholder01": float64(400)} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					setup.idmap[_liveKey] = _liveEx
				}
			}
		}
		client := setup.client
		_ = client
		if setup.live {
			liveExisting(t, generate_square_placeholderEntityLiveStrict, setup.data, "generate_square_placeholder", func() (any, error) {
				return []any{map[string]any{"id": setup.idmap["generate_square_placeholder01"]}}, nil
			})
		}

		// Bootstrap entity data from existing test data (no create step in flow).
		generateSquarePlaceholderRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.generate_square_placeholder")))
		var generateSquarePlaceholderRef01Data map[string]any
		if len(generateSquarePlaceholderRef01DataRaw) > 0 {
			generateSquarePlaceholderRef01Data = core.ToMapAny(generateSquarePlaceholderRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = generateSquarePlaceholderRef01Data

		// LOAD
		generateSquarePlaceholderRef01Ent := client.GenerateSquarePlaceholder(nil)
		generateSquarePlaceholderRef01MatchDt0 := map[string]any{
			"id": generateSquarePlaceholderRef01Data["id"],
		}
		generateSquarePlaceholderRef01DataDt0Loaded, err := generateSquarePlaceholderRef01Ent.Load(generateSquarePlaceholderRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		generateSquarePlaceholderRef01DataDt0LoadResult := core.ToMapAny(entityData(generateSquarePlaceholderRef01DataDt0Loaded))
		if generateSquarePlaceholderRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if generateSquarePlaceholderRef01DataDt0LoadResult["id"] != generateSquarePlaceholderRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func generate_square_placeholderBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "generate_square_placeholder", "GenerateSquarePlaceholderTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read generate_square_placeholder test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse generate_square_placeholder test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"generate_square_placeholder01", "generate_square_placeholder02", "generate_square_placeholder03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID": idmap,
		"IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE":      "FALSE",
		"IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewImagePlaceholderGeneratorSDK(core.ToMapAny(mergedOpts))
	}

	live := env["IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
