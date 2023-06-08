import Layout from "../component/layout/Layout";
import React from "react";
import useCatagory from "../component/hooks/useCatagory";
import { Link } from "react-router-dom";
const Catagories = () => {
  const catagories = useCatagory();
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {catagories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/catagory/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Catagories;
