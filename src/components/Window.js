import React from "react";
import styled from "styled-components";

const WindowWrapper = styled.div`
	height: 100vh;
	width: 95vw;
	margin: 0 auto;
`;

const TopBar = styled.div`
	background: lightgray;
	height: 2rem;
`;

const Circles = styled.div`
	display: flex;
	align-items: center;
	padding: 0.65rem 0.5rem;
`;

const One = styled.div`
	margin-right: 0.5rem;
	border-radius: 50%;
	height: 0.75rem;
	width: 0.75rem;
	background-color: #ff605c;
`;

const Two = styled(One)`
	background: #ffbd44;
`;

const Three = styled(One)`
	background: #00ca4e;
`;

const Screen = styled.div`
	padding: 0.5rem;
	height: 100%;
	overflow-y: scroll;
	background: white;
`;

const Content = styled.div`
	height: auto;
	padding: 0.5rem 0.5rem;
	margin: 0 auto;
`;

export default function Window({ children }) {
	return (
		<WindowWrapper>
			<TopBar>
				<Circles>
					<One></One>
					<Two></Two>
					<Three></Three>
				</Circles>
			</TopBar>
			<Screen>
				<Content>{children}</Content>
			</Screen>
		</WindowWrapper>
	);
}
