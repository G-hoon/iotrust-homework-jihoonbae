export function LoadingIndicator({
	className = '',
	size = 20,
}: {
	className?: string;
	size?: number;
}) {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div
				className={`border-black animate-spin rounded-full border-2 border-t-transparent`}
				style={{
					width: `${size}px`,
					height: `${size}px`,
				}}
			/>
		</div>
	);
}
