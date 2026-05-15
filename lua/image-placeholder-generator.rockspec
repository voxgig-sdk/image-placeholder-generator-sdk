package = "voxgig-sdk-image-placeholder-generator"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/image-placeholder-generator-sdk.git"
}
description = {
  summary = "ImagePlaceholderGenerator SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["image-placeholder-generator_sdk"] = "image-placeholder-generator_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
