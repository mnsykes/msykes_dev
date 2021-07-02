import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.main`
	height: 100%;
	margin: 0 auto;
`;

const Content = styled.div`
	height: 100%;
	margin: 0 auto;
`;

export default function BodyContent({ children }) {
	return (
		<ContentWrapper>
			<Content>{children}</Content>
		</ContentWrapper>
	);
}
