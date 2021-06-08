export default function Pagination() {
  function printOut() {
    var newWindow = window.open();
    newWindow.document.write(document.getElementById("transcript").outerHTML);
    newWindow.print();
  }
  return (
    <div className="row mt-4 p-2 border">
      <div className="col">
        <h5>Row Per Page</h5>
      </div>
      <div className="d-flex col">
        <div className="d-flex">
          <button className="btn btn-primary me-1">1</button>
          <button className="btn btn-primary me-1">2</button>
          <button className="btn btn-primary me-1">3</button>
          <button className="btn btn-primary me-1">4</button>

          <button className="w-auto btn btn-success" onClick={() => printOut()}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
