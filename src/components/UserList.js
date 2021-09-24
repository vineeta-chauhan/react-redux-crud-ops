import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import Table from './Table/index';

import {
  deleteUser as deleteUserAction
} from '../redux/actions';

import styles from './userList.module.css';


const UserList = (props) => {
  const { allUser, deleteUser, history } = props;
  const users = Object.values(allUser);

  const DeleteButton = ({ email }) => {
    return (
      <button
        className={styles.button}
        onClick={() => deleteUser(email)}
      >
        Delete
      </button>
    );
  }

  const EditButton = ({ email, phone, name }) => {
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
      accessor: data => data.name,
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
    },
    {
      Header: 'Email',
      accessor: data => data.email,
      className: styles.tableCellCenter,
      headerClassName: styles.tableHeaderCenter,
    },
    {
      Header: 'Phone',
      accessor: data => data.phone,
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
  ];

  const data = [
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
      address: "jhagdjhfa"
    },
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
    },
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
    },
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
    },
    {
      name: "sandeep",
      email: "sandeep@gmail.com",
      phone: 1234567890,
    },
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
    },
    {
      name: "vineeta",
      email: "vineeta@gmail.com",
      phone: 1234567890,
    }
  ];

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
          <Table data={users} columns={columns} />
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

