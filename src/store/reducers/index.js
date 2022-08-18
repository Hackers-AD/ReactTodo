import TodoReducer from "./TodoReducer";
import AuthReducer, {SessionReducer} from "./authReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    todo: TodoReducer,
    auth: AuthReducer,
    session: SessionReducer,
})

export default reducers;