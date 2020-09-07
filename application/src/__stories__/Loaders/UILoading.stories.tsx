import React from 'react'
import { Meta } from "@storybook/react/types-6-0";
import { UILoading, UILoadingPage } from 'shared/styled/UILoading.styled';

export default {
	title : "Loaders/UILoading",
	component : UILoading
} as Meta;

export const Spinner = () => <UILoading />
export const SpinnerPage = () => <UILoadingPage/>