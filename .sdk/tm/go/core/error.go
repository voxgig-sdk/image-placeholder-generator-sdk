package core

type ImagePlaceholderGeneratorError struct {
	IsImagePlaceholderGeneratorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewImagePlaceholderGeneratorError(code string, msg string, ctx *Context) *ImagePlaceholderGeneratorError {
	return &ImagePlaceholderGeneratorError{
		IsImagePlaceholderGeneratorError: true,
		Sdk:              "ImagePlaceholderGenerator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ImagePlaceholderGeneratorError) Error() string {
	return e.Msg
}
