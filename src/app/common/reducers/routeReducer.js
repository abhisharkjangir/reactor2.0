import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";
const FETCH_PAGE_IDENTIFIER = "PAGE_IDENTIFIER";
const EMPTY_HASH_URL = "EMPTY_HASH_URL";
const SET_DOMAIN_NAME = "DOMAIN_NAME";
const EMPTY_SEARCH_URL = "EMPTY_SEARCH_URL";
const FETCH_PAGE_QUERYSTRING = "FETCH_PAGE_QUERYSTRING";

// Initial routing state
export const routeInitialState = fromJS({
  locationBeforeTransitions: {},
  previousLocationBeforeTransitions: {},
  pageIdentifier: "",
  previousPageIdentifier: "",
  domain: "",
  reqUrl: "",
  queryString: ""
});

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case "CREATE_REQUEST":
      return state;
    case FETCH_PAGE_IDENTIFIER:
      return state.merge({
        previousPageIdentifier: state.get("pageIdentifier"),
        pageIdentifier: action.page
      });
    case LOCATION_CHANGE:
      return state
        .set(
          "previousLocationBeforeTransitions",
          state.get("locationBeforeTransitions")
        )
        .merge({
          locationBeforeTransitions: {
            ...state.get("locationBeforeTransitions").toJS(),
            ...action.payload
          }
        });
    case EMPTY_HASH_URL: {
      const location = state.get("locationBeforeTransitions").toJS();
      return state.merge({
        locationBeforeTransitions: {
          ...Object.assign({}, location, {
            hash: ""
          })
        }
      });
    }
    case EMPTY_SEARCH_URL: {
      const location = state.get("locationBeforeTransitions").toJS();
      return state.merge({
        locationBeforeTransitions: {
          ...Object.assign({}, location, {
            search: ""
          })
        }
      });
    }
    case SET_DOMAIN_NAME:
      return state
        .set("domain", action.domainName)
        .set("reqUrl", action.reqUrl);
    case FETCH_PAGE_QUERYSTRING: {
      return state.set("queryString", action.queryString);
    }
    default:
      return state;
  }
}

export default routeReducer;
