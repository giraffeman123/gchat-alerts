function pageNotFound(){
    return {
        timestamp: new Date().toUTCString(),
        code: 404,
        title: "Page not found",
        detail: "Ensure that url is correct"
    }
}

//Formeteador de errores
function errorFormatter(code, title, detail, request, source){
    var devError = {
        timestamp: new Date().toUTCString(),
        code: code,
        title: title,
        detail: detail,
        request: request,
        source: source
    }

    var userError = Object.assign({}, devError);
    delete userError.request
    delete userError.source

    if(userError.code >= 500){
        userError.detail = "An unexpected condition was encountered. Contact the administrator"
    }

    return {devError: devError,
            userError: userError}
}

function ensureIsIncluded(parameter){
   return "Ensure that "+ parameter +" is included in the request"
}

function ensureIsCorrect(parameter){
   return "Ensure that "+ parameter +" included in the request is correct"
}

module.exports={    
    errorFormatter: errorFormatter,
    pageNotFound: pageNotFound,
    ensureIsIncluded: ensureIsIncluded,
    ensureIsCorrect: ensureIsCorrect
}