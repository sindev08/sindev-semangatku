import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Purpose from "./components/Purpose";
import Encouragement from "./components/Encouragement";
import Closing from "./components/Closing";
// import Sound from "react-sound";

// import "./animations.css"; // Import CSS file

const messages = [
	"Ingett, ngga semuanya harus dihadapi sendirian",
	"Tetap semangat ya!",
	"Jangan menyerah!",
	"Ngga selamanya jatuh akan terus terpuruk",
	"Adakalanya kamu bangkit dan kembali berdiri tegak",
	"Tetap Optimis, ingett ada orang tersayang yang selalu ada mendukungmu!",
];

const App: React.FC = () => {
	const [page, setPage] = useState(0);
	const [name, setName] = useState("");
	const handleNextPageClick = () => {
		const currentPage = document.querySelector(
			`[data-page="${page}"]`
		) as HTMLElement;
		currentPage.classList.add("fade-out");
		setPage((prevPage) => prevPage + 1);
	};

	const handlePrevPageClick = () => {
		const currentPage = document.querySelector(
			`[data-page="${page}"]`
		) as HTMLElement;
		currentPage.classList.add("fade-out");
		setPage((prevPage) => prevPage - 1);
	};

	const handleNameSubmit = (name: string) => {
		setName(name);
		handleNextPageClick();
	};

	return (
		<div className="flex flex-row items-center justify-center w-full min-h-screen px-2 xl:px-0 bg-gradient-to-r from-sky-50 to-blue-100 ">
			<div className="relative max-w-md px-4 py-12 mx-auto bg-white shadow-md lg:px-6 shadow-sky-200 rounded-xl">
				{page === 0 && (
					<div className="fade-in" data-page="0">
						<Name
							// handlePlayClick={handlePlayClick}
							onNextPage={handleNameSubmit}
						/>
					</div>
				)}
				{page === 1 && (
					<div className="fade-in" data-page="1">
						<Greeting name={name} />
					</div>
				)}
				{page === 2 && (
					<div className="fade-in" data-page="2">
						<Purpose />
					</div>
				)}
				{page === 3 && (
					<div className="fade-in" data-page="3">
						<Encouragement messages={messages} />
					</div>
				)}
				{page === 4 && (
					<div className="fade-in" data-page="4">
						<Closing />
					</div>
				)}
				<div
					className={`${
						page <= 0 ? " justify-end" : "justify-between"
					} flex mt-10`}
				>
					{page > 0 && (
						<button
							className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
							onClick={handlePrevPageClick}
						>
							Kembali
						</button>
					)}

					{page > 0 && page < 4 && (
						<button
							className="px-12 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
							onClick={handleNextPageClick}
						>
							Lanjut
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;

// const Backsound = (
// 	handleSongLoading: any,
// 	handleSongPlaying: any,
// 	handleSongFinishedPlaying: any,
// 	status: any
// ) => {
// 	return (
// 		<Sound
// 			url="cool_sound.mp3"
// 			playStatus={Sound.status.PLAYING}
// 			playFromPosition={300}
// 			onLoading={handleSongLoading}
// 			onPlaying={handleSongPlaying}
// 			onFinishedPlaying={handleSongFinishedPlaying}
// 		/>
// 	);
// };
