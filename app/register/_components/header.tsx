import Link from "next/link";

export const Header = () => {
	return (
		<div className="container py-4 border-b">
			<div className="flex align-middle justify-between gap-4">
				<Link href="/" className="font-bold hover:underline">
					Bookmark Buddy
				</Link>
				<Link href="/register">Register</Link>
			</div>
		</div>
	);
};
