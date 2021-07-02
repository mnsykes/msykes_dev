import React from "react";
import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

const ContentWrapper = styled.main`
	margin: 0 auto;
	padding-bottom: 15vh;
`;

const Content = styled.div`
	margin: 0 auto;

	@media ${breakpoint.device.xs} {
		max-width: 95%;
	}

	@media ${breakpoint.device.sm} {
		max-width: 85%;
	}
	@media ${breakpoint.device.md} {
		max-width: 75%;
	}
	@media ${breakpoint.device.lg} {
		max-width: 50%;
	}
`;

export default function BodyContent({ children }) {
	return (
		<ContentWrapper>
			<Content>{children}</Content>
		</ContentWrapper>
	);
}
