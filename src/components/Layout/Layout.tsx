import { FlexContainer, StyledContainer } from "./Layout.style";
import { BaseComponentProps } from "../../types";

const Layout = ({ children }: BaseComponentProps) => {
    return (
        <StyledContainer>
            <FlexContainer>
                { children }
            </FlexContainer>
        </StyledContainer>
    );
};

export default Layout;