<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ImagePlaceholderGeneratorUtility::setRegistrar(function (ImagePlaceholderGeneratorUtility $u): void {
    $u->clean = [ImagePlaceholderGeneratorClean::class, 'call'];
    $u->done = [ImagePlaceholderGeneratorDone::class, 'call'];
    $u->make_error = [ImagePlaceholderGeneratorMakeError::class, 'call'];
    $u->feature_add = [ImagePlaceholderGeneratorFeatureAdd::class, 'call'];
    $u->feature_hook = [ImagePlaceholderGeneratorFeatureHook::class, 'call'];
    $u->feature_init = [ImagePlaceholderGeneratorFeatureInit::class, 'call'];
    $u->fetcher = [ImagePlaceholderGeneratorFetcher::class, 'call'];
    $u->make_fetch_def = [ImagePlaceholderGeneratorMakeFetchDef::class, 'call'];
    $u->make_context = [ImagePlaceholderGeneratorMakeContext::class, 'call'];
    $u->make_options = [ImagePlaceholderGeneratorMakeOptions::class, 'call'];
    $u->make_request = [ImagePlaceholderGeneratorMakeRequest::class, 'call'];
    $u->make_response = [ImagePlaceholderGeneratorMakeResponse::class, 'call'];
    $u->make_result = [ImagePlaceholderGeneratorMakeResult::class, 'call'];
    $u->make_point = [ImagePlaceholderGeneratorMakePoint::class, 'call'];
    $u->make_spec = [ImagePlaceholderGeneratorMakeSpec::class, 'call'];
    $u->make_url = [ImagePlaceholderGeneratorMakeUrl::class, 'call'];
    $u->param = [ImagePlaceholderGeneratorParam::class, 'call'];
    $u->prepare_auth = [ImagePlaceholderGeneratorPrepareAuth::class, 'call'];
    $u->prepare_body = [ImagePlaceholderGeneratorPrepareBody::class, 'call'];
    $u->prepare_headers = [ImagePlaceholderGeneratorPrepareHeaders::class, 'call'];
    $u->prepare_method = [ImagePlaceholderGeneratorPrepareMethod::class, 'call'];
    $u->prepare_params = [ImagePlaceholderGeneratorPrepareParams::class, 'call'];
    $u->prepare_path = [ImagePlaceholderGeneratorPreparePath::class, 'call'];
    $u->prepare_query = [ImagePlaceholderGeneratorPrepareQuery::class, 'call'];
    $u->result_basic = [ImagePlaceholderGeneratorResultBasic::class, 'call'];
    $u->result_body = [ImagePlaceholderGeneratorResultBody::class, 'call'];
    $u->result_headers = [ImagePlaceholderGeneratorResultHeaders::class, 'call'];
    $u->transform_request = [ImagePlaceholderGeneratorTransformRequest::class, 'call'];
    $u->transform_response = [ImagePlaceholderGeneratorTransformResponse::class, 'call'];
});
