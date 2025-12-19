/* React Router */
import { useNavigate } from "react-router-dom";
/* Routes consts */
import { ROUTES } from '../consts';

const useNavigationRoutes = () => {

    /* Allows navigation to a specified route */
    const navigate = useNavigate();

    const navigateToLogin = () => {

        navigate(ROUTES.SIGNUP_AND_LOGIN.LOGIN);

    };
    const navigateToSignup = () => {
        
        navigate(ROUTES.SIGNUP_AND_LOGIN.SIGNUP);

    };
    const navigateToHome = () => {

        navigate(ROUTES.APP.HOME);

    };

    return{

        navigateToLogin,
        navigateToSignup,
        navigateToHome

    };

};
export { useNavigationRoutes };