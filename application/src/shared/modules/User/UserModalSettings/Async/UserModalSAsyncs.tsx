import React from "react";
import { UILoading } from "shared/styled/UILoading.styled";
import loadable from "@loadable/component";

const Card= loadable(()=>import("../UserModalSettingsContentCard/UserModalSettingsContentCard"),{
	fallback : <UILoading/>
})

export default { 
	Card
}