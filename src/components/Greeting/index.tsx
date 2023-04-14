interface GreetingProps {
	name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
	return (
		<div>
			<h1 className="mb-4 text-3xl font-bold text-gray-900">Halo, {name}!</h1>
			<p className="text-base text-gray-800">
				Capek ya? Ngerasa hidup begitu berat dan melelahkan, terutama saat
				dihadapkan dengan masalah dan kesulitan. Dituntut harus terus tegar,
				padahal raga berkata "
				<span className="font-bold">berhenti menjadi sok kuat</span>
				".
			</p>
		</div>
	);
};

export default Greeting;
