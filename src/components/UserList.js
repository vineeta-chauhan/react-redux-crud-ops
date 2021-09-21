import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import Table from './Table';

import {
  deleteUser as deleteUserAction
} from '../redux/actions';

import styles from './userList.module.css';


const UserList = (props) => {

  const { allUser, deleteUser, history } = props;
  const users = Object.values(allUser);

  const DeleteButton = ({ original: { email } }) => {
    return (
      <button
        className={styles.button}
        onClick={() => deleteUser(email)}
      >
        Delete
      </button>
    );
  }

  const EditButton = ({ original: { email, phone, name } }) => {
    return (
      <button
        className={styles.button}
        onClick={
          () => history.push('/edit-user', {
            userName: name, userPhone: phone, userEmail: email,
          })
        }
      >
        Edit
      </button >
    );
  }

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
    },
    {
      Header: 'Email',
      accessor: 'email',
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
    },
    {
      id: 'delete',
      Header: '',
      Cell: DeleteButton,
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
      width: 120,
    },
    {
      id: 'edit',
      Header: '',
      Cell: EditButton,
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
      width: 120,
    }
  ]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <button
          className={styles.createBtn}
          onClick={() => history.push('/create-user')}
        >Create New User </button>
      </div>
      <div>
        <div className={styles.tableContainer}>
          <Table columns={columns} data={users} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { allUser } = state;
  return { allUser }
}

const mapDispatchToProps = (dispatch) => ({
  deleteUser: data => dispatch(deleteUserAction(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

