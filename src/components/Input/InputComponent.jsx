import {Container, Label, Input, InputError, InputMessageContainer} from "./style.js";

const InputComponent = (props) => {

    const {name, value, labelText, type, placeholder, onChange, onBlur, error} = props;

    return (
        <Container>
            <Label htmlFor={name}>{labelText}</Label>
            <Input
                name={name}
                value={value}
                type={type || 'text'}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                data-error={!!error}
            />
            <InputMessageContainer>
                {error && <InputError>{error}</InputError>}
            </InputMessageContainer>
        </Container>
    );
};

export default InputComponent;