import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import styles from '../../styles.css.js';

// --------------Modal Styling----------------------------------------------------------------------
const Title = styled.p`
  font-weight: bold;
  color: red;
  font-size: 25;
  text-align: left;
  font-family: sans-serif;
`;
const Button = styled.button`
  background-color: red;
  font-weight: bold;
  margin-top: 4px;
  color: white;
  text-align: center;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 4px;
`;
const Flag = styled.img`
  float: right;
  height: 14;
  width: 14;
  padding: 5;
  border: 1px solid grey;
  border-radius: 3px;

  &:hover {
    background: #555;
    border-style: inset;
  }
`;
// --------------Modal Styling----------------------------------------------------------------------

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#restaurantInfoApp');

class BusinessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      linkHover: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  setLinkHover() {
    this.setState(prevState => ({
      linkHover: !prevState.linkHover,
    }));
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Button
          style={
            this.state.linkHover
              ? Object.assign({ textDecorationLine: 'underline' }, styles.editInfoStyling)
              : styles.editInfoStyling
          }
          onMouseEnter={() => this.setLinkHover(true)}
          onMouseLeave={() => this.setLinkHover(false)}
          onClick={this.handleOpenModal}
        >
          Learn more about
          {' '}
          {this.props.restaurantName}
        </Button>

        <Modal
          style={styles.modalStyling}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <Title>From the business</Title>
          <hr />
          <div>{this.props.restaurantInfo}</div>
          <Button onClick={this.handleCloseModal}>Close</Button>
          <Flag src="https://png.icons8.com/ios/50/666666/flag-filled.png" />
        </Modal>
      </div>
    );
  }
}

export default BusinessModal;
