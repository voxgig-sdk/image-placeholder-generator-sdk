# ImagePlaceholderGenerator TypeScript SDK Reference

Complete API reference for the ImagePlaceholderGenerator TypeScript SDK.


## ImagePlaceholderGeneratorSDK

### Constructor

```ts
new ImagePlaceholderGeneratorSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ImagePlaceholderGeneratorSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ImagePlaceholderGeneratorSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ImagePlaceholderGeneratorSDK` instance in test mode.


### Instance Methods

#### `GenerateCustomPlaceholder(data?: object)`

Create a new `GenerateCustomPlaceholder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateCustomPlaceholderEntity` instance.

#### `GenerateRectangularPlaceholder(data?: object)`

Create a new `GenerateRectangularPlaceholder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateRectangularPlaceholderEntity` instance.

#### `GenerateSquarePlaceholder(data?: object)`

Create a new `GenerateSquarePlaceholder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateSquarePlaceholderEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ImagePlaceholderGeneratorSDK.test()`.

**Returns:** `ImagePlaceholderGeneratorSDK` instance in test mode.


---

## GenerateCustomPlaceholderEntity

```ts
const generate_custom_placeholder = client.GenerateCustomPlaceholder()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerateCustomPlaceholder().load({ id: 'generate_custom_placeholder_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateCustomPlaceholderEntity` instance with the same client and
options.

#### `client()`

Return the parent `ImagePlaceholderGeneratorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateRectangularPlaceholderEntity

```ts
const generate_rectangular_placeholder = client.GenerateRectangularPlaceholder()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerateRectangularPlaceholder().load({ id: 'generate_rectangular_placeholder_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateRectangularPlaceholderEntity` instance with the same client and
options.

#### `client()`

Return the parent `ImagePlaceholderGeneratorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateSquarePlaceholderEntity

```ts
const generate_square_placeholder = client.GenerateSquarePlaceholder()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerateSquarePlaceholder().load({ id: 'generate_square_placeholder_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateSquarePlaceholderEntity` instance with the same client and
options.

#### `client()`

Return the parent `ImagePlaceholderGeneratorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ImagePlaceholderGeneratorSDK({
  feature: {
    test: { active: true },
  }
})
```

