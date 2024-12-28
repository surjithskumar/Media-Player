import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../Services/allAPI';

function VideoCard({ video, insideCategory, setDeleteVideoResponse }) {

  const [show, setShow] = useState(false);

  if (!video) {
    return null; // Return null or a fallback UI if video is not provided
  }

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const { caption, link } = video

    let today = new Date()

    // console.log(console.log(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)));

    let timeStamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)

    let videoHistory = { caption, link, timeStamp }

    //api call
    await addHistoryAPI(videoHistory)

  }

  const dragStarted = (e, id) => {
    if (id) {  // Check if id is defined
      console.log("Video drag started:", id);
      e.dataTransfer.setData("videoId", id);
    } else {
      console.warn("Video ID is not defined.");
    }
  };

  const removeVideo = async (id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  return (
    <>

      <Card style={{ width: '18rem' }} draggable onDragStart={e => dragStarted(e, video?.id)}>
        <Card.Img variant="top" width={"100%"} height={"300px"} onClick={handleShow} src={video.url} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{video.caption}</Card.Title>

            {insideCategory ? null : <Button className="text-danger btn"><i class="fa-solid fa-trash" onClick={() => removeVideo(video?.id)}></i></Button>}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {video.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard
