import { Container } from "inversify";
import UseCaseGetNewFeedsByUser from "./useCasesUserGets/UseCaseGetNewFeedsByUser";
import UseCaseCreateNewPost from "./useCasesUserManagePosts/UseCaseCreateNewPost";
import UseCaseConfigurateSettingsAccount from "./useCasesUserSettings/UseCaseConfigurateSettingsAccount";
import UseCaseUserSignIn from "./useCasesUserAccess/UseCaseUserSignIn";
import UseCaseUserSignUp from "./useCasesUserAccess/UseCaseUserSignUp";
import UseCaseGetFollowersByUser from "./useCasesUserGets/UseCaseGetFollowersByUser";
import UseCaseGetPersonalInformation from "./useCasesUserGets/UseCaseGetPersonalInformation";

const useCases = new Container();
useCases.bind(UseCaseGetNewFeedsByUser).toSelf();
useCases.bind(UseCaseCreateNewPost).toSelf();
useCases.bind(UseCaseConfigurateSettingsAccount).toSelf();
useCases.bind(UseCaseUserSignIn).toSelf();
useCases.bind(UseCaseUserSignUp).toSelf();
useCases.bind(UseCaseGetFollowersByUser).toSelf();
useCases.bind(UseCaseGetPersonalInformation).toSelf();
export default useCases;
