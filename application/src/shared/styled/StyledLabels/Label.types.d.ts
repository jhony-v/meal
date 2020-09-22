import { ColorStyleProps, FontSizeProps, TextAlignProps } from "styled-system";

export namespace LabelTypes {
	export type UITextProps = ColorStyleProps & FontSizeProps & TextAlignProps & {
		noSelect?: boolean;
		weight?: boolean;
		block?: boolean;
	};		
}