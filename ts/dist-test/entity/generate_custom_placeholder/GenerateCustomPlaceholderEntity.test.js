"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GenerateCustomPlaceholderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ImagePlaceholderGeneratorSDK.test();
        const ent = testsdk.GenerateCustomPlaceholder();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generate_custom_placeholder.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id", "parts": ["width", "height", "background", "text_color"], "sep": "/" }, "name": "generate_custom_placeholder", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /{width}/{height}/{background}/{text_color}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "2C3E50", "k": "param", "n": "background", "or": "background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 300, "k": "param", "n": "height", "or": "height", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "ECF0F1", "k": "param", "n": "text_color", "or": "text_color", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 600, "k": "param", "n": "width", "or": "width", "r": true, "t": "`$INTEGER`", "index$": 3 }], "query": [{ "a": true, "ex": "BiFindr+Placeholder+Image", "k": "query", "n": "text", "or": "text", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{width}/{height}/{background}/{text_color}", "q": { "exist": ["background", "height", "text", "text_color", "width"] }, "r": {}, "s": [{ "var": "width" }, { "var": "height" }, { "var": "background" }, { "var": "text_color" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "generate_custom_placeholder", "name__orig": "generate_custom_placeholder", "Name": "GenerateCustomPlaceholder", "name_": "generate_custom_placeholder", "name-": "generate-custom-placeholder", "NAME": "GENERATE_CUSTOM_PLACEHOLDER", "index$": 0 }, { "active": true, "entity": "generate_custom_placeholder", "key$": "BasicGenerateCustomPlaceholderFlow", "kind": "basic", "name": "BasicGenerateCustomPlaceholderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generate_custom_placeholder_ref01", "srcdatavar": "generate_custom_placeholder_ref01_data", "suffix": "_dt0" }, "m": { "background": "background01", "height": "height01", "id": "generate_custom_placeholder01", "width": "width01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generate_custom_placeholder_ref01" } }], "index$": 0 }] }, 'GenerateCustomPlaceholder', { "GET /{width}/{height}/{background}/{text_color}": { "protocol": "http", "parameters": [{ "name": "width", "in": "path", "required": true, "description": "The width of the image in pixels", "schema": { "type": "integer", "minimum": 1, "example": 600 }, "index$": 0 }, { "name": "height", "in": "path", "required": true, "description": "The height of the image in pixels", "schema": { "type": "integer", "minimum": 1, "example": 300 }, "index$": 1 }, { "name": "background", "in": "path", "required": true, "description": "Background color as HEX code without the # symbol", "schema": { "type": "string", "pattern": "^[0-9A-Fa-f]{6}$", "example": "2C3E50" }, "index$": 2 }, { "name": "text_color", "in": "path", "required": true, "description": "Text color as HEX code without the # symbol", "schema": { "type": "string", "pattern": "^[0-9A-Fa-f]{6}$", "example": "ECF0F1" }, "index$": 3 }, { "name": "text", "in": "query", "required": false, "description": "Custom text to display on the image. URL encoded strings supported (use + for spaces)", "schema": { "type": "string", "example": "BiFindr+Placeholder+Image" }, "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let generate_custom_placeholder_ref01_data = Object.values(setup.data.existing.generate_custom_placeholder)[0];
        // LOAD
        const generate_custom_placeholder_ref01_ent = client.GenerateCustomPlaceholder();
        const generate_custom_placeholder_ref01_match_dt0 = {};
        generate_custom_placeholder_ref01_match_dt0.id = generate_custom_placeholder_ref01_data.id;
        const generate_custom_placeholder_ref01_data_dt0 = (await generate_custom_placeholder_ref01_ent.load(generate_custom_placeholder_ref01_match_dt0)).data();
        (0, node_assert_1.default)(generate_custom_placeholder_ref01_data_dt0.id === generate_custom_placeholder_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generate_custom_placeholder/GenerateCustomPlaceholderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ImagePlaceholderGeneratorSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generate_custom_placeholder01', 'generate_custom_placeholder02', 'generate_custom_placeholder03', 'background01', 'height01', 'width01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID': idmap,
        'IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE': 'FALSE',
        'IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID'];
    const live = 'TRUE' === env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ImagePlaceholderGeneratorSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GenerateCustomPlaceholderEntity.test.js.map