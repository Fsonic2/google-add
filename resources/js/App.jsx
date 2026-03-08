import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './components/PropertyCard';

export default function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/properties')
      .then((response) => {
        setProperties(response.data.data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-semibold">Real Estate Finder</span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h1 className="h3 mb-1">Featured Properties</h1>
            <p className="text-muted mb-0">Find your next home with Laravel + React.</p>
          </div>
        </div>

        {loading ? (
          <div className="alert alert-info">Loading properties...</div>
        ) : (
          <div className="row">
            {properties.length ? (
              properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-warning">No properties found.</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
