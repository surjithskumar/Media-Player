import React, { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category({ dropVideoResponse }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });

      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        console.error(result.message);
      }
    } else {
      alert("Please fill the missing fields");
    }
  };

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };

  const getCategories = async () => {
    const { data } = await getCategoryAPI();
    setAllCategories(data);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    const { data } = await getAVideoAPI(videoId);
    const selectedCategory = allCategories.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  const videoDragStarted = (e, videoId, categoryId) => {
    const dataShare = { videoId, categoryId };
    e.dataTransfer.setData("data", JSON.stringify(dataShare));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button onClick={handleShow} className="btn btn-primary">Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput1" label="Category Name" className="mb-3">
              <Form.Control type="text" placeholder="Enter a category name" onChange={(e) => setCategoryName(e.target.value)} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? allCategories.map((Category) => (
        <div
          key={Category?.id}
          className="border border-3 rounded mb-4 p-3"
          onDragOver={(e) => dragOver(e)}
          onDrop={(e) => videoDrop(e, Category?.id)}
          style={{ minHeight: '200px' }} // Ensure there's enough height for videos
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-truncate">{Category?.categoryName}</h3>
            <Button variant="danger" onClick={() => removeCategory(Category?.id)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>

          <div className="category-video-grid">
            {Category?.allVideos.length > 0 ? Category?.allVideos.map((card) => (
              <div 
                key={card.id} 
                className="video-card-wrapper"
                draggable
                onDragStart={(e) => videoDragStarted(e, card.id, Category.id)}
              >
                <VideoCard video={card} insideCategory={true} />
              </div>
            )) : (
              <p className="text-center text-danger">No videos in this category</p>
            )}
          </div>
        </div>
      )) : (
        <p className="text-danger text-center">No categories created</p>
      )}
    </div>
  );
}

export default Category;
