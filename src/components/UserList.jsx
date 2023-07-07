import React, { useMemo, useEffect } from "react";
import BaseTable from "./base/BaseTable";
import { getUsers } from "../stores/users/actions";
import { useSelector, useDispatch } from "react-redux";

export default function UserList() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Photo",
        accessor: "avatar",
        Cell: (tableProps) => (
          <img src={tableProps.row.original.avatar} width={100} alt="Player" />
        ),
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.lists) ?? [];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Users
      </h1>

      <div>
        <BaseTable columns={columns} data={users} />
      </div>
    </>
  );
}
