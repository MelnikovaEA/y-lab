import {Container} from "./style.js";

const AppContainerComponent = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
};

export default AppContainerComponent;