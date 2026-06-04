# ImagePlaceholderGenerator SDK

Generate customizable SVG placeholder images with configurable size, colors, and text for web prototypes

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Image Placeholder Generator

The Image Placeholder Generator is a small HTTP service operated by [BiFindr](https://bifindr.com/placeholder) that returns SVG placeholder images. It is intended for design mockups, wireframes, and rapid prototyping where you need filler imagery at a known size.

What you get from the API:

- SVG placeholders at arbitrary dimensions
- Convenience endpoints for square and rectangular placeholders
- Custom text overlay and background / foreground colors specified as hex values

Operational notes: no API key is required and the API is reported as highly reliable, but CORS is disabled, so embed the URL directly in an `<img>` tag (or call it from your backend) rather than fetching it via JavaScript. Responses are SVG, so they scale crisply at any size.

## Try it

**TypeScript**
```bash
npm install image-placeholder-generator
```

**Python**
```bash
pip install image-placeholder-generator-sdk
```

**PHP**
```bash
composer require voxgig/image-placeholder-generator-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/image-placeholder-generator-sdk/go
```

**Ruby**
```bash
gem install image-placeholder-generator-sdk
```

**Lua**
```bash
luarocks install image-placeholder-generator-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ImagePlaceholderGeneratorSDK } from 'image-placeholder-generator'

const client = new ImagePlaceholderGeneratorSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o image-placeholder-generator-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "image-placeholder-generator": {
      "command": "/abs/path/to/image-placeholder-generator-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GenerateCustomPlaceholder** | Returns an SVG placeholder with caller-specified width, height, background colour, text colour, and label text. | `/{width}/{height}/{background}/{text_color}` |
| **GenerateRectangularPlaceholder** | Returns a pre-sized rectangular SVG placeholder (e.g. 600x300) with optional custom text. | `/{width}/{height}` |
| **GenerateSquarePlaceholder** | Returns a pre-sized square SVG placeholder (e.g. 400x400) suitable for thumbnails and avatars. | `/{width}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from imageplaceholdergenerator_sdk import ImagePlaceholderGeneratorSDK

client = ImagePlaceholderGeneratorSDK({})


# Load a specific generatecustomplaceholder
generatecustomplaceholder, err = client.GenerateCustomPlaceholder(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'imageplaceholdergenerator_sdk.php';

$client = new ImagePlaceholderGeneratorSDK([]);


// Load a specific generatecustomplaceholder
[$generatecustomplaceholder, $err] = $client->GenerateCustomPlaceholder(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/image-placeholder-generator-sdk/go"

client := sdk.NewImagePlaceholderGeneratorSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ImagePlaceholderGenerator_sdk"

client = ImagePlaceholderGeneratorSDK.new({})


# Load a specific generatecustomplaceholder
generatecustomplaceholder, err = client.GenerateCustomPlaceholder(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("image-placeholder-generator_sdk")

local client = sdk.new({})


-- Load a specific generatecustomplaceholder
local generatecustomplaceholder, err = client:GenerateCustomPlaceholder(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ImagePlaceholderGeneratorSDK.test()
const result = await client.GenerateCustomPlaceholder().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ImagePlaceholderGeneratorSDK.test(None, None)
result, err = client.GenerateCustomPlaceholder(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ImagePlaceholderGeneratorSDK::test(null, null);
[$result, $err] = $client->GenerateCustomPlaceholder(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GenerateCustomPlaceholder(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ImagePlaceholderGeneratorSDK.test(nil, nil)
result, err = client.GenerateCustomPlaceholder(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GenerateCustomPlaceholder(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Image Placeholder Generator

- Upstream: [https://bifindr.com/placeholder](https://bifindr.com/placeholder)

- Free for commercial use
- No authentication or API key required
- CORS is disabled on all endpoints, so requests must be made server-side or via `<img>` tags rather than client-side `fetch`

---

Generated from the Image Placeholder Generator OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
