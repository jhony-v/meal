import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SpanUIAnimated = motion.custom(styled.div``); 

const Span = styled.span`
    text-align:${props=>props.textAlign};
`

export default Span;