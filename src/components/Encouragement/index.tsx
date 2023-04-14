import { useState } from "react";

interface EncouragementProps {
	messages: string[];
}

const Encouragement: React.FC<EncouragementProps> = ({ messages }) => {
	const [messageIndex, setMessageIndex] = useState(0);

	const handleMessageClick = () => {
		setMessageIndex((prevIndex) => {
			if (prevIndex === messages.length - 1) {
				return 0;
			} else {
				return prevIndex + 1;
			}
		});
	};

	return (
		<div>
			<h1 className="mb-4 text-3xl font-bold">Kata-kata Penyemangat</h1>
			<div className="flex flex-col items-center justify-center p-4 space-y-8 bg-sky-100 rounded-xl">
				<p className="relative text-base font-medium text-center cursor-pointer">
					"{messages[messageIndex]}"{" "}
					<span className="text-[8px]">{[messageIndex]}</span>
				</p>
				<button
					onClick={handleMessageClick}
					className="px-3 py-2 text-xs font-medium rounded-lg bg-sky-300"
				>
					Klik disini
				</button>
			</div>
		</div>
	);
};

export default Encouragement;
