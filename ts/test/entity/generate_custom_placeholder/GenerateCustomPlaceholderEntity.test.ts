

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GenerateCustomPlaceholderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ImagePlaceholderGeneratorSDK.test()
    const ent = testsdk.GenerateCustomPlaceholder()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'generate_custom_placeholder.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id","parts":["width","height","background","text_color"],"sep":"/"},"name":"generate_custom_placeholder","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{width}/{height}/{background}/{text_color}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"2C3E50","k":"param","n":"background","or":"background","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":300,"k":"param","n":"height","or":"height","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"ECF0F1","k":"param","n":"text_color","or":"text_color","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":600,"k":"param","n":"width","or":"width","r":true,"t":"`$INTEGER`","index$":3}],"query":[{"a":true,"ex":"BiFindr+Placeholder+Image","k":"query","n":"text","or":"text","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{width}/{height}/{background}/{text_color}","q":{"exist":["background","height","text","text_color","width"]},"r":{},"s":[{"var":"width"},{"var":"height"},{"var":"background"},{"var":"text_color"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"generate_custom_placeholder","name__orig":"generate_custom_placeholder","Name":"GenerateCustomPlaceholder","name_":"generate_custom_placeholder","name-":"generate-custom-placeholder","NAME":"GENERATE_CUSTOM_PLACEHOLDER","index$":0}, {"active":true,"entity":"generate_custom_placeholder","key$":"BasicGenerateCustomPlaceholderFlow","kind":"basic","name":"BasicGenerateCustomPlaceholderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"generate_custom_placeholder_ref01","srcdatavar":"generate_custom_placeholder_ref01_data","suffix":"_dt0"},"m":{"background":"background01","height":"height01","id":"generate_custom_placeholder01","width":"width01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-generate_custom_placeholder_ref01"}}],"index$":0}]}, 'GenerateCustomPlaceholder', {"GET /{width}/{height}/{background}/{text_color}":{"protocol":"http","parameters":[{"name":"width","in":"path","required":true,"description":"The width of the image in pixels","schema":{"type":"integer","minimum":1,"example":600},"index$":0},{"name":"height","in":"path","required":true,"description":"The height of the image in pixels","schema":{"type":"integer","minimum":1,"example":300},"index$":1},{"name":"background","in":"path","required":true,"description":"Background color as HEX code without the # symbol","schema":{"type":"string","pattern":"^[0-9A-Fa-f]{6}$","example":"2C3E50"},"index$":2},{"name":"text_color","in":"path","required":true,"description":"Text color as HEX code without the # symbol","schema":{"type":"string","pattern":"^[0-9A-Fa-f]{6}$","example":"ECF0F1"},"index$":3},{"name":"text","in":"query","required":false,"description":"Custom text to display on the image. URL encoded strings supported (use + for spaces)","schema":{"type":"string","example":"BiFindr+Placeholder+Image"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let generate_custom_placeholder_ref01_data = Object.values(setup.data.existing.generate_custom_placeholder)[0] as any

    // LOAD
    const generate_custom_placeholder_ref01_ent = client.GenerateCustomPlaceholder()
    const generate_custom_placeholder_ref01_match_dt0: any = {}
    generate_custom_placeholder_ref01_match_dt0.id = generate_custom_placeholder_ref01_data.id
    const generate_custom_placeholder_ref01_data_dt0 = (await generate_custom_placeholder_ref01_ent.load(generate_custom_placeholder_ref01_match_dt0)).data()
    assert(generate_custom_placeholder_ref01_data_dt0.id === generate_custom_placeholder_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/generate_custom_placeholder/GenerateCustomPlaceholderTestData.json')

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
    ['generate_custom_placeholder01','generate_custom_placeholder02','generate_custom_placeholder03','background01','height01','width01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID': idmap,
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE': 'FALSE',
    'IMAGE_PLACEHOLDER_GENERATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID']

  const live = 'TRUE' === env.IMAGE_PLACEHOLDER_GENERATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IMAGE_PLACEHOLDER_GENERATOR_TEST_GENERATE_CUSTOM_PLACEHOLDER_ENTID']
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
  
