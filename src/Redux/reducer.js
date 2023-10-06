import actions from './action'

const initialState = {
    user: null,
    error: null,
    posts: [],
    singlePost: [],
    loader: false
}
console.log(actions);
const Reducer = (state = initialState, action) => {
    console.log(action, "signin success")
    switch (action.type) {
        case actions.SIGNUP_FORM_REQUEST:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case actions.SIGNUP_FORM_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case actions.SIGNUP_FORM_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case actions.SIGNIN_FORM_REQUEST:
            return {
                ...state,
                user: null,
                error: action.payload
            }
            break;

        case actions.SIGNIN_FORM_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,

            }
            break;
        case actions.SIGNIN_FORM_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload
            }
            break;
        case actions.LOGOUT_FORM_REQUEST:
            return {
                ...state,
                user: null,
                error: action.payload
            }
            break;

        case actions.LOGOUT_FORM_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
            break;
        case actions.LOGOUT_FORM_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case actions.FETCH_TABLE_DETAILS:
            return {
                ...state,
                loader: true,
            }
            break;

        case actions.FETCH_TABLE_DETAILS_SUCCESS:
            return {
                ...state,
                loader: false,
                tableDetails: [...action.payload]
            }
            break;
        case actions.FETCH_TABLE_DETAILS_FAILURE:
            return {
                ...state,
                loader: false
            }
        case actions.CREATE_BLOG_REQUEST:
            console.log('reducercall')
            return {

                ...state,
                user: null,
                error: action.payload
            }

        case actions.CREATE_BLOG_SUCCESS:
            return {
                ...state,
                user: [...action.payload],
                error: null
            }
        case actions.CREATE_BLOG_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload

            }
        case actions.GET_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case actions.GET_PUBLIC_POST_SUCCESS:
            return {
                ...state,
                posts: [...action.payload],
                error: null,
            };
        case actions.STORE_SINGLE_POST:
            return {
                ...state,
                singlePost: [action.payload],
                error: null
            }



        default:
            return state
    }

}
export default Reducer