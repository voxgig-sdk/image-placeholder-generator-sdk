
import { Context } from './Context'


class ImagePlaceholderGeneratorError extends Error {

  isImagePlaceholderGeneratorError = true

  sdk = 'ImagePlaceholderGenerator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ImagePlaceholderGeneratorError
}

