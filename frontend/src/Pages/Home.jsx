import React, { useState } from 'react';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category';

function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  const [dropVideoResponse, setVideoResponse] = useState({});

  return (
    <>
      {/* Add Videos and Watch History Section */}
      <div className="container mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className="add-videos mb-3 mb-md-0">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link
          to={'/watch-history'}
          style={{ textDecoration: 'none' }}
          className="fw-bolder fs-4 text-primary text-center"
        >
          Watch History <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      </div>

      {/* Videos and Categories Section */}
      <div className="container-fluid mt-5 row gx-3 gy-4">
        {/* Videos Section */}
        <div className="col-12 col-lg-9 all-videos">
          <View
            uploadVideoResponse={uploadVideoResponse}
            setDropVideoResponse={setVideoResponse}
          />
        </div>
        {/* Categories Section */}
        <div className="col-12 col-lg-3 all-category">
          <Category dropVideoResponse={dropVideoResponse} />
        </div>
      </div>
    </>
  );
}

export default Home;
