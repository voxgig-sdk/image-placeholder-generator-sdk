# ImagePlaceholderGenerator SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ImagePlaceholderGeneratorUtility.registrar = ->(u) {
  u.clean = ImagePlaceholderGeneratorUtilities::Clean
  u.done = ImagePlaceholderGeneratorUtilities::Done
  u.make_error = ImagePlaceholderGeneratorUtilities::MakeError
  u.feature_add = ImagePlaceholderGeneratorUtilities::FeatureAdd
  u.feature_hook = ImagePlaceholderGeneratorUtilities::FeatureHook
  u.feature_init = ImagePlaceholderGeneratorUtilities::FeatureInit
  u.fetcher = ImagePlaceholderGeneratorUtilities::Fetcher
  u.make_fetch_def = ImagePlaceholderGeneratorUtilities::MakeFetchDef
  u.make_context = ImagePlaceholderGeneratorUtilities::MakeContext
  u.make_options = ImagePlaceholderGeneratorUtilities::MakeOptions
  u.make_request = ImagePlaceholderGeneratorUtilities::MakeRequest
  u.make_response = ImagePlaceholderGeneratorUtilities::MakeResponse
  u.make_result = ImagePlaceholderGeneratorUtilities::MakeResult
  u.make_point = ImagePlaceholderGeneratorUtilities::MakePoint
  u.make_spec = ImagePlaceholderGeneratorUtilities::MakeSpec
  u.make_url = ImagePlaceholderGeneratorUtilities::MakeUrl
  u.param = ImagePlaceholderGeneratorUtilities::Param
  u.prepare_auth = ImagePlaceholderGeneratorUtilities::PrepareAuth
  u.prepare_body = ImagePlaceholderGeneratorUtilities::PrepareBody
  u.prepare_headers = ImagePlaceholderGeneratorUtilities::PrepareHeaders
  u.prepare_method = ImagePlaceholderGeneratorUtilities::PrepareMethod
  u.prepare_params = ImagePlaceholderGeneratorUtilities::PrepareParams
  u.prepare_path = ImagePlaceholderGeneratorUtilities::PreparePath
  u.prepare_query = ImagePlaceholderGeneratorUtilities::PrepareQuery
  u.result_basic = ImagePlaceholderGeneratorUtilities::ResultBasic
  u.result_body = ImagePlaceholderGeneratorUtilities::ResultBody
  u.result_headers = ImagePlaceholderGeneratorUtilities::ResultHeaders
  u.transform_request = ImagePlaceholderGeneratorUtilities::TransformRequest
  u.transform_response = ImagePlaceholderGeneratorUtilities::TransformResponse
}
