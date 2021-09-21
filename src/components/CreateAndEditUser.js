import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { notification } from "antd";

import { createUser as createUserAction, editUser as editUserAction } from '../redux/actions';

import styles from './createuser.module.css';


const CreateAndEditUser = (props) => {
  const { createUser, location, editUser, history } = props;
  const { state = {} } = location;
  const { userEmail = '', userName = '', userPhone = '' } = state;

  const isEditableMode = userEmail ? true : false;

  const [email, setEmail] = useState(userEmail);
  const [name, setName] = useState(userName);
  const [phone, setPhone] = useState(userPhone);

  const userNamevalidation = (name) => {
    const regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim());
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone.trim());
  }
  const submitformHandler = (e) => {
    e.preventDefault();
    const isUserNamevalidated = userNamevalidation(name);
    const isemailValidated = validateEmail(email);
    const isPhoneNumberIsValidated = validatePhoneNumber(phone);

    if (!isUserNamevalidated) {
      notification.error({
        description: "please enter a valid user name ",
      });
      return;
    }
    if (!isemailValidated) {
      notification.error({
        description: "please enter a valid email id ",
      });
      return;
    }
    if (!isPhoneNumberIsValidated) {
      notification.error({
        description: "please enter a valid phone no",
      });
      return;
    }
    const data = {
      email,
      name,
      phone
    }

    if (isEditableMode) {
      data.userEmail = userEmail;
      editUser(data);
    } else {
      createUser(data);
    }
    notification.success({
      description:
        'user created successfully',
    });

    setTimeout(() => history.push('/view-users'), 2000);
  }

  return (
    <form action="" className={styles.formContainer}>
      <div className={styles.subContainer}>
        <button
          className={styles.createBtn}
          onClick={() => history.push('/view-users')}
        >View Users </button>
      </div>
      <div className={styles.container}>
        <div className={styles.userContainer}>
          <label className={styles.label}>UserName</label>
          <input
            className={styles.inputContainer}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.userContainer}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputContainer}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.userContainer}>
          <label className={styles.label}>Phone</label>
          <input
            className={styles.inputContainer}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.btnContainer}>
          <button
            className={styles.button}
            type="submit" onClick={submitformHandler}
          >
            {isEditableMode ? 'Update User' : 'Create User'}
          </button>
        </div>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  createUser: data => dispatch(createUserAction(data)),
  editUser: data => dispatch(editUserAction(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(CreateAndEditUser);

