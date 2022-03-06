const customErrorMsg = (error) => {
    const errorCode = error?.code.split("/");
    if (errorCode){
      const errorMsg = _.upperFirst(errorCode[errorCode.length - 1].split("-").join(" "));
      return errorMsg
    }
    return "An error occured"
};

export { customErrorMsg}