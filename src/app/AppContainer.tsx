import { AppState } from "store/app/AppState";
import { App } from "app/App";
import { connect } from "react-redux";

function mapStateToProps(state: AppState) {
  return state;
}

export const AppContainer = connect(mapStateToProps)(App);