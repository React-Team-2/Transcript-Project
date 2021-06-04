import React from "react";

export default function FilterForm() {
  return (
    <div class="d-flex">
    <select className="form-select w-auto" aria-label="Default select example">
      <option selected>Select Course</option>
      <option value={1}>Node</option>
      <option value={2}>React</option>
      <option value={3}>Bcom</option>
    </select>
    <select className="ms-3 form-select w-auto" aria-label="Default select example">
      <option selected>Select Batch</option>
      <option value={1}>Batch 1</option>
      <option value={2}>Batch2</option>
      <option value={3}>Batch3</option>
    </select>
    </div>

  );
}
