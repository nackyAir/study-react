import Head from "next/head";
import { Footer } from "src/components/Footer";

export default function Home() {
	return (
		<div className="p-container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen p-main flex-col flex-1 items-center justify-center"></main>

			<Footer />
		</div>
	);
}