import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router";
import { frontloadConnect } from "react-frontload";
import Page from "../../components/page";
import { mapStateToProps, mapDispatchToProps } from "./homecontainer";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchUsers();
  }

  fetchUsers() {
    let { saveUsers } = this.props;
    axios.get("https://reqres.in/api/users?page=2").then(res => {
      saveUsers(res.data.data);
    });
  }

  render() {
    let { users } = this.props;
    return (
      <Page id="homepage">
        {users &&
          users.map(user => (
            <div key={user.id}>
              <img
                src={user.avatar}
                width="100"
                height="100"
                alt={user.first_name}
              />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
            </div>
          ))}
      </Page>
    );
  }
}

const frontload = async props => {
  let { saveUsers } = props;
  await axios.get("https://reqres.in/api/users?page=2").then(res => {
    saveUsers(res.data.data);
  });
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(frontloadConnect(frontload, { onMount: true, onUpdate: false })(Home))
);
