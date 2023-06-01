const regex = {
    //eslint-disable-next-line
    emailValidation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    strongPasswordValidation:
    //eslint-disable-next-line
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{6,20})/,
};

export default regex