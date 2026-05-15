
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ImagePlaceholderGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ImagePlaceholderGeneratorSDK.test()
    equal(null !== testsdk, true)
  })

})
