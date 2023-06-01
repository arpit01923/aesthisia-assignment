const regex = {
    emailValidation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    strongPasswordValidation:
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{6,20})/,
};

export default regex