import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../Services/allAPI';

function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);
  const [uploadVideo, setUploadVideo] = useState({ id: "", caption: "", url: "", link: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractYouTubeID = (url) => {
    if (url.includes("v=")) {
      return url.split("v=")[1].slice(0, 11);
    }
    return "";
  };

  const getYoutubeLink = (e) => {
    const { value } = e.target;
    const videoID = extractYouTubeID(value);
    setUploadVideo((prev) => ({
      ...prev,
      link: videoID ? `https://www.youtube.com/embed/${videoID}` : ""
    }));
  };

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo;
    if (!id || !caption || !url || !link) {
      alert("Please fill the missing fields");
      return;
    }

    try {
      const result = await uploadVideoAPI(uploadVideo); // Assuming uploadVideoAPI is defined elsewhere
      if (result.status >= 200 && result.status < 300) {
        alert("Video Uploaded");
        handleClose()
        setUploadVideoResponse(result.data)
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("An error occurred while uploading the video.");
    }
  };

  return (
    <>
      <div className='d-flex'>
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn'>
          <i className="fa-solid fa-upload fa-beat fs-3"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput1" label="Video Id" className='mb-3'>
              <Form.Control type="text" placeholder="Video Id" onChange={({ target: { value } }) => setUploadVideo((prev) => ({ ...prev, id: value }))} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput2" label="Video Title" className='mb-3'>
              <Form.Control type="text" placeholder="Video Title" onChange={({ target: { value } }) => setUploadVideo((prev) => ({ ...prev, caption: value }))} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput3" label="Image URL" className='mb-3'>
              <Form.Control type="text" placeholder="Image URL" onChange={({ target: { value } }) => setUploadVideo((prev) => ({ ...prev, url: value }))} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput4" label="Video URL" className='mb-3'>
              <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;