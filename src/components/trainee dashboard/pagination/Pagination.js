

export default function Pagination() {
    return (
        <div className="row mt-3 p-2 border">
           <div className="col-6">
              <h5>Row Per Page</h5>
           </div>
            <div className="d-flex col">
                <button className="btn btn-secondary me-3">Prev</button>
                <div className="d-flex">
                   <button className="btn btn-primary me-1">5/20</button>
                   <button className="btn btn-primary me-1">10/20</button>
                   <button className="btn btn-primary me-1">15/20</button>
                   <button className="btn btn-primary me-1">20/20</button>
                </div>
                <button className="btn btn-secondary ms-3">Next</button>
            </div>
        </div>
    )
}
