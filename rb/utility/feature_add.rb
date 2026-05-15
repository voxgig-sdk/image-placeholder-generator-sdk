# ImagePlaceholderGenerator SDK utility: feature_add
module ImagePlaceholderGeneratorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
