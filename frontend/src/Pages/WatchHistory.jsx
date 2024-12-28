import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log('API failed');
      setHistory([]);
    }
  };

  const removeVideoHistory = async (id) => {
    await deleteHistoryAPI(id);
    getHistory();
  };

  return (
    <>
      {/* Header Section */}
      <div className="container mt-5 mb-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h2 className="text-center mb-3 mb-md-0">Watch History</h2>
        <Link
          to="/home"
          style={{ textDecoration: 'none', color: 'black', fontSize: '1.25rem' }}
          className="text-center"
        >
          Back to Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i>
        </Link>
      </div>

      {/* Table Section */}
      <div className="container mt-5 mb-3">
        <div className="table-responsive">
          <table className="table shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Video URL</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? (
                history.map((video, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{video?.caption}</td>
                    <td>
                      <a
                        href={video?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-break"
                      >
                        {video?.link}
                      </a>
                    </td>
                    <td>{video?.timeStamp}</td>
                    <td>
                      <Button
                        className="text-danger btn"
                        onClick={() => removeVideoHistory(video?.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-danger fw-bolder text-center">
                    Nothing to Display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WatchHistory;
