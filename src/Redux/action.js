const actions = {
    SIGNUP_FORM_REQUEST: "SIGNUP_FORM_REQUEST",
    SIGNUP_FORM_SUCCESS: "SIGNUP_FORM_SUCCESS",
    SIGNUP_FORM_FAILURE: "SIGNUP_FORM_FAILURE",
    SIGNIN_FORM_REQUEST: "SIGNIN_FORM_REQUEST",
    SIGNIN_FORM_SUCCESS: "SIGNIN_FORM_SUCCESS",
    SIGNIN_FORM_FAILURE: "SIGNIN_FORM_FAILURE",
    LOGOUT_FORM_REQUEST: "LOGOUT_FORM_REQUEST",
    LOGOUT_FORM_SUCCESS: "LOGOUT_FORM_SUCCESS",
    LOGOUT_FORM_FAILURE: "LOGOUT_FORM_FAILURE",
    PROFILE_UPLOAD_REQUEST: "PROFILE_UPLOAD_REQUEST",
    PROFILE_UPLOAD_SUCCESS: "PROFILE_UPLOAD_SUCCESS",
    PROFILE_UPLOAD_FAILURE: "PROFILE_UPLOAD_FAILURE",
    CREATE_BLOG_REQUEST: 'CREATE_BLOG_REQUEST',
    CREATE_BLOG_SUCCESS: 'CREATE_BLOG_SUCCESS',
    CREATE_BLOG_FAILURE: 'CREATE_BLOG_FAILURE',
    DELETE_BLOG_SUCCESS: 'DELETE_BLOG_SUCCESS',
    DELETE_BLOG_REQUEST: 'DELETE_BLOG_REQUEST',
    DELETE_BLOG_FAILURE: 'DELETE_BLOG_FAILURE',
    GET_POST_REQUEST: 'GET_POST_REQUEST',
    PUBLISH_DATA: 'PUBLISH_DATA',
    GET_POST_SUCCESS: 'GET_POST_SUCCESS',
    GET_PUBLIC_POST_SUCCESS: 'GET_PUBLIC_POST_SUCCESS',
    GET_PUBLIC_POST: 'GET_PUBLIC_POST',
    GET_SINGLE_PUBLIC_POST: 'GET_SINGLE_PUBLIC_POST',
    STORE_SINGLE_POST: 'STORE_SINGLE_POST'
}

export default actions;

export const SignupRequest = (data) => {
    return ({
        type: actions.SIGNUP_FORM_REQUEST,
        payload: data,
    })
}
export const SignupSuccess = (user) => {
    return ({
        type: actions.SIGNUP_FORM_SUCCESS,
        payload: user,
    })
}
export const SignupFailure = (error) => {
    return ({
        type: actions.SIGNUP_FORM_FAILURE,
        payload: error,
    })
}
export const SigninRequest = (formData) => {
    console.log(formData, 'call')
    return ({
        type: actions.SIGNIN_FORM_REQUEST,
        payload: formData,
    });
}
export const SigninSuccess = (user) => ({
    type: actions.SIGNIN_FORM_SUCCESS,
    payload: user,
});

export const SigninFailure = (error) => ({
    type: actions.SIGNIN_FORM_FAILURE,
    payload: error,
});
export const LogoutRequest = (formData) => {
    return ({
        type: actions.LOGOUT_FORM_REQUEST,
        payload: formData,
    });
}
export const LogoutSuccess = (user) => ({
    type: actions.LOGOUT_FORM_SUCCESS,
    payload: user,
});

export const LogoutFailure = (error) => ({
    type: actions.LOGOUT_FORM_FAILURE,
    payload: error,
});
export const profileUploadRequest = (params) => {
    // console.log(params, 'actioncall');
    return ({
        type: actions.PROFILE_UPLOAD_REQUEST,
        payload: params,

    })
}
export const profileUploadSuccess = (user) => {
    // console.log('calll')
    return ({
        type: actions.PROFILE_UPLOAD_SUCCESS,
        payload: user,
    })
}
export const profileUploadFailure = (error) => ({
    type: actions.PROFILE_UPLOAD_FAILURE,
    payload: error,
})
export const createblogRequest = (params) => {
    return ({
        type: actions.CREATE_BLOG_REQUEST,
        payload: params,

    })
}
export const createblogSuccess = (user) => {
    return ({
        type: actions.CREATE_BLOG_SUCCESS,
        payload: user,
    }
    )
}
export const createblogFailure = (error) => ({
    type: actions.CREATE_BLOG_FAILURE,
    payload: error,
})

export const deleteRequest = () => ({
    type: actions.DELETE_BLOG_REQUEST,
})

export const deleteSuccess = (id) => ({
    type: actions.DELETE_BLOG_SUCCESS,
    payload: id,

})
export const deleteFailure = (error) => ({
    type: actions.DELETE_BLOG_FAILURE,
    payload: error,

})
export const getPostRequest = (payload) => {
    return {
        type: actions.GET_POST_REQUEST,
        payload
    }
}
export const publishData = (payload) => {
    return {
        type: actions.PUBLISH_DATA,
        payload
    }
}

export const getSinglePublicPost = (payload) => {
    return {
        type: actions.GET_SINGLE_PUBLIC_POST,
        payload
    }
}