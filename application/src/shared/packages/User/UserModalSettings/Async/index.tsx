import React from "react";
import { UILoading } from "shared/styled/StyledLoaders/UILoading.styled";
import loadable from "@loadable/component";

export const UserModalSettingsContentCardAsync = loadable(()=>import("../UserModalSettingsContentCard/UserModalSettingsContentCard"),{
	fallback : <UILoading/>
})
