
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ImagePlaceholderGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ImagePlaceholderGeneratorSDK.test()
    equal(testsdk instanceof ImagePlaceholderGeneratorSDK, true,
      'ImagePlaceholderGeneratorSDK.test() must return a client synchronously')
  })

})
