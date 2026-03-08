import React from 'react';

export default function PropertyCard({ property }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={property.image_url || 'https://placehold.co/600x400?text=Property'}
          className="card-img-top"
          alt={property.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text text-muted mb-2">{property.location}</p>
          <p className="card-text flex-grow-1">{property.description}</p>
          <ul className="list-inline small text-muted mb-3">
            <li className="list-inline-item">{property.bedrooms} Beds</li>
            <li className="list-inline-item">{property.bathrooms} Baths</li>
            <li className="list-inline-item">{property.area_sqft} sqft</li>
          </ul>
          <span className="fw-bold text-primary fs-5">
            ${Number(property.price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
