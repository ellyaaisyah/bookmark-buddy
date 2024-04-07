import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type Props = {
	url: string;
	name?: string;
};

export const SiteCard = ({ url, name }: Props) => {
	return (
		<Link href={url} className="font-bold hover:shadow-lg">
			<Card>
				<CardContent className="text-center pt-6">{name ?? url}</CardContent>
			</Card>
		</Link>
	);
};
