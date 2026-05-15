-- ImagePlaceholderGenerator SDK error

local ImagePlaceholderGeneratorError = {}
ImagePlaceholderGeneratorError.__index = ImagePlaceholderGeneratorError


function ImagePlaceholderGeneratorError.new(code, msg, ctx)
  local self = setmetatable({}, ImagePlaceholderGeneratorError)
  self.is_sdk_error = true
  self.sdk = "ImagePlaceholderGenerator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ImagePlaceholderGeneratorError:error()
  return self.msg
end


function ImagePlaceholderGeneratorError:__tostring()
  return self.msg
end


return ImagePlaceholderGeneratorError
