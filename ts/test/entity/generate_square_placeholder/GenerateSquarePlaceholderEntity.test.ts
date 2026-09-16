

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ImagePlaceholderGeneratorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GenerateSquarePlaceholderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ImagePlaceholderGeneratorSDK.test()
    const ent = testsdk.GenerateSquarePlaceholder()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'generate_square_placeholder.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"generate_square_placeholder","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":400,"kind":"param","name":"id","orig":"width","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":"BiFindr+Placeholder+Image","kind":"query","name":"text","orig":"text","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{width}","json":"{\"operationId\":\"generateSquarePlaceholder\",\"parameters\":[{\"description\":\"The width (and height) of the square image in pixels\",\"in\":\"path\",\"name\":\"width\",\"required\":true,\"schema\":{\"example\":400,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Custom text to display on the image. URL encoded strings supported (use + for spaces)\",\"in\":\"query\",\"name\":\"text\",\"required\":false,\"schema\":{\"example\":\"BiFindr+Placeholder+Image\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/svg+xml\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successfully generated SVG placeholder image\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{width}","rename":{"param":{"width":"id"}},"segments":[{"var":"id"}],"select":{"exist":["id","text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"generate_square_placeholder","name__orig":"generate_square_placeholder","Name":"GenerateSquarePlaceholder","name_":"generate_square_placeholder","name-":"generate-square-placeholder","NAME":"GENERATE_SQUARE_PLACEHOLDER","index$":2}, {"active":true,"entity":"generate_square_placeholder","key$":"BasicGenerateSquarePlaceholderFlow","kind":"basic","name":"BasicGenerateSquarePlaceholderFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"generate_square_placeholder_ref01","srcdatavar":"generate_square_placeholder_ref01_data","suffix":"_dt0"},"match":{"id":"generate_square_placeholder01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-generate_square_placeholder_ref01"}}],"index$":0}]}, 'GenerateSquarePlaceholder')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let generate_square_placeholder_ref01_data = Object.values(setup.data.existing.generate_square_placeholder)[0] as any

    // LOAD
    const generate_square_placeholder_ref01_ent = client.GenerateSquarePlaceholder()
    const generate_square_placeholder_ref01_match_dt0: any = {}
    generate_square_placeholder_ref01_match_dt0.id = generate_square_placeholder_ref01_data.id
    const generate_square_placeholder_ref01_data_dt0 = (await generate_square_placeholder_ref01_ent.load(generate_square_placeholder_ref01_match_dt0)).data()
    assert(generate_square_placeholder_ref01_data_dt0.id === generate_square_placeholder_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/generate_square_placeholder/GenerateSquarePlaceholderTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ImagePlaceholderGeneratorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['generate_square_placeholder01','generate_square_placeholder02','generate_square_placeholder03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID': idmap,
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE': 'FALSE',
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID']

  const live = 'TRUE' === env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_SQUARE_PLACEHOLDER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ImagePlaceholderGeneratorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
