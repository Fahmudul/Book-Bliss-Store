import React from 'react'
import { useGetAllBooksQuery } from '../../Redux/Features/Admin/UserManagementApi/bookManagement.api';

const BookSection = () => {
  const {data:Books} = useGetAllBooksQuery(undefined);
  console.log(Books)
  return (
    <div>
      <h1>NEW ARRIVALS</h1>

    </div>
  )
}

export default BookSection
