export namespace ButtonTypes {
	export type VariantButtonTypes = "primary" | "outline" | "default";
	export type UIButtonLinkProps = UIButtonProps & {
		to?: string;
		className?: string;
		children?: React.ReactNode | string;
	};
	export type UIButtonProps = {
		block?: boolean;
		variant?: VariantButtonTypes;
	};
		
}