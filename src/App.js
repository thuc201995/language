import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Modal, Flag } from "semantic-ui-react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { openModel: false };
  }
  close = () => {
    this.setState({
      openModel: false
    });
  };
  showModal = () => {
    this.setState({ openModel: true });
  };
  changeLanguage = lang => {
    console.log(lang);
  };
  menuLang = () => {
    const menus = [
      { code: "en_US", description: "English" },
      { code: "vi_VN", description: "Tiếng việt" }
    ];
    const itemLang = lang => {
      return (
        <h4
          key={lang.code}
          value={lang.code}
          onClick={this.changeLanguage.bind(this, lang)}
        >
          {lang.code === "vi_VN" ? <Flag name="vn" /> : <Flag name="gb" />}
          {lang.description}
        </h4>
      );
    };
    const listLang = menus.map(menu => {
      return itemLang(menu);
    });
    return listLang;
  };
  render() {
    const menuLang = this.menuLang();
    return (
      <div>
        <Button onClick={this.showModal}>Show modal</Button>
        <Modal size="mini" open={this.state.openModel} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>{this.state.openModel && menuLang}</Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default App;
