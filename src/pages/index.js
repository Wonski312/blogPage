import Header from "@/components/Layout/Header/Header";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Main from "@/components/Main/Main";
import Head from "next/head";

// const DUMMY_DATA = [
//   {
//     title: 'first post ',
//     description: 'first post about development',
//     image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png',
//     id: '01'
//   },
//   {
//     title: 'second post ',
//     description: 'second post about development',
//     image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png',
//     id: '02'
//   },
//   {
//     title: 'third post ',
//     description: 'third post about development',
//     image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png',
//     id: '03'
//   },
// ]

export default function Home(props) {
	return (
		<>
			<Head>
				<title>CodeCrush</title>
				<meta
					name='description'
					content='From Junior dev for others developers'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Main postData={props.post} />
		</>
	);
}

// getstaticprops and paths only in page component function
// prepers props for page
export async function getStaticProps() {
	// fetch data from an API

	const response = await fetch(
		"https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
	);

	const data = await response.json();

	const dataArr = [];

	for (const key in data) {
		dataArr.push({ ...data[key], id: key });
	}

	return {
		props: {
			post: dataArr,
		},
		// rebulding blog automaticly
		revalidate: 100,
	};
}
