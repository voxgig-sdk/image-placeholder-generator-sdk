# ImagePlaceholderGenerator Ruby SDK Reference

Complete API reference for the ImagePlaceholderGenerator Ruby SDK.


## ImagePlaceholderGeneratorSDK

### Constructor

```ruby
require_relative 'image-placeholder-generator_sdk'

client = ImagePlaceholderGeneratorSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ImagePlaceholderGeneratorSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ImagePlaceholderGeneratorSDK.test
```


### Instance Methods

#### `GenerateCustomPlaceholder(data = nil)`

Create a new `GenerateCustomPlaceholder` entity instance. Pass `nil` for no initial data.

#### `GenerateRectangularPlaceholder(data = nil)`

Create a new `GenerateRectangularPlaceholder` entity instance. Pass `nil` for no initial data.

#### `GenerateSquarePlaceholder(data = nil)`

Create a new `GenerateSquarePlaceholder` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GenerateCustomPlaceholderEntity

```ruby
generate_custom_placeholder = client.GenerateCustomPlaceholder
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerateCustomPlaceholder.load({ "id" => "generate_custom_placeholder_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateCustomPlaceholderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateRectangularPlaceholderEntity

```ruby
generate_rectangular_placeholder = client.GenerateRectangularPlaceholder
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerateRectangularPlaceholder.load({ "id" => "generate_rectangular_placeholder_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateRectangularPlaceholderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateSquarePlaceholderEntity

```ruby
generate_square_placeholder = client.GenerateSquarePlaceholder
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerateSquarePlaceholder.load({ "id" => "generate_square_placeholder_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateSquarePlaceholderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ImagePlaceholderGeneratorSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

