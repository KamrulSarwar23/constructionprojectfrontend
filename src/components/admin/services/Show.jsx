import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SideBar from "../../common/SideBar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";

export const Show = () => {
  const [services, setServices] = useState([]);

  const fetchservices = async () => {
    try {
      const authToken = token(); // Call token() to retrieve the token

      if (!authToken) {
        console.error("Error: No token found.");
        return; // Exit if there's no token
      }

      const res = await fetch(apiUrl + "services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      setServices(result.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchservices();
  }, []);

  return (
    <div>
      <Header />
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services</h4>
                    <Link
                      className="btn btn-primary"
                      to={"/admin/services/create"}
                    >
                      Create
                    </Link>
                  </div>

                  <hr />

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {services.length > 0 ? (
                        services.map((service) => (
                            <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.title}</td>
                            <td>{service.slug}</td>

                            <td>
                              {service.status == 1 ? "Active" : "Inactive"}
                            </td>

                            <td>
                              <Link
                                to={"/admin/services/edit"}
                                className="btn btn-sm btn-info me-2"
                              >
                                Edit
                              </Link>
                              <a href="#" className="btn btn-sm btn-danger">
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No services available.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Show;
