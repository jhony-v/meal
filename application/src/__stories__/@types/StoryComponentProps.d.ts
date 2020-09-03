import React from "react";
import { Story } from "@storybook/react/types-6-0";

/**
 * Get props component
 * @param C : component
 */
type StoryComponentProps<C> = Story<React.ComponentProps<C>>;
export default StoryComponentProps;