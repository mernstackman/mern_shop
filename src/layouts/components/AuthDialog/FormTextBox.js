import styled from "styled-components";
import Container from "../../../components/Container";
import { minDevice, maxDevice } from "../../../config/screen.size";

const { min320, min375, min425, min768, min1024, min1440, min1152, min1280, min2048, min2560 } = minDevice;

const { max320, max375, max425, max768, max1024, max1440, max1152, max1280, max2048, max2560 } = maxDevice;

const FormTextBox = styled(Container)`
    @media ${max320} {
    }

    @media ${max375} {
    }
`;

export default FormTextBox;
