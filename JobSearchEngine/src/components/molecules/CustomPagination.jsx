import Pagination from 'react-bootstrap/Pagination';

//this component allows to visualize the page the user is in, to move next / previous, first/last; only in multiple page cases, which is not this one
function CustomPagination() {
  return (
    <Pagination className='d-flex justify-content-center'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{8}</Pagination.Item>
      <Pagination.Item>{9}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default CustomPagination;