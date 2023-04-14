import React from "react";

interface GoodbyeProps {
	onPrevPage: () => void;
}

const Goodbye: React.FC<GoodbyeProps> = ({ onPrevPage }) => {
	return (
		<div>
			<h1 className="text-3xl mb-4">Terima kasih sudah berkunjung</h1>
			<p className="text-lg mb-6">
				Semoga hari-harimu selalu menyenangkan dan penuh semangat!
			</p>
			<div>
				<button
					className="px-4 py-2 bg-gray-300 rounded-lg"
					onClick={onPrevPage}
				>
					Kembali
				</button>
			</div>
		</div>
	);
};

export default Goodbye;
