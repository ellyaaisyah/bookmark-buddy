import { NewSiteCard, SiteCard } from "./_components";

const Home = () => {
	const data = [
		{
			url: "https://www.google.com",
			name: "Google",
		},
		{
			url: "https://www.facebook.com",
			name: "Facebook",
		},
		{
			url: "https://www.twitter.com",
			name: "Twitter",
		},
		{
			url: "https://www.instagram.com",
			name: "Instagram",
		},
		{
			url: "https://www.youtube.com",
			name: "YouTube",
		},
		{
			url: "https://www.pinterest.com",
			name: "Pinterest",
		},
	];

	return (
		<main className="container py-8 px-4">
			<div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-4">
				{data.map((item) => (
					<SiteCard key={item.url} {...item} />
				))}
				<NewSiteCard />
			</div>
		</main>
	);
};

export default Home;
