package = "voxgig-sdk-image-placeholder-generator"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/image-placeholder-generator-sdk.git",
  tag = "lua/v0.0.1",
  dir = "image-placeholder-generator-sdk/lua"
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
