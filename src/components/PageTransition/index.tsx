import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactNode } from "react";

type PageTransitionProps = {
	children: ReactNode;
	direction: "left" | "right";
};

const PageTransition = ({ children, direction }: PageTransitionProps) => {
	return (
		<TransitionGroup>
			<CSSTransition
				key={window.location.pathname}
				classNames={`page-${direction}`}
				timeout={500}
			>
				{children}
			</CSSTransition>
		</TransitionGroup>
	);
};

export default PageTransition;
