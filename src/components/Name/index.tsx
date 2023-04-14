import React, { useState } from "react";
import WelcomeSvg from "../../assets/illustration/welcome.svg";
import Sound from "../../assets/music/all-i-want.mp3";

interface Props {
	onNextPage: (name: string) => void;
	// handlePlayClick: () => void;
}

const Name: React.FC<Props> = ({ onNextPage }) => {
	const [name, setName] = useState("");
	const handlePlayClick = () => {
		new Audio(Sound).play();
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		name.length > 0 ? onNextPage(name) : alert("Masukkan nama anda");
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="mb-2 text-xl font-bold text-center sm:text-3xl">
				Semoga harimu akan segara membaik!
			</h1>
			<img className="h-48 aspect-square" src={WelcomeSvg} alt="welcome" />
			<p className="mb-3 text-base text-center">
				Silakan masukkan nama Anda untuk memulai.
			</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Masukkan Nama Anda"
					className="w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none sm:w-64"
					value={name}
					onChange={handleInputChange}
				/>
				<button
					type="submit"
					className="px-4 py-2 ml-1 font-bold text-white bg-blue-500 rounded-md sm:ml-3 hover:bg-blue-700"
				>
					Mulai
				</button>
			</form>
			<button
				className="absolute px-3 py-2 text-sm font-medium border rounded-lg bottom-4 left-4 border-sky-500 text-sky-500"
				onClick={handlePlayClick}
			>
				Play Backsound
			</button>
		</div>
	);
};

export default Name;
