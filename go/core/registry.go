package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGenerateCustomPlaceholderEntityFunc func(client *ImagePlaceholderGeneratorSDK, entopts map[string]any) ImagePlaceholderGeneratorEntity

var NewGenerateRectangularPlaceholderEntityFunc func(client *ImagePlaceholderGeneratorSDK, entopts map[string]any) ImagePlaceholderGeneratorEntity

var NewGenerateSquarePlaceholderEntityFunc func(client *ImagePlaceholderGeneratorSDK, entopts map[string]any) ImagePlaceholderGeneratorEntity

